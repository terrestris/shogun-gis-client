import {
  useCallback
} from 'react';

import {
  Extent as OlExtent
} from 'ol/extent';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from './useSHOGunAPIClient';

export type SolrQueryDocument = {
  /**
   * The id of the document.
   */
  id: string;
  /**
   * The category of the feature.
   */
  category?: string[];
  /**
   * The name of the feature type.
   */
  featureType?: string[];
  /**
   * The WKT geometry.
   */
  geometry?: string[];
};

export type SolrQueryResponse = {
  highlighting: Record<string, unknown>;
  response: {
    docs: SolrQueryDocument[];
    numFound: number;
    numFoundExact: boolean;
    start: number;
  };
  responseHeader: {
    QTime: number;
    params: {
      json: string;
    };
    status: number;
  };
};

export type SolrQueryConfig = {
  q: string;
  fq?: string;
  defType?: 'lucene' | 'dismax' | 'edismax';
  qf?: string;
  rows?: number;
  hl?: boolean;
  'hl.fl'?: string;
  'hl.tag.pre'?: string;
  'hl.tag.post'?: string;
  'hl.requireFieldMatch'?: boolean;
};

export type SolrQueryOpts = {
  searchUrl: string;
  query: string;
  fieldList?: string;
  useSolrHighlighting?: boolean;
  tagPre?: string;
  tagPost?: string;
  requireFieldMatch?: boolean;
  viewBox?: OlExtent;
  rowsPerQuery?: number;
  queryParser?: 'lucene' | 'dismax' | 'edismax';
  coreName?: string;
};

export const useExecuteSolrQuery = () => {
  const client = useSHOGunAPIClient();

  const executeSolrQuery = useCallback(async (opts: SolrQueryOpts) => {
    const solrQueryConfig: SolrQueryConfig = {
      q: opts.query,
      rows: opts.rowsPerQuery ?? 100,
      defType: opts.queryParser ?? 'edismax'
    };

    if (opts.fieldList) {
      solrQueryConfig.qf = opts.fieldList;
    } else {
      solrQueryConfig.qf = opts.coreName ?? 'search';
    }

    if (opts.viewBox) {
      const bboxFilter = `geometry:[${opts.viewBox[1]},${opts.viewBox[0]} TO ${opts.viewBox[3]},${opts.viewBox[2]}]`;
      solrQueryConfig.fq = bboxFilter;
    }

    if (opts.useSolrHighlighting) {
      solrQueryConfig.hl = true;
      solrQueryConfig['hl.fl'] = '*';
      solrQueryConfig['hl.tag.pre'] = opts.tagPre ?? '<b>';
      solrQueryConfig['hl.tag.post'] = opts.tagPost ?? '</b>';
      solrQueryConfig['hl.requireFieldMatch'] = opts.requireFieldMatch ?? true;
    }

    const defaultHeaders = {
      'Content-Type': 'application/json'
    };

    const response = await fetch(opts.searchUrl, {
      method: 'POST',
      headers: {
        ...defaultHeaders,
        ...getBearerTokenHeader(client?.getKeycloak())
      },
      body: JSON.stringify(solrQueryConfig)
    });

    if (!response.ok) {
      throw new Error('Failed to execute Solr query');
    }

    return await response.json() as SolrQueryResponse;
  }, [client]);

  return executeSolrQuery;
};

export default useExecuteSolrQuery;
