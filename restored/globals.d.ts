// Restored from ref/webview/assets/app-main-Bm5zg_Qi.js
// Ambient package declarations required by the restored app runtime.

declare module "cytoscape-cose-bilkent" {
  import type cytoscape from "cytoscape";

  const cytoscapeCoseBilkent: (cy: typeof cytoscape) => void;
  export default cytoscapeCoseBilkent;
}

declare module "lodash/_*" {
  const lodashInternalModule: any;
  export default lodashInternalModule;
}

declare module "@segment/analytics-next/dist/cjs/plugins/ajs-destination" {
  export * from "@segment/analytics-next/dist/types/plugins/ajs-destination";
}

declare module "@segment/analytics.js-video-plugins/plugins" {
  export class VimeoAnalytics {
    constructor(player: any, authToken: string);
    initialize(): void;
  }

  export class YouTubeAnalytics {
    constructor(player: any, apiKey: string);
    initialize(): void;
  }
}
