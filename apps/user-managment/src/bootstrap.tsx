import './global.css';
import App from './App';
import routes from './router/routes';
const mount = () => ({
  routes,
  App,
});

export { mount };
