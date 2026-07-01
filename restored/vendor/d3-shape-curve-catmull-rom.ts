// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Flat boundary. Vendored d3-shape Catmull-Rom splines: curveCatmullRom, curveCatmullRomClosed and
// curveCatmullRomOpen. Parameterized by "alpha" (0 = uniform, 0.5 = centripetal,
// 1 = chordal). Alpha === 0 degenerates to the matching cardinal spline.

import type { Curve, CurveContext } from "./d3-shape-curve-context";
import {
  Cardinal,
  CardinalClosed,
  CardinalOpen,
} from "./d3-shape-curve-cardinal";

interface CatmullRomState {
  _context: CurveContext;
  _x0: number;
  _y0: number;
  _x1: number;
  _y1: number;
  _x2: number;
  _y2: number;
  _l01_a: number;
  _l12_a: number;
  _l23_a: number;
  _l01_2a: number;
  _l12_2a: number;
  _l23_2a: number;
}

function catmullRomPoint(curve: CatmullRomState, x: number, y: number): void {
  let x1 = curve._x1;
  let y1 = curve._y1;
  let x2 = curve._x2;
  let y2 = curve._y2;
  if (curve._l01_a > 1e-12) {
    const a =
      2 * curve._l01_2a + 3 * curve._l01_a * curve._l12_a + curve._l12_2a;
    const n = 3 * curve._l01_a * (curve._l01_a + curve._l12_a);
    x1 = (x1 * a - curve._x0 * curve._l12_2a + curve._x2 * curve._l01_2a) / n;
    y1 = (y1 * a - curve._y0 * curve._l12_2a + curve._y2 * curve._l01_2a) / n;
  }
  if (curve._l23_a > 1e-12) {
    const b =
      2 * curve._l23_2a + 3 * curve._l23_a * curve._l12_a + curve._l12_2a;
    const m = 3 * curve._l23_a * (curve._l23_a + curve._l12_a);
    x2 = (x2 * b + curve._x1 * curve._l23_2a - x * curve._l12_2a) / m;
    y2 = (y2 * b + curve._y1 * curve._l23_2a - y * curve._l12_2a) / m;
  }
  curve._context.bezierCurveTo(x1, y1, x2, y2, curve._x2, curve._y2);
}

function noop(): void {}

class CatmullRom implements Curve, CatmullRomState {
  readonly _context: CurveContext;
  private readonly _alpha: number;
  _x0 = NaN;
  _x1 = NaN;
  _x2 = NaN;
  _y0 = NaN;
  _y1 = NaN;
  _y2 = NaN;
  _l01_a = 0;
  _l12_a = 0;
  _l23_a = 0;
  _l01_2a = 0;
  _l12_2a = 0;
  _l23_2a = 0;
  private _line = NaN;
  private _point = 0;

  constructor(context: CurveContext, alpha: number) {
    this._context = context;
    this._alpha = alpha;
  }

  areaStart(): void {
    this._line = 0;
  }

  areaEnd(): void {
    this._line = NaN;
  }

  lineStart(): void {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a =
      this._l12_a =
      this._l23_a =
      this._l01_2a =
      this._l12_2a =
      this._l23_2a =
      this._point =
        0;
  }

  lineEnd(): void {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) {
      this._context.closePath();
    }
    this._line = 1 - this._line;
  }

  point(x: number, y: number): void {
    x = +x;
    y = +y;
    if (this._point) {
      const dx = this._x2 - x;
      const dy = this._y2 - y;
      this._l23_a = Math.sqrt(
        (this._l23_2a = (dx * dx + dy * dy) ** +this._alpha),
      );
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        catmullRomPoint(this, x, y);
        break;
    }
    this._l01_a = this._l12_a;
    this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a;
    this._l12_2a = this._l23_2a;
    this._x0 = this._x1;
    this._x1 = this._x2;
    this._x2 = x;
    this._y0 = this._y1;
    this._y1 = this._y2;
    this._y2 = y;
  }
}

class CatmullRomClosed implements Curve, CatmullRomState {
  readonly _context: CurveContext;
  private readonly _alpha: number;
  _x0 = NaN;
  _x1 = NaN;
  _x2 = NaN;
  _x3 = NaN;
  _x4 = NaN;
  _x5 = NaN;
  _y0 = NaN;
  _y1 = NaN;
  _y2 = NaN;
  _y3 = NaN;
  _y4 = NaN;
  _y5 = NaN;
  _l01_a = 0;
  _l12_a = 0;
  _l23_a = 0;
  _l01_2a = 0;
  _l12_2a = 0;
  _l23_2a = 0;
  private _point = 0;

  constructor(context: CurveContext, alpha: number) {
    this._context = context;
    this._alpha = alpha;
  }

  areaStart = noop;
  areaEnd = noop;

  lineStart(): void {
    this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._x5 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
      this._y5 =
        NaN;
    this._l01_a =
      this._l12_a =
      this._l23_a =
      this._l01_2a =
      this._l12_2a =
      this._l23_2a =
      this._point =
        0;
  }

  lineEnd(): void {
    switch (this._point) {
      case 1:
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      case 2:
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      case 3:
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
    }
  }

  point(x: number, y: number): void {
    x = +x;
    y = +y;
    if (this._point) {
      const dx = this._x2 - x;
      const dy = this._y2 - y;
      this._l23_a = Math.sqrt(
        (this._l23_2a = (dx * dx + dy * dy) ** +this._alpha),
      );
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x;
        this._y3 = y;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo((this._x4 = x), (this._y4 = y));
        break;
      case 2:
        this._point = 3;
        this._x5 = x;
        this._y5 = y;
        break;
      default:
        catmullRomPoint(this, x, y);
        break;
    }
    this._l01_a = this._l12_a;
    this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a;
    this._l12_2a = this._l23_2a;
    this._x0 = this._x1;
    this._x1 = this._x2;
    this._x2 = x;
    this._y0 = this._y1;
    this._y1 = this._y2;
    this._y2 = y;
  }
}

class CatmullRomOpen implements Curve, CatmullRomState {
  readonly _context: CurveContext;
  private readonly _alpha: number;
  _x0 = NaN;
  _x1 = NaN;
  _x2 = NaN;
  _y0 = NaN;
  _y1 = NaN;
  _y2 = NaN;
  _l01_a = 0;
  _l12_a = 0;
  _l23_a = 0;
  _l01_2a = 0;
  _l12_2a = 0;
  _l23_2a = 0;
  private _line = NaN;
  private _point = 0;

  constructor(context: CurveContext, alpha: number) {
    this._context = context;
    this._alpha = alpha;
  }

  areaStart(): void {
    this._line = 0;
  }

  areaEnd(): void {
    this._line = NaN;
  }

  lineStart(): void {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a =
      this._l12_a =
      this._l23_a =
      this._l01_2a =
      this._l12_2a =
      this._l23_2a =
      this._point =
        0;
  }

  lineEnd(): void {
    if (this._line || (this._line !== 0 && this._point === 3)) {
      this._context.closePath();
    }
    this._line = 1 - this._line;
  }

  point(x: number, y: number): void {
    x = +x;
    y = +y;
    if (this._point) {
      const dx = this._x2 - x;
      const dy = this._y2 - y;
      this._l23_a = Math.sqrt(
        (this._l23_2a = (dx * dx + dy * dy) ** +this._alpha),
      );
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line
          ? this._context.lineTo(this._x2, this._y2)
          : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        catmullRomPoint(this, x, y);
        break;
    }
    this._l01_a = this._l12_a;
    this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a;
    this._l12_2a = this._l23_2a;
    this._x0 = this._x1;
    this._x1 = this._x2;
    this._x2 = x;
    this._y0 = this._y1;
    this._y1 = this._y2;
    this._y2 = y;
  }
}

export interface CatmullRomCurveFactory {
  (context: CurveContext): Curve;
  alpha(alpha: number): CatmullRomCurveFactory;
}

export const curveCatmullRom: CatmullRomCurveFactory = (function custom(
  alpha: number,
): CatmullRomCurveFactory {
  function catmullRom(context: CurveContext): Curve {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = (value: number): CatmullRomCurveFactory => custom(+value);
  return catmullRom;
})(0.5);

export const curveCatmullRomClosed: CatmullRomCurveFactory = (function custom(
  alpha: number,
): CatmullRomCurveFactory {
  function catmullRomClosed(context: CurveContext): Curve {
    return alpha
      ? new CatmullRomClosed(context, alpha)
      : new CardinalClosed(context, 0);
  }
  catmullRomClosed.alpha = (value: number): CatmullRomCurveFactory =>
    custom(+value);
  return catmullRomClosed;
})(0.5);

export const curveCatmullRomOpen: CatmullRomCurveFactory = (function custom(
  alpha: number,
): CatmullRomCurveFactory {
  function catmullRomOpen(context: CurveContext): Curve {
    return alpha
      ? new CatmullRomOpen(context, alpha)
      : new CardinalOpen(context, 0);
  }
  catmullRomOpen.alpha = (value: number): CatmullRomCurveFactory =>
    custom(+value);
  return catmullRomOpen;
})(0.5);
