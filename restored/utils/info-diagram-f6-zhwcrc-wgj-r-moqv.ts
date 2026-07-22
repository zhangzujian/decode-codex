// Restored from ref/webview/assets/infoDiagram-F6ZHWCRC-wgjRMoqv.js
// Current Mermaid info diagram assembled from restored semantic Mermaid services.
import {
  chunkAGHRB4JFN as defineName,
  chunkAGHRB4JFR as logger,
  initDayjsCoreAltChunk,
} from "../vendor/dayjs-core-alt";
import {
  configureSvgSize,
  getConfig,
  initLegacyMermaidCommonRuntime,
} from "../runtime/package-adapters/mermaid-common-legacy";
import {
  initD3AxisSelectionRuntime,
  select,
} from "../runtime/package-adapters/d3-axis-selection-current";
import {
  initLegacyMermaidParserCore,
  parseMermaid,
} from "../runtime/package-adapters/mermaid-parser-legacy/core";
import {
  initMermaidPackageMetadataChunk,
  mermaidPackageMetadata,
} from "../mermaid/package-metadata";
initMermaidPackageMetadataChunk();
initLegacyMermaidCommonRuntime();
initDayjsCoreAltChunk();
initLegacyMermaidParserCore();
initD3AxisSelectionRuntime();
const selectSvgElement = defineName((diagramId: string) => {
  const { securityLevel } = getConfig();
  let root = select("body");
  if (securityLevel === "sandbox") {
    const sandboxDocument =
      select(`#i${diagramId}`).node()?.contentDocument ?? document;
    root = select(sandboxDocument.body);
  }
  return root.select(`#${diagramId}`);
}, "selectSvgElement");
const parser = {
  parse: defineName(async (source: string): Promise<void> => {
    logger.debug(await parseMermaid("info", source));
  }, "parse"),
};
const version = mermaidPackageMetadata.version + "";
export const diagram = {
  parser,
  db: {
    getVersion: defineName(() => version, "getVersion"),
  },
  renderer: {
    draw: defineName(
      (source: string, diagramId: string, renderedVersion: string): void => {
        logger.debug("rendering info diagram\n" + source);
        const svg = selectSvgElement(diagramId);
        configureSvgSize(svg, 100, 400, true);
        svg
          .append("g")
          .append("text")
          .attr("x", 100)
          .attr("y", 40)
          .attr("class", "version")
          .attr("font-size", 32)
          .style("text-anchor", "middle")
          .text(`v${renderedVersion}`);
      },
      "draw",
    ),
  },
};
