// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// d3-shape curveLinear: connects consecutive points with straight segments.

import type { Curve, CurveContext } from "./d3-shape-curve-context";

class Linear implements Curve {
  private readonly _context: CurveContext;
  private _line = NaN;
  private _point = 0;

  constructor(context: CurveContext) {
    this._context = context;
  }

  areaStart(): void {
    this._line = 0;
  }

  areaEnd(): void {
    this._line = NaN;
  }

  lineStart(): void {
    this._point = 0;
  }

  lineEnd(): void {
    if (this._line || (this._line !== 0 && this._point === 1)) {
      this._context.closePath();
    }
    this._line = 1 - this._line;
  }

  point(x: number, y: number): void {
    x = +x;
    y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x, y);
        break;
    }
  }
}

export function curveLinear(context: CurveContext): Curve {
  return new Linear(context);
}
