// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n7JM2c9rKsJq2MtgHpQAyH
// Component: aZG1o9ts_1BbAO
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
import { Header } from "components/Header/Header"; // plasmic-import: 8nW9b98Kd-GEVu/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_coach_website.module.css"; // plasmic-import: n7JM2c9rKsJq2MtgHpQAyH/projectcss
import * as sty from "./PlasmicReusableHeader.module.css"; // plasmic-import: aZG1o9ts_1BbAO/css

export type PlasmicReusableHeader__VariantMembers = {};
export type PlasmicReusableHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicReusableHeader__VariantsArgs;
export const PlasmicReusableHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicReusableHeader__ArgsType = {};
type ArgPropType = keyof PlasmicReusableHeader__ArgsType;
export const PlasmicReusableHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicReusableHeader__OverridesType = {
  root?: p.Flex<typeof Header>;
};

export interface DefaultReusableHeaderProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicReusableHeader__RenderFunc(props: {
  variants: PlasmicReusableHeader__VariantsArgs;
  args: PlasmicReusableHeader__ArgsType;
  overrides: PlasmicReusableHeader__OverridesType;

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
    <Header
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      data={[
        { itemTitle: "Product", link: "/features" },
        {
          itemTitle: "How Coach helps",
          subMenuItems: [
            {
              itemTitle: "By industry",
              items: [
                {
                  title: "Consumer Electronics",
                  link: "/industry-consumer-electronics"
                },
                { title: "Manufacturing", link: "/industry-manufacturing" },
                {
                  title: "Telecommunications",
                  link: "/industry-telecommunication"
                },
                { title: "Pharmaceuticals", link: "/industry-pharmaceuticals" },
                { title: "Luxury Goods", link: "/industry-luxury-goods" }
              ]
            }
          ]
        },
        {
          itemTitle: "Who it's for",
          subMenuItems: [
            {
              itemTitle: "Target groups",
              items: [
                {
                  title: "For Managers (L&D, HR, People)",
                  link: "/who-is-it-for-managers"
                },
                { title: "For Employees", link: "/who-is-it-for-employees" },
                { title: "For CEOs", link: "/who-is-it-for-ceos" },
                {
                  title: "For Instructional Designers",
                  link: "/who-is-it-for-instructional-designers"
                }
              ]
            }
          ]
        },
        { itemTitle: "About Us", link: "/about-us" }
      ]}
      isDark={false}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof Header;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReusableHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReusableHeader__VariantsArgs;
    args?: PlasmicReusableHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReusableHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReusableHeader__ArgsType,
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
          internalArgPropNames: PlasmicReusableHeader__ArgProps,
          internalVariantPropNames: PlasmicReusableHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicReusableHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReusableHeader";
  } else {
    func.displayName = `PlasmicReusableHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicReusableHeader = Object.assign(
  // Top-level PlasmicReusableHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicReusableHeader
    internalVariantProps: PlasmicReusableHeader__VariantProps,
    internalArgProps: PlasmicReusableHeader__ArgProps
  }
);

export default PlasmicReusableHeader;
/* prettier-ignore-end */
