import BaseEntity, { BaseEntityArgs } from '@terrestris/shogun-util/dist/model/BaseEntity';

import CategoryType from './enum/CategoryType';

export interface TextualContentsArgs extends BaseEntityArgs {
  title?: string;
  markdown?: string;
  category?: CategoryType;
}

export default class TextualContent extends BaseEntity {
  title?: string;
  markdown?: string;
  category?: CategoryType;

  constructor({
    id,
    title,
    created,
    modified,
    markdown,
    category
  }: TextualContentsArgs) {
    super({
      id,
      created,
      modified
    });

    this.title = title;
    this.markdown = markdown;
    this.category = category;
  }
}
