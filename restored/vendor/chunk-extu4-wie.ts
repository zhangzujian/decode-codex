// Restored from ref/webview/assets/chunk-EXTU4WIE-BD1qlKmn.js
// ChunkEXTU4WIE chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer } from "../runtime/rolldown";
import { chunkAGHRB4JFN, initDayjsCoreAltChunk } from "./dayjs-core-alt";
import {
  getConfig,
  initLegacyMermaidCommonRuntime,
} from "../runtime/package-adapters/mermaid-common-legacy";
import {
  select,
  initD3AxisSelectionRuntime,
} from "../runtime/package-adapters/d3-axis-selection-current";
var chunkEXTU4WIEN;
export const chunkEXTU4WIET = createLazyEsmInitializer(() => {
  initLegacyMermaidCommonRuntime();
  initDayjsCoreAltChunk();
  initD3AxisSelectionRuntime();
  chunkEXTU4WIEN = chunkAGHRB4JFN((diagramId) => {
    let { securityLevel } = getConfig(),
      svgRoot = select("body");
    return (
      securityLevel === "sandbox" &&
        (svgRoot = select(
          (select(`#i${diagramId}`).node()?.contentDocument ?? document).body,
        )),
      svgRoot.select(`#${diagramId}`)
    );
  }, "selectSvgElement");
});
export { chunkEXTU4WIEN };

// Stable semantic aliases retained for restored Mermaid consumers from earlier builds.
export function selectSvgElement(diagramId: string) {
  chunkEXTU4WIET();
  return chunkEXTU4WIEN(diagramId);
}
export { selectSvgElement as chunkEXTU4WIE };
export const initChunkEXTU4WIE = chunkEXTU4WIET;
