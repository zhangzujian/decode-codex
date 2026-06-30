// Restored from ref/webview/assets/stateDiagram-v2-4FDKWEC3-D0mP3Mt0.js
// StateDiagramV24FDKWEC3 chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";
import {
  chunkDI55MBZ5I,
  chunkDI55MBZ5N,
  chunkDI55MBZ5R,
  chunkDI55MBZ5T,
} from "./mermaid-state-diagram-fpaj";

type MermaidStateDiagramConfig = {
  arrowMarkerAbsolute?: boolean;
  state?: {
    arrowMarkerAbsolute?: boolean;
  };
};

const initStateDiagramDefinition = chunkAGHRB4JFN(
  (config: MermaidStateDiagramConfig) => {
    config.state ||= {};
    config.state.arrowMarkerAbsolute = config.arrowMarkerAbsolute;
  },
  "init",
);

const stateDiagramDefinition = {
  get parser() {
    return chunkDI55MBZ5N;
  },
  get db() {
    return new chunkDI55MBZ5T(2);
  },
  get renderer() {
    return chunkDI55MBZ5R;
  },
  get styles() {
    return chunkDI55MBZ5I;
  },
  get init() {
    return initStateDiagramDefinition;
  },
};

export {
  stateDiagramDefinition as diagram,
  stateDiagramDefinition as stateDiagramV24FDKWEC3,
};
