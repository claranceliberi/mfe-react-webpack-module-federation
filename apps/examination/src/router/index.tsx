import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
  },
});

export default router;
