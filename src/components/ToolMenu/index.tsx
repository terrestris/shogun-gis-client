import React, {
  useEffect,
  useState
} from 'react';

import type {
  IconDefinition
} from '@fortawesome/fontawesome-common-types';

import {
  faChevronLeft,
  faChevronRight,
  faDrawPolygon,
  faFileDownload,
  faLanguage,
  faMousePointer,
  faPlus,
  faRuler,
  faStream,
  faShareNodes,
  faFile
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

const { Panel } = Collapse;

import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import {
  DefaultApplicationToolConfig
} from '@terrestris/shogun-util/dist/model/Application';

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
import {
  ClientTools
} from '../../store/toolConfig';
import {
  setActiveKeys
} from '../../store/toolMenu';

import LanguageSelect from '../LanguageSelector';
import Permalink from '../Permalink';
import PrintForm from '../PrintForm';

import AppState from './AppState';
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

export type ToolPanelConfig = {
  icon: IconDefinition;
  title: string;
  wrappedComponent: JSX.Element;
};

export type ToolMenuProps = {} & Partial<CollapsePanelProps>;

export const ToolMenu: React.FC<ToolMenuProps> = ({
  ...restProps
}): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toolConfig = useAppSelector(state => state.toolConfig.filter(config => config.config?.visible));
  const activeKeys = useAppSelector(state => state.toolMenu.activeKeys);

  const {
    t
  } = useTranslation();

  const map = useMap();

  const plugins = usePlugins();

  const dispatch = useAppDispatch();

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
    if (
      activeKeys.includes(ClientTools.PRINT) &&
      activeKeys.includes(ClientTools.MEASURE_TOOLS)
    ) {
      if (activeKeys.indexOf(ClientTools.PRINT) < activeKeys.indexOf(ClientTools.MEASURE_TOOLS)) {
        dispatch(setActiveKeys(activeKeys.filter(keys => keys !== ClientTools.PRINT)));
      } else {
        dispatch(
          setActiveKeys(activeKeys.filter(keys => keys !== ClientTools.MEASURE_TOOLS))
        );
      }
    }
  }, [activeKeys, dispatch]);

  const getToolPanels = () => {
    const panels: JSX.Element[] = [];

    toolConfig.forEach(config => {
      const toolPanelConfig = getToolPanelConfig(config);

      if (!toolPanelConfig) {
        return;
      }

      const {
        icon,
        title,
        wrappedComponent,
        forceRender
      } = toolPanelConfig;

      const panel = (
        <Panel
          forceRender={forceRender}
          className={config.name}
          header={
            <>
              {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
              <span>{title}</span>
            </>
          }
          key={config.name}
        >
          {wrappedComponent}
        </Panel>
      );
      panels.push(panel);
    });

    if (plugins) {
      plugins.forEach(plugin => {
        if (isToolMenuIntegration(plugin.integration)) {
          const {
            key,
            wrappedComponent: WrappedPluginComponent,
            integration: {
              placement,
              label = 'Plugin',
              insertionIndex,
              icon,
              ...passThroughProps
            }
          } = plugin;

          panels.splice(insertionIndex || 0, 0, (
            <Panel
              header={
                <>
                  {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
                  <span>{t(label)}</span>
                </>
              }
              key={key}
              {...passThroughProps}
            >
              <WrappedPluginComponent />
            </Panel>
          ));
        }
      });
    }

    return panels;
  };

  const getToolPanelConfig = (config: DefaultApplicationToolConfig) => {
    switch (config.name) {
      case ClientTools.MEASURE_TOOLS:
        return {
          icon: faRuler,
          title: t('ToolMenu.measure'),
          wrappedComponent: (
            <Measure
              showMeasureDistance={config.config.showMeasureDistance}
              showMeasureArea={config.config.showMeasureArea}
            />
          )
        };
      case ClientTools.DRAW_TOOLS:
        return {
          icon: faDrawPolygon,
          title: t('ToolMenu.draw'),
          // We want to render the draw toolbar immediately to restore
          // any features from the store if set.
          forceRender: true,
          wrappedComponent: (
            <Draw
              showDrawPoint={config.config.showDrawPoint}
              showDrawLine={config.config.showDrawLine}
              showDrawPolygon={config.config.showDrawPolygon}
              showDrawCircle={config.config.showDrawCircle}
              showDrawRectangle={config.config.showDrawRectangle}
              showDrawAnnotation={config.config.showDrawAnnotation}
              showModifyFeatures={config.config.showModifyFeatures}
              showUploadFeatures={config.config.showUploadFeatures}
              showDownloadFeatures={config.config.showDownloadFeatures}
              showDeleteFeatures={config.config.showDeleteFeatures}
              showStyleEditor={config.config.showStyleEditor}
            />
          )
        };
      case ClientTools.FEATURE_INFO:
        return {
          icon: faMousePointer,
          title: t('ToolMenu.featureInfo'),
          wrappedComponent: (
            <FeatureInfo
              enabled={activeKeys.includes(ClientTools.FEATURE_INFO)}
            />
          )
        };
      case ClientTools.PRINT:
        return {
          icon: faFileDownload,
          title: t('ToolMenu.print'),
          wrappedComponent: map ? (
            <PrintForm
              active={activeKeys.includes(ClientTools.PRINT)}
              map={map}
              layerBlackList={[
                'react-geo_measure',
                'hoverVectorLayer'
              ]}
            />
          ) : <></>
        };
      case ClientTools.TREE:
        return {
          icon: faStream,
          title: t('ToolMenu.layertree'),
          wrappedComponent: (
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
          )
        };
      case ClientTools.PERMALINK:
        return {
          icon: faShareNodes,
          title: t('Permalink.title'),
          wrappedComponent: <Permalink />
        };
      case ClientTools.APP_STATE:
        return {
          icon: faFile,
          title: t('ToolMenu.saveLoad'),
          wrappedComponent: <AppState />
        };
      case ClientTools.LANGUAGE_SELECTOR:
        return {
          icon: faLanguage,
          title: t('ToolMenu.languageSelect'),
          wrappedComponent: <LanguageSelect />
        };
      default:
        break;
    }
  };

  return (
    <div
      className={`tool-menu ${collapsed ? 'collapsed' : ''}`}
    >
      <Collapse
        expandIconPosition='end'
        activeKey={activeKeys}
        destroyInactivePanel={true}
        onChange={(key: string[] | string) => {
          setCollapsed(false);

          if (Array.isArray(key)) {
            dispatch(setActiveKeys(key.map(k => k as ClientTools)));
          } else {
            dispatch(setActiveKeys([key as ClientTools]));
          }
        }}
        {...restProps}
      >
        {getToolPanels()}
      </Collapse>
      {
        getToolPanels().length > 0 && (
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
        )
      }
    </div>
  );
};

export default ToolMenu;
