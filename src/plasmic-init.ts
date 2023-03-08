import { initPlasmicLoader } from '@plasmicapp/loader-gatsby';
import { Header } from './components/Header/Header';
import { ShowcaseComponent } from './components/Showcase/ShowcaseComponent';
import { WebShowcaseComponent } from './components/Showcase/WebShowcaseComponent';
import { ShowcaseComponentMobile } from './components/Showcase/ShowcaseComponentMobile';
import { WebShowcaseComponentMobile } from './components/Showcase/WebShowcaseComponentMobile';

import { CustomSlider } from 'components/CustomSlider/CustomSlider';

export function initPlasmicLoaderWithRegistrations(plasmicOptions: any) {
  const PLASMIC = initPlasmicLoader(plasmicOptions);
  // Add all your code component registrations here.

  PLASMIC.registerComponent(ShowcaseComponent, {
    name: 'ShowcaseComponent',
    importPath: 'components/Showcase/ShowcaseComponent',
    props: {
      isLight: 'boolean',
      showButton: 'boolean',
      buttonTitle: 'string',
      onClickNavigateToString: 'string',
    },
  });

  PLASMIC.registerComponent(CustomSlider, {
    name: 'CustomSlider',
    displayName: 'CustomSlider',
    importPath: 'components/CustomSlider/CustomSlider',
    importName: 'CustomSlider',
    isDefaultExport: true,
    props: {
      children: {
        type: 'slot',
        defaultValue: [
          {
            type: 'img',
            src: '<https://via.placeholder.com/150x90/FF0000/FFFFFF/?text=Slide_1>',
            styles: {
              maxWidth: '100%',
            },
          },
          {
            type: 'img',
            src: '<https://via.placeholder.com/150x90/00FF00/FFFFFF/?text=Slide_2>',
            styles: {
              maxWidth: '100%',
            },
          },
          {
            type: 'img',
            src: '<https://via.placeholder.com/150x90/0000FF/FFFFFF/?text=Slide_3>',
            styles: {
              maxWidth: '100%',
            },
          },
        ],
      },
      dotSlot: {
        type: 'slot',
        hidePlaceholder: true,
      },
      dotSlotWrapperStyle: {
        type: 'object',
        defaultValue: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: '16px',
          width: '100%',
        },
      },
      sliderWrapperStyle: {
        type: 'object',
        defaultValue: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: '16px',
          width: '100%',
        },
      },
      slideWrapperStyle: {
        type: 'object',
        defaultValue: {
          padding: '16px',
        },
      },
      nextArrow: {
        type: 'slot',
        defaultValue: [
          {
            type: 'button',
            value: 'Next',
          },
        ],
      },
      prevArrow: {
        type: 'slot',
        defaultValue: [
          {
            type: 'button',
            value: 'Prev',
          },
        ],
      },
      arrows: {
        displayName: 'Arrows',
        type: 'boolean',
        description: 'Show next/prev arrows',
        defaultValue: true,
        defaultValueHint: true,
      },
      autoplay: {
        displayName: 'Auto Play',
        type: 'boolean',
        description: 'Automatically start scrolling',
        defaultValueHint: false,
      },
      autoplaySpeed: {
        displayName: 'Auto Play Speed',
        type: 'number',
        description: 'Delay between each auto scroll, in milliseconds',
        defaultValueHint: 3000,
        hidden: (props) => !props.autoplay,
      },
      dots: {
        displayName: 'Dots',
        type: 'boolean',
        description: 'Show dots for each slide',
        defaultValueHint: false,
      },
      easing: {
        displayName: 'Easing',
        type: 'string',
        description: 'Easing method for transition',
        defaultValueHint: 'linear',
      },
      fade: {
        displayName: 'Fade',
        type: 'boolean',
        description: 'Cross-fade between slides',
        defaultValueHint: false,
      },
      centerMode: {
        displayName: 'centerMode',
        type: 'boolean',
        description: 'Center mode',
        defaultValueHint: false,
      },
      centerPadding: {
        displayName: 'centerPadding',
        type: 'string',
        description: 'Center padding',
        defaultValueHint: '30px',
      },
      focusOnSelect: {
        displayName: 'Focus On Select',
        type: 'boolean',
        description: 'Go to slide on click',
        defaultValueHint: false,
      },
      infinite: {
        displayName: 'Infinite',
        type: 'boolean',
        description: 'Infinitely wrap around contents',
        defaultValueHint: true,
      },
      initialSlide: {
        displayName: 'Initial Slide',
        type: 'number',
        description: 'Index of initial slide',
        defaultValueHint: 0,
      },
      lazyLoad: {
        displayName: 'Lazy Load',
        type: 'choice',
        options: ['ondemand', 'progressive'],
        description:
          'Load images or render components on demand or progressively',
      },
      pauseOnDotsHover: {
        displayName: 'Pause On Dots Hover',
        type: 'boolean',
        description: 'Prevents autoplay while hovering on dots',
        defaultValueHint: false,
      },
      pauseOnFocus: {
        displayName: 'Pause On Focus',
        type: 'boolean',
        description: 'Prevents autoplay while focused on slides',
        defaultValueHint: false,
      },
      pauseOnHover: {
        displayName: 'Pause On Hover',
        type: 'boolean',
        description: 'Prevents autoplay while hovering on track',
        defaultValueHint: true,
      },
      rows: {
        displayName: 'Rows',
        type: 'number',
        description: 'Number of rows per slide (enables grid mode)',
        defaultValueHint: 1,
      },
      rtl: {
        displayName: 'Reverse',
        type: 'boolean',
        description: 'Reverses the slide order',
        defaultValueHint: false,
      },
      slidesPerRow: {
        displayName: 'Slides Per Row',
        type: 'number',
        description:
          'Number of slides to display in grid mode, this is useful with rows option',
        defaultValueHint: 1,
      },
      slidesToScroll: {
        displayName: 'Slides To Scroll',
        type: 'number',
        description: 'Number of slides to scroll at once',
        defaultValueHint: 1,
      },
      slidesToShow: {
        displayName: 'Slides To Show',
        type: 'number',
        description: 'Number of slides to show in one frame',
        defaultValueHint: 1,
      },
      speed: {
        displayName: 'Speed',
        type: 'number',
        description: 'Transition speed in milliseconds',
        defaultValueHint: 500,
      },
      swipe: {
        displayName: 'Swipe',
        type: 'boolean',
        description: 'Enable swiping to change slides',
        defaultValueHint: true,
      },
      swipeToSlide: {
        displayName: 'Swipe To Slide',
        type: 'boolean',
        description: "Enable drag/swipe irrespective of 'slidesToScroll'",
        defaultValueHint: false,
      },
      touchMove: {
        displayName: 'Touch Move',
        type: 'boolean',
        description: 'Enable slide moving on touch',
        defaultValueHint: true,
      },
      touchThreshold: {
        displayName: 'Touch Threshold',
        type: 'number',
        description: 'Swipe distance threshold in pixels',
        defaultValueHint: 5,
      },
      useCSS: {
        displayName: 'Use CSS',
        type: 'boolean',
        description: 'Enable/Disable CSS Transitions',
        defaultValueHint: true,
      },
      useTransform: {
        displayName: 'Use Transform',
        type: 'boolean',
        description: 'Enable/Disable CSS Transforms',
        defaultValueHint: true,
      },
      variableWidth: {
        displayName: 'Variable Width',
        type: 'boolean',
        description: 'Variable width slides',
        defaultValueHint: false,
      },
      vertical: {
        displayName: 'Vertical',
        type: 'boolean',
        description: 'Vertical slide mode',
        defaultValueHint: false,
      },
    },
    defaultStyles: {
      width: 'stretch',
      maxWidth: '100%',
    },
  });

  // PLASMIC.substituteComponent(CustomSlider, 'Slider');

  // PLASMIC.registerComponent(CustomSlider, {
  //   name: 'CustomSlider',
  //   importPath: 'components/CustomSlider/CustomSlider',
  //   props: {
  //     isLight: 'boolean',
  //     showButton: 'boolean',
  //     buttonTitle: 'string',
  //     onClickNavigateToString: 'string',
  //   },
  // });

  PLASMIC.registerComponent(WebShowcaseComponent, {
    name: 'WebShowcaseComponent',
    importPath: 'components/Showcase/WebShowcaseComponent',
    props: {
      isLight: 'boolean',
    },
  });
  PLASMIC.registerComponent(ShowcaseComponentMobile, {
    name: 'ShowcaseComponentMobile',
    importPath: 'components/Showcase/ShowcaseComponentMobile',
    props: {
      isLight: 'boolean',
    },
  });
  PLASMIC.registerComponent(WebShowcaseComponentMobile, {
    name: 'WebShowcaseComponentMobile',
    importPath: 'components/Showcase/WebShowcaseComponentMobile',
    props: {
      isLight: 'boolean',
    },
  });

  PLASMIC.registerComponent(Header, {
    name: 'Header',
    importPath: 'components/Header/Header',
    props: {
      isDark: 'boolean',
      data: 'object',
    },
  });

  return PLASMIC;
}
