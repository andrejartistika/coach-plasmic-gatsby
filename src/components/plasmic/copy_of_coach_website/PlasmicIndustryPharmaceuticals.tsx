// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: tCH5JDZ8ssllzE
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
import * as sty from "./PlasmicIndustryPharmaceuticals.module.css"; // plasmic-import: tCH5JDZ8ssllzE/css

import industryIconsArtboard31SvgU6FzClXryo0MAq from "./images/industryIconsArtboard31Svg.svg"; // plasmic-import: U6fzCLXryo0mAq/picture
import buttonCaretWhitesvg2EkMgwDrEmqPnVl from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: ekMgwDrEmqPnVl/picture
import illustrationBannerPharmapngSBeoAIw0Y4WDq from "./images/illustrationBannerPharmapng.png"; // plasmic-import: sBeoAIw0y4w_Dq/picture
import crookedBg3SvgTQXwed72YVMhi from "./images/crookedBg3Svg.svg"; // plasmic-import: tQXwed72y_vMhi/picture
import pharma1Png2XvgBWhlEot0S from "./images/pharma1Png2.png"; // plasmic-import: _XvgBWhlEOT0-S/picture
import webPharmaProductTrainingpngMCczJKcGmsFgJn from "./images/webPharmaProductTrainingpng.png"; // plasmic-import: mCczJKcGmsFgJN/picture
import crookedBg4SvgEgHr6CfLReKtQ from "./images/crookedBg4Svg.svg"; // plasmic-import: EgHR6cfLRe-ktQ/picture
import webPharmaSafetypngY86P5GVYmsLxO from "./images/webPharmaSafetypng.png"; // plasmic-import: Y86p5G-vYMSLxO/picture
import webOnboardingTrainingpngOUqtzJhkIipKw from "./images/webOnboardingTrainingpng.png"; // plasmic-import: OUqtzJhkIip_Kw/picture
import webPharmaResearchpngXQrJAlYhBjSmv1 from "./images/webPharmaResearchpng.png"; // plasmic-import: xQrJAlYHBjSmv1/picture

export type PlasmicIndustryPharmaceuticals__VariantMembers = {};
export type PlasmicIndustryPharmaceuticals__VariantsArgs = {};
type VariantPropType = keyof PlasmicIndustryPharmaceuticals__VariantsArgs;
export const PlasmicIndustryPharmaceuticals__VariantProps =
  new Array<VariantPropType>();

export type PlasmicIndustryPharmaceuticals__ArgsType = {};
type ArgPropType = keyof PlasmicIndustryPharmaceuticals__ArgsType;
export const PlasmicIndustryPharmaceuticals__ArgProps =
  new Array<ArgPropType>();

export type PlasmicIndustryPharmaceuticals__OverridesType = {
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

export interface DefaultIndustryPharmaceuticalsProps {
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

function PlasmicIndustryPharmaceuticals__RenderFunc(props: {
  variants: PlasmicIndustryPharmaceuticals__VariantsArgs;
  args: PlasmicIndustryPharmaceuticals__ArgsType;
  overrides: PlasmicIndustryPharmaceuticals__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox___8OaZb)} />

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
              className={classNames(projectcss.all, sty.columns___8PGhE)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__wFgo3)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___2CB5)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__rLvBf)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___8UwXm)}
                      displayHeight={"35px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"35px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: industryIconsArtboard31SvgU6FzClXryo0MAq,
                        fullWidth: 150,
                        fullHeight: 150,
                        aspectRatio: 1
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pQCu1
                      )}
                    >
                      {"COACH FOR PHARMA COMPANIES"}
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
                        {"Stay up to date with "}
                      </span>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#3E7CB1" }}
                      >
                        {"market demands"}
                      </span>
                    </React.Fragment>
                  </h1>
                </p.Stack>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7Mnyj
                  )}
                >
                  {
                    "Effortlessly train your sales reps to be up-to-date with FDA requirements, market demands, new products and legal drug guidelines at all times."
                  }
                </div>

                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__xn99P
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
                      sty.text__bbk
                    )}
                  >
                    {"BOOK A DEMO"}
                  </div>

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__eyPpU)}
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

              <div className={classNames(projectcss.all, sty.column__l5CuS)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__zmJCn)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: illustrationBannerPharmapngSBeoAIw0Y4WDq,
                    fullWidth: 921,
                    fullHeight: 760,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__fsz6D)}
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
            <div className={classNames(projectcss.all, sty.columns__bb50T)}>
              <div className={classNames(projectcss.all, sty.column__kU8R5)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bx3Ws
                  )}
                >
                  {
                    "Ensuring the safety of your patients and the quality of your products is a top priority. \n\nCoach is a comprehensive training platform that helps your employees master the knowledge, skills and safety protocols necessary to excel in their roles. \n\nImprove safety, reduce the risk of compliance issues, and get new hires up to speed faster - with Coach, your company is in good hands."
                  }
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bdIO
                  )}
                >
                  {"HOW CAN THE INDUSTRY BENEFIT FROM USING COACH?"}
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__d6MA5)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__b63Al)}
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
                    src: pharma1Png2XvgBWhlEot0S,
                    fullWidth: 860,
                    fullHeight: 602,
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
              className={classNames(projectcss.all, sty.columns__hqmUh)}
            >
              <div className={classNames(projectcss.all, sty.column__in01G)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__lqPuh)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"450px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: webPharmaProductTrainingpngMCczJKcGmsFgJn,
                    fullWidth: 901,
                    fullHeight: 980,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__r4ZX)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mj70D
                  )}
                >
                  {"Product Training Programs"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qGjnX
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {
                        "Pharmaceutical sales reps play a crucial role in connecting your company with physicians. It's essential to equip them with the latest and most accurate product knowledge to stay compliant with FDA regulations, market demands, and legal guidelines.\n\nWith "
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
                        ", you can create and deliver training programs that keep your team's product knowledge up-to-date. \n\nThe easy-to-use content creation tool lets you design lessons for specific products and deploy them to your team with ease. Tailor your training programs to suit the needs of individual positions, departments, or your entire company."
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__iVu6F)}
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
              className={classNames(projectcss.all, sty.columns__t2RKe)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__hyVuo)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8QHfb
                  )}
                >
                  {"Workplace Safety and\nMachine Handling"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vadM7
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {
                        "Workplace safety training gets quickly forgotten and it is not being refreshed enough for both new and current employees. (It is scientifically proven that 70% of the knowledge we learn, gets forgotten after a week).\n\n"
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
                        "'s scientifically proven methods increases knowledge retention makes sure that safety training is remembered at all times. \n\nEveryone will be up to date with the latest safety standards, and their knowledge will be refreshed by spending short amounts of time playing fun games!"
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.column__t6Sz6)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__idpQi)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"450px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: webPharmaSafetypngY86P5GVYmsLxO,
                    fullWidth: 900,
                    fullHeight: 980,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__qm6Vr)}
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
              className={classNames(projectcss.all, sty.columns__ddBq6)}
            >
              <div className={classNames(projectcss.all, sty.column__dp1EJ)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__igg9E)}
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

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__njyXx)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cqkrh
                  )}
                >
                  {"Employee Onboarding"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bakh4
                  )}
                >
                  {
                    "Getting new hires up to speed quickly is vital for any organization. \n\nEase the learning curve with a series of short microlearning training sessions that can be accessed at any time, and help new hires master your product catalog in no time.\n\nIncrease productivity by learning when there are no customers around.\n"
                  }
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__kKydw)}
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
            <div className={classNames(projectcss.all, sty.columns__nq4N)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__byCqv)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nkmb
                  )}
                >
                  {"Research and Development \nTraining"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__krSyX
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {
                        "Employees working in the R&D department need to be knowledgeable about the latest drug therapies, how to develop new drugs and how to bring them through clinical trials.\n\n\n\nWith "
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
                        ", your R&D employees will receive targeted, relevant, and up-to-date training that will boost their performance and drive innovation. \n\nWith the ability to constantly update training programs and the short and engaging microlearning lessons, your employees will be well equipped to tackle the challenges of drug development and clinical trials."
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.column__zhNb2)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rKaV1)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"450px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: webPharmaResearchpngXQrJAlYhBjSmv1,
                    fullWidth: 901,
                    fullHeight: 980,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
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
                className={classNames(projectcss.all, sty.freeBox__voKh0)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__b8VO
                  )}
                >
                  {"READY TO START?"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qg6Pc
                  )}
                >
                  {
                    "Experience the full power of Coach in action, and see why microlearning is your company’s future."
                  }
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___0Ytsf)}
                >
                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__nx2Jz
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
                        sty.text__h5Be5
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__kQibY)}
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
  PlasmicIndustryPharmaceuticals__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIndustryPharmaceuticals__VariantsArgs;
    args?: PlasmicIndustryPharmaceuticals__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIndustryPharmaceuticals__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIndustryPharmaceuticals__ArgsType,
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
          internalArgPropNames: PlasmicIndustryPharmaceuticals__ArgProps,
          internalVariantPropNames: PlasmicIndustryPharmaceuticals__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicIndustryPharmaceuticals__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIndustryPharmaceuticals";
  } else {
    func.displayName = `PlasmicIndustryPharmaceuticals.${nodeName}`;
  }
  return func;
}

export const PlasmicIndustryPharmaceuticals = Object.assign(
  // Top-level PlasmicIndustryPharmaceuticals renders the root element
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

    // Metadata about props expected for PlasmicIndustryPharmaceuticals
    internalVariantProps: PlasmicIndustryPharmaceuticals__VariantProps,
    internalArgProps: PlasmicIndustryPharmaceuticals__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicIndustryPharmaceuticals;
/* prettier-ignore-end */
