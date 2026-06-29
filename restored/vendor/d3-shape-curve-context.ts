// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared d3-shape curve types: the minimal path sink and curve generator
// interfaces used by the bundled d3-shape curve factories.

export interface CurveContext {
  moveTo(x: number, y: number): void;
  lineTo(x: number, y: number): void;
  closePath(): void;
  bezierCurveTo(
    cx1: number,
    cy1: number,
    cx2: number,
    cy2: number,
    x: number,
    y: number,
  ): void;
}

export interface Curve {
  areaStart?(): void;
  areaEnd?(): void;
  lineStart(): void;
  lineEnd(): void;
  point(x: number, y: number): void;
}

export type CurveFactory = (context: CurveContext) => Curve;
