// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: Z870Oe6SL-i7WL
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
import * as sty from "./PlasmicWhoIsItForEmployees.module.css"; // plasmic-import: Z870Oe6SL-i7WL/css

import whoitsforBg1PngWqs1QRj6Ki2Lar from "./images/whoitsforBg1Png.png"; // plasmic-import: WQS1qRj6ki2lar/picture
import buttonCaretWhitesvg2EkMgwDrEmqPnVl from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: ekMgwDrEmqPnVl/picture
import whoitsforBg2PngGwdNg1DiRuOYa4 from "./images/whoitsforBg2Png.png"; // plasmic-import: GWDNg1diRuOYa4/picture
import coachEmployeessvgHgVkWna4YYjwz from "./images/coachEmployeessvg.svg"; // plasmic-import: hgVkWna4Y_yjwz/picture
import webEmployees1PngTxtEl0IlElzbZe from "./images/webEmployees1Png.png"; // plasmic-import: txtEl0IlElzbZE/picture
import webEmployees2PngLt5E0Wrf6ElQzz from "./images/webEmployees2Png.png"; // plasmic-import: Lt5E0WRF6ELQzz/picture
import webEmployees3PngFkSlTWjr6Y36He from "./images/webEmployees3Png.png"; // plasmic-import: FkSlTWjr6Y36he/picture
import webEmployees4PngFwdgb8EXj7IqMp from "./images/webEmployees4Png.png"; // plasmic-import: fwdgb8EXj7IQMp/picture
import phoneCutEmployeespngTP5XxT58LrIS from "./images/phoneCutEmployeespng.png"; // plasmic-import: tP5_XxT58lrI_s/picture

export type PlasmicWhoIsItForEmployees__VariantMembers = {};
export type PlasmicWhoIsItForEmployees__VariantsArgs = {};
type VariantPropType = keyof PlasmicWhoIsItForEmployees__VariantsArgs;
export const PlasmicWhoIsItForEmployees__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWhoIsItForEmployees__ArgsType = {};
type ArgPropType = keyof PlasmicWhoIsItForEmployees__ArgsType;
export const PlasmicWhoIsItForEmployees__ArgProps = new Array<ArgPropType>();

export type PlasmicWhoIsItForEmployees__OverridesType = {
  root?: p.Flex<"div">;
  reusableHeader?: p.Flex<typeof ReusableHeader>;
  hero?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section2?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultWhoIsItForEmployeesProps {
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

function PlasmicWhoIsItForEmployees__RenderFunc(props: {
  variants: PlasmicWhoIsItForEmployees__VariantsArgs;
  args: PlasmicWhoIsItForEmployees__ArgsType;
  overrides: PlasmicWhoIsItForEmployees__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox__e6Iel)} />

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
            <div className={classNames(projectcss.all, sty.columns__tvKsL)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column__j8Kju)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__w578C)}
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

              <div className={classNames(projectcss.all, sty.column__mko0S)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__cHx)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__mqtDf)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__i96Zp
                      )}
                    >
                      {"COACH FOR EMPLOYEES"}
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
                        ? "The training tool \nthat helps you learn"
                        : "The training tool that actually helps you learn"}
                    </h1>
                  </p.Stack>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tvGwS
                    )}
                  >
                    {"Try out Coach and make sure your manager knows about it!"}
                  </div>

                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__kq3Bz
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
                        sty.text__gtMi0
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__nVkw)}
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
                <div className={classNames(projectcss.all, sty.column__aliIb)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__kna2A)}
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
              className={classNames(sty.img__fLqc5)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("240px" as const)
                  : ("300px" as const)
              }
              loading={"lazy" as const}
              src={{
                src: coachEmployeessvgHgVkWna4YYjwz,
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
            <div className={classNames(projectcss.all, sty.freeBox__ak9Ud)} />

            <div className={classNames(projectcss.all, sty.columns__zVtkO)}>
              <div className={classNames(projectcss.all, sty.column__ayG)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8Wvfq
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {"With Coach, you’ll notice"}
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {" your knowledge improves"}
                    </span>
                    <React.Fragment>
                      {
                        " right away - all while playing challenging games and having fun!"
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__ba6Sm)}
            >
              <div className={classNames(projectcss.all, sty.column__wncr)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__h3YcE)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__rNXq)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webEmployees1PngTxtEl0IlElzbZe,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sQVzd
                    )}
                  >
                    {"Say ‘bye’ to boring trainings and onboardings"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lqTv
                    )}
                  >
                    {
                      "Coach allows you to go through any type of training in your spare time, at your own pace, coaching you until the most important parts of the training remain in your long-term memory."
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__bd4Qg)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mtLSt)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__aZHno)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webEmployees2PngLt5E0Wrf6ElQzz,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rpIF
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "tablet")
                      ? "The games you can play at work"
                      : "The games you can play\nat work"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dfDha
                    )}
                  >
                    {
                      "Coach gives you 8 different games to play and learn. \nAll of them are interactive and with different challenge levels."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__ew46P)}
            >
              <div className={classNames(projectcss.all, sty.column__jJf7)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jAe5J)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___1P8MU)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webEmployees3PngFkSlTWjr6Y36He,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bkCbb
                    )}
                  >
                    {"Be aware of your knowledge gaps"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__klYyP
                    )}
                  >
                    {
                      "You don’t know what you don’t know until the time comes to use that knowledge in practice. Coach helps you detect your knowledge gaps and pushes you to learn the parts that you don’t know - until you’ve mastered it all!"
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__wrz8U)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__i4Lwu)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__efp2I)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: webEmployees4PngFwdgb8EXj7IqMp,
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__abDkf
                    )}
                  >
                    {"See where you knowledge stand with your knowledge"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__w5WDu
                    )}
                  >
                    {
                      "A little competition forces us to do better. Now you are able to see how your knowledge progressed over time and where you stand among your colleagues. \nPS: if you are the best in the biz, Coach makes sure the management notices this."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.freeBox___5KuuG)}
              />
            ) : null}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___9Bjmw)}>
            <div className={classNames(projectcss.all, sty.freeBox__lNpPz)}>
              <div className={classNames(projectcss.all, sty.columns__guf2I)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__oSxxt)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__puup1
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "tablet")
                      ? "READY TO START?"
                      : "READY TO START?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vuTwL
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Don’t just take our word.\nExperience the power of Coach yourself, and see the possibilities."
                      : hasVariant(globalVariants, "screen", "tablet")
                      ? "Don’t just take our word for it - Experience the power of Coach yourself, and see the possibilities."
                      : "Don’t just take our word for it -\nExperience the power of Coach\nyourself, and see the possibilities."}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__defBu)}
                  >
                    <p.Stack
                      as={p.PlasmicLink}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__q69KC
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
                          sty.text__kjYce
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___6N4VL)}
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

                <div className={classNames(projectcss.all, sty.column___94Iz)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__zxeq1)}
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
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("95%" as const)
                        : hasVariant(globalVariants, "screen", "tablet")
                        ? ("95%" as const)
                        : ("100%" as const)
                    }
                    loading={"lazy" as const}
                    src={{
                      src: phoneCutEmployeespngTP5XxT58LrIS,
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
  PlasmicWhoIsItForEmployees__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWhoIsItForEmployees__VariantsArgs;
    args?: PlasmicWhoIsItForEmployees__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWhoIsItForEmployees__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWhoIsItForEmployees__ArgsType,
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
          internalArgPropNames: PlasmicWhoIsItForEmployees__ArgProps,
          internalVariantPropNames: PlasmicWhoIsItForEmployees__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWhoIsItForEmployees__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhoIsItForEmployees";
  } else {
    func.displayName = `PlasmicWhoIsItForEmployees.${nodeName}`;
  }
  return func;
}

export const PlasmicWhoIsItForEmployees = Object.assign(
  // Top-level PlasmicWhoIsItForEmployees renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    section2: makeNodeComponent("section2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicWhoIsItForEmployees
    internalVariantProps: PlasmicWhoIsItForEmployees__VariantProps,
    internalArgProps: PlasmicWhoIsItForEmployees__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWhoIsItForEmployees;
/* prettier-ignore-end */
