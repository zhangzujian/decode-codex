// Restored from ref/webview/assets/mermaid-parser.core-Dq4HNlOW.js
// Lazy parser dispatcher for the current @mermaid-js/parser service modules.
type ParseIssue = {
  column?: number;
  line?: number;
  message: string;
  token?: {
    startColumn?: number;
    startLine?: number;
  };
};
type ParseResult = {
  lexerErrors: ParseIssue[];
  parserErrors: ParseIssue[];
  value: unknown;
};
type LangiumParser = {
  parse(source: string): ParseResult;
};
type DiagramType =
  | "architecture"
  | "gitGraph"
  | "info"
  | "packet"
  | "pie"
  | "radar"
  | "treeView"
  | "treemap"
  | "wardley";
const parsers: Partial<Record<DiagramType, LangiumParser>> = {};
const loaders: Record<DiagramType, () => Promise<void>> = {
  async architecture() {
    const { createArchitectureServices } =
      await import("../../../vendor/mermaid-architecture-services-k5");
    parsers.architecture =
      createArchitectureServices().Architecture.parser.LangiumParser;
  },
  async gitGraph() {
    const { createGitGraphServices } =
      await import("../../../vendor/mermaid-git-graph-services-k5");
    parsers.gitGraph = createGitGraphServices().GitGraph.parser.LangiumParser;
  },
  async info() {
    const { createInfoServices } =
      await import("../../../vendor/mermaid-info-services-k5");
    parsers.info = createInfoServices().Info.parser.LangiumParser;
  },
  async packet() {
    const { createPacketServices } =
      await import("../../../vendor/mermaid-packet-services-k5");
    parsers.packet = createPacketServices().Packet.parser.LangiumParser;
  },
  async pie() {
    const { createPieServices } =
      await import("../../../vendor/mermaid-pie-services-k5");
    parsers.pie = createPieServices().Pie.parser.LangiumParser;
  },
  async radar() {
    const { createRadarServices } =
      await import("../../../vendor/mermaid-radar-services-k5");
    parsers.radar = createRadarServices().Radar.parser.LangiumParser;
  },
  async treeView() {
    const { createTreeViewServices } =
      await import("../../../vendor/mermaid-tree-view-services-k5");
    parsers.treeView = createTreeViewServices().TreeView.parser.LangiumParser;
  },
  async treemap() {
    const { createTreemapServices } =
      await import("../../../vendor/mermaid-treemap-services-k5");
    parsers.treemap = createTreemapServices().Treemap.parser.LangiumParser;
  },
  async wardley() {
    const { createWardleyServices } =
      await import("../../../vendor/mermaid-wardley-services-k5");
    parsers.wardley = createWardleyServices().Wardley.parser.LangiumParser;
  },
};
class MermaidParseError extends Error {
  readonly result: ParseResult;
  constructor(result: ParseResult) {
    const lexerErrors = result.lexerErrors
      .map(
        ({ column, line, message }) =>
          `Lexer error on line ${Number.isNaN(line) || line === undefined ? "?" : line}, column ${Number.isNaN(column) || column === undefined ? "?" : column}: ${message}`,
      )
      .join("\n");
    const parserErrors = result.parserErrors
      .map(({ message, token }) => {
        const line = token?.startLine;
        const column = token?.startColumn;
        return `Parse error on line ${Number.isNaN(line) || line === undefined ? "?" : line}, column ${Number.isNaN(column) || column === undefined ? "?" : column}: ${message}`;
      })
      .join("\n");
    super(`Parsing failed: ${lexerErrors} ${parserErrors}`);
    this.name = "MermaidParseError";
    this.result = result;
  }
}
export async function parseMermaid(
  diagramType: string,
  source: string,
): Promise<unknown> {
  const loader = loaders[diagramType as DiagramType];
  if (!loader) throw new Error(`Unknown diagram type: ${diagramType}`);
  if (!parsers[diagramType as DiagramType]) await loader();
  const result = parsers[diagramType as DiagramType]!.parse(source);
  if (result.lexerErrors.length || result.parserErrors.length) {
    throw new MermaidParseError(result);
  }
  return result.value;
}
export function initCurrentMermaidParserCore(): void {}
