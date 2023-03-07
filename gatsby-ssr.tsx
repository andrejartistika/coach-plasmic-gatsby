// import React from 'react';
// import { PlasmicRootProvider } from '@plasmicapp/react-web';
// import Helmet from 'react-helmet';
// import { Script } from 'gatsby';

// export const wrapRootElement = ({ element }) => {
//   return <PlasmicRootProvider Head={Helmet}>{element}</PlasmicRootProvider>;
// };

// export function Head() {
//   return (
//     <>
//       <title>Plasmic host</title>
//       {/* Data block script */}
//       <script
//         id="first-unique-id"
//         key="plasmic-hmr"
//         type="text/javascript"
//         dangerouslySetInnerHTML={{
//           __html: `
//         if (typeof window !== "undefined" && /\\/plasmic-host\\/?$/.test(window.location.pathname)) {
//           const RealEventSource = window.EventSource;
//           window.EventSource = function(url, config) {
//             if (/[^a-zA-Z]hmr($|[^a-zA-Z])/.test(url)) {
//               console.warn("Plasmic: disabled EventSource request for", url);
//               return {
//                 onerror() {}, onmessage() {}, onopen() {}, close() {}
//               };
//             } else {
//               return new RealEventSource(url, config);
//             }
//           }
//         }
//       `,
//         }}
//       />
//     </>
//   );
// }

const React = require('react');
const { PlasmicRootProvider } = require('@plasmicapp/react-web');
const Helmet = require('react-helmet');
// Adds a class name to the body element

const HeadComponents = [
  <script
    key="plasmic-hmr"
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        if (typeof window !== "undefined" && /\\/plasmic-host\\/?$/.test(window.location.pathname)) {
          const RealEventSource = window.EventSource;
          window.EventSource = function(url, config) {
            if (/[^a-zA-Z]hmr($|[^a-zA-Z])/.test(url)) {
              console.warn("Plasmic: disabled EventSource request for", url);
              return {
                onerror() {}, onmessage() {}, onopen() {}, close() {}
              };
            } else {
              return new RealEventSource(url, config);
            }
          }
        }
      `,
    }}
  />,
];

const isProduction = process.env.NODE_ENV === 'production';

exports.onRenderBody = ({ pathname, setHeadComponents, setBodyAttributes }) => {
  setBodyAttributes({
    className: 'my-body-class',
  });
  if (!isProduction || pathname === '/plasmic-host/') {
    setHeadComponents(HeadComponents);
  }
};

// Wraps every page in a component
exports.wrapPageElement = ({ element }) => {
  return <PlasmicRootProvider Head={Helmet}>{element}</PlasmicRootProvider>;
};
