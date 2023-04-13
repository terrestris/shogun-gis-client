import React, {
  useEffect,
  useState
} from 'react';

import {
  useTranslation
} from 'react-i18next';

import {
  Button,
  ModalProps,
  Modal,
  Select,
  Form,
  Tag,
  message,
  Tooltip
} from 'antd';

import {
  DefaultOptionType
} from 'antd/lib/select';

import {
  PlusOutlined
} from '@ant-design/icons';

import {
  CustomTagProps
} from 'rc-select/lib/BaseSelect';

import Logger from 'js-logger';

import PermissionCollectionType from '@terrestris/shogun-util/dist/model/enum/PermissionCollectionType';
import User from '@terrestris/shogun-util/dist/model/User';

import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';
import UserAvatar from '../../UserAvatar';
import PermissionSelect from '../PermissionSelect';

import './index.less';

type FormData = {
  userIds: number[];
  permission: PermissionCollectionType;
};

export interface UserPermissionModalProps extends ModalProps {
  entityId: number;
  // entityType: string;
  onSave?: () => void;
};

const UserPermissionModal: React.FC<UserPermissionModalProps> = ({
  entityId,
  // entityType,
  onSave = () => {},
  ...passThroughProps
}) => {
  const [usersLoading, setUsersLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [options, setOptions] = useState<DefaultOptionType[]>();
  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();
  const client = useSHOGunAPIClient();
  const [form] = Form.useForm<FormData>();

  useEffect(() => {
    (async () => {
      setUsersLoading(true);

      try {
        const u = await client?.user().findAll();

        if (!u) {
          return;
        }

        setUsers(u);
      } catch (error) {
        message.error(t('UserPermissionModal.loadErrorMsg'));
        Logger.error(error);
      } finally {
        setUsersLoading(false);
      }
    })();
  }, [client, t]);

  useEffect(() => {
    if (Array.isArray(users)) {
      const opts: DefaultOptionType[] = users.map(user => ({
        value: user.id,
        filterValues: [
          user.providerDetails?.firstName,
          user.providerDetails?.lastName,
          user.providerDetails?.username,
          user.providerDetails?.email
        ],
        label: (
          <UserAvatar
            user={user}
          />
        )
      }));
      setOptions(opts);
    }
  }, [users]);

  const onClick = () => {
    setVisible(!visible);
  };

  const onCancel = () => {
    form.resetFields();
    setVisible(false);
  };

  const onOk = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      return;
    }

    const {
      userIds,
      permission
    } = form.getFieldsValue();

    let erroneousRequestUserIds = [];

    setIsSaving(true);

    for (const userId of userIds) {
      try {
        // await client[entityType]().setUserInstancePermission(entityId, userId, permission);
        await client?.application().setUserInstancePermission(entityId, userId, permission);
      } catch (error) {
        erroneousRequestUserIds.push(userId);
        Logger.error(error);
      }
    }

    if (erroneousRequestUserIds.length > 0) {
      message.error(t('UserPermissionModal.saveErrorMsg', {
        userIds: erroneousRequestUserIds.join(', ')
      }));
    }

    form.resetFields();
    setIsSaving(false);
    setVisible(false);
    onSave();
  };

  const tagRender = (props: CustomTagProps) => {
    const {
      label,
      ...passProps
    } = props;

    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        className="user-avatar-tag"
        {...passProps}
      >
        {label}
      </Tag>
    );
  };

  return (
    <>
      <Tooltip
        title={t('UserPermissionModal.openModalButtonTooltipTitle')}
      >
        <Button
          type="primary"
          onClick={onClick}
          icon={<PlusOutlined />}
        />
      </Tooltip>
      <Modal
        className="user-modal"
        title={t('UserPermissionModal.title')}
        open={visible}
        onCancel={onCancel}
        onOk={onOk}
        okButtonProps={{
          loading: isSaving
        }}
        width={800}
        {...passThroughProps}
      >
        <div
          className="description"
        >
          {t('UserPermissionModal.description')}
        </div>
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="userIds"
            label={t('UserPermissionModal.userSelectLabel')}
            extra={t('UserPermissionModal.userSelectExtra')}
            rules={[{
              required: true
            }]}
          >
            <Select
              autoFocus
              mode="multiple"
              allowClear
              optionFilterProp={'filterValues'}
              placeholder={t('UserPermissionModal.userSelectPlaceholder')}
              loading={usersLoading}
              options={options}
              tagRender={tagRender}
            />
          </Form.Item>
          <Form.Item
            name="permission"
            label={t('UserPermissionModal.permissionSelectLabel')}
            extra={t('UserPermissionModal.permissionSelectExtra')}
            rules={[{
              required: true
            }]}
          >
            <PermissionSelect />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserPermissionModal;
