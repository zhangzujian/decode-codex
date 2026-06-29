// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// d3-shape curveBundle: a basis spline pulled toward the straight line between
// endpoints by a configurable "beta" tension. Falls back to a plain basis
// spline (curveBasis) when beta === 1.

import type { Curve, CurveContext } from "./d3-shape-curve-context";

interface BasisState {
  _context: CurveContext;
  _x0: number;
  _y0: number;
  _x1: number;
  _y1: number;
}

function basisPoint(curve: BasisState, x: number, y: number): void {
  curve._context.bezierCurveTo(
    (2 * curve._x0 + curve._x1) / 3,
    (2 * curve._y0 + curve._y1) / 3,
    (curve._x0 + 2 * curve._x1) / 3,
    (curve._y0 + 2 * curve._y1) / 3,
    (curve._x0 + 4 * curve._x1 + x) / 6,
    (curve._y0 + 4 * curve._y1 + y) / 6,
  );
}

class Basis implements Curve, BasisState {
  readonly _context: CurveContext;
  _x0 = NaN;
  _x1 = NaN;
  _y0 = NaN;
  _y1 = NaN;
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
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  }

  lineEnd(): void {
    switch (this._point) {
      case 3:
        basisPoint(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
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
        this._context.lineTo(
          (5 * this._x0 + this._x1) / 6,
          (5 * this._y0 + this._y1) / 6,
        );
      // falls through
      default:
        basisPoint(this, x, y);
        break;
    }
    this._x0 = this._x1;
    this._x1 = x;
    this._y0 = this._y1;
    this._y1 = y;
  }
}

class Bundle implements Curve {
  private readonly _basis: Basis;
  private readonly _beta: number;
  private _x: number[] = [];
  private _y: number[] = [];

  constructor(context: CurveContext, beta: number) {
    this._basis = new Basis(context);
    this._beta = beta;
  }

  lineStart(): void {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  }

  lineEnd(): void {
    const xs = this._x;
    const ys = this._y;
    const last = xs.length - 1;
    if (last > 0) {
      const x0 = xs[0];
      const y0 = ys[0];
      const dx = xs[last] - x0;
      const dy = ys[last] - y0;
      for (let i = 0; i <= last; ++i) {
        const t = i / last;
        this._basis.point(
          this._beta * xs[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * ys[i] + (1 - this._beta) * (y0 + t * dy),
        );
      }
    }
    this._x = this._y = null as unknown as number[];
    this._basis.lineEnd();
  }

  point(x: number, y: number): void {
    this._x.push(+x);
    this._y.push(+y);
  }
}

export interface BundleCurveFactory {
  (context: CurveContext): Curve;
  beta(beta: number): BundleCurveFactory;
}

export const curveBundle: BundleCurveFactory = (function custom(
  beta: number,
): BundleCurveFactory {
  function bundle(context: CurveContext): Curve {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = (value: number): BundleCurveFactory => custom(+value);
  return bundle;
})(0.85);
