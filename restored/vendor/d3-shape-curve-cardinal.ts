// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// d3-shape cardinal splines: curveCardinal, curveCardinalClosed and
// curveCardinalOpen. Each interpolates through its points using tangents
// scaled by a configurable tension.

import type { Curve, CurveContext } from "./d3-shape-curve-context";

interface CardinalState {
  _context: CurveContext;
  _k: number;
  _x0: number;
  _y0: number;
  _x1: number;
  _y1: number;
  _x2: number;
  _y2: number;
}

function cardinalPoint(curve: CardinalState, x: number, y: number): void {
  curve._context.bezierCurveTo(
    curve._x1 + curve._k * (curve._x2 - curve._x0),
    curve._y1 + curve._k * (curve._y2 - curve._y0),
    curve._x2 + curve._k * (curve._x1 - x),
    curve._y2 + curve._k * (curve._y1 - y),
    curve._x2,
    curve._y2,
  );
}

function noop(): void {}

export class Cardinal implements Curve, CardinalState {
  readonly _context: CurveContext;
  readonly _k: number;
  _x0 = NaN;
  _x1 = NaN;
  _x2 = NaN;
  _y0 = NaN;
  _y1 = NaN;
  _y2 = NaN;
  private _line = NaN;
  private _point = 0;

  constructor(context: CurveContext, tension: number) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }

  areaStart(): void {
    this._line = 0;
  }

  areaEnd(): void {
    this._line = NaN;
  }

  lineStart(): void {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  }

  lineEnd(): void {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        cardinalPoint(this, this._x1, this._y1);
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
        this._x1 = x;
        this._y1 = y;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        cardinalPoint(this, x, y);
        break;
    }
    this._x0 = this._x1;
    this._x1 = this._x2;
    this._x2 = x;
    this._y0 = this._y1;
    this._y1 = this._y2;
    this._y2 = y;
  }
}

export class CardinalClosed implements Curve, CardinalState {
  readonly _context: CurveContext;
  readonly _k: number;
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
  private _point = 0;

  constructor(context: CurveContext, tension: number) {
    this._context = context;
    this._k = (1 - tension) / 6;
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
    this._point = 0;
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
        cardinalPoint(this, x, y);
        break;
    }
    this._x0 = this._x1;
    this._x1 = this._x2;
    this._x2 = x;
    this._y0 = this._y1;
    this._y1 = this._y2;
    this._y2 = y;
  }
}

export class CardinalOpen implements Curve, CardinalState {
  readonly _context: CurveContext;
  readonly _k: number;
  _x0 = NaN;
  _x1 = NaN;
  _x2 = NaN;
  _y0 = NaN;
  _y1 = NaN;
  _y2 = NaN;
  private _line = NaN;
  private _point = 0;

  constructor(context: CurveContext, tension: number) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }

  areaStart(): void {
    this._line = 0;
  }

  areaEnd(): void {
    this._line = NaN;
  }

  lineStart(): void {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
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
        cardinalPoint(this, x, y);
        break;
    }
    this._x0 = this._x1;
    this._x1 = this._x2;
    this._x2 = x;
    this._y0 = this._y1;
    this._y1 = this._y2;
    this._y2 = y;
  }
}

export interface CardinalCurveFactory {
  (context: CurveContext): Curve;
  tension(tension: number): CardinalCurveFactory;
}

export const curveCardinal: CardinalCurveFactory = (function custom(
  tension: number,
): CardinalCurveFactory {
  function cardinal(context: CurveContext): Curve {
    return new Cardinal(context, tension);
  }
  cardinal.tension = (value: number): CardinalCurveFactory => custom(+value);
  return cardinal;
})(0);

export const curveCardinalClosed: CardinalCurveFactory = (function custom(
  tension: number,
): CardinalCurveFactory {
  function cardinalClosed(context: CurveContext): Curve {
    return new CardinalClosed(context, tension);
  }
  cardinalClosed.tension = (value: number): CardinalCurveFactory =>
    custom(+value);
  return cardinalClosed;
})(0);

export const curveCardinalOpen: CardinalCurveFactory = (function custom(
  tension: number,
): CardinalCurveFactory {
  function cardinalOpen(context: CurveContext): Curve {
    return new CardinalOpen(context, tension);
  }
  cardinalOpen.tension = (value: number): CardinalCurveFactory =>
    custom(+value);
  return cardinalOpen;
})(0);
