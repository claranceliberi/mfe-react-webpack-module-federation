import React from 'react';
import { Link as CLink, LinkProps } from 'react-router-dom';
import { urlLinker } from 'shared-util';

//this component plays a crucial role in the routing of the application, by allowing you to navigate in the app
// without having to specify the main app path
export default function Link({ to, ...props }: LinkProps & React.RefAttributes<HTMLAnchorElement>) {
  return <CLink to={urlLinker('watchlist', to)} {...props} />;
}
