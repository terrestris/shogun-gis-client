import {
  test,
  expect
} from '@playwright/test';

// NOTE: In some cases a screenshot comparisson technique is being used. Altough not 100% viable,
// is the best way I have found to check if a layer is visible or has been added.
// Before some packages updates it was possible to check the layers directly in the DOM.
// Now, only one layer element is found with a shared canvas Maybe this is because react-geo was updated?

test.describe('Tool menu tests', () => {
  test.beforeEach(async ({
    page
  }) => {
    await page.goto('/');
    await Promise.all([
      page.waitForSelector('div#map'),
      page.waitForSelector('canvas'),
      page.waitForResponse(/https:\/\/gibs.earthdata.nasa.gov/),
      page.waitForResponse(/tile.openstreetmap.org/),
      page.waitForResponse(/https:\/\/localhost/),
      page.waitForTimeout(3000)
    ]);
  });

  test('Tool menu exists', async ({
    page
  }) => {
    const toolMenuWrapper = page.locator('div.tool-menu').first();
    await expect(toolMenuWrapper).toBeVisible();
  });

  test('Measure tool exists and has two sub tools', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const measureTool = await toolMenuWrapper.locator('li.measure').first();
    await expect(measureTool).toBeVisible();

    // click on the measure tool to expand list
    await measureTool.click();

    const measureSubTools = await measureTool.locator('button');
    const numberOfElements = await measureSubTools.count();

    await expect(numberOfElements).toBe(2);

  });

  test('Clicking on one measure tool, deactivates the other', async ({
    page
  }) => {
    const activeMeasureButtonClass = 'ant-btn ant-btn-link react-geo-measurebutton react-geo-togglebutton btn-pressed ';
    const inactiveMeasureButtonClass = 'ant-btn ant-btn-link react-geo-measurebutton react-geo-togglebutton';
    const measureTool = await page.locator('li.measure').first();

    // click on the measure tool to expand list
    await measureTool.click();

    const measureLine = await page.locator('button[name="line"]');
    await expect(measureLine).toBeDefined();

    const measureArea = await page.locator('button[name="poly"]');
    await expect(measureArea).toBeDefined();

    // click on measure line
    await measureLine.click();
    await expect(measureLine).toHaveClass(activeMeasureButtonClass);
    await expect(measureArea).toHaveClass(inactiveMeasureButtonClass);

    // click on measure area
    await measureArea.click();
    await expect(measureLine).toHaveClass(inactiveMeasureButtonClass);
    await expect(measureArea).toHaveClass(activeMeasureButtonClass);

    // click again on measure area. Both should be inactive
    await measureArea.click();
    await expect(measureLine).toHaveClass(inactiveMeasureButtonClass);
    await expect(measureArea).toHaveClass(inactiveMeasureButtonClass);
  });

  test('Can measure a line', async ({
    page
  }) => {
    const measureTool = await page.locator('li.measure').first();

    // click on the measure tool to expand list
    await measureTool.click();

    const measureLine = await page.locator('button[name="line"]');

    // click on measure line
    await measureLine.click();

    // Click canvas
    await page.locator('canvas').click({
      position: {
        x: 600,
        y: 158
      }
    });

    // Click canvas
    await page.locator('canvas').dblclick({
      position: {
        x: 767,
        y: 284
      }
    });

    const measureTooltip =
      await page.locator('.react-geo-measure-tooltip.react-geo-measure-tooltip-static').textContent();

    expect(measureTooltip).toBe('2884.21 km');
  });

  // TODO: fails on webkit
  test.skip('Can measure an area', async ({
    page
  }) => {
    const measureTool = await page.locator('li.measure').first();

    // click on the measure tool to expand list
    await measureTool.click();

    const measureArea = await page.locator('button[name="poly"]');

    // click on measure line
    await measureArea.click();

    // Click canvas
    await page.locator('canvas').click({
      position: {
        x: 693,
        y: 179
      }
    });

    // Click canvas
    await page.locator('canvas').click({
      position: {
        x: 556,
        y: 407
      }
    });

    // Click canvas
    await page.locator('canvas').dblclick({
      position: {
        x: 780,
        y: 455
      }
    });

    const measureTooltip =
      await page.locator('.react-geo-measure-tooltip.react-geo-measure-tooltip-static').textContent();

    expect(measureTooltip).toBe('12577509.65 km2');
  });

  test('Draw tool exists and has ten sub tools ', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const drawTool = await toolMenuWrapper.locator('li.draw').first();
    await expect(drawTool).toBeVisible();

    // click on the draw tool to expand list
    await drawTool.click();

    const drawSubTools = await drawTool.locator('button');
    const numberOfElements = await drawSubTools.count();

    await expect(numberOfElements).toBe(10);

  });

  test('Clicking on one draw tool inactivates another ', async ({
    page
  }) => {

    // upload and download elements are not toggle buttons. Therefore, they are not included in this test
    const activeDrawButtonClass = 'ant-btn ant-btn-link react-geo-drawbutton react-geo-togglebutton btn-pressed ';
    const inactiveDrawButtonClass = 'ant-btn ant-btn-link react-geo-drawbutton react-geo-togglebutton';

    const activeModifyDrawButtonClass =
      'ant-btn ant-btn-link react-geo-selectbutton react-geo-modifybutton react-geo-togglebutton btn-pressed ';
    const inactiveModifyDrawButtonClass =
      'ant-btn ant-btn-link react-geo-selectbutton react-geo-modifybutton react-geo-togglebutton';

    const activeDeleteDrawButtonClass =
      'ant-btn ant-btn-link react-geo-selectbutton react-geo-deletebutton react-geo-togglebutton btn-pressed ';
    const inactiveDeleteDrawButtonClass =
      'ant-btn ant-btn-link react-geo-selectbutton react-geo-deletebutton react-geo-togglebutton';

    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const drawTool = await toolMenuWrapper.locator('li.draw').first();
    await drawTool.click();

    const drawPoint = await page.locator('button[name="draw-point"]');
    await expect(drawPoint).toBeDefined();

    const drawLine = await page.locator('button[name="draw-line"]');
    await expect(drawLine).toBeDefined();

    const drawPolygon = await page.locator('button[name="draw-polygon"]');
    await expect(drawPolygon).toBeDefined();

    const drawCircle = await page.locator('button[name="draw-circle"]');
    await expect(drawCircle).toBeDefined();

    const drawRectangle = await page.locator('button[name="draw-rectangle"]');
    await expect(drawRectangle).toBeDefined();

    const drawAnnotation = await page.locator('button[name="draw-text"]');
    await expect(drawAnnotation).toBeDefined();

    const editDraw = await page.locator('button[name="draw-modify"]');
    await expect(editDraw).toBeDefined();

    // const uploadDraw = await page.locator('button[name="draw-upload"]');
    // await expect(uploadDraw).toBeDefined();

    // const downloadDraw = await page.locator('button[name="draw-export"]');
    // await expect(downloadDraw).toBeDefined();

    const deleteDraw = await page.locator('button[name="draw-delete"]');
    await expect(deleteDraw).toBeDefined();

    // click on draw point
    await drawPoint.click();
    await expect(drawPoint).toHaveClass(activeDrawButtonClass);
    await expect(drawLine).toHaveClass(inactiveDrawButtonClass);
    await expect(drawPolygon).toHaveClass(inactiveDrawButtonClass);
    await expect(drawCircle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawRectangle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(inactiveDrawButtonClass);
    await expect(editDraw).toHaveClass(inactiveModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(inactiveDeleteDrawButtonClass);

    // click on draw line
    await drawLine.click();
    await expect(drawPoint).toHaveClass(inactiveDrawButtonClass);
    await expect(drawLine).toHaveClass(activeDrawButtonClass);
    await expect(drawPolygon).toHaveClass(inactiveDrawButtonClass);
    await expect(drawCircle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawRectangle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(inactiveDrawButtonClass);
    await expect(editDraw).toHaveClass(inactiveModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(inactiveDeleteDrawButtonClass);

    // click on draw polygon
    await drawPolygon.click();
    await expect(drawPoint).toHaveClass(inactiveDrawButtonClass);
    await expect(drawLine).toHaveClass(inactiveDrawButtonClass);
    await expect(drawPolygon).toHaveClass(activeDrawButtonClass);
    await expect(drawCircle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawRectangle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(inactiveDrawButtonClass);
    await expect(editDraw).toHaveClass(inactiveModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(inactiveDeleteDrawButtonClass);

    // click on draw circle
    await drawCircle.click();
    await expect(drawPoint).toHaveClass(inactiveDrawButtonClass);
    await expect(drawLine).toHaveClass(inactiveDrawButtonClass);
    await expect(drawPolygon).toHaveClass(inactiveDrawButtonClass);
    await expect(drawCircle).toHaveClass(activeDrawButtonClass);
    await expect(drawRectangle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(inactiveDrawButtonClass);
    await expect(editDraw).toHaveClass(inactiveModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(inactiveDeleteDrawButtonClass);

    // click on draw rectangle
    await drawRectangle.click();
    await expect(drawPoint).toHaveClass(inactiveDrawButtonClass);
    await expect(drawLine).toHaveClass(inactiveDrawButtonClass);
    await expect(drawPolygon).toHaveClass(inactiveDrawButtonClass);
    await expect(drawCircle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawRectangle).toHaveClass(activeDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(inactiveDrawButtonClass);
    await expect(editDraw).toHaveClass(inactiveModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(inactiveDeleteDrawButtonClass);

    // click on draw annotation
    await drawAnnotation.click();
    await expect(drawPoint).toHaveClass(inactiveDrawButtonClass);
    await expect(drawLine).toHaveClass(inactiveDrawButtonClass);
    await expect(drawPolygon).toHaveClass(inactiveDrawButtonClass);
    await expect(drawCircle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawRectangle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(activeDrawButtonClass);
    await expect(editDraw).toHaveClass(inactiveModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(inactiveDeleteDrawButtonClass);

    // click on edit draw
    await editDraw.click();
    await expect(drawPoint).toHaveClass(inactiveDrawButtonClass);
    await expect(drawLine).toHaveClass(inactiveDrawButtonClass);
    await expect(drawPolygon).toHaveClass(inactiveDrawButtonClass);
    await expect(drawCircle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawRectangle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(inactiveDrawButtonClass);
    await expect(editDraw).toHaveClass(activeModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(inactiveDeleteDrawButtonClass);

    // click on delete draw
    await deleteDraw.click();
    await expect(drawPoint).toHaveClass(inactiveDrawButtonClass);
    await expect(drawLine).toHaveClass(inactiveDrawButtonClass);
    await expect(drawPolygon).toHaveClass(inactiveDrawButtonClass);
    await expect(drawCircle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawRectangle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(inactiveDrawButtonClass);
    await expect(editDraw).toHaveClass(inactiveModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(activeDeleteDrawButtonClass);

    // clicking again on delete draw, will deactivate it
    await deleteDraw.click();
    await expect(drawPoint).toHaveClass(inactiveDrawButtonClass);
    await expect(drawLine).toHaveClass(inactiveDrawButtonClass);
    await expect(drawPolygon).toHaveClass(inactiveDrawButtonClass);
    await expect(drawCircle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawRectangle).toHaveClass(inactiveDrawButtonClass);
    await expect(drawAnnotation).toHaveClass(inactiveDrawButtonClass);
    await expect(editDraw).toHaveClass(inactiveModifyDrawButtonClass);
    await expect(deleteDraw).toHaveClass(inactiveDeleteDrawButtonClass);
  });

  test('Can draw a point', async ({
    page
  }) => {

    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const drawTool = await toolMenuWrapper.locator('li.draw').first();
    await drawTool.click();
    const drawPoint = await page.locator('button[name="draw-point"]');

    // click on draw point
    await drawPoint.click();

    await expect(page).toHaveScreenshot();

    await page.locator('canvas').click({
      position: {
        x: 381,
        y: 191
      }
    });

    // compare with previous screenshot
    await expect(await page.screenshot()).not.toMatchSnapshot('Tool-menu-tests-Can-draw-a-point-1.png');
  });

  test('Can draw a line', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const drawTool = await toolMenuWrapper.locator('li.draw').first();
    await drawTool.click();
    const drawLine = await page.locator('button[name="draw-line"]');

    // click on draw line
    await drawLine.click();

    await expect(page).toHaveScreenshot();

    // Click canvas
    await page.locator('canvas').click({
      position: {
        x: 323,
        y: 308
      }
    });

    // Double click canvas
    await page.locator('canvas').dblclick({
      position: {
        x: 490,
        y: 306
      }
    });

    await expect(await page.screenshot()).not.toMatchSnapshot('Tool-menu-tests-Can-draw-a-line-1.png');
  });

  test('Can draw a polygon', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const drawTool = await toolMenuWrapper.locator('li.draw').first();
    await drawTool.click();
    const drawPolygon = await page.locator('button[name="draw-polygon"]');

    // click on draw polygon
    await drawPolygon.click();

    await expect(page).toHaveScreenshot();

    // Click canvas
    await page.locator('canvas').click({
      position: {
        x: 391,
        y: 432
      }
    });

    // Click canvas
    await page.locator('canvas').click({
      position: {
        x: 443,
        y: 583
      }
    });

    // Click canvas
    await page.locator('canvas').dblclick({
      position: {
        x: 573,
        y: 580
      }
    });

    await expect(await page.screenshot()).not.toMatchSnapshot('Tool-menu-tests-Can-draw-a-polygon-1.png');
  });

  test('Can draw a circle', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const drawTool = await toolMenuWrapper.locator('li.draw').first();
    await drawTool.click();
    const drawCircle = await page.locator('button[name="draw-circle"]');

    // click on draw circle
    await drawCircle.click();

    await expect(page).toHaveScreenshot();

    // Click canvas
    await page.locator('canvas').click({
      position: {
        x: 331,
        y: 304
      }
    });

    // Double click canvas
    await page.locator('canvas').dblclick({
      position: {
        x: 371,
        y: 350
      }
    });

    await expect(await page.screenshot()).not.toMatchSnapshot('Tool-menu-tests-Can-draw-a-circle-1.png');
  });

  test('Can draw a rectangle', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const drawTool = await toolMenuWrapper.locator('li.draw').first();
    await drawTool.click();
    const drawRectangle = await page.locator('button[name="draw-rectangle"]');

    // click on draw rectangle
    await drawRectangle.click();

    await expect(page).toHaveScreenshot();

    // Click canvas
    await page.locator('canvas').click({
      position: {
        x: 580,
        y: 224
      }
    });

    // Click canvas
    await page.locator('canvas').dblclick({
      position: {
        x: 772,
        y: 321
      }
    });

    await expect(await page.screenshot()).not.toMatchSnapshot('Tool-menu-tests-Can-draw-a-rectangle-1.png');
  });

  test('Query map features tool exists', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const queryMapFeaturesTool = await toolMenuWrapper.locator('li[name="feature_info"]').first();
    await expect(queryMapFeaturesTool).toBeVisible();
  });

  test('Export/print map tool exists', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const exportMapTool = await toolMenuWrapper.locator('li[name="print"]').first();
    await expect(exportMapTool).toBeVisible();
  });

  test('Layer tree exists and has entries', async ({
    page
  }) => {
    const layers = await page.locator('#map').first().locator('.ol-layer');
    const layerCount = await layers.count();
    await expect(layerCount).toBe(1);

    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const layerTreeTool = await toolMenuWrapper.locator('li[name="layer_tree"]');
    await expect(layerTreeTool).toBeVisible();

    // expand the tool
    await layerTreeTool.click();

    const treeItems = await layerTreeTool.locator('div.ant-tree-list div.ant-tree-treenode');

    const NasaEarthObservationLayer = await treeItems.first();
    const NasaEarthObservationLayerTitle =
      await NasaEarthObservationLayer.locator('span.ant-tree-title div').textContent();

    await expect(NasaEarthObservationLayer).toBeVisible();
    await expect(NasaEarthObservationLayerTitle).toBe('NASA Earth Observations');

    const backgroundLayer = await treeItems.last();
    const backgroundLayerTitle =
      await backgroundLayer.locator('span.ant-tree-title div').textContent();

    await expect(backgroundLayer).toBeVisible();
    await expect(backgroundLayerTitle).toBe('Background');

    // expand layer to reveal sub entries
    await NasaEarthObservationLayer.locator('.ant-tree-switcher').click();
    await backgroundLayer.locator('.ant-tree-switcher').click();

    const NASAEarthObservationSublayer = await treeItems.nth(1); // second node

    const NASAEarthObservationSublayerTitle = await NASAEarthObservationSublayer
      .locator('.tree-node-header span').textContent();
    const NASAEarthObservationSublayerOptions = await NASAEarthObservationSublayer
      .locator('.tree-node-header svg');
    const NASAEarthObservationSublayerTransparencySlider = await NasaEarthObservationLayer
      .locator('.layer-transparency');

    await expect(NASAEarthObservationSublayerTitle).toBe('2-meter Air Temperature, Assimilated (Monthly, MERRA2)');
    await expect(NASAEarthObservationSublayerOptions).toBeVisible();
    await expect(NASAEarthObservationSublayerTransparencySlider).toBeDefined();
  });

  test('Add WMS button exists on layer tree tool and clicking on it shows a modal dialog', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const layerTreeTool = await toolMenuWrapper.locator('li[name="layer_tree"]');

    // expand the tool
    await layerTreeTool.click();

    const addWMSButton = await layerTreeTool.locator('.add-wms-button');
    await expect(addWMSButton).toBeVisible();

    // click on add WMS
    await addWMSButton.click();

    const addWMSModalTitle = await page.locator('div.ant-modal-title').textContent();
    await expect(addWMSModalTitle).toBe('Add WMS');

    // add example WMS
    // Click text=Add WMSNameNo DataAdd selectedAdd all >> button >> nth=1
    await page.locator('text=Add WMSNameNo DataAdd selectedAdd all >> button').nth(1).click();

    // Check .ant-table-cell > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input >> nth=0
    await page.locator('.ant-table-cell > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').first().check();

    // Click button:has-text("Add selected")
    await page.locator('button:has-text("Add selected")').click();

    const treeItems = await layerTreeTool.locator('div.ant-tree-list div.ant-tree-treenode');

    const addedExternalLayer = await treeItems.first();
    const addedExternalLayerTitle =
      await addedExternalLayer.locator('span.ant-tree-title div').textContent();

    await expect(addedExternalLayer).toBeVisible();
    await expect(addedExternalLayerTitle).toBe('External layers');

    // const addedExternalLayerCheckbox = addedExternalLayer.locator('.ant-tree-checkbox');
    await addedExternalLayer.locator('.ant-tree-switcher').click();
    const addedExternalSubLayer = await treeItems.nth(1);

    const addedExternalSubLayerTitle = await addedExternalSubLayer
      .locator('.tree-node-header span').textContent();
    const addedExternalLayerOptions = await addedExternalSubLayer
      .locator('.tree-node-header svg');
    const addedExternalLayerTransparencySlider = await addedExternalSubLayer
      .locator('.layer-transparency');

    await expect(addedExternalSubLayerTitle).toBe('TopPlusOpen');
    await expect(addedExternalLayerOptions).toBeVisible();
    await expect(addedExternalLayerTransparencySlider).toBeDefined();

  });

  test('Share/permalink tool exists', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const permalinkTool = await toolMenuWrapper.locator('li[name="permalink"]').first();
    await expect(permalinkTool).toBeVisible();

    // expand the tool
    await permalinkTool.click();

    const permalinkIcons = await permalinkTool.locator('div.icons span');
    const permalinkLink = await permalinkTool.locator('div.link').first();

    const numberOfIcons = await permalinkIcons.count();
    await expect(numberOfIcons).toBe(3);
    await expect(permalinkLink).toBeVisible();
  });

  // TODO: fails on firefox, still not sure why
  test.skip('Language selector tool exists', async ({
    page
  }) => {
    const toolMenuWrapper = await page.locator('div.tool-menu').first();
    const languageSelectorTool = await toolMenuWrapper.locator('li[name="language_selector"]').first();
    await expect(languageSelectorTool).toBeVisible();

    const languageSelectorTitle = await languageSelectorTool.locator('span.ant-menu-title-content');
    const languageSelectorTitleText = await languageSelectorTitle.textContent();
    await expect(languageSelectorTitleText).toBe('Language selector');

    // expand the tool
    await languageSelectorTool.click();

    // Select option DE
    await page.locator('ul[role="menu"] >> text=EN').click();
    await page.locator('text=DE').nth(1).click();

    const newText = await languageSelectorTool.locator('span.ant-menu-title-content').first().textContent();
    await expect(newText).toBe('Sprachauswahl');
  });

  test('Collapse tool menu exists and works', async ({
    page
  }) => {
    const collapsedMenuClass = 'ant-menu ant-menu-root ant-menu-vertical ant-menu-light ant-menu-inline-collapsed';
    const expandedMenuClass = 'ant-menu ant-menu-root ant-menu-inline ant-menu-light';

    const toolMenu = await page.locator('div.tool-menu ul.ant-menu').first();
    const collapseToolMenu= await page.locator('li[name="expand_collapse"]').first();

    await expect(collapseToolMenu).toBeDefined();

    await expect(toolMenu).toHaveClass(expandedMenuClass);

    // click on the collapse menu option
    await collapseToolMenu.click();

    await expect(toolMenu).toHaveClass(collapsedMenuClass);
  });

});
