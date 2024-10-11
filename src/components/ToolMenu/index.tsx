import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import type {
  IconDefinition
} from '@fortawesome/fontawesome-common-types';

import {
  faChevronLeft,
  faChevronRight,
  faPalette,
  faFileDownload,
  faLanguage,
  faCircleInfo,
  faPlus,
  faRuler,
  faShareNodes,
  faStream,
  faUpload
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

import ClientConfiguration from 'clientConfig';

import _toArray from 'lodash/toArray';
import { ItemType } from 'rc-collapse/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import usePlugins from '../../hooks/usePlugins';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

import {
  isToolMenuIntegration
} from '../../plugin';

import {
  show as showAdd
} from '../../store/addLayerModal';
import { setFeatureInfoEnabled } from '../../store/featureInfo';
import {
  UploadTools, setLayerTreeEnabled
} from '../../store/layerTree';
import {
  setActiveKeys
} from '../../store/toolMenu';
import {
  show as showUpload
} from '../../store/uploadDataModal';

import LanguageSelect from '../LanguageSelector';
import Permalink from '../Permalink';
import PrintForm from '../PrintForm';

import Draw from './Draw';
import FeatureInfo from './FeatureInfo';
import LayerTree from './LayerTree';

import Measure from './Measure';
import './index.less';

export interface TitleEventEntity {
  key: string;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export type ToolPanelConfig = {
  icon: IconDefinition;
  title: string;
  wrappedComponent: JSX.Element;
};

export type ToolMenuProps = Partial<CollapsePanelProps> & {
  collapseWidth?: number;
  minWidth?: number;
  maxWidth?: number;
};

export const ToolMenu: React.FC<ToolMenuProps> = ({
  collapseWidth = 40,
  minWidth = 240,
  maxWidth = 600,
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

  const client = useSHOGunAPIClient();
  const keycloak = client?.getKeycloak();

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuTools, setMenuTools] = useState<string[]>([]);
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(320);
  const [noCollapseWidth, setNoCollapseWidth] = useState(width);

  useEffect(() => {
    const mobileQuery = window.matchMedia('only screen and (max-width: 450px) and (orientation: portrait),' +
      'only screen and (max-width: 750px) and (orientation: landscape), only screen and (max-width: 580px)');
    const mobileNavigatorRegEx = new RegExp('/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle' +
      '|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/');
    const isMobile = mobileQuery.matches || mobileNavigatorRegEx.test(window.navigator.userAgent);

    if (isMobile) {
      setCollapsed(true);
      setWidth(collapseWidth);
    }
  }, [collapseWidth]);

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

  useEffect(() => {
    const exclusiveTools = [
      'print',
      'measure_tools',
      'draw_tools',
      'feature_info',
      'tree'
    ];

    const activeExclusiveTools = exclusiveTools.filter(tool =>
      activeKeys.includes(tool)
    );

    if (activeExclusiveTools.length > 1) {
      const lastExclusiveTool = activeKeys
        .slice(0, activeKeys.length - 1)
        .reverse()
        .find(tool => exclusiveTools.includes(tool));

      if (lastExclusiveTool) {
        dispatch(
          setActiveKeys(activeKeys.filter(keys => keys !== lastExclusiveTool))
        );
      }
    }

    dispatch(setFeatureInfoEnabled(activeKeys.includes('feature_info')));
    dispatch(setLayerTreeEnabled(activeKeys.includes('tree')));

  }, [activeKeys, dispatch]);

  const getToolPanels = (): ItemType[] => {
    const panels: ItemType[] = [];

    menuTools.forEach((tool: string) => {
      const toolPanelConfig = getToolPanelConfig(tool);

      if (!toolPanelConfig) {
        return;
      }

      const {
        icon,
        title,
        wrappedComponent
      } = toolPanelConfig;

      panels.push({
        key: tool,
        label: (
          <>
            {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
            <span>{title}</span>
          </>
        ),
        children: wrappedComponent
      });
    });

    if (plugins) {
      plugins.forEach(plugin => {
        if (isToolMenuIntegration(plugin.integration)) {
          const {
            key,
            wrappedComponent: WrappedPluginComponent,
            integration: {
              label = 'Plugin',
              insertionIndex,
              icon,
              ...passThroughProps
            }
          } = plugin;

          const newItem: ItemType = {
            key,
            label: (
              <>
                {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
                <span>{t(label)}</span>
              </>
            ),
            ...passThroughProps,
            children: <WrappedPluginComponent />
          };

          panels.splice(insertionIndex || 0, 0, newItem);
        }
      });
    }
    return panels;
  };

  const activeUploadTools = useAppSelector(state => state.layerTree.activeUploadTools);

  const getToolPanelConfig = (tool: string): ToolPanelConfig | undefined => {
    switch (tool) {
      case 'measure_tools':
        return {
          icon: faRuler,
          title: t('ToolMenu.measure'),
          wrappedComponent: (
            <Measure
              showMeasureDistance={
                availableTools.includes('default') || availableTools.includes('measure_tools_distance')
              }
              showMeasureArea={availableTools.includes('default') || availableTools.includes('measure_tools_area')}
            />
          )
        };
      case 'draw_tools':
        return {
          icon: faPalette,
          title: t('ToolMenu.draw'),
          wrappedComponent: (
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
              showStyleFeatures={availableTools.includes('default') || availableTools.includes('draw_tools_style')}
            />
          )
        };
      case 'feature_info':
        return {
          icon: faCircleInfo,
          title: t('ToolMenu.featureInfo'),
          wrappedComponent: (
            <FeatureInfo />
          )
        };
      case 'print':
        return {
          icon: faFileDownload,
          title: t('ToolMenu.print'),
          wrappedComponent: map ? (
            <PrintForm
              active={activeKeys.includes('print')}
              layerBlackList={[
                'react-geo_measure',
                'hoverVectorLayer'
              ]}
            />
          ) : <></>
        };
      case 'tree':
        return {
          icon: faStream,
          title: t('ToolMenu.layertree'),
          wrappedComponent: (
            <div className='tree-wrapper'>
              <LayerTree />
              {activeUploadTools?.includes(UploadTools.addWMS) && (
                <Button
                  className='add-wms-button tool-menu-button'
                  icon={<FontAwesomeIcon icon={faPlus} />}
                  onClick={() => dispatch(showAdd())}
                >
                  {t('ToolMenu.addWms')}
                </Button>
              )
              }
              {
                keycloak && ClientConfiguration.geoserver?.upload?.authorizedRoles?.some(
                  role => keycloak.hasResourceRole(role, keycloak.clientId)) &&
                  activeUploadTools?.includes(UploadTools.dataUpload) && (
                  <Button
                    className='upload-data-button tool-menu-button'
                    icon={<FontAwesomeIcon icon={faUpload} />}
                    onClick={() => dispatch(showUpload())}
                  >
                    {t('ToolMenu.uploadData')}
                  </Button>
                )
              }
            </div>
          )
        };
      case 'permalink':
        return {
          icon: faShareNodes,
          title: t('Permalink.title'),
          wrappedComponent: <Permalink />
        };
      case 'language_selector':
        return {
          icon: faLanguage,
          title: t('ToolMenu.languageSelect'),
          wrappedComponent: <LanguageSelect />
        };
      default:
        break;
    }
  };

  const onMouseDown = useCallback(() => {
    setIsResizing(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isResizing && !collapsed) {
      const offsetLeft = (e.clientX - document.body.offsetLeft);
      if (offsetLeft > minWidth && offsetLeft < maxWidth) {
        setWidth(offsetLeft);
        setNoCollapseWidth(offsetLeft);
      }
    }
  }, [isResizing, collapsed, minWidth, maxWidth]);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <div
      aria-label="tool-menu"
      className={`tool-menu ${collapsed ? 'collapsed' : ''}`}
      style={{width: width} as React.CSSProperties}
    >
      <Collapse
        expandIconPosition='end'
        activeKey={activeKeys}
        destroyInactivePanel={true}
        onChange={(keys: string[] | string) => {
          setCollapsed(false);
          dispatch(setActiveKeys(_toArray(keys)));
          if (collapsed) {
            setWidth(noCollapseWidth);
          }
        }}
        items={getToolPanels()}
        {...restProps}
      />
      <Tooltip
        placement={'right'}
        title={collapsed ? t('ToolMenu.expand') : t('ToolMenu.collapse')}
      >
        <Button
          className="collapse-btn"
          aria-label="collapse-button"
          icon={
            collapsed ?
              <FontAwesomeIcon icon={faChevronRight} /> :
              <FontAwesomeIcon icon={faChevronLeft} />
          }
          onClick={() => {
            dispatch(setActiveKeys([]));
            setCollapsed(!collapsed);
            if (collapsed){
              setWidth(noCollapseWidth);
            } else {
              setWidth(collapseWidth);
            }
          }}
        />
      </Tooltip>
      {!collapsed ? (
        <div
          className ="dynamicWidth"
          onMouseDown={onMouseDown}
        />
      ) : <></>}
    </div>
  );
};

export default ToolMenu;
