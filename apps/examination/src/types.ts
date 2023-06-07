import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';

const MemoryHistory = createMemoryRouter([]);
const BrowserHistory = createBrowserRouter([]);

export type TypeMemoryHistory = typeof MemoryHistory;
export type TypeBrowserHistory = typeof BrowserHistory;

export type MountArgs = {
  onNavigate?: () => void;
  defaultHistory?: TypeBrowserHistory | TypeMemoryHistory;
  initialPath: string;
};

export type AppProps = {
  history: TypeBrowserHistory | TypeMemoryHistory;
};
