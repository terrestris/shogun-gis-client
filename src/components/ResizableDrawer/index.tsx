import React, {
  JSX,
  useEffect,
  useMemo,
  useState
} from 'react';

import { Drawer } from 'antd';
import { DrawerProps } from 'antd/lib/drawer';
import { clsx } from 'clsx';
import _isNil from 'lodash/isNil';
import {
  Resizable, ResizableProps, ResizeDirection
} from 're-resizable';

import { ResizableDelta } from 'react-rnd';

import './index.less';

interface OwnProps {
  drawerClassName?: string;
  drawerHeight?: number;
  drawerWidth?: number;
  isControlled?: boolean;
  onDrawerHeightChange?: (newWidth: number) => void;
  onDrawerWidthChange?: (newWidth: number) => void;
}

export type ResizableDrawerProps = ResizableProps & DrawerProps & OwnProps;

export function ResizableDrawer({
  children,
  className,
  closeIcon,
  drawerClassName,
  drawerHeight = 387,
  drawerWidth = 387,
  footer,
  isControlled = false,
  maxHeight = '100%',
  maxWidth = '100%',
  minHeight = 100,
  minWidth = 100,
  onClose,
  onDrawerHeightChange = () => undefined,
  onDrawerWidthChange = () => undefined,
  open,
  placement = 'left',
  title,
  ...drawerProps
}: ResizableDrawerProps): JSX.Element | null {

  const [width, setWidth] = useState<number>(drawerWidth);
  const [height, setHeight] = useState<number>(drawerHeight);

  /**
   * Resets the internal size to the default value when the drawer is closed.
   */
  useEffect(() => {
    if (open) {
      return;
    }
    if (drawerWidth === 0) {
      setWidth(387);
    } else if (isControlled) {
      setWidth(drawerWidth);
    }
    if (drawerHeight === 0) {
      setHeight(387);
    } else if (isControlled) {
      setHeight(drawerHeight);
    }
  }, [drawerWidth, drawerHeight, isControlled, open]);

  const resizableClassName = useMemo(() => clsx('resizable-content', {
    visible: open,
    vertical: placement === 'left' || placement === 'right',
    horizontal: placement === 'top' || placement === 'bottom'
  }, className), [className, open, placement]);

  const resizableDrawerClassName = useMemo(() => clsx('resizable-drawer', {
    visible: open
  }, drawerClassName), [drawerClassName, open]);

  const onResizeStop = (
    _: any,
    __: ResizeDirection,
    ___: HTMLElement,
    d: any
  ) => {
    const newWidth = width + d.width;
    const newHeight = height + d.height;
    setWidth(newWidth);
    setHeight(newHeight);
    onDrawerWidthChange(newWidth);
    onDrawerHeightChange(newHeight);
  };

  const onResize = (
    _: MouseEvent | TouchEvent,
    __: ResizeDirection,
    ___: HTMLElement,
    delta: ResizableDelta
  ) => {
    onDrawerWidthChange(width + delta.width);
    onDrawerHeightChange(height + delta.height);
  };

  if (_isNil(children)) {
    return null;
  }

  return (
    <Resizable
      className={resizableClassName}
      enable={{
        top: placement === 'bottom' && open,
        right: placement === 'left' && open,
        bottom: placement === 'top' && open,
        left: placement === 'right' && open,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      }}
      handleClasses={{
        bottom: 'resize-handle resize-handle-bottom',
        bottomLeft: 'resize-handle resize-handle-bottom-left',
        bottomRight: 'resize-handle resize-handle-bottom-right',
        left: 'resize-handle resize-handle-left',
        right: 'resize-handle resize-handle-right',
        top: 'resize-handle resize-handle-top',
        topLeft: 'resize-handle resize-handle-top-left',
        topRight: 'resize-handle resize-handle-top-right'
      }}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      minHeight={minHeight}
      minWidth={minWidth}
      onResize={onResize}
      onResizeStop={onResizeStop}
      size={{
        width: placement === 'bottom' || placement === 'top' ? '100%' : width,
        height: placement === 'left' || placement === 'right' ? '100%' : height
      }}
      style={{
        height: placement === 'bottom' || placement === 'top' ? height : '100%',
        width: placement === 'left' || placement === 'right' ? width : '100%',
        top: placement === 'top' ? 0 : 'unset',
        bottom: placement === 'bottom' ? 0 : 'unset',
        left: placement === 'left' ? 0 : 'unset',
        right: placement === 'right' ? 0 : 'unset'
      }}
    >
      <Drawer
        {...drawerProps}
        closeIcon={closeIcon}
        footer={footer}
        getContainer={false}
        height="100%"
        mask={false}
        onClose={onClose}
        open={open}
        placement={placement}
        rootClassName={resizableDrawerClassName}
        title={title}
        width="100%"
      >
        {children}
      </Drawer>
    </Resizable>
  );
}

export default ResizableDrawer;
