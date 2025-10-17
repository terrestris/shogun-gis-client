import {
  GenericEntityService, GenericEntityServiceOpts
} from '@terrestris/shogun-util/dist/service/GenericEntityService';

import config from '../config';
import TextualContent from '../model/TextualContent';

class TextualContentService extends GenericEntityService<TextualContent> {

  constructor(opts: GenericEntityServiceOpts = {
    basePath: config.textualContentPath
  }) {
    super(opts);
  }
}

export default TextualContentService;
