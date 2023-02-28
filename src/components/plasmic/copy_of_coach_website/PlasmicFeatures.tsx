// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: VMKJFGTP8r3JmK
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
import { ShowcaseComponentMobile } from "components/Showcase/ShowcaseComponentMobile"; // plasmic-import: WjHtn8WfzWpfmE/codeComponent
import { ShowcaseComponent } from "components/Showcase/ShowcaseComponent"; // plasmic-import: 3rNeoH1I_fqFT8/codeComponent
import { WebShowcaseComponent } from "components/Showcase/WebShowcaseComponent"; // plasmic-import: 8XXmua_XT0_ig3/codeComponent
import { WebShowcaseComponentMobile } from "components/Showcase/WebShowcaseComponentMobile"; // plasmic-import: lSx_UPMDB8otCX/codeComponent
import Footer from "../../Footer"; // plasmic-import: yHbgPlkcGh0BHH/component

import { useScreenVariants as useScreenVariantsgyi9F2CGadx1Xj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GYI9F2cGadx1XJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_coach_website.module.css"; // plasmic-import: n7JM2c9rKsJq2MtgHpQAyH/projectcss
import * as sty from "./PlasmicFeatures.module.css"; // plasmic-import: VMKJFGTP8r3JmK/css

import buttonCaretWhitesvg2EkMgwDrEmqPnVl from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: ekMgwDrEmqPnVl/picture
import featuresbanner1Png2HwmDoD4M1Vp90 from "./images/featuresbanner1Png2.png"; // plasmic-import: HWMDoD4m1-Vp90/picture
import crookedBg4SvgEgHr6CfLReKtQ from "./images/crookedBg4Svg.svg"; // plasmic-import: EgHR6cfLRe-ktQ/picture

export type PlasmicFeatures__VariantMembers = {};
export type PlasmicFeatures__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatures__VariantsArgs;
export const PlasmicFeatures__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatures__ArgsType = {};
type ArgPropType = keyof PlasmicFeatures__ArgsType;
export const PlasmicFeatures__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatures__OverridesType = {
  root?: p.Flex<"div">;
  reusableHeader?: p.Flex<typeof ReusableHeader>;
  section1?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  copy?: p.Flex<"div">;
  showcaseComponentMobile?: p.Flex<typeof ShowcaseComponentMobile>;
  showcaseComponent?: p.Flex<typeof ShowcaseComponent>;
  webShowcaseComponent?: p.Flex<typeof WebShowcaseComponent>;
  webShowcaseComponentMobile?: p.Flex<typeof WebShowcaseComponentMobile>;
  cta2?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultFeaturesProps {
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

function PlasmicFeatures__RenderFunc(props: {
  variants: PlasmicFeatures__VariantsArgs;
  args: PlasmicFeatures__ArgsType;
  overrides: PlasmicFeatures__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox__sBihk)} />

          <ReusableHeader
            data-plasmic-name={"reusableHeader"}
            data-plasmic-override={overrides.reusableHeader}
            className={classNames("__wab_instance", sty.reusableHeader)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"section1"}
            data-plasmic-override={overrides.section1}
            hasGap={true}
            className={classNames(projectcss.all, sty.section1)}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column___6HbPs)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__wVeRv)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"copy"}
                    data-plasmic-override={overrides.copy}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.copy)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__jDwK)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__aKztx
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          {
                            <h1
                              className={classNames(
                                projectcss.all,
                                projectcss.h1,
                                projectcss.__wab_text,
                                sty.h1__wNe56
                              )}
                            >
                              <React.Fragment>
                                <React.Fragment>
                                  {
                                    "Effortlessly train your employees with our "
                                  }
                                </React.Fragment>
                                <span
                                  className={
                                    "plasmic_default__all plasmic_default__span"
                                  }
                                  style={{ color: "#3E7CB1" }}
                                >
                                  {"powerful platform"}
                                </span>
                              </React.Fragment>
                            </h1>
                          }
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qDLmn
                        )}
                      >
                        {
                          "Everything you need to create and deploy effective training for your employees."
                        }
                      </div>
                    </p.Stack>

                    <p.Stack
                      as={p.PlasmicLink}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__xbLkw
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
                          sty.text___88J05
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__z8AFk)}
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
              </div>

              <div className={classNames(projectcss.all, sty.column__eSwOw)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__mywyg)}
                  />
                ) : null}

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__wlQXg)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? ("75%" as const)
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? ("85%" as const)
                      : ("84%" as const)
                  }
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: featuresbanner1Png2HwmDoD4M1Vp90,
                    fullWidth: 1437,
                    fullHeight: 1411,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6D8PY)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___8LcQe)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yOG7)}
                >
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__zCmGc
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#000000" }}
                        >
                          {"App - Main features"}
                        </span>
                      </React.Fragment>
                    </h1>
                  ) : null}

                  <div
                    className={classNames(projectcss.all, sty.freeBox__er8Yu)}
                  />
                </p.Stack>

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__cxTc)}
                  >
                    <ShowcaseComponentMobile
                      data-plasmic-name={"showcaseComponentMobile"}
                      data-plasmic-override={overrides.showcaseComponentMobile}
                      className={classNames(
                        "__wab_instance",
                        sty.showcaseComponentMobile
                      )}
                    />
                  </div>
                ) : null}
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___4LxVm)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__vyuJl)}
                    >
                      <ShowcaseComponent
                        data-plasmic-name={"showcaseComponent"}
                        data-plasmic-override={overrides.showcaseComponent}
                        className={classNames(
                          "__wab_instance",
                          sty.showcaseComponent
                        )}
                        isLight={true}
                      />
                    </div>
                  </div>
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__iqDz4)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: crookedBg4SvgEgHr6CfLReKtQ,
              fullWidth: 300,
              fullHeight: 14,
              aspectRatio: 20.869565
            }}
          />

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nqfKk)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___6YDQo)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1___2QoMt
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Admin Panel - Main features"}
                      </span>
                    </React.Fragment>
                  </h1>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__fw1U7)}
                  />
                </p.Stack>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__fcI2R)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__sOwq)}
                  >
                    <WebShowcaseComponent
                      data-plasmic-name={"webShowcaseComponent"}
                      data-plasmic-override={overrides.webShowcaseComponent}
                      className={classNames(
                        "__wab_instance",
                        sty.webShowcaseComponent
                      )}
                      isLight={true}
                    />
                  </div>
                </div>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__gmAwv)}>
                  <WebShowcaseComponentMobile
                    data-plasmic-name={"webShowcaseComponentMobile"}
                    data-plasmic-override={overrides.webShowcaseComponentMobile}
                    className={classNames(
                      "__wab_instance",
                      sty.webShowcaseComponentMobile
                    )}
                    isLight={false}
                  />
                </div>
              ) : null}
            </p.Stack>
          ) : null}

          <p.Stack
            as={"div"}
            data-plasmic-name={"cta2"}
            data-plasmic-override={overrides.cta2}
            hasGap={true}
            className={classNames(projectcss.all, sty.cta2)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yaNOm)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2FyVm
                  )}
                >
                  {"READY TO START?"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6FLK
                  )}
                >
                  {
                    "Experience the full power of Coach in action, and see why microlearning is your company’s future."
                  }
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__bhyb3)}
                >
                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__x15Fc
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
                        sty.text__i3Gxs
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__dxpTs)}
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
            ) : null}
          </p.Stack>

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
  root: [
    "root",
    "reusableHeader",
    "section1",
    "columns",
    "copy",
    "showcaseComponentMobile",
    "showcaseComponent",
    "webShowcaseComponent",
    "webShowcaseComponentMobile",
    "cta2",
    "footer"
  ],
  reusableHeader: ["reusableHeader"],
  section1: ["section1", "columns", "copy"],
  columns: ["columns", "copy"],
  copy: ["copy"],
  showcaseComponentMobile: ["showcaseComponentMobile"],
  showcaseComponent: ["showcaseComponent"],
  webShowcaseComponent: ["webShowcaseComponent"],
  webShowcaseComponentMobile: ["webShowcaseComponentMobile"],
  cta2: ["cta2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  reusableHeader: typeof ReusableHeader;
  section1: "div";
  columns: "div";
  copy: "div";
  showcaseComponentMobile: typeof ShowcaseComponentMobile;
  showcaseComponent: typeof ShowcaseComponent;
  webShowcaseComponent: typeof WebShowcaseComponent;
  webShowcaseComponentMobile: typeof WebShowcaseComponentMobile;
  cta2: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatures__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatures__VariantsArgs;
    args?: PlasmicFeatures__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeatures__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFeatures__ArgsType,
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
          internalArgPropNames: PlasmicFeatures__ArgProps,
          internalVariantPropNames: PlasmicFeatures__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    section1: makeNodeComponent("section1"),
    columns: makeNodeComponent("columns"),
    copy: makeNodeComponent("copy"),
    showcaseComponentMobile: makeNodeComponent("showcaseComponentMobile"),
    showcaseComponent: makeNodeComponent("showcaseComponent"),
    webShowcaseComponent: makeNodeComponent("webShowcaseComponent"),
    webShowcaseComponentMobile: makeNodeComponent("webShowcaseComponentMobile"),
    cta2: makeNodeComponent("cta2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */
