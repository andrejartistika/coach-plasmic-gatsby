// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: J63B-YSPb58LD2
import * as React from "react";

import {
  Link,
  GatsbyLinkProps as LinkProps,
  navigate as __gatsbyNavigate
} from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import * as sty from "./PlasmicWhoIsItForInstructionalDesigners.module.css"; // plasmic-import: J63B-YSPb58LD2/css

import whoitsforBg1PngWqs1QRj6Ki2Lar from "./images/whoitsforBg1Png.png"; // plasmic-import: WQS1qRj6ki2lar/picture
import buttonCaretWhitesvg2EkMgwDrEmqPnVl from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: ekMgwDrEmqPnVl/picture
import whoitsforBg2PngGwdNg1DiRuOYa4 from "./images/whoitsforBg2Png.png"; // plasmic-import: GWDNg1diRuOYa4/picture
import coachIdssvg2KI349Tcn0QAmz from "./images/coachIdssvg.svg"; // plasmic-import: 2kI349Tcn0qAMZ/picture
import webManagers1PngAHzc2RtCqcJz0P from "./images/webManagers1Png.png"; // plasmic-import: AHzc2RTCqcJZ0P/picture
import webIds2PngUg1BwhSfJnQq8S from "./images/webIds2Png.png"; // plasmic-import: UG1bwhSfJNQq8S/picture
import webIds3Png1Y5Ub2E04Ed6Dt from "./images/webIds3Png.png"; // plasmic-import: 1Y5ub2E04Ed6dt/picture
import webIds4PngWHhWJCt8YmIii from "./images/webIds4Png.png"; // plasmic-import: wHhW_jCT8ymIII/picture
import phoneCutIdspngAudIdOwT2Basf6 from "./images/phoneCutIdspng.png"; // plasmic-import: AUDIdOwT2Basf6/picture

export type PlasmicWhoIsItForInstructionalDesigners__VariantMembers = {};
export type PlasmicWhoIsItForInstructionalDesigners__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicWhoIsItForInstructionalDesigners__VariantsArgs;
export const PlasmicWhoIsItForInstructionalDesigners__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWhoIsItForInstructionalDesigners__ArgsType = {};
type ArgPropType = keyof PlasmicWhoIsItForInstructionalDesigners__ArgsType;
export const PlasmicWhoIsItForInstructionalDesigners__ArgProps =
  new Array<ArgPropType>();

export type PlasmicWhoIsItForInstructionalDesigners__OverridesType = {
  root?: p.Flex<"div">;
  reusableHeader?: p.Flex<typeof ReusableHeader>;
  hero?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section2?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultWhoIsItForInstructionalDesignersProps {
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

function PlasmicWhoIsItForInstructionalDesigners__RenderFunc(props: {
  variants: PlasmicWhoIsItForInstructionalDesigners__VariantsArgs;
  args: PlasmicWhoIsItForInstructionalDesigners__ArgsType;
  overrides: PlasmicWhoIsItForInstructionalDesigners__OverridesType;

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
            <div className={classNames(projectcss.all, sty.columns___3Dshl)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column__nXrn2)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__vtOb3)}
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

              <div className={classNames(projectcss.all, sty.column__evxoh)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__r3Mze)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zi9No)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jB598
                      )}
                    >
                      {"COACH FOR INSTRUCTIONAL DESIGNERS"}
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
                        ? "Build trainings that employees love"
                        : "Build trainings that employees  love"}
                    </h1>
                  </p.Stack>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gwJoz
                    )}
                  >
                    {"The all-in-one tool for learning!"}
                  </div>

                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___5CQtx
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
                        sty.text__eOyly
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__kpDje)}
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
                <div className={classNames(projectcss.all, sty.column__qGGdA)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___3XhiT)}
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
              className={classNames(sty.img__hbDm)}
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
                src: coachIdssvg2KI349Tcn0QAmz,
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
            <div className={classNames(projectcss.all, sty.freeBox__bowM4)} />

            <div className={classNames(projectcss.all, sty.columns__mMHq5)}>
              <div className={classNames(projectcss.all, sty.column__dzQbp)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xHoL
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {"Instructional Designers say it???s their "}
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"new ???right-hand??? tool"}
                    </span>
                    <React.Fragment>{"!"}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__s8G8E)}
            >
              <div className={classNames(projectcss.all, sty.column__xJojs)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uE0SN)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___2Hlth)}
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
                      sty.text___078K1
                    )}
                  >
                    {"Easy-to-use and fast to create trainings"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__j8AMy
                    )}
                  >
                    {
                      "Coach allows you to create training fast without needing extra tech skills. \nJust as easy and simple as using an Excel document. "
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column___0Ceyf)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zT24H)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__zi35X)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webIds2PngUg1BwhSfJnQq8S,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qkMq
                    )}
                  >
                    {"Understand how people respond to your trainings"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gsw5S
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Get feedback from learners to continuously improve your training. Coach???s integrated feedback system allows each employee to leave feedback regards the training you???ve built. The more you know, the better your training will become!"
                      : "Get feedback from learners to continuously improve your training. Coach???s integrated feedback system allows each employee to leave feedback regards the training you???ve built. \nThe more you know, the better your training will become!"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__tyd0C)}
            >
              <div className={classNames(projectcss.all, sty.column___1IHc)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__hCchA)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___1CBh)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webIds3Png1Y5Ub2E04Ed6Dt,
                      fullWidth: 760,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__m0XHf
                    )}
                  >
                    {"Employees will love your training"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cr6El
                    )}
                  >
                    {
                      "Personalization on another level! Coach???s smart system recognizes every employee???s knowledge gap and fills the void with content they actually need!"
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__qV1Ww)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__aon9E)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__u8BZ4)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webIds4PngWHhWJCt8YmIii,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fYy4I
                    )}
                  >
                    {"Knowledgeable employees, happy managers & CEOs"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__f7HRj
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Knowledgeable employees work better - which ultimately means better results and bigger profits. \nAnd who doesn???t love profits? I bet CEOs do ???? "
                      : "Knowledgeable employees work better - which ultimately means better results and bigger profits. \nAnd who doesn???t love profits? \nI bet CEOs do ???? "}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.freeBox__oD96I)} />
            ) : null}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__uVdWz)}>
            <div className={classNames(projectcss.all, sty.freeBox___3FFjK)}>
              <div className={classNames(projectcss.all, sty.columns___8Ham)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__gyQcd)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eugxe
                    )}
                  >
                    {"READY TO START?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vxcNh
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Don???t just take our word.\nExperience the power of Coach yourself, and see the possibilities."
                      : "Get in on the action today, and see why Coach will become your go-to tool for building effective trainings."}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ktdMg)}
                  >
                    <p.Stack
                      as={p.PlasmicLink}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link___3Ptmy
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
                          sty.text___3Sjq2
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__z7OfB)}
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

                <div className={classNames(projectcss.all, sty.column___6B0Eb)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__cotk3)}
                    displayHeight={"100%" as const}
                    displayMaxHeight={"100%" as const}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("180px" as const)
                        : ("220px" as const)
                    }
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={
                      hasVariant(globalVariants, "screen", "tablet")
                        ? ("95%" as const)
                        : ("100%" as const)
                    }
                    loading={"lazy" as const}
                    src={{
                      src: phoneCutIdspngAudIdOwT2Basf6,
                      fullWidth: 430,
                      fullHeight: 743,
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
  PlasmicWhoIsItForInstructionalDesigners__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWhoIsItForInstructionalDesigners__VariantsArgs;
    args?: PlasmicWhoIsItForInstructionalDesigners__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicWhoIsItForInstructionalDesigners__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicWhoIsItForInstructionalDesigners__ArgsType,
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
          internalArgPropNames:
            PlasmicWhoIsItForInstructionalDesigners__ArgProps,
          internalVariantPropNames:
            PlasmicWhoIsItForInstructionalDesigners__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWhoIsItForInstructionalDesigners__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhoIsItForInstructionalDesigners";
  } else {
    func.displayName = `PlasmicWhoIsItForInstructionalDesigners.${nodeName}`;
  }
  return func;
}

export const PlasmicWhoIsItForInstructionalDesigners = Object.assign(
  // Top-level PlasmicWhoIsItForInstructionalDesigners renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    section2: makeNodeComponent("section2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicWhoIsItForInstructionalDesigners
    internalVariantProps: PlasmicWhoIsItForInstructionalDesigners__VariantProps,
    internalArgProps: PlasmicWhoIsItForInstructionalDesigners__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWhoIsItForInstructionalDesigners;
/* prettier-ignore-end */
