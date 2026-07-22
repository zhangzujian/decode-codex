// Restored from ref/webview/assets/chunk-QN33PNHL-D1DqJ858.js
// ChunkQN33PNHL chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer } from "../runtime/rolldown";
import {
  chunkAGHRB4JFI,
  chunkAGHRB4JFN,
  chunkAGHRB4JFR,
} from "./dayjs-core-alt";
import {
  configureSvgSize,
  initLegacyMermaidCommonRuntime,
} from "../runtime/package-adapters/mermaid-common-legacy";
var setupViewPortForSvg, calculateDimensionsWithPadding, createViewBox;
export const chunkQN33PNHLT = createLazyEsmInitializer(() => {
  initLegacyMermaidCommonRuntime();
  chunkAGHRB4JFR();
  setupViewPortForSvg = chunkAGHRB4JFN(
    (svgSelection, padding, cssClassName, useMaxWidth) => {
      svgSelection.attr("class", cssClassName);
      let {
        width: _chunkQN33PNHLN,
        height: _chunkQN33PNHLT,
        x,
        y,
      } = calculateDimensionsWithPadding(svgSelection, padding);
      configureSvgSize(
        svgSelection,
        _chunkQN33PNHLT,
        _chunkQN33PNHLN,
        useMaxWidth,
      );
      let viewBox = createViewBox(
        x,
        y,
        _chunkQN33PNHLN,
        _chunkQN33PNHLT,
        padding,
      );
      svgSelection.attr("viewBox", viewBox);
      chunkAGHRB4JFI.debug(
        `viewBox configured: ${viewBox} with padding: ${padding}`,
      );
    },
    "setupViewPortForSVG",
  );
  calculateDimensionsWithPadding = chunkAGHRB4JFN((svgSelection, padding) => {
    let bounds = svgSelection.node()?.getBBox() || {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
    return {
      width: bounds.width + padding * 2,
      height: bounds.height + padding * 2,
      x: bounds.x,
      y: bounds.y,
    };
  }, "calculateDimensionsWithPadding");
  createViewBox = chunkAGHRB4JFN(
    (x, y, width, height, padding) =>
      `${x - padding} ${y - padding} ${width} ${height}`,
    "createViewBox",
  );
});
export { setupViewPortForSvg as chunkQN33PNHLN };
