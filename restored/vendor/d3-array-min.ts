// Restored from ref/webview/assets/min-BVs4UoI0.js
// Min chunk restored from the Codex webview bundle.
type ComparableValue = number | string | Date;
type ValueAccessor<Datum, Value extends ComparableValue> = (
  datum: Datum,
  index: number,
  values: Iterable<Datum>,
) => Value | null | undefined;

function maxValue<Datum extends ComparableValue>(
  values: Iterable<Datum>,
): Datum | undefined;
function maxValue<Datum, Value extends ComparableValue>(
  values: Iterable<Datum>,
  accessor: ValueAccessor<Datum, Value>,
): Value | undefined;
function maxValue<Datum, Value extends ComparableValue>(
  values: Iterable<Datum>,
  accessor?: ValueAccessor<Datum, Value>,
): Datum | Value | undefined {
  let selectedValue: Datum | Value | undefined;
  if (accessor === undefined)
    for (const value of values as Iterable<Datum & ComparableValue>)
      value != null &&
        (selectedValue < value ||
          (selectedValue === undefined && value >= value)) &&
        (selectedValue = value);
  else {
    let index = -1;
    for (const datum of values) {
      const value = accessor(datum, ++index, values);
      value != null &&
        (selectedValue < value ||
          (selectedValue === undefined && value >= value)) &&
        (selectedValue = value);
    }
  }
  return selectedValue;
}

function minValue<Datum extends ComparableValue>(
  values: Iterable<Datum>,
): Datum | undefined;
function minValue<Datum, Value extends ComparableValue>(
  values: Iterable<Datum>,
  accessor: ValueAccessor<Datum, Value>,
): Value | undefined;
function minValue<Datum, Value extends ComparableValue>(
  values: Iterable<Datum>,
  accessor?: ValueAccessor<Datum, Value>,
): Datum | Value | undefined {
  let selectedValue: Datum | Value | undefined;
  if (accessor === undefined)
    for (const value of values as Iterable<Datum & ComparableValue>)
      value != null &&
        (selectedValue > value ||
          (selectedValue === undefined && value >= value)) &&
        (selectedValue = value);
  else {
    let index = -1;
    for (const datum of values) {
      const value = accessor(datum, ++index, values);
      value != null &&
        (selectedValue > value ||
          (selectedValue === undefined && value >= value)) &&
        (selectedValue = value);
    }
  }
  return selectedValue;
}

export { maxValue, maxValue as minN, minValue, minValue as minT };
