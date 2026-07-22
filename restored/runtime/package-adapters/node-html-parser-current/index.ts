// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~pull-request-route~pull-request-code-rev~fzrvbq9l-sutawCMW.js
// CommonJS-compatible loader for the bundled node-html-parser package.
import {
  CommentNode,
  HTMLElement,
  Node,
  NodeType,
  TextNode,
  parse,
  valid,
} from "node-html-parser";
const nodeHtmlParser = {
  NodeType,
  TextNode,
  Node,
  valid,
  CommentNode,
  HTMLElement,
  parse,
};
export type NodeHtmlParserModule = typeof nodeHtmlParser;
export function loadNodeHtmlParser(): NodeHtmlParserModule {
  return nodeHtmlParser;
}
