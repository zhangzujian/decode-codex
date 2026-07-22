// Restored from ref/webview/assets/mermaid-parser.core-BNP8Z0M3.js
// Lazy parser dispatcher for the legacy Mermaid parser service set.
type ParseIssue = {
  message: string;
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
  "architecture" | "gitGraph" | "info" | "packet" | "pie" | "radar" | "treemap";
const parsers: Partial<Record<DiagramType, LangiumParser>> = {};
const loaders: Record<DiagramType, () => Promise<void>> = {
  async architecture() {
    const { createArchitectureServices } =
      await import("./entries/architecture");
    parsers.architecture =
      createArchitectureServices().Architecture.parser.LangiumParser;
  },
  async gitGraph() {
    const { createGitGraphServices } = await import("./entries/git-graph");
    parsers.gitGraph = createGitGraphServices().GitGraph.parser.LangiumParser;
  },
  async info() {
    const { createInfoServices } = await import("./entries/info");
    parsers.info = createInfoServices().Info.parser.LangiumParser;
  },
  async packet() {
    const { createPacketServices } = await import("./entries/packet");
    parsers.packet = createPacketServices().Packet.parser.LangiumParser;
  },
  async pie() {
    const { createPieServices } = await import("./entries/pie");
    parsers.pie = createPieServices().Pie.parser.LangiumParser;
  },
  async radar() {
    const { createRadarServices } = await import("./entries/radar");
    parsers.radar = createRadarServices().Radar.parser.LangiumParser;
  },
  async treemap() {
    const { createTreemapServices } = await import("./entries/treemap");
    parsers.treemap = createTreemapServices().Treemap.parser.LangiumParser;
  },
};
class MermaidParseError extends Error {
  readonly result: ParseResult;
  constructor(result: ParseResult) {
    const lexerErrors = result.lexerErrors
      .map(({ message }) => message)
      .join("\n");
    const parserErrors = result.parserErrors
      .map(({ message }) => message)
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
export function initLegacyMermaidParserCore(): void {}
