import { To } from 'react-router-dom';
import { isEmpty } from 'lodash';

export function urlLinker(mfeUrl: string, to: string | Partial<To>): string | Partial<To> {
  const substring = mfeUrl.startsWith('/') ? mfeUrl : `/${mfeUrl}`;

  if (typeof to === 'string') {
    return `${substring}${to}`;
  } else {
    const { pathname, search, hash } = to;
    const pathNm = !isEmpty(pathname) ? pathname : '';
    return {
      pathname: `${substring}${pathNm}`,
      search,
      hash,
    };
  }
}
