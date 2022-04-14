import React from 'react';

// TODO Enable as soon as https://github.com/terrestris/react-geo/pull/2467
//      is available
// import {
//   faBars
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   FontAwesomeIcon
// } from '@fortawesome/react-fontawesome';

import SimpleButton, {
  SimpleButtonProps
} from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';

import {
  useAppDispatch
} from '../../hooks/useAppDispatch';
import {
  toggleVisibility
} from '../../store/drawer';

import './index.less';

export const BasicNominatimSearch: React.FC<Partial<SimpleButtonProps>> = (
  props
): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(toggleVisibility());
  };

  return (
    <SimpleButton
      className="toggle-drawer-button"
      onClick={toggleDrawer}
      iconName="bars"
      // icon={
      //   <FontAwesomeIcon
      //     icon={faBars}
      //   />
      // }
    />
  );
};

export default BasicNominatimSearch;
