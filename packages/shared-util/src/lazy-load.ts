import { lazy } from 'react';

/**
 *  Lazy load a component
 * @param path  path to component
 * @returns  lazy loaded component
 */
export const lz = (path: string) => lazy(() => import(path));
