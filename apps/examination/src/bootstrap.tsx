import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import './global.css';
// import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';
import { MountArgs, TypeMemoryHistory } from './types';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import routes from './router/routes';

// const container = document.getElementById('root') as HTMLElement;

// const root = createRoot(container);
// root.render(<App />);

const mount = (el: Element | DocumentFragment, { onNavigate, defaultHistory, initialPath }: MountArgs) => {
  const history =
    defaultHistory ||
    createMemoryRouter(routes, {
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.subscribe(onNavigate);
  }

  createRoot(el).render(<App history={history} />);
};

// If we are in development and in isolation,
// call mount immediately
// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root-Examination');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserRouter(routes), initialPath: '' });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
