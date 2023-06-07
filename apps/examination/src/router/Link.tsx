import React from 'react';
import { Link as CLink, LinkProps } from 'react-router-dom';

export default function Link(props: LinkProps & React.RefAttributes<HTMLAnchorElement>) {
  return <CLink {...props} />;
}
