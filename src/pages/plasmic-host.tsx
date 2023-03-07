import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-gatsby';
import { initPlasmicLoaderWithRegistrations } from '../plasmic-init';
import { graphql } from 'gatsby';
import { Script } from 'gatsby';

export const pageQuery = graphql`
  query {
    plasmicOptions
  }
`;

export default function Host({ data }) {
  const { plasmicOptions } = data;
  initPlasmicLoaderWithRegistrations(plasmicOptions);
  return (
    <>
      <Script
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
      <PlasmicCanvasHost />
    </>
  );
}
