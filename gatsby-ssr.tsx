import React from 'react';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import Helmet from 'react-helmet';
import { Script } from 'gatsby';

export const wrapRootElement = ({ element }) => {
  return <PlasmicRootProvider Head={Helmet}>{element}</PlasmicRootProvider>;
};

export function Head() {
  return (
    <>
      <title>Plasmic host</title>
      {/* Data block script */}
      <script
        id="first-unique-id"
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
      />
    </>
  );
}
