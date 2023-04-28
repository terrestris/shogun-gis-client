import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  faDownload,
  faFloppyDisk,
  faUsers,
  faTrash,
  faFolderOpen,
  faFile,
  faShareNodes
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Alert,
  Button,
  Form,
  Input,
  Modal,
  ModalProps,
  Table,
  Tooltip,
  notification
} from 'antd';

const {
  confirm
} = Modal;

import {
  ColumnType
} from 'antd/lib/table';

import copyClipboard from 'copy-to-clipboard';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import Application from '@terrestris/shogun-util/dist/model/Application';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useReadAppContext from '../../hooks/useReadAppContext';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';
import useWriteAppContext from '../../hooks/useWriteAppContext';

import {
  setTitle
} from '../../store/title';

import UserPermissionGrid from '../Permission/UserPermissionGrid';

import './index.less';

export type AppStateManagementProps = {} & Partial<ModalProps>;

// TODO Split component into smaller ones where possible

export const AppStateManagement: React.FC<AppStateManagementProps> = ({
  ...restProps
}): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [permissionModalOpen, setPermissionModalOpen] = useState(false);
  const [appContexts, setAppContexts] = useState<Application[]>();
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [permissionApplicationId, setPermissionApplicationId] = useState<number>();

  const appDispatch = useAppDispatch();

  const client = useSHOGunAPIClient();

  const writeAppContext = useWriteAppContext();
  const readAppContext = useReadAppContext();

  const appId = useAppSelector(state => state.id);

  const {
    t
  } = useTranslation();

  const selectedApplication = appContexts?.find(ctx => ctx.id === selectedRows[0]);

  const loadAppContexts = useCallback(async () => {
    if (!client) {
      return;
    }

    try {
      setLoading(true);

      const ctx = await client.application().findAll();

      setAppContexts(ctx.filter(app => app.stateOnly === true));
    } catch (error) {
      Logger.error(error);
    } finally {
      setLoading(false);
    }
  }, [client]);

  useEffect(() => {
    if (!modalOpen) {
      return;
    }

    loadAppContexts();
  }, [modalOpen, loadAppContexts]);

  const onCreateClick = async () => {
    if (!writeAppContext || !readAppContext) {
      return;
    }

    const appContext = writeAppContext();
    delete appContext.id;

    confirm({
      title: t('AppStateManagement.confirmCreateTitle'),
      // TODO Form validation
      content: (
        <>
          <span>{t('AppStateManagement.createStateHint')}</span>
          <Form>
            <Form.Item
              label="Username"
              name="username"
              rules={[{
                required: true,
                message: 'TODO'
              }]}
            >
              <Input
                // TODO Get the autofocus working
                autoFocus={true}
                placeholder={t('AppStateManagement.createStateNamePlaceholder')}
                onChange={evt => appContext.name = evt.currentTarget.value}
              />
            </Form.Item>
          </Form>
        </>
      ),
      onOk: async () => {
        setLoading(true);

        try {
          await client?.application().add(appContext);
          await loadAppContexts();
          appDispatch(setTitle(appContext.name!));
        } catch (error) {
          Logger.error(error);
        } finally {
          setLoading(false);
        }
      }
    });
  };

  const onUpdateClick = () => {
    if (!writeAppContext) {
      return;
    }

    if (!selectedRows[0]) {
      return;
    }

    if (!selectedApplication) {
      return;
    }

    const appContext = writeAppContext();
    appContext.id = selectedApplication.id;

    confirm({
      title: t('AppStateManagement.confirmUpdateTitle'),
      content: (
        <span>
          {t('AppStateManagement.updateStateHint', {
            stateName: selectedApplication.name,
            stateId: selectedApplication.id
          })}
        </span>
      ),
      onOk: async () => {
        setLoading(true);
        setErrorMessage(undefined);

        try {
          await client?.application().update(appContext);
          await loadAppContexts();
        } catch (error) {
          // TODO add error handling for others as well
          if (error instanceof Error && error.message.includes('404')) {
            // TODO
            setErrorMessage(t('AppStateManagement.updateStateErrorMessagePermission'));
          } else {
            // TODO
            setErrorMessage(t('AppStateManagement.updateStateErrorMessageGeneral'));
          }
          Logger.error(error);
        } finally {
          setLoading(false);
        }
      }
    });
  };

  const onDownloadClick = (application: Application) => {
    download(application);
  };

  const download = (appContext: Application) => {
    const file = new Blob([JSON.stringify(appContext, null, '  ')], {
      type: 'application/json'
    });

    const url = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `appState-${appId}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onClick = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  const onShareClick = (application: Application) => {
    if (!application.id) {
      return;
    }

    const url = new URL(window.location.href);
    const params = url.searchParams;

    params.set('applicationId', application.id.toString());

    const copied = copyClipboard(url.toString());

    if (copied) {
      notification.success({
        message: t('AppStateManagement.copyClipboardNotificationTitle'),
        description: t('AppStateManagement.copyClipboardNotificationDescription')
      });
    }
  };

  const idSorter = (a: Application, b: Application) => {
    if (!a.id || !b.id) {
      return 0;
    }
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  };

  const dateSorter = (a: Application, b: Application) => {
    if (!a.created || !b.created) {
      return 0;
    }
    if (a.created < b.created) {
      return 1;
    }
    if (a.created > b.created) {
      return -1;
    }
    return 0;
  };

  const nameSorter = (a: Application, b: Application) => {
    if (!a.name || !b.name) {
      return 0;
    }

    return a.name.localeCompare(b.name);
  };

  const dateRenderer = (date: string) => new Date(date).toLocaleString();

  const operationRenderer = (application: Application) => {
    return (
      <div
        className="operations-column"
      >
        <Tooltip
          title={t('AppStateManagement.deleteButtonTooltip')}
        >
          <FontAwesomeIcon
            onClick={evt => {
              evt.stopPropagation();
              onDeleteClick(application);
            }}
            icon={faTrash}
          />
        </Tooltip>
        <Tooltip
          title={t('AppStateManagement.downloadButtonTooltip')}
        >
          <FontAwesomeIcon
            onClick={evt => {
              evt.stopPropagation();
              onDownloadClick(application);
            }}
            icon={faDownload}
          />
        </Tooltip>
        <Tooltip
          title={t('AppStateManagement.shareButtonTooltip')}
        >
          <FontAwesomeIcon
            onClick={evt => {
              evt.stopPropagation();
              onShareClick(application);
            }}
            icon={faShareNodes}
          />
        </Tooltip>
        <Tooltip
          title={t('AppStateManagement.permissionButtonTooltip')}
        >
          <FontAwesomeIcon
            onClick={evt => {
              evt.stopPropagation();
              onPermissionsClick(application);
            }}
            icon={faUsers}
          />
        </Tooltip>
        <Tooltip
          title={t('AppStateManagement.loadButtonTooltip')}
        >
          <FontAwesomeIcon
            onClick={evt => {
              evt.stopPropagation();
              onLoadClick(application);
            }}
            icon={faFolderOpen}
          />
        </Tooltip>
      </div>
    );
  };

  const columns: ColumnType<Application>[] = [{
    title: t('AppStateManagement.idColumnTitle'),
    dataIndex: 'id',
    key: 'id',
    defaultSortOrder: 'descend',
    sorter: idSorter
  }, {
    title: t('AppStateManagement.createdColumnTitle'),
    dataIndex: 'created',
    key: 'created',
    defaultSortOrder: 'descend',
    sorter: dateSorter,
    render: dateRenderer
  }, {
    title: t('AppStateManagement.modifiedColumnTitle'),
    dataIndex: 'modified',
    key: 'modified',
    sorter: dateSorter,
    render: dateRenderer
  }, {
    title: t('AppStateManagement.nameColumnTitle'),
    dataIndex: 'name',
    key: 'name',
    sorter: nameSorter
  }, {
    render: operationRenderer
  }];

  const onPermissionsClick = (application: Application) => {
    setPermissionApplicationId(application.id);
    setPermissionModalOpen(true);
  };

  const onDeleteClick = async (application: Application) => {
    confirm({
      title: t('AppStateManagement.confirmDeleteTitle'),
      content: (
        <span>
          {t('AppStateManagement.deleteStateHint', {
            stateName: application.name,
            stateId: application.id
          })}
        </span>
      ),
      onOk: async () => {
        if (!application.id) {
          return;
        }

        setLoading(true);

        try {
          await client?.application().delete(application.id);
          await loadAppContexts();
        } catch (error) {
          Logger.error(error);
        } finally {
          setLoading(false);
        }
      }
    });
  };

  const onLoadClick = async (application: Application) => {
    if (!readAppContext) {
      return;
    }

    confirm({
      title: t('AppStateManagement.confirmLoadTitle'),
      content: (
        <span>
          {t('AppStateManagement.loadStateHint', {
            stateName: application.name
          })}
        </span>
      ),
      onOk: async () => {
        setLoading(true);

        try {
          await readAppContext(application);
        } catch (error) {
          Logger.error(error);
        } finally {
          setLoading(false);
        }
      }
    });
  };

  const selectRow = (record: Application) => {
    const selectedRowKeys = [...selectedRows];

    if (!record.id) {
      return;
    }

    if (selectedRowKeys.indexOf(record.id) >= 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.id), 1);
    } else {
      selectedRowKeys.push(record.id);
    }

    if (selectedRowKeys.length > 1) {
      selectedRowKeys.shift();
    }

    setSelectedRows(selectedRowKeys);
  };

  return (
    <Tooltip
      title={t('AppStateManagement.buttonTooltip')}
    >
      <Button
        onClick={onClick}
        type="link"
        icon={(
          <FontAwesomeIcon
            icon={faDownload}
          />
        )}
      >
        {t('AppStateManagement.buttonTitle')}
      </Button>
      <Modal
        className="app-state-modal"
        title={t('AppStateManagement.modalTitle')}
        open={modalOpen}
        onCancel={onClose}
        width={800}
        footer={
          <>
            <Tooltip
              title={t('AppStateManagement.createStateButtonTooltip')}
            >
              <Button
                type="primary"
                onClick={onCreateClick}
                icon={
                  <FontAwesomeIcon
                    icon={faFile}
                  />
                }
              >
                {t('AppStateManagement.createStateButtonTitle')}
              </Button>
            </Tooltip>
            <Tooltip
              title={t('AppStateManagement.updateStateButtonTooltip')}
            >
              <Button
                onClick={onUpdateClick}
                disabled={selectedRows.length === 0}
                icon={
                  <FontAwesomeIcon
                    icon={faFloppyDisk}
                  />
                }
              >
                {t('AppStateManagement.updateStateButtonTitle')}
              </Button>
            </Tooltip>
          </>
        }
        {...restProps}
      >
        {
          errorMessage && (
            <Alert
              type="error"
              closable={true}
              message={errorMessage}
            />
          )
        }
        <Table
          className="app-state-table"
          size="small"
          loading={loading}
          columns={columns}
          dataSource={appContexts}
          rowKey="id"
          rowSelection={{
            columnWidth: 0,
            renderCell: () => null,
            selectedRowKeys: selectedRows,
            onChange: (selectedRowKeys: React.Key[]) => {
              setSelectedRows(selectedRowKeys);
            }
          }}
          onRow={(record) => ({
            onClick: () => {
              selectRow(record);
            }
          })}
        />
      </Modal>
      <Modal
        title={t('AppStateManagement.permissionModalTitle')}
        open={permissionModalOpen}
        footer={false}
        onCancel={() => {
          setPermissionApplicationId(undefined);
          setPermissionModalOpen(false);
        }}
        width={800}
      >
        {
          permissionApplicationId &&
          <UserPermissionGrid
            entityId={permissionApplicationId}
          />
        }
      </Modal>
    </Tooltip>
  );
};

export default AppStateManagement;
