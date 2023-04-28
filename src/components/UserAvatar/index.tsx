import React from 'react';

import {
  Avatar,
  AvatarProps
} from 'antd';

import User from '@terrestris/shogun-util/dist/model/User';

import {
  getGravatarUrl
} from '../../utils/getGravatarUrl';

import './index.less';

export interface UserAvatarProps extends AvatarProps {
  user: User;
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  user,
  ...passThroughProps
}) => {

  const avatarSrc = getGravatarUrl({
    email: user.providerDetails?.email || '',
    size: 32
  });

  return (
    <div
      className="user-avatar"
    >
      <Avatar
        src={avatarSrc}
        size='default'
        className="user-avatar-image"
        {...passThroughProps}
      />
      {
        <div
          className="user-avatar-name"
        >
          <span>
            {
              `${user.providerDetails?.firstName} ${user.providerDetails?.lastName}`
            }
          </span>
          <span>
            {
              user.providerDetails?.username
            }
          </span>
        </div>
      }
    </div>
  );
};

export default UserAvatar;
