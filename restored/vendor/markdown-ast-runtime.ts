// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Semantic aliases for bundled unist/mdast traversal helpers.
import { defaultHandlers } from "mdast-util-to-markdown";
import { convert } from "unist-util-is";
import { visitParents } from "unist-util-visit-parents";

export type UnistNode = {
  children?: UnistNode[];
  type: string;
  [key: string]: unknown;
};

export type UnistTest =
  | string
  | Partial<UnistNode>
  | UnistTest[]
  | ((
      node: UnistNode,
      index?: number,
      parent?: UnistNode,
    ) => boolean | null | undefined)
  | null
  | undefined;

export type UnistVisitorResult =
  void | boolean | number | [boolean | "skip" | undefined, number?];

export type UnistVisitor = (
  node: UnistNode,
  ancestors: UnistNode[],
) => UnistVisitorResult;

export type UnistNodePredicate = (
  node: UnistNode,
  index?: number,
  parent?: UnistNode,
) => boolean;

export const mdastToMarkdownDefaultHandlers = defaultHandlers;

export function convertUnistTest(test?: UnistTest): UnistNodePredicate {
  return convert(test as never) as UnistNodePredicate;
}

export function initUnistUtilIsRuntimeChunk(): void {}

export function visitUnistParents(
  tree: UnistNode,
  visitor: UnistVisitor,
  reverse?: boolean,
): void;
export function visitUnistParents(
  tree: UnistNode,
  test: UnistTest,
  visitor: UnistVisitor,
  reverse?: boolean,
): void;
export function visitUnistParents(
  tree: UnistNode,
  testOrVisitor: UnistTest | UnistVisitor,
  visitorOrReverse?: UnistVisitor | boolean,
  reverse?: boolean,
): void {
  visitParents(
    tree as never,
    testOrVisitor as never,
    visitorOrReverse as never,
    reverse as never,
  );
}

export function initUnistUtilVisitParentsRuntimeChunk(): void {
  initUnistUtilIsRuntimeChunk();
}

export function initMdastToMarkdownRuntimeChunk(): void {
  initUnistUtilIsRuntimeChunk();
  initUnistUtilVisitParentsRuntimeChunk();
}
