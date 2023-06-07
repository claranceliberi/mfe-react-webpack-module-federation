import { To } from 'react-router-dom';
import { isEmpty } from 'lodash';

function urlLinker(mfeUrl: string, to: string | Partial<To>): string | Partial<To> {
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

// inline testing
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;

  describe('urlLinker', () => {
    it(' should concatenate mfeUrl and to string when mfeUrl starts with /', () => {
      const mfeUrl = '/mfe';
      const to = '/path';
      const expected = '/mfe/path';
      const result = urlLinker(mfeUrl, to);
      expect(result).toEqual(expected);
    });
  });

  it('should concatenate mfeUrl and to string when mfeUrl does not start with /', () => {
    const mfeUrl = 'mfe';
    const to = '/path';
    const expected = '/mfe/path';
    const result = urlLinker(mfeUrl, to);
    expect(result).toEqual(expected);
  });

  it('should concatenate mfeUrl and to.pathname when mfeUrl starts with /', () => {
    const mfeUrl = '/mfe';
    const to = {
      pathname: '/path',
      search: '?query',
      hash: '#fragment',
    };
    const expected = {
      pathname: '/mfe/path',
      search: '?query',
      hash: '#fragment',
    };
    const result = urlLinker(mfeUrl, to);
    expect(result).toEqual(expected);
  });

  it('should concatenate mfeUrl and to.pathname when mfeUrl does not start with /', () => {
    const mfeUrl = 'mfe';
    const to = {
      pathname: '/path',
      search: '?query',
      hash: '#fragment',
    };
    const expected = {
      pathname: '/mfe/path',
      search: '?query',
      hash: '#fragment',
    };
    const result = urlLinker(mfeUrl, to);
    expect(result).toEqual(expected);
  });

  it('should return mfeUrl when to is an empty string', () => {
    const mfeUrl = '/mfe';
    const to = '';
    const expected = '/mfe';
    const result = urlLinker(mfeUrl, to);
    expect(result).toEqual(expected);
  });

  it('should return mfeUrl when to is an empty object', () => {
    const mfeUrl = '/mfe';
    const to = {};
    const expected = {
      pathname: '/mfe',
      search: undefined,
      hash: undefined,
    };
    const result = urlLinker(mfeUrl, to);
    expect(result).toEqual(expected);
  });
}
