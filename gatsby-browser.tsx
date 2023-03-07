import React from 'react';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import Helmet from 'react-helmet';
import './node_modules/slick-carousel/slick/slick.css';
import './node_modules/slick-carousel/slick/slick-theme.css';
export const wrapRootElement = ({ element }) => {
  return <PlasmicRootProvider Head={Helmet}>{element}</PlasmicRootProvider>;
};
