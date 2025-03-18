/**
 * This hook returns a function to calculate padding for the fit method
 * of an ol.View. It considers the menu width, header height, footer height
 * and drawer width if drawerOpen is set to true.
 *
 * It takes a boolean to determine if the drawer is open.
 *
 * The returned function (getFitPadding) computes an array consisting of:
 *   - header height (using the '--headerHeight' CSS property, defaults to 50px if undefined)
 *   - drawer width (using the '--drawerWidth' CSS property, defaults to 450px if undefined and if the drawer is open)
 *   - footer height (using the '--footerHeight' CSS property, defaults to 40px if undefined)
 *   - tool menu width (derived from the width of the element with the 'tool-menu' class)
 *
 * @returns (drawerOpen: boolean) => [number, number, number, number]
 */
export const useGetFitPadding = () => {

  const getCssPropertyValue = (value: string, fallback: number) => {
    return Number(
      getComputedStyle(document.body).getPropertyValue(value).replace('px', '')
    ) || fallback;
  };

  /**
   * This function calculates the padding for the fit method of an ol.View.
   *
   * @param drawerOpen Include the drawer width in the calculation
   * @returns [topPadding, rightPadding, bottomPadding, leftPadding]
   */
  function getFitPadding(drawerOpen = false) {
    const toolMenuElement = document.querySelector('.tool-menu');
    const toolMenuWidth = toolMenuElement?.clientWidth ?? 0;

    const headerHeight = getCssPropertyValue('--headerHeight', 50);
    const footerHeight = getCssPropertyValue('--footerHeight', 40);

    let drawerWidth = 0;
    if (drawerOpen) {
      drawerWidth = getCssPropertyValue('--drawerWidth', 450);
    }

    return [headerHeight, drawerWidth, footerHeight, toolMenuWidth];
  };

  return getFitPadding;
};

export default useGetFitPadding;
