import * as React from 'react';

import { Avatar, Dropdown, MenuProps } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';

import './index.less';

import _isString from 'lodash/isString';

// non default props
export interface BaseProps {
  className?: string;
  imageSrc?: string;
  userMenu?: MenuProps;
  userName?: React.ReactNode;
  style?: any;
}

export type UserChipProps = BaseProps & AvatarProps;

const UserChip: React.FC<UserChipProps> = ({
  className,
  imageSrc,
  userMenu,
  userName,
  style,
  ...passThroughProps
}) => {
  // eslint-disable-next-line  no-underscore-dangle, @typescript-eslint/naming-convention
  const _className = 'userchip';

  const getInitials = (): string => {
    if (!_isString(userName)) {
      return '??';
    }

    return userName
      .split(' ')
      .map(part => part[0] ?? '')
      .join('')
      .toUpperCase();
  };

  const getUserMenu = () => {
    const finalClassName = className
      ? `${className} ${_className}`
      : _className;

    return (
      <div
        className={finalClassName}
        style={style}
      >
        <Avatar
          src={imageSrc}
          size="large"
          className="userimage"
          {...passThroughProps}
        >
          {imageSrc ? '' : getInitials()}
        </Avatar>
        <span className="username">{userName}</span>
      </div>
    );
  };

  if (userMenu?.items) {
    return (
      <Dropdown
        menu={userMenu}
        trigger={['click']}
        getPopupContainer={() =>
          document.getElementsByClassName(_className)[0] as HTMLElement
        }
      >
        {getUserMenu()}
      </Dropdown>
    );
  } else {
    return getUserMenu();
  }
};

export default UserChip;
