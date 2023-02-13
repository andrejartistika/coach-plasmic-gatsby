import { initPlasmicLoader } from '@plasmicapp/loader-gatsby';
import { Header } from './components/Header/Header';
import { ShowcaseComponent } from './components/Showcase/ShowcaseComponent';
import { WebShowcaseComponent } from './components/Showcase/WebShowcaseComponent';
import { ShowcaseComponentMobile } from './components/Showcase/ShowcaseComponentMobile';
import { WebShowcaseComponentMobile } from './components/Showcase/WebShowcaseComponentMobile';
import registerComponent from "@plasmicapp/host/registerComponent";


export function initPlasmicLoaderWithRegistrations(plasmicOptions: any) {
  const PLASMIC = initPlasmicLoader(plasmicOptions);
  // Add all your code component registrations here.
  
    
  PLASMIC.registerComponent(ShowcaseComponent, {
    name: "ShowcaseComponent",
    importPath: "./components/Showcase/ShowcaseComponent",
    props: {
      isLight: "boolean",
      showButton: "boolean",
      buttonTitle: "string",
      onClickNavigateToString: "string",
    },
  });
  
  PLASMIC.registerComponent(WebShowcaseComponent, {
    name: "WebShowcaseComponent",
    importPath: "./components/Showcase/WebShowcaseComponent",
    props: {
      isLight: "boolean",
    },
  });
  PLASMIC.registerComponent(ShowcaseComponentMobile, {
    name: "ShowcaseComponentMobile",
    importPath: "./components/Showcase/ShowcaseComponentMobile",
    props: {
      isLight: "boolean",
    },
  });
  PLASMIC.registerComponent(WebShowcaseComponentMobile, {
    name: "WebShowcaseComponentMobile",
    importPath: "./components/Showcase/WebShowcaseComponentMobile",
    props: {
      isLight: "boolean",
    },
  });
  
  PLASMIC.registerComponent(Header, {
    name: "Header",
    importPath: "./components/Header/Header",
    props: {
      isDark: "boolean",
      data: "object",
    },
  });
  
  return PLASMIC;
}