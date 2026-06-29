// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// d3-interpolate transform support: decompose a 2D matrix and interpolate CSS `transform` strings.
import { stringN as interpolateNumber } from "./d3-interpolate-string";

const DEGREES_PER_RADIAN = 180 / Math.PI;

interface DecomposedTransform {
  translateX: number;
  translateY: number;
  rotate: number;
  skewX: number;
  scaleX: number;
  scaleY: number;
}

const IDENTITY_TRANSFORM: DecomposedTransform = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1,
};

function decomposeMatrix2D(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
): DecomposedTransform {
  let scaleX: number, scaleY: number, skew: number;
  if ((scaleX = Math.sqrt(a * a + b * b))) {
    a /= scaleX;
    b /= scaleX;
  }
  if ((skew = a * c + b * d)) {
    c -= a * skew;
    d -= b * skew;
  }
  if ((scaleY = Math.sqrt(c * c + d * d))) {
    c /= scaleY;
    d /= scaleY;
    skew /= scaleY;
  }
  if (a * d < b * c) {
    a = -a;
    b = -b;
    skew = -skew;
    scaleX = -scaleX;
  }
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * DEGREES_PER_RADIAN,
    skewX: Math.atan(skew) * DEGREES_PER_RADIAN,
    scaleX,
    scaleY,
  };
}

function parseCssTransform(value: string): DecomposedTransform {
  const matrix = new (
    typeof DOMMatrix == "function"
      ? DOMMatrix
      : (WebKitCSSMatrix as typeof DOMMatrix)
  )(value + "");
  return matrix.isIdentity
    ? IDENTITY_TRANSFORM
    : decomposeMatrix2D(
        matrix.a,
        matrix.b,
        matrix.c,
        matrix.d,
        matrix.e,
        matrix.f,
      );
}

type NumberPart = { i: number; x: (t: number) => number };

function createTransformInterpolator(
  parse: (value: string) => DecomposedTransform,
  pxComma: string,
  pxParen: string,
  degParen: string,
) {
  function pop(parts: unknown[]): string {
    return parts.length ? parts.pop() + " " : "";
  }

  function interpolateTranslate(
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    out: unknown[],
    queue: NumberPart[],
  ): void {
    if (fromX !== toX || fromY !== toY) {
      const slot = out.push("translate(", null, pxComma, null, pxParen);
      queue.push(
        { i: slot - 4, x: interpolateNumber(fromX, toX) },
        { i: slot - 2, x: interpolateNumber(fromY, toY) },
      );
    } else if (toX || toY) {
      out.push("translate(" + toX + pxComma + toY + pxParen);
    }
  }

  function interpolateRotate(
    from: number,
    to: number,
    out: unknown[],
    queue: NumberPart[],
  ): void {
    if (from === to) {
      if (to) out.push(pop(out) + "rotate(" + to + degParen);
    } else {
      if (from - to > 180) to += 360;
      else if (to - from > 180) from += 360;
      queue.push({
        i: out.push(pop(out) + "rotate(", null, degParen) - 2,
        x: interpolateNumber(from, to),
      });
    }
  }

  function interpolateSkew(
    from: number,
    to: number,
    out: unknown[],
    queue: NumberPart[],
  ): void {
    if (from === to) {
      if (to) out.push(pop(out) + "skewX(" + to + degParen);
    } else {
      queue.push({
        i: out.push(pop(out) + "skewX(", null, degParen) - 2,
        x: interpolateNumber(from, to),
      });
    }
  }

  function interpolateScale(
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    out: unknown[],
    queue: NumberPart[],
  ): void {
    if (fromX !== toX || fromY !== toY) {
      const slot = out.push(pop(out) + "scale(", null, ",", null, ")");
      queue.push(
        { i: slot - 4, x: interpolateNumber(fromX, toX) },
        { i: slot - 2, x: interpolateNumber(fromY, toY) },
      );
    } else if (toX !== 1 || toY !== 1) {
      out.push(pop(out) + "scale(" + toX + "," + toY + ")");
    }
  }

  return function (fromValue: string, toValue: string) {
    const out: unknown[] = [];
    const queue: NumberPart[] = [];
    const from = parse(fromValue);
    const to = parse(toValue);
    interpolateTranslate(
      from.translateX,
      from.translateY,
      to.translateX,
      to.translateY,
      out,
      queue,
    );
    interpolateRotate(from.rotate, to.rotate, out, queue);
    interpolateSkew(from.skewX, to.skewX, out, queue);
    interpolateScale(
      from.scaleX,
      from.scaleY,
      to.scaleX,
      to.scaleY,
      out,
      queue,
    );
    return function (t: number): string {
      let index = -1;
      const length = queue.length;
      let part: NumberPart;
      while (++index < length) {
        out[(part = queue[index]).i] = part.x(t);
      }
      return out.join("");
    };
  };
}

export const interpolateTransformCss = createTransformInterpolator(
  parseCssTransform,
  "px, ",
  "px)",
  "deg)",
);
