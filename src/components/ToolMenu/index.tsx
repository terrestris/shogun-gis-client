import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  faRuler,
  faFileDownload,
  faStream,
  faMousePointer,
  faPlus,
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Menu,
  MenuProps
} from 'antd';

import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';
import OlSource from 'ol/source/Source';

import {
  SelectInfo
} from 'rc-menu/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import {
  show
} from '../../store/addLayerModal';
import {
  unsetSelectedKey
} from '../../store/toolMenu';

import PrintForm from '../PrintForm';

import FeatureInfo from './FeatureInfo';
import LayerTree from './LayerTree';
import Measure from './Measure';

import './index.less';

export interface TitleEventEntity {
  key: string;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export type ToolMenuProps = {} & Partial<MenuProps>;

export const ToolMenu: React.FC<ToolMenuProps> = ({
  ...restProps
}): JSX.Element => {
  const {
    t
  } = useTranslation();
  const map = useMap();

  const dispatch = useAppDispatch();
  const selectedKeys = useAppSelector(state => state.toolMenu.selectedKeys);

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activeSubMenuKeys, setActiveSubmenuKeys] = useState<string[]>([]);
  // It would be much more cleaner to manage state of initialized printManager
  // inside of PrintForm component itself, but this is not possible due to the
  // dubious antd menu implementaion: https://ant.design/components/menu/#FAQ
  // According to this, all menu children will be rendered twice, what leads to
  // dublicated instantiation of mapfish manager 🤦‍♂️
  const [printManager, setPrintManager] = useState<MapFishPrintV3Manager | null>(null);

  useEffect(() => {
    if (activeSubMenuKeys.includes('print') && !printManager) {
      initializeMapProvider();
    }
    return () => {
      if (printManager && activeSubMenuKeys.includes('print')) {
        printManager.shutdownManager();
        setPrintManager(null);
      }
    };
  }, [activeSubMenuKeys, printManager]);

  const layerFilter = (l: OlLayer<OlSource>) => {
    if (!map) {
      return;
    }

    const layerName = l.get('name');
    const layerBlackList = [
      'react-geo_measure',
      'hoverVectorLayer'
    ];

    return layerName && !layerBlackList.includes(layerName) &&
      l.getVisible() && !(l instanceof OlLayerGroup) &&
      MapUtil.layerInResolutionRange(l, map);
  };

  const initializeMapProvider = useCallback(async () => {
    const pManager: MapFishPrintV3Manager = new MapFishPrintV3Manager({
      url: '/print',
      map,
      timeout: 60000,
      layerFilter,
      transformOpts: {
        rotate: false
      }
    });

    await pManager.init()
      .then(() => {
        pManager.setOutputFormat(pManager.getOutputFormats()[0]);
        pManager.setDpi(pManager.getDpis()[0]);
        pManager.setLayout(pManager.getLayouts()[0]?.name);
      })
      .catch((error: any) => {
        Logger.error(error);
      });
    setPrintManager(pManager);
  }, [map, t]);

  const onMenuSelect = (evt: SelectInfo) => {
    switch (evt.key) {
      case 'expand_collapse':
        setCollapsed(!collapsed);
        break;
      default:
        break;
    }
  };

  const onMenuDeselect = (evt: SelectInfo) => {
    switch (evt.key) {
      case 'expand_collapse':
        setCollapsed(!collapsed);
        break;
      default:
        break;
    }
  };

  const onOpenChange = (openKeys: string[]) => {
    if (collapsed) {
      openKeys = openKeys.filter(k => k === 'measure_tools' || k === 'expand_collapse');
    }
    setActiveSubmenuKeys(openKeys);
  };

  const onSubmenuTitleClick = (key: TitleEventEntity) => {
    setCollapsed(false);
    selectedKeys.forEach(selKey => dispatch(unsetSelectedKey(selKey)));
    setActiveSubmenuKeys([key.key]);
  };

  const items = [
    {
      className: 'measure',
      key: 'measure_tools',
      icon: <FontAwesomeIcon icon={faRuler} />,
      label: t('ToolMenu.measure'),
      children: [
        {
          key: 'measure-panel',
          label: <Measure />
        }
      ]
    },
    {
      key: 'feature_info',
      onTitleClick: onSubmenuTitleClick,
      icon: <FontAwesomeIcon icon={faMousePointer} />,
      label: t('ToolMenu.featureInfo'),
      children: [
        {
          key: 'feature-info-panel',
          label: (
            <FeatureInfo
              enabled={activeSubMenuKeys.includes('feature_info')}
            />
          )
        }
      ]
    },
    {
      key: 'print',
      onTitleClick: onSubmenuTitleClick,
      icon: <FontAwesomeIcon icon={faFileDownload} />,
      label: t('ToolMenu.print'),
      children: [
        {
          key: 'print-panel',
          label: (
            <PrintForm
              printManager={printManager!}
              map={map!}
            />
          )
        }
      ]
    },
    {
      className: 'tree',
      key: 'tree',
      onTitleClick: onSubmenuTitleClick,
      icon: <FontAwesomeIcon icon={faStream} />,
      label: t('ToolMenu.layertree'),
      children: [
        {
          key: 'tree-panel',
          label: (
            <div className='wmsbox'>
              <LayerTree />
              <Button
                icon={<FontAwesomeIcon icon={faPlus} />}
                // TODO Implement AddWMS modal
                onClick={() => dispatch(show())}
              >
                {t('ToolMenu.addWms')}
              </Button>
            </div>
          )
        }
      ]
    },
    {
      key: 'expand_collapse',
      icon: collapsed ?
        <FontAwesomeIcon icon={faChevronRight} /> :
        <FontAwesomeIcon icon={faChevronLeft} />
    }
  ];

  return (
    <div className="tool-menu">
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        onSelect={onMenuSelect}
        onDeselect={onMenuDeselect}
        openKeys={activeSubMenuKeys}
        onOpenChange={onOpenChange}
        multiple={true}
        selectedKeys={selectedKeys}
        items={items}
        {...restProps}
      />
    </div>
  );
};

export default ToolMenu;
