// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: _ABI8mrd-PhKv4
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
import * as sty from "./PlasmicIndustryLuxuryGoods.module.css"; // plasmic-import: _ABI8mrd-PhKv4/css

import industryIconsLuxurygoodspngPm7S1PiDkG9S from "./images/industryIconsLuxurygoodspng.png"; // plasmic-import: Pm7-s1piDK_G9S/picture
import buttonCaretWhitesvg2EkMgwDrEmqPnVl from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: ekMgwDrEmqPnVl/picture
import illustrationBannerLuxuryGoodspngCjmY1Zxzvd1Hp0 from "./images/illustrationBannerLuxuryGoodspng.png"; // plasmic-import: CjmY1zxzvd1HP0/picture
import crookedBg3SvgTQXwed72YVMhi from "./images/crookedBg3Svg.svg"; // plasmic-import: tQXwed72y_vMhi/picture
import luxury1Png2UawypwM1W4VZmj from "./images/luxury1Png2.png"; // plasmic-import: uawypwM1w4VZmj/picture
import webSalesTrainingpngNlb8DfDZx2A6K from "./images/webSalesTrainingpng.png"; // plasmic-import: nlb8DfDZx2A6-k/picture
import crookedBg4SvgEgHr6CfLReKtQ from "./images/crookedBg4Svg.svg"; // plasmic-import: EgHR6cfLRe-ktQ/picture
import webLuxuryProductpngMFnF2S5WtZkGNj from "./images/webLuxuryProductpng.png"; // plasmic-import: mFnF2S5wtZkGNj/picture
import webCustomerRelationspngTipp0ROgXDcM9 from "./images/webCustomerRelationspng.png"; // plasmic-import: Tipp0rOgXDc-m9/picture
import webOnboardingTrainingpngOUqtzJhkIipKw from "./images/webOnboardingTrainingpng.png"; // plasmic-import: OUqtzJhkIip_Kw/picture

export type PlasmicIndustryLuxuryGoods__VariantMembers = {};
export type PlasmicIndustryLuxuryGoods__VariantsArgs = {};
type VariantPropType = keyof PlasmicIndustryLuxuryGoods__VariantsArgs;
export const PlasmicIndustryLuxuryGoods__VariantProps =
  new Array<VariantPropType>();

export type PlasmicIndustryLuxuryGoods__ArgsType = {};
type ArgPropType = keyof PlasmicIndustryLuxuryGoods__ArgsType;
export const PlasmicIndustryLuxuryGoods__ArgProps = new Array<ArgPropType>();

export type PlasmicIndustryLuxuryGoods__OverridesType = {
  root?: p.Flex<"div">;
  reusableHeader?: p.Flex<typeof ReusableHeader>;
  hero?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section1?: p.Flex<"div">;
  section2?: p.Flex<"div">;
  section3?: p.Flex<"div">;
  section4?: p.Flex<"div">;
  section5?: p.Flex<"div">;
  cta?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultIndustryLuxuryGoodsProps {
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

function PlasmicIndustryLuxuryGoods__RenderFunc(props: {
  variants: PlasmicIndustryLuxuryGoods__VariantsArgs;
  args: PlasmicIndustryLuxuryGoods__ArgsType;
  overrides: PlasmicIndustryLuxuryGoods__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox___42Ac8)} />

          <ReusableHeader
            data-plasmic-name={"reusableHeader"}
            data-plasmic-override={overrides.reusableHeader}
            className={classNames("__wab_instance", sty.reusableHeader)}
          />

          <div
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__emeue)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__yXlbC)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zidoe)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___4KCj6)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__eNr51)}
                      displayHeight={"35px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"35px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: industryIconsLuxurygoodspngPm7S1PiDkG9S,
                        fullWidth: 225,
                        fullHeight: 225,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bh0TQ
                      )}
                    >
                      {"COACH FOR LUXURY GOODS"}
                    </div>
                  </p.Stack>

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
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Deliver exceptional customer service and"}
                      </span>
                      <React.Fragment>{"\n"}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#3E7CB1" }}
                      >
                        {"drive sales"}
                      </span>
                    </React.Fragment>
                  </h1>
                </p.Stack>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fGlF
                  )}
                >
                  {
                    "Ensure your employees exceed in selling highly attractive products and help them maintain valuable customer relations."
                  }
                </div>

                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__fhYfi
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
                      sty.text__w5Vua
                    )}
                  >
                    {"BOOK A DEMO"}
                  </div>

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__mjEje)}
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

              <div className={classNames(projectcss.all, sty.column__kZeQw)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__nKi4V)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: illustrationBannerLuxuryGoodspngCjmY1Zxzvd1Hp0,
                    fullWidth: 921,
                    fullHeight: 761,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__jeXx4)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: crookedBg3SvgTQXwed72YVMhi,
              fullWidth: 300,
              fullHeight: 14,
              aspectRatio: 20.869565
            }}
          />

          <div
            data-plasmic-name={"section1"}
            data-plasmic-override={overrides.section1}
            className={classNames(projectcss.all, sty.section1)}
          >
            <div className={classNames(projectcss.all, sty.columns__zaKd)}>
              <div className={classNames(projectcss.all, sty.column__vyxjv)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__h016B
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                    <React.Fragment>
                      <React.Fragment>
                        {
                          "Luxury goods companies have a reputation to uphold - one of sophistication, quality, and exceptional customer service. At the core of delivering this experience is a team of well-trained employees.\n\n"
                        }
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Coach"}
                      </span>
                      <React.Fragment>
                        {
                          " provides comprehensive training platform for employees, that can cover everything from product knowledge to customer service etiquette. \n\nOur goal is to arm your team with the skills and confidence they need to deliver the ultimate luxury experience."
                        }
                      </React.Fragment>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <React.Fragment>
                        {
                          "Luxury goods companies have a reputation to uphold - one of sophistication, quality, and exceptional customer service. At the core of delivering this experience is a team of well-trained employees.\n\n"
                        }
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Coach"}
                      </span>
                      <React.Fragment>
                        {
                          " provides comprehensive training platform for employees, that can cover everything from product knowledge to customer service etiquette. \n\nOur goal is to arm your team with the skills and confidence they need to deliver the ultimate luxury experience."
                        }
                      </React.Fragment>
                    </React.Fragment>
                  )}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tjSpq
                  )}
                >
                  {"HOW CAN THE INDUSTRY BENEFIT FROM USING COACH?"}
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__fIiKy)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__jJsoX)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? ("100%" as const)
                      : ("282px" as const)
                  }
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                  src={{
                    src: luxury1Png2UawypwM1W4VZmj,
                    fullWidth: 860,
                    fullHeight: 603,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </div>

          <div
            data-plasmic-name={"section2"}
            data-plasmic-override={overrides.section2}
            className={classNames(projectcss.all, sty.section2)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__d5Co)}
            >
              <div className={classNames(projectcss.all, sty.column__mnopG)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__ahlG5)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"450px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: webSalesTrainingpngNlb8DfDZx2A6K,
                    fullWidth: 900,
                    fullHeight: 981,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__z5HLf)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lXuaK
                  )}
                >
                  {"Sales Training"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bz90J
                  )}
                >
                  {
                    "Success in the luxury goods industry starts with your employees. They are the face of your brand and their level of knowledge and customer service skills can make all the difference. \n\nThat's why sales training is essential.\n\nMaximize your sales potential with Coach's training approach designed to fit into even the busiest of schedules. Using small, bite-sized learning sessions, your employees can improve their skills and become more successful individuals, without sacrificing valuable work time.\n\n "
                  }
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__lo15Q)}
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

          <div
            data-plasmic-name={"section3"}
            data-plasmic-override={overrides.section3}
            className={classNames(projectcss.all, sty.section3)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__wD6V3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__qt3Yt)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cjrRx
                  )}
                >
                  {"Product Training"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gOimP
                  )}
                >
                  {
                    "Customers expect employees to be experts on the products they're selling, and having that expertise can make all the difference in closing a sale.\n\nWith Coach, your employees will receive comprehensive training on each product, ensuring they are equipped with the correct information and ready to position themselves as experts.\n\nBut we don't stop there. Our platform is designed to regularly refresh employee knowledge, so that they always stay up-to-date with the latest products. It's a quick and efficient way to maintain your competitive edge."
                  }
                </div>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.column___6UUxl)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__mJLu)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"450px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: webLuxuryProductpngMFnF2S5WtZkGNj,
                    fullWidth: 901,
                    fullHeight: 981,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__z6Gja)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: crookedBg3SvgTQXwed72YVMhi,
              fullWidth: 300,
              fullHeight: 14,
              aspectRatio: 20.869565
            }}
          />

          <div
            data-plasmic-name={"section4"}
            data-plasmic-override={overrides.section4}
            className={classNames(projectcss.all, sty.section4)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__f7Ajh)}
            >
              <div className={classNames(projectcss.all, sty.column__oOg5)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__zqIax)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"450px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: webCustomerRelationspngTipp0ROgXDcM9,
                    fullWidth: 900,
                    fullHeight: 981,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__sO0Tt)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bUl5C
                  )}
                >
                  {"Customer Relations Training"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mruQn
                  )}
                >
                  {
                    "Creating a personal connection with customers is crucial for building brand loyalty and driving sales. \n\nCoach helps employees improve their ability to provide positive experiences, strengthening the connection with customers.\n\nOur personalization algorithm ensures that each employee's training experience is tailored to their individual needs. \nThis means that Coach focuses on improving the weak points of each employee, leading to more well-rounded and confident customer interactions."
                  }
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__kbHZ)}
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

          <div
            data-plasmic-name={"section5"}
            data-plasmic-override={overrides.section5}
            className={classNames(projectcss.all, sty.section5)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__xoJvQ)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__mkZdw)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pJz4T
                  )}
                >
                  {"Onboarding"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nLvZh
                  )}
                >
                  {
                    "Getting new hires up to speed quickly is vital for any organization. \n\nCoach uses a series of short, microlearning sessions that can be accessed at any time. This makes it easy for new hires to master your products quickly and efficiently.\n\nNot only does this help new hires hit the ground running, but it also increases overall productivity by allowing for learning during downtime, when there are no customers around."
                  }
                </div>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.column__acfeC)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__gyJiG)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"450px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: webOnboardingTrainingpngOUqtzJhkIipKw,
                    fullWidth: 900,
                    fullHeight: 980,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"cta"}
            data-plasmic-override={overrides.cta}
            hasGap={true}
            className={classNames(projectcss.all, sty.cta)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xGstu)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3B8P
                  )}
                >
                  {"READY TO START?"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nwwJf
                  )}
                >
                  {
                    "Experience the full power of Coach in action, and see why microlearning is your company’s future."
                  }
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__fr0Rm)}
                >
                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__suyiy
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
                        sty.text__fVrHx
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__xP13O)}
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
    "hero",
    "h1",
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "cta",
    "footer"
  ],
  reusableHeader: ["reusableHeader"],
  hero: ["hero", "h1"],
  h1: ["h1"],
  section1: ["section1"],
  section2: ["section2"],
  section3: ["section3"],
  section4: ["section4"],
  section5: ["section5"],
  cta: ["cta"],
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
  section1: "div";
  section2: "div";
  section3: "div";
  section4: "div";
  section5: "div";
  cta: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIndustryLuxuryGoods__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIndustryLuxuryGoods__VariantsArgs;
    args?: PlasmicIndustryLuxuryGoods__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIndustryLuxuryGoods__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIndustryLuxuryGoods__ArgsType,
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
          internalArgPropNames: PlasmicIndustryLuxuryGoods__ArgProps,
          internalVariantPropNames: PlasmicIndustryLuxuryGoods__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicIndustryLuxuryGoods__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIndustryLuxuryGoods";
  } else {
    func.displayName = `PlasmicIndustryLuxuryGoods.${nodeName}`;
  }
  return func;
}

export const PlasmicIndustryLuxuryGoods = Object.assign(
  // Top-level PlasmicIndustryLuxuryGoods renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    section1: makeNodeComponent("section1"),
    section2: makeNodeComponent("section2"),
    section3: makeNodeComponent("section3"),
    section4: makeNodeComponent("section4"),
    section5: makeNodeComponent("section5"),
    cta: makeNodeComponent("cta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicIndustryLuxuryGoods
    internalVariantProps: PlasmicIndustryLuxuryGoods__VariantProps,
    internalArgProps: PlasmicIndustryLuxuryGoods__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicIndustryLuxuryGoods;
/* prettier-ignore-end */
