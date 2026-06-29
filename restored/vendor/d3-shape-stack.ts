// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// d3-shape stack layout: the stack() generator plus the stackOrderNone order
// and stackOffsetExpand offset used to normalize series to a [0, 1] range.

type StackKey = number | string;

interface SeriesPoint extends Array<number> {
  0: number;
  1: number;
  data?: unknown;
}

interface Series extends Array<SeriesPoint> {
  key: StackKey;
  index: number;
}

type StackValueAccessor = (
  datum: unknown,
  key: StackKey,
  index: number,
  data: Iterable<unknown>,
) => number;

type StackOrder = (series: Series[]) => Iterable<number>;
type StackOffset = (series: Series[], order: number[]) => void;

function constant<T>(value: T): () => T {
  return () => value;
}

function toArray<T>(value: ArrayLike<T> | Iterable<T>): ArrayLike<T> {
  return typeof value === "object" && "length" in value
    ? value
    : Array.from(value as Iterable<T>);
}

function valueAccessor(datum: unknown, key: StackKey): number {
  return (datum as Record<StackKey, number>)[key];
}

function makeSeries(key: StackKey): Series {
  const series = [] as unknown as Series;
  series.key = key;
  return series;
}

export function stackOrderNone(series: Series[]): number[] {
  const order = new Array<number>(series.length);
  let i = series.length;
  while (--i >= 0) order[i] = i;
  return order;
}

function stackOffsetNone(series: Series[], order: number[]): void {
  const n = series.length;
  if (!(n > 1)) return;
  let previous = series[order[0]];
  const m = previous.length;
  for (let i = 1; i < n; ++i) {
    const current = series[order[i]];
    for (let j = 0; j < m; ++j) {
      current[j][1] += current[j][0] = isNaN(previous[j][1])
        ? previous[j][0]
        : previous[j][1];
    }
    previous = current;
  }
}

export function stackOffsetExpand(series: Series[], order: number[]): void {
  const n = series.length;
  if (!(n > 0)) return;
  const m = series[0].length;
  for (let i = 0; i < m; ++i) {
    let total = 0;
    for (let j = 0; j < n; ++j) total += series[j][i][1] || 0;
    if (total) for (let j = 0; j < n; ++j) series[j][i][1] /= total;
  }
  stackOffsetNone(series, order);
}

export interface StackGenerator {
  (data: Iterable<unknown>): Series[];
  keys(): () => StackKey[];
  keys(keys: Iterable<StackKey> | (() => StackKey[])): StackGenerator;
  value(): StackValueAccessor;
  value(value: StackValueAccessor | number): StackGenerator;
  order(): StackOrder;
  order(order: StackOrder | Iterable<number> | null): StackGenerator;
  offset(): StackOffset;
  offset(offset: StackOffset | null): StackGenerator;
}

export function stack(): StackGenerator {
  let keys = constant<StackKey[]>([]);
  let order: StackOrder = stackOrderNone;
  let offset: StackOffset = stackOffsetNone;
  let value: StackValueAccessor = valueAccessor as StackValueAccessor;

  function stackGenerator(this: unknown, data: Iterable<unknown>): Series[] {
    const series = Array.from(keys.apply(this, arguments as never), makeSeries);
    const n = series.length;
    let index = -1;
    for (const datum of data) {
      ++index;
      for (let i = 0; i < n; ++i) {
        (series[i][index] = [
          0,
          +value(datum, series[i].key, index, data),
        ] as unknown as SeriesPoint).data = datum;
      }
    }
    const orderIndices = toArray(order(series)) as ArrayLike<number>;
    for (let i = 0; i < n; ++i) series[orderIndices[i]].index = i;
    offset(series, Array.from(orderIndices));
    return series;
  }

  stackGenerator.keys = function (
    keysArg?: Iterable<StackKey> | (() => StackKey[]),
  ): never {
    if (!arguments.length) return keys as never;
    keys =
      typeof keysArg === "function"
        ? (keysArg as () => StackKey[])
        : constant(Array.from(keysArg as Iterable<StackKey>));
    return stackGenerator as never;
  };

  stackGenerator.value = function (
    valueArg?: StackValueAccessor | number,
  ): never {
    if (!arguments.length) return value as never;
    value =
      typeof valueArg === "function"
        ? valueArg
        : (constant(+(valueArg as number)) as unknown as StackValueAccessor);
    return stackGenerator as never;
  };

  stackGenerator.order = function (
    orderArg?: StackOrder | Iterable<number> | null,
  ): never {
    if (!arguments.length) return order as never;
    order =
      orderArg == null
        ? stackOrderNone
        : typeof orderArg === "function"
          ? orderArg
          : constant(Array.from(orderArg as Iterable<number>));
    return stackGenerator as never;
  };

  stackGenerator.offset = function (offsetArg?: StackOffset | null): never {
    if (!arguments.length) return offset as never;
    offset = offsetArg ?? stackOffsetNone;
    return stackGenerator as never;
  };

  return stackGenerator as unknown as StackGenerator;
}
