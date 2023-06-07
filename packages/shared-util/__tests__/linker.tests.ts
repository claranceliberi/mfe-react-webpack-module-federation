import { urlLinker } from '../index';
import { describe, it, expect } from 'vitest';

describe('urlLinker', () => {
  it('should concatenate mfeUrl and to string when mfeUrl starts with /', () => {
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
