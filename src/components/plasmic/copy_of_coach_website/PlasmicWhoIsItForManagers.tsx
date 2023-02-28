// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: J30BXrN9pl97MP
import * as React from "react";

import {
  Link,
  GatsbyLinkProps as LinkProps,
  navigate as __gatsbyNavigate
} from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ReusableHeader from "../../ReusableHeader"; // plasmic-import: aZG1o9ts_1BbAO/component
import Footer from "../../Footer"; // plasmic-import: yHbgPlkcGh0BHH/component

import { useScreenVariants as useScreenVariantsgyi9F2CGadx1Xj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GYI9F2cGadx1XJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_coach_website.module.css"; // plasmic-import: n7JM2c9rKsJq2MtgHpQAyH/projectcss
import * as sty from "./PlasmicWhoIsItForManagers.module.css"; // plasmic-import: J30BXrN9pl97MP/css

import whoitsforBg1PngWqs1QRj6Ki2Lar from "./images/whoitsforBg1Png.png"; // plasmic-import: WQS1qRj6ki2lar/picture
import buttonCaretWhitesvg2EkMgwDrEmqPnVl from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: ekMgwDrEmqPnVl/picture
import whoitsforBg2PngGwdNg1DiRuOYa4 from "./images/whoitsforBg2Png.png"; // plasmic-import: GWDNg1diRuOYa4/picture
import coachManagerssvgScQ7M8YNbWgn81 from "./images/coachManagerssvg.svg"; // plasmic-import: ScQ7M8yNBWgn81/picture
import webManagers1PngAHzc2RtCqcJz0P from "./images/webManagers1Png.png"; // plasmic-import: AHzc2RTCqcJZ0P/picture
import webManagers2Png6IlGaHuHwTfnEr from "./images/webManagers2Png.png"; // plasmic-import: 6ILGaHuHWTfnEr/picture
import webManagers3PngGcZafQCeBeh32Y from "./images/webManagers3Png.png"; // plasmic-import: GcZafQCeBEH32Y/picture
import webManagers4PngItSLn7Okq9D1G from "./images/webManagers4Png.png"; // plasmic-import: It-sLN7okq9d1G/picture
import phoneCutManagerspng93BXjvRmik1E6 from "./images/phoneCutManagerspng.png"; // plasmic-import: 93_BXjvRMIK1E6/picture

export type PlasmicWhoIsItForManagers__VariantMembers = {};
export type PlasmicWhoIsItForManagers__VariantsArgs = {};
type VariantPropType = keyof PlasmicWhoIsItForManagers__VariantsArgs;
export const PlasmicWhoIsItForManagers__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWhoIsItForManagers__ArgsType = {};
type ArgPropType = keyof PlasmicWhoIsItForManagers__ArgsType;
export const PlasmicWhoIsItForManagers__ArgProps = new Array<ArgPropType>();

export type PlasmicWhoIsItForManagers__OverridesType = {
  root?: p.Flex<"div">;
  reusableHeader?: p.Flex<typeof ReusableHeader>;
  hero?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section2?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultWhoIsItForManagersProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

export function Head() {
  return <></>;
}

function PlasmicWhoIsItForManagers__RenderFunc(props: {
  variants: PlasmicWhoIsItForManagers__VariantsArgs;
  args: PlasmicWhoIsItForManagers__ArgsType;
  overrides: PlasmicWhoIsItForManagers__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgyi9F2CGadx1Xj()
  });

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__anqRx)} />

          <ReusableHeader
            data-plasmic-name={"reusableHeader"}
            data-plasmic-override={overrides.reusableHeader}
            className={classNames("__wab_instance", sty.reusableHeader)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            hasGap={true}
            className={classNames(projectcss.all, sty.hero)}
          >
            <div className={classNames(projectcss.all, sty.columns__kt20C)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column__vyJmD)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__oh0Pl)}
                    displayHeight={"280px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: whoitsforBg1PngWqs1QRj6Ki2Lar,
                      fullWidth: 507,
                      fullHeight: 667,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              ) : null}

              <div className={classNames(projectcss.all, sty.column__hlXgf)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yjv3T)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__op8Ne)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__chdXz
                      )}
                    >
                      {"COACH FOR MANAGERS"}
                    </div>

                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "Provide employees the training they deserve"
                        : "Provide employees the training they deserve"}
                    </h1>
                  </p.Stack>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ecUgo
                    )}
                  >
                    {
                      "Keep employees motivated\nand get better evaluation results!"
                    }
                  </div>

                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__otBkt
                    )}
                    component={Link}
                    href={"https://calendly.com/kalina-t/30min" as const}
                    platform={"gatsby"}
                    target={"_blank" as const}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dAgp3
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__pRJz)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"15px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: buttonCaretWhitesvg2EkMgwDrEmqPnVl,
                        fullWidth: 108,
                        fullHeight: 150,
                        aspectRatio: 0.722222
                      }}
                    />
                  </p.Stack>
                </p.Stack>
              </div>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column__tBaXz)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__urLuU)}
                    displayHeight={"280px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: whoitsforBg2PngGwdNg1DiRuOYa4,
                      fullWidth: 482,
                      fullHeight: 667,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              ) : null}
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__zqjuY)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("240px" as const)
                  : ("310px" as const)
              }
              loading={"lazy" as const}
              src={{
                src: coachManagerssvgScQ7M8YNbWgn81,
                fullWidth: 203,
                fullHeight: 150,
                aspectRatio: 1.354839
              }}
            />
          </p.Stack>

          <div
            data-plasmic-name={"section2"}
            data-plasmic-override={overrides.section2}
            className={classNames(projectcss.all, sty.section2)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__e5Kuo)} />

            <div className={classNames(projectcss.all, sty.columns__pRqHy)}>
              <div className={classNames(projectcss.all, sty.column___78DYw)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__r7W3W
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"Coach provides "}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"insights"}
                    </span>
                    <React.Fragment>
                      {
                        " into the knowledge your employees get from your trainings, and helps you "
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"improve"}
                    </span>
                    <React.Fragment>{" them!"}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns___8V2S)}
            >
              <div className={classNames(projectcss.all, sty.column__neLsF)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__a3ZJr)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___3Fi1B)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webManagers1PngAHzc2RtCqcJz0P,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rcxjk
                    )}
                  >
                    {"Easily save time on training creation"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__n8LiI
                    )}
                  >
                    {
                      "Coach is here to save your time - so you can spend it where you need it the most. "
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__iGbE4)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zd9D)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__hKDeR)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webManagers2Png6IlGaHuHwTfnEr,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nifcU
                    )}
                  >
                    {"Stay aware of employees’\nknowledge gaps"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pGgf
                    )}
                  >
                    {
                      "What you think your employees have learned from their training, isn't what it actually looks like. To really understand the knowledge acquired, Coach does the hard work for you."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__v9PrZ)}
            >
              <div className={classNames(projectcss.all, sty.column___2LRwa)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__aMhfQ)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qmevK)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webManagers3PngGcZafQCeBeh32Y,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ez84F
                    )}
                  >
                    {"Keep employees motivated and engaged "}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__htvNy
                    )}
                  >
                    {
                      "Building a fun working environment that is also productive is a challenge. A fun one, though! Coach lets you tap into the power of play and stimulate employees’ learning retention to improve company culture."
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__o9Em)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__f1Ol4)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___8LwAk)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webManagers4PngItSLn7Okq9D1G,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__o5Cal
                    )}
                  >
                    {"View insights and reports like flashlights"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2RoY
                    )}
                  >
                    {
                      "Create beautiful custom reports that executives don't need a Ph.D. to understand. Analyze your training reports and assign additional lessons to employees with knowledge gaps. Because knowledgeable teams make happy clients."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.freeBox___6LmCu)}
              />
            ) : null}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__miAkp)}>
            <div className={classNames(projectcss.all, sty.freeBox__v801I)}>
              <div className={classNames(projectcss.all, sty.columns__pfwVd)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__sgw9H)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bCXy
                    )}
                  >
                    {"READY TO START?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kmck8
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Don’t just take our word.\nExperience the power of Coach yourself, and see the possibilities."
                      : "Let's take the next step and see why Coach is the best training tool that your team will use."}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nFx1R)}
                  >
                    <p.Stack
                      as={p.PlasmicLink}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__v7Oec
                      )}
                      component={Link}
                      href={"https://calendly.com/kalina-t/30min" as const}
                      platform={"gatsby"}
                      target={"_blank" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__f437
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___46TbW)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"15px" as const}
                        loading={"lazy" as const}
                        src={{
                          src: buttonCaretWhitesvg2EkMgwDrEmqPnVl,
                          fullWidth: 108,
                          fullHeight: 150,
                          aspectRatio: 0.722222
                        }}
                      />
                    </p.Stack>
                  </p.Stack>
                </p.Stack>

                <div className={classNames(projectcss.all, sty.column__tfQo6)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__wu6Rx)}
                    displayHeight={"100%" as const}
                    displayMaxHeight={"100%" as const}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("180px" as const)
                        : ("220px" as const)
                    }
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: phoneCutManagerspng93BXjvRmik1E6,
                      fullWidth: 430,
                      fullHeight: 742,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "reusableHeader", "hero", "h1", "section2", "footer"],
  reusableHeader: ["reusableHeader"],
  hero: ["hero", "h1"],
  h1: ["h1"],
  section2: ["section2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  reusableHeader: typeof ReusableHeader;
  hero: "div";
  h1: "h1";
  section2: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWhoIsItForManagers__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWhoIsItForManagers__VariantsArgs;
    args?: PlasmicWhoIsItForManagers__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWhoIsItForManagers__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWhoIsItForManagers__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWhoIsItForManagers__ArgProps,
          internalVariantPropNames: PlasmicWhoIsItForManagers__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWhoIsItForManagers__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhoIsItForManagers";
  } else {
    func.displayName = `PlasmicWhoIsItForManagers.${nodeName}`;
  }
  return func;
}

export const PlasmicWhoIsItForManagers = Object.assign(
  // Top-level PlasmicWhoIsItForManagers renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    section2: makeNodeComponent("section2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicWhoIsItForManagers
    internalVariantProps: PlasmicWhoIsItForManagers__VariantProps,
    internalArgProps: PlasmicWhoIsItForManagers__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWhoIsItForManagers;
/* prettier-ignore-end */
