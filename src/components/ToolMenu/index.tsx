import React, {
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
  faChevronLeft,
  faShareNodes,
  faDrawPolygon,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Collapse,
  CollapsePanelProps,
  Tooltip
} from 'antd';

import _toArray from 'lodash/toArray';

const { Panel } = Collapse;

import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import usePlugins from '../../hooks/usePlugins';

import {
  isToolMenuIntegration
} from '../../plugin';

import {
  show as showAdd
} from '../../store/addLayerModal';
import {
  setActiveKeys
} from '../../store/toolMenu';

import LanguageSelect from '../LanguageSelector';
import Permalink from '../Permalink';
import PrintForm from '../PrintForm';

import Draw from './Draw';
import FeatureInfo from './FeatureInfo';
import LayerTree from './LayerTree';
import Measure from './Measure';

import './index.less';

import '../PrintForm/Shared/Shared';

export interface TitleEventEntity {
  key: string;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export type ToolMenuProps = {} & Partial<CollapsePanelProps>;

export const ToolMenu: React.FC<ToolMenuProps> = ({
  ...restProps
}): JSX.Element => {
  const {
    t
  } = useTranslation();
  const map = useMap();

  const plugins = usePlugins();

  const dispatch = useAppDispatch();
  const availableTools = useAppSelector(state => state.toolMenu.availableTools);
  const activeKeys = useAppSelector(state => state.toolMenu.activeKeys);

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuTools, setMenuTools] = useState<string[]>([]);

  useEffect(() => {
    const mobileQuery = window.matchMedia('only screen and (max-width: 450px) and (orientation: portrait),' +
      'only screen and (max-width: 750px) and (orientation: landscape), only screen and (max-width: 580px)');
    const mobileNavigatorRegEx = new RegExp('/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle' +
      '|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/');
    const isMobile = mobileQuery.matches || mobileNavigatorRegEx.test(window.navigator.userAgent);

    if (isMobile) {
      setCollapsed(true);
    }
  }, []);

  useEffect(() => {
    if (menuTools.length < 1) {
      if (availableTools.includes('default')) {
        setMenuTools([
          'measure_tools',
          'draw_tools',
          'feature_info',
          'print',
          'tree',
          'permalink',
          'language_selector'
        ]);
      } else {
        setMenuTools(availableTools);
      }
    }
  }, [menuTools, availableTools]);

  const getToolPanel = (toolKey: string) => {
    switch (toolKey) {
      case 'measure_tools':
        return (
          <Panel
            header={
              <>
                <FontAwesomeIcon icon={faRuler} />
                <span>{t('ToolMenu.measure')}</span>
              </>
            }
            key="measure_tools"
          >
            <Measure
              showMeasureDistance={
                availableTools.includes('default') || availableTools.includes('measure_tools_distance')
              }
              showMeasureArea={availableTools.includes('default') || availableTools.includes('measure_tools_area')}
            />
          </Panel>
        );
      case 'draw_tools':
        return (
          <Panel
            header={
              <>
                <FontAwesomeIcon icon={faDrawPolygon} />
                <span>{t('ToolMenu.draw')}</span>
              </>
            }
            key="draw_tools"
          >
            <Draw
              showDrawPoint={availableTools.includes('default') || availableTools.includes('draw_tools_point')}
              showDrawLine={availableTools.includes('default') || availableTools.includes('draw_tools_line')}
              showDrawPolygon={availableTools.includes('default') || availableTools.includes('draw_tools_polygon')}
              showDrawCircle={availableTools.includes('default') || availableTools.includes('draw_tools_circle')}
              showDrawRectangle={availableTools.includes('default') || availableTools.includes('draw_tools_rectangle')}
              showDrawAnnotation={
                availableTools.includes('default') || availableTools.includes('draw_tools_annotation')
              }
              showModifyFeatures={availableTools.includes('default') || availableTools.includes('draw_tools_modify')}
              showUploadFeatures={availableTools.includes('default') || availableTools.includes('draw_tools_upload')}
              showDownloadFeatures={
                availableTools.includes('default') || availableTools.includes('draw_tools_download')
              }
              showDeleteFeatures={availableTools.includes('default') || availableTools.includes('draw_tools_delete')}
            />
          </Panel>
        );
      case 'feature_info':
        return (
          <Panel
            header={
              <>
                <FontAwesomeIcon icon={faMousePointer} />
                <span>{t('ToolMenu.featureInfo')}</span>
              </>
            }
            key="feature_info"
          >
            <FeatureInfo
              enabled={activeKeys.includes('feature_info')}
            />
          </Panel>
        );
      case 'print':
        return (
          <Panel
            header={
              <>
                <FontAwesomeIcon icon={faFileDownload} />
                <span>{t('ToolMenu.print')}</span>
              </>
            }
            key="print"
          >
            <PrintForm
              active={activeKeys.includes('print')}
              map={map!}
              layerBlackList={[
                'react-geo_measure',
                'hoverVectorLayer'
              ]}
            />
          </Panel>
        );
      case 'tree':
        return (
          <Panel
            header={
              <>
                <FontAwesomeIcon icon={faStream} />
                <span>{t('ToolMenu.layertree')}</span>
              </>
            }
            key="tree"
          >
            <div className='tree-wrapper'>
              <LayerTree />
              <Button
                className='add-wms-button tool-menu-button'
                icon={<FontAwesomeIcon icon={faPlus} />}
                onClick={() => dispatch(showAdd())}
              >
                {t('ToolMenu.addWms')}
              </Button>
            </div>
          </Panel>
        );
      case 'permalink':
        return (
          <Panel
            header={
              <>
                <FontAwesomeIcon icon={faShareNodes} />
                <span>{t('Permalink.title')}</span>
              </>
            }
            key="permalink"
          >
            <Permalink />
          </Panel>
        );
      case 'language_selector':
        return (
          <Panel
            header={
              <>
                <FontAwesomeIcon icon={faLanguage} />
                <span>{t('ToolMenu.languageSelect')}</span>
              </>
            }
            key="language_selector"
          >
            <LanguageSelect />
          </Panel>
        );
      default:
        break;
    }
  };

  // TODO reenable
  // if (plugins) {
  //   plugins.forEach(plugin => {
  //     if (isToolMenuIntegration(plugin.integration)) {
  //       const {
  //         key,
  //         wrappedComponent: WrappedPluginComponent,
  //         integration: {
  //           placement,
  //           label = 'Plugin',
  //           insertionIndex,
  //           icon,
  //           ...passThroughProps
  //         }
  //       } = plugin;

  //       items.splice(insertionIndex || 0, 0, {
  //         key: key,
  //         onTitleClick: onSubmenuTitleClick,
  //         icon: icon ? <FontAwesomeIcon icon={icon} /> : undefined,
  //         label: t(label),
  //         children: [
  //           {
  //             key: `${key}-child`,
  //             label: <WrappedPluginComponent />
  //           }
  //         ],
  //         ...passThroughProps
  //       });
  //     }
  //   });
  // }

  return (
    <div className="tool-menu">
      <Collapse
        expandIconPosition='end'
        activeKey={activeKeys}
        onChange={(keys: string[] | string) => {
          setCollapsed(false);
          dispatch(setActiveKeys(_toArray(keys)));
        }}
        {...restProps}
      >
        {menuTools.map(getToolPanel)}
      </Collapse>
      <Tooltip
        placement={'right'}
        title={collapsed ? t('ToolMenu.expand') : t('ToolMenu.collapse')}
      >
        <Button
          className="collapse-btn"
          icon={
            collapsed ?
              <FontAwesomeIcon icon={faChevronRight} /> :
              <FontAwesomeIcon icon={faChevronLeft} />
          }
          onClick={() => {
            dispatch(setActiveKeys([]));
            setCollapsed(!collapsed);
          }}
        />
      </Tooltip>
    </div>
  );
};

export default ToolMenu;
