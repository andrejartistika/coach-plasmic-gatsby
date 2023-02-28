// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: X4t29Gq59FX4_C
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

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_coach_website.module.css"; // plasmic-import: n7JM2c9rKsJq2MtgHpQAyH/projectcss
import * as sty from "./PlasmicYellowButton.module.css"; // plasmic-import: X4t29Gq59FX4_C/css

export type PlasmicYellowButton__VariantMembers = {};
export type PlasmicYellowButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicYellowButton__VariantsArgs;
export const PlasmicYellowButton__VariantProps = new Array<VariantPropType>();

export type PlasmicYellowButton__ArgsType = {};
type ArgPropType = keyof PlasmicYellowButton__ArgsType;
export const PlasmicYellowButton__ArgProps = new Array<ArgPropType>();

export type PlasmicYellowButton__OverridesType = {
  getStartedButton?: p.Flex<"button">;
};

export interface DefaultYellowButtonProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicYellowButton__RenderFunc(props: {
  variants: PlasmicYellowButton__VariantsArgs;
  args: PlasmicYellowButton__ArgsType;
  overrides: PlasmicYellowButton__OverridesType;

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

  return (
    <button
      data-plasmic-name={"getStartedButton"}
      data-plasmic-override={overrides.getStartedButton}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.getStartedButton
      )}
      ref={ref => {
        $refs["getStartedButton"] = ref;
      }}
    >
      {"GET STARTED"}
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  getStartedButton: ["getStartedButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  getStartedButton: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicYellowButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicYellowButton__VariantsArgs;
    args?: PlasmicYellowButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicYellowButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicYellowButton__ArgsType,
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
          internalArgPropNames: PlasmicYellowButton__ArgProps,
          internalVariantPropNames: PlasmicYellowButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicYellowButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "getStartedButton") {
    func.displayName = "PlasmicYellowButton";
  } else {
    func.displayName = `PlasmicYellowButton.${nodeName}`;
  }
  return func;
}

export const PlasmicYellowButton = Object.assign(
  // Top-level PlasmicYellowButton renders the root element
  makeNodeComponent("getStartedButton"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicYellowButton
    internalVariantProps: PlasmicYellowButton__VariantProps,
    internalArgProps: PlasmicYellowButton__ArgProps
  }
);

export default PlasmicYellowButton;
/* prettier-ignore-end */
