import { md5 } from 'js-md5';

export interface GravatarProps {
  email: string;
  size?: number;
  rating?: 'g' | 'pg' | 'r' | 'x';
  defaultImage?: '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'blank';
  force?: boolean;
}

const GRAVATAR_BASE_URL = 'https://www.gravatar.com/avatar/';

/**
 * https://de.gravatar.com/site/implement/images/
 */
export const getGravatarUrl = ({
  email = '',
  size = 80,
  rating = 'g',
  defaultImage = 'identicon',
  force = false
}: GravatarProps): string => {
  const lowerCaseEmail = email.toLowerCase();
  const hash = md5(lowerCaseEmail);

  let url = `${GRAVATAR_BASE_URL}${hash}?s=${size}&r=${rating}&d=${defaultImage}`;

  if (force) {
    url = `${url}&f=y`;
  }

  return url;
};

export default getGravatarUrl;
