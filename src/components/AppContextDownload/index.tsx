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
  Button,
  Input,
  Modal,
  ModalProps,
  Table,
  Tooltip
} from 'antd';

const {
  confirm
} = Modal;

import {
  ColumnType
} from 'antd/lib/table';

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

import './index.less';
import UserPermissionGrid from '../Permission/UserPermissionGrid';

export type AppContextDownloadProps = {} & Partial<ModalProps>;

export const AppContextDownload: React.FC<AppContextDownloadProps> = ({
  ...restProps
}): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [permissionModalOpen, setPermissionModalOpen] = useState(false);
  const [appContexts, setAppContexts] = useState<Application[]>();
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);

  const appDispatch = useAppDispatch();

  const client = useSHOGunAPIClient();

  const writeAppContext = useWriteAppContext();
  const readAppContext = useReadAppContext();

  const appId = useAppSelector(state => state.id);
  // const stateOnly = useAppSelector(state => state.stateOnly);

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
      title: 'Projekt speichern',
      content: (
        <>
          <span>Projektname</span>
          <Input
            // TODO Get this working
            autoFocus={true}
            placeholder={'Projektnamen angeben'}
            onChange={evt => {
              appContext.name = evt.currentTarget.value;
            }}
          />
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

    // const selectedApplication = appContexts?.find(ctx => ctx.id === selectedRows[0]);

    if (!selectedApplication) {
      return;
    }

    const appContext = writeAppContext();
    appContext.id = selectedApplication.id;

    confirm({
      title: 'Fortfahren?',
      content: (
        <span>Projekt {selectedApplication.name} ({selectedApplication.id}) überschreiben?</span>
      ),
      onOk: async () => {
        setLoading(true);

        try {
          await client?.application().update(appContext);
          await loadAppContexts();
        } catch (error) {
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
    link.setAttribute('download', `appContext-${appId}.json`);
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

  const columns: ColumnType<Application>[] = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    defaultSortOrder: 'descend',
    sorter: idSorter
  }, {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    defaultSortOrder: 'descend',
    sorter: dateSorter,
    render: dateRenderer
  }, {
    title: 'Modified',
    dataIndex: 'modified',
    key: 'modified',
    sorter: dateSorter,
    render: dateRenderer
  }, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: nameSorter
  }, {
    render: (val, record) => {
      return (
        <FontAwesomeIcon
          onClick={() => onDeleteClick(record)}
          icon={faTrash}
        />
      );
    }
  }, {
    render: (val, record) => {
      return (
        <FontAwesomeIcon
          onClick={() => onDownloadClick(record)}
          icon={faDownload}
        />
      );
    }
  }, {
    render: (val, record) => {
      return (
        <FontAwesomeIcon
          onClick={() => onShareClick(record)}
          icon={faShareNodes}
        />
      );
    }
  }, {
    render: (val, record) => {
      return (
        <FontAwesomeIcon
          onClick={() => onPermissionsClick(record)}
          icon={faUsers}
        />
      );
    }
  }, {
    render: (val, record) => {
      return (
        <FontAwesomeIcon
          onClick={() => onLoadClick(record)}
          icon={faFolderOpen}
        />
      );
    }
  }];

  const onPermissionsClick = (application: Application) => {
    setPermissionModalOpen(true);
  };

  const onDeleteClick = async (application: Application) => {
    confirm({
      title: 'Fortfahren?',
      content: (
        <span>Projekt {application.name} ({application.id}) löschen?</span>
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

    // const selectedApplication = appContexts?.find(ctx => ctx.id === selectedRows[0]);

    // if (!selectedApplication) {
    //   return;
    // }

    // TODO Show confirm beforehand?
    await readAppContext(application);
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
      title={t('AppContextDownload.tooltip')}
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
        {t('AppContextDownload.title')}
      </Button>
      <Modal
        title={'Projekt speichern'}
        open={modalOpen}
        onCancel={onClose}
        width={800}
        footer={
          <>
            <Button
              type='primary'
              onClick={onCreateClick}
              icon={
                <FontAwesomeIcon
                  icon={faFile}
                />
              }
            >
              Projekt erstellen
            </Button>
            <Button
              onClick={onUpdateClick}
              disabled={selectedRows.length === 0}
              icon={
                <FontAwesomeIcon
                  icon={faFloppyDisk}
                />
              }
            >
              Projekt aktualisieren
            </Button>
            {/* <Button
              onClick={onLoadClick}
              disabled={selectedRows.length === 0}
              icon={(
                <FontAwesomeIcon
                  icon={faFolderOpen}
                />
              )}
            >
              Projekt laden
            </Button> */}
            {/* <Button
              onClick={onPermissionsClick}
              disabled={selectedRows.length === 0}
              icon={(
                <FontAwesomeIcon
                  icon={faUsers}
                />
              )}
            >
              Berechtigungen setzen
            </Button> */}
          </>
        }
        {...restProps}
      >
        <Table
          size='small'
          loading={loading}
          columns={columns}
          dataSource={appContexts}
          rowKey={'id'}
          rowSelection={{
            columnWidth: 0,
		        renderCell: () => null,
            selectedRowKeys: selectedRows,
            onChange: (selectedRowKeys: React.Key[], selectedApplications: Application[]) => {
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
        title={'Berechtigungen setzen'}
        open={permissionModalOpen}
        footer={false}
        onCancel={() => {
          setPermissionModalOpen(false);
        }}
        width={800}
      >
        <UserPermissionGrid
          entityId={selectedApplication?.id!}
        />
      </Modal>
    </Tooltip>
  );
};

export default AppContextDownload;
