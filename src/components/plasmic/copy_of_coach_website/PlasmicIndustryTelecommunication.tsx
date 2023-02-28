// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: rrddfpKnfRYK22
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
import * as sty from "./PlasmicIndustryTelecommunication.module.css"; // plasmic-import: rrddfpKnfRYK22/css

import industryIconsTelecompngC6ENif3LkciWOf from "./images/industryIconsTelecompng.png"; // plasmic-import: c6eNif3LkciWOf/picture
import buttonCaretWhitesvg2EkMgwDrEmqPnVl from "./images/buttonCaretWhitesvg2.svg"; // plasmic-import: ekMgwDrEmqPnVl/picture
import illustrationBannerTelecompngBP6CzZj82A0R from "./images/illustrationBannerTelecompng.png"; // plasmic-import: bP6CZZj82a_0R-/picture
import crookedBg3SvgTQXwed72YVMhi from "./images/crookedBg3Svg.svg"; // plasmic-import: tQXwed72y_vMhi/picture
import telecom1Png2ZYqus3G1QFgpb from "./images/telecom1Png2.png"; // plasmic-import: Z_Yqus3g1qFGPB/picture
import webSalesTrainingpngNlb8DfDZx2A6K from "./images/webSalesTrainingpng.png"; // plasmic-import: nlb8DfDZx2A6-k/picture
import crookedBg4SvgEgHr6CfLReKtQ from "./images/crookedBg4Svg.svg"; // plasmic-import: EgHR6cfLRe-ktQ/picture
import webTelecomProductpngUzk7YKwGWzKmxZ from "./images/webTelecomProductpng.png"; // plasmic-import: uzk7yKwGWzKmxZ/picture
import webCustomerRelationspngTipp0ROgXDcM9 from "./images/webCustomerRelationspng.png"; // plasmic-import: Tipp0rOgXDc-m9/picture
import webOnboardingTrainingpngOUqtzJhkIipKw from "./images/webOnboardingTrainingpng.png"; // plasmic-import: OUqtzJhkIip_Kw/picture

export type PlasmicIndustryTelecommunication__VariantMembers = {};
export type PlasmicIndustryTelecommunication__VariantsArgs = {};
type VariantPropType = keyof PlasmicIndustryTelecommunication__VariantsArgs;
export const PlasmicIndustryTelecommunication__VariantProps =
  new Array<VariantPropType>();

export type PlasmicIndustryTelecommunication__ArgsType = {};
type ArgPropType = keyof PlasmicIndustryTelecommunication__ArgsType;
export const PlasmicIndustryTelecommunication__ArgProps =
  new Array<ArgPropType>();

export type PlasmicIndustryTelecommunication__OverridesType = {
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

export interface DefaultIndustryTelecommunicationProps {
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

function PlasmicIndustryTelecommunication__RenderFunc(props: {
  variants: PlasmicIndustryTelecommunication__VariantsArgs;
  args: PlasmicIndustryTelecommunication__ArgsType;
  overrides: PlasmicIndustryTelecommunication__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox__rCCd)} />

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
              className={classNames(projectcss.all, sty.columns__osWpt)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__dW4Yz)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___8Sj2K)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___5Oxim)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__jwple)}
                      displayHeight={"35px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"35px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: industryIconsTelecompngC6ENif3LkciWOf,
                        fullWidth: 225,
                        fullHeight: 225,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yvEvu
                      )}
                    >
                      {"COACH FOR TELECOM"}
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
                        {"Provide exceptional "}
                      </span>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#3E7CB1" }}
                      >
                        {"customer service"}
                      </span>
                    </React.Fragment>
                  </h1>
                </p.Stack>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vyUnu
                  )}
                >
                  {
                    "Maximize customer satisfaction with trained and skilled Customer Support Representatives!"
                  }
                </div>

                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__jVq8S
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
                      sty.text__bcl6
                    )}
                  >
                    {"BOOK A DEMO"}
                  </div>

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___7OkKp)}
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

              <div className={classNames(projectcss.all, sty.column__azYk5)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__h22U)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: illustrationBannerTelecompngBP6CzZj82A0R,
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
            className={classNames(sty.img__tu5B1)}
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
            <div className={classNames(projectcss.all, sty.columns___07Bk6)}>
              <div className={classNames(projectcss.all, sty.column__lWp8J)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6EHzo
                  )}
                >
                  {
                    "From new product information to effective sales pitches and exceptional customer service, your team will be ready to tackle any challenge that comes their way. \n\nCoach is an effective solution for telecommunication companies who want their teams up to date on new products and services, sales pitches, customer service excellence, and more!"
                  }
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3RU8N
                  )}
                >
                  {"HOW CAN THE INDUSTRY BENEFIT FROM USING COACH?"}
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column___7D7Og)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__bPaZ)}
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
                    src: telecom1Png2ZYqus3G1QFgpb,
                    fullWidth: 860,
                    fullHeight: 601,
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
              className={classNames(projectcss.all, sty.columns__pTwyJ)}
            >
              <div className={classNames(projectcss.all, sty.column__ogf0T)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__zRaGi)}
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
                className={classNames(projectcss.all, sty.column__eDrDp)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vXlgZ
                  )}
                >
                  {"Sales Training"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pwJmG
                  )}
                >
                  {
                    "Sales training is critical for telecommunication companies to stay competitive in a rapidly changing marketplace. \nTo be successful in sales, employees must have up-to-date knowledge on new products and services, effective sales pitches, and excellent customer service skills.\n\nCoach provides microlearning training modules through short, engaging games that can be accessed on mobile devices, making it a convenient and flexible training resource for telecommunication workers on the go. \n\nWith Coach, employees can track their progress, compare their results with others in the organization, and keep learning to improve their skills.\n\nThese fun and interactive training sessions not only boost motivation but also foster essential skills such as open-mindedness, collaboration, communication, and decision-making."
                  }
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__iiDsn)}
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
              className={classNames(projectcss.all, sty.columns___7THwy)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__v5GWn)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5Ltwe
                  )}
                >
                  {"Product Training"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zeh7Q
                  )}
                >
                  {
                    "In today's fast-paced and ever-evolving market, it's crucial for salespeople to have a deep understanding of the products and services they are selling. \n\nCoach provides quick and convenient access to product knowledge through microlearning modules that are designed for on-the-go learning.\n\nThe short and frequent learning sessions allow salespeople to stay up-to-date with the latest information and changes in the market, giving them the competitive edge they need to succeed. "
                  }
                </div>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.column__jQbrI)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__xyCkE)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"450px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: webTelecomProductpngUzk7YKwGWzKmxZ,
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
            className={classNames(sty.img__jCo)}
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
              className={classNames(projectcss.all, sty.columns___7Q411)}
            >
              <div className={classNames(projectcss.all, sty.column__ocGin)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__e8Kq)}
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
                className={classNames(projectcss.all, sty.column__cVpIv)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tcCeI
                  )}
                >
                  {"Customer Relations Training"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2QKw
                  )}
                >
                  {
                    "Customers expect quick, effective solutions to their issues. Good customer relations play a critical role in maintaining a positive brand image and customer loyalty. \n\nCoach's microlearning approach provides a platform to equip employees with the latest techniques and knowledge on effective communication, empathetic listening, conflict resolution, and much more. With short, engaging sessions, employees can quickly build the skills they need to provide excellent customer service and foster strong customer relationships.\n\nWith Coach's analytics and reporting capabilities, managers can track employee progress and identify areas where they need improvement. This not only ensures that the customer relations team is knowledgeable and skilled, but it also creates a continuous feedback loop that leads to continuous improvement and growth."
                  }
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__m5G8U)}
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
              className={classNames(projectcss.all, sty.columns__vrsb1)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column___0AuYf)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__u54M
                  )}
                >
                  {"Onboarding"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zrOcb
                  )}
                >
                  {
                    "Onboarding is crucial for telecom companies with a high number of employees who need to quickly learn the job. Coach provides a flexible and efficient solution for onboarding employees, allowing them to learn and become familiar with the company, their coworkers, and the essentials of their job. \n\nWith Coach's microlearning approach, employees can learn in short, quick sessions that won't take away from their work time.\n\nManagers can get insights on an employee's performance during their training sessions. This gives managers a clear understanding of each employee's learning journey, ensuring that everyone is fully onboarded and ready to excel in their role."
                  }
                </div>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.column__h9BMs)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__vJJlj)}
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
                className={classNames(projectcss.all, sty.freeBox__lwr7)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__azn17
                  )}
                >
                  {"READY TO START?"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__luBaI
                  )}
                >
                  {
                    "Experience the full power of Coach in action, and see why microlearning is your company’s future."
                  }
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__v9RHl)}
                >
                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__lhqls
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
                        sty.text__kkc9R
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___7Dx5C)}
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
  PlasmicIndustryTelecommunication__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIndustryTelecommunication__VariantsArgs;
    args?: PlasmicIndustryTelecommunication__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIndustryTelecommunication__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIndustryTelecommunication__ArgsType,
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
          internalArgPropNames: PlasmicIndustryTelecommunication__ArgProps,
          internalVariantPropNames:
            PlasmicIndustryTelecommunication__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicIndustryTelecommunication__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIndustryTelecommunication";
  } else {
    func.displayName = `PlasmicIndustryTelecommunication.${nodeName}`;
  }
  return func;
}

export const PlasmicIndustryTelecommunication = Object.assign(
  // Top-level PlasmicIndustryTelecommunication renders the root element
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

    // Metadata about props expected for PlasmicIndustryTelecommunication
    internalVariantProps: PlasmicIndustryTelecommunication__VariantProps,
    internalArgProps: PlasmicIndustryTelecommunication__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicIndustryTelecommunication;
/* prettier-ignore-end */
