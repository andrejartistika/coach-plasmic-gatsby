// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: GAiHy1uvAVjk52
import * as React from "react";

import { Link, GatsbyLinkProps as LinkProps } from "gatsby";

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

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_coach_website.module.css"; // plasmic-import: n7JM2c9rKsJq2MtgHpQAyH/projectcss
import * as sty from "./PlasmicIndustryCard.module.css"; // plasmic-import: GAiHy1uvAVjk52/css

import iconIndustryConsumersvgR1QCngqMc9HqG from "./images/iconIndustryConsumersvg.svg"; // plasmic-import: r1_QCngqMc9HqG/picture
import iconIndustryConsumerHoversvgLvyZvsP3FbiQJr from "./images/iconIndustryConsumerHoversvg.svg"; // plasmic-import: LvyZvsP3fbiQJr/picture
import iconIndustryManufacturingsvgYW0VrqAfWrTjIw from "./images/iconIndustryManufacturingsvg.svg"; // plasmic-import: yW0VrqAfWrTjIw/picture
import iconIndustryManufacturingHoversvgHO5BaTvQinMagA from "./images/iconIndustryManufacturingHoversvg.svg"; // plasmic-import: hO5BaTvQinMagA/picture
import iconIndustryPharmasvg2Pc553By5V5Exhq from "./images/iconIndustryPharmasvg2.svg"; // plasmic-import: PC553By5V5EXHQ/picture
import iconIndustryPharmaHoversvgYjpOtXjTmZvTv from "./images/iconIndustryPharmaHoversvg.svg"; // plasmic-import: YjpOTXjTM-zvTv/picture
import iconIndustryTelecomsvgGoM1PbN32UKqVf from "./images/iconIndustryTelecomsvg.svg"; // plasmic-import: goM1PbN32uKqVf/picture
import iconIndustryTelecomHoversvgWToC85Qpzyt7R from "./images/iconIndustryTelecomHoversvg.svg"; // plasmic-import: WToC8_5QPZYT7r/picture
import iconIndustryLuxurysvgBo1NwYi23OLgdn from "./images/iconIndustryLuxurysvg.svg"; // plasmic-import: BO1nwYI23oLgdn/picture
import iconIndustryLuxuryHoversvg9TuKiFrPpNmecj from "./images/iconIndustryLuxuryHoversvg.svg"; // plasmic-import: 9TuKiFRPpNMECJ/picture

export type PlasmicIndustryCard__VariantMembers = {
  consumerElectronics: "consumerElectronics";
  manufacturing: "manufacturing";
  pharmaceuticals: "pharmaceuticals";
  telecom: "telecom";
  luxuryGoods: "luxuryGoods";
};
export type PlasmicIndustryCard__VariantsArgs = {
  consumerElectronics?: SingleBooleanChoiceArg<"consumerElectronics">;
  manufacturing?: SingleBooleanChoiceArg<"manufacturing">;
  pharmaceuticals?: SingleBooleanChoiceArg<"pharmaceuticals">;
  telecom?: SingleBooleanChoiceArg<"telecom">;
  luxuryGoods?: SingleBooleanChoiceArg<"luxuryGoods">;
};
type VariantPropType = keyof PlasmicIndustryCard__VariantsArgs;
export const PlasmicIndustryCard__VariantProps = new Array<VariantPropType>(
  "consumerElectronics",
  "manufacturing",
  "pharmaceuticals",
  "telecom",
  "luxuryGoods"
);

export type PlasmicIndustryCard__ArgsType = {};
type ArgPropType = keyof PlasmicIndustryCard__ArgsType;
export const PlasmicIndustryCard__ArgProps = new Array<ArgPropType>();

export type PlasmicIndustryCard__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
};

export interface DefaultIndustryCardProps {
  consumerElectronics?: SingleBooleanChoiceArg<"consumerElectronics">;
  manufacturing?: SingleBooleanChoiceArg<"manufacturing">;
  pharmaceuticals?: SingleBooleanChoiceArg<"pharmaceuticals">;
  telecom?: SingleBooleanChoiceArg<"telecom">;
  luxuryGoods?: SingleBooleanChoiceArg<"luxuryGoods">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicIndustryCard__RenderFunc(props: {
  variants: PlasmicIndustryCard__VariantsArgs;
  args: PlasmicIndustryCard__ArgsType;
  overrides: PlasmicIndustryCard__OverridesType;

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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "consumerElectronics",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.consumerElectronics
          : undefined
      },
      {
        path: "manufacturing",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.manufacturing
          : undefined
      },
      {
        path: "pharmaceuticals",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.pharmaceuticals
          : undefined
      },
      {
        path: "telecom",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.telecom : undefined
      },
      {
        path: "luxuryGoods",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.luxuryGoods
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
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
        sty.root,
        {
          [sty.rootconsumerElectronics]: hasVariant(
            $state,
            "consumerElectronics",
            "consumerElectronics"
          ),
          [sty.rootluxuryGoods]: hasVariant(
            $state,
            "luxuryGoods",
            "luxuryGoods"
          ),
          [sty.rootmanufacturing]: hasVariant(
            $state,
            "manufacturing",
            "manufacturing"
          ),
          [sty.rootpharmaceuticals]: hasVariant(
            $state,
            "pharmaceuticals",
            "pharmaceuticals"
          ),
          [sty.roottelecom]: hasVariant($state, "telecom", "telecom")
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__hHrcY, {
          [sty.freeBoxconsumerElectronics__hHrcYhXsdb]: hasVariant(
            $state,
            "consumerElectronics",
            "consumerElectronics"
          ),
          [sty.freeBoxmanufacturing__hHrcYz0S6]: hasVariant(
            $state,
            "manufacturing",
            "manufacturing"
          ),
          [sty.freeBoxtelecom__hHrcY9QAyb]: hasVariant(
            $state,
            "telecom",
            "telecom"
          )
        })}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img, {
            [sty.imgconsumerElectronics]: hasVariant(
              $state,
              "consumerElectronics",
              "consumerElectronics"
            ),
            [sty.imgluxuryGoods]: hasVariant(
              $state,
              "luxuryGoods",
              "luxuryGoods"
            ),
            [sty.imgmanufacturing]: hasVariant(
              $state,
              "manufacturing",
              "manufacturing"
            ),
            [sty.imgpharmaceuticals]: hasVariant(
              $state,
              "pharmaceuticals",
              "pharmaceuticals"
            ),
            [sty.imgtelecom]: hasVariant($state, "telecom", "telecom")
          })}
          displayHeight={"70px" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"70px" as const}
          loading={"lazy" as const}
          src={
            hasVariant($state, "luxuryGoods", "luxuryGoods") &&
            triggers.hover_root
              ? {
                  src: iconIndustryLuxuryHoversvg9TuKiFrPpNmecj,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }
              : hasVariant($state, "telecom", "telecom") && triggers.hover_root
              ? {
                  src: iconIndustryTelecomHoversvgWToC85Qpzyt7R,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }
              : hasVariant($state, "pharmaceuticals", "pharmaceuticals") &&
                triggers.hover_root
              ? {
                  src: iconIndustryPharmaHoversvgYjpOtXjTmZvTv,
                  fullWidth: 148,
                  fullHeight: 150,
                  aspectRatio: 0.985915
                }
              : hasVariant($state, "manufacturing", "manufacturing") &&
                triggers.hover_root
              ? {
                  src: iconIndustryManufacturingHoversvgHO5BaTvQinMagA,
                  fullWidth: 148,
                  fullHeight: 150,
                  aspectRatio: 0.985915
                }
              : hasVariant(
                  $state,
                  "consumerElectronics",
                  "consumerElectronics"
                ) && triggers.hover_root
              ? {
                  src: iconIndustryConsumerHoversvgLvyZvsP3FbiQJr,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }
              : hasVariant($state, "luxuryGoods", "luxuryGoods")
              ? {
                  src: iconIndustryLuxurysvgBo1NwYi23OLgdn,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }
              : hasVariant($state, "telecom", "telecom")
              ? {
                  src: iconIndustryTelecomsvgGoM1PbN32UKqVf,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }
              : hasVariant($state, "pharmaceuticals", "pharmaceuticals")
              ? {
                  src: iconIndustryPharmasvg2Pc553By5V5Exhq,
                  fullWidth: 148,
                  fullHeight: 150,
                  aspectRatio: 0.985915
                }
              : hasVariant($state, "manufacturing", "manufacturing")
              ? {
                  src: iconIndustryManufacturingsvgYW0VrqAfWrTjIw,
                  fullWidth: 148,
                  fullHeight: 150,
                  aspectRatio: 0.985915
                }
              : hasVariant($state, "consumerElectronics", "consumerElectronics")
              ? {
                  src: iconIndustryConsumersvgR1QCngqMc9HqG,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }
              : {
                  src: iconIndustryConsumersvgR1QCngqMc9HqG,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }
          }
        />

        <div className={classNames(projectcss.all, sty.freeBox__h1XIa)}>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.textconsumerElectronics]: hasVariant(
                  $state,
                  "consumerElectronics",
                  "consumerElectronics"
                ),
                [sty.textluxuryGoods]: hasVariant(
                  $state,
                  "luxuryGoods",
                  "luxuryGoods"
                ),
                [sty.textmanufacturing]: hasVariant(
                  $state,
                  "manufacturing",
                  "manufacturing"
                ),
                [sty.textpharmaceuticals]: hasVariant(
                  $state,
                  "pharmaceuticals",
                  "pharmaceuticals"
                ),
                [sty.texttelecom]: hasVariant($state, "telecom", "telecom")
              }
            )}
          >
            {hasVariant($state, "luxuryGoods", "luxuryGoods")
              ? "Luxury Goods"
              : hasVariant($state, "telecom", "telecom")
              ? "Telecom"
              : hasVariant($state, "pharmaceuticals", "pharmaceuticals")
              ? "Pharmaceuticals"
              : hasVariant($state, "manufacturing", "manufacturing")
              ? "Manufacturing"
              : hasVariant($state, "consumerElectronics", "consumerElectronics")
              ? "Consumer Electronics"
              : "Industry"}
          </div>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "text"],
  img: ["img"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIndustryCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIndustryCard__VariantsArgs;
    args?: PlasmicIndustryCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIndustryCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIndustryCard__ArgsType,
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
          internalArgPropNames: PlasmicIndustryCard__ArgProps,
          internalVariantPropNames: PlasmicIndustryCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicIndustryCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIndustryCard";
  } else {
    func.displayName = `PlasmicIndustryCard.${nodeName}`;
  }
  return func;
}

export const PlasmicIndustryCard = Object.assign(
  // Top-level PlasmicIndustryCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicIndustryCard
    internalVariantProps: PlasmicIndustryCard__VariantProps,
    internalArgProps: PlasmicIndustryCard__ArgProps
  }
);

export default PlasmicIndustryCard;
/* prettier-ignore-end */
