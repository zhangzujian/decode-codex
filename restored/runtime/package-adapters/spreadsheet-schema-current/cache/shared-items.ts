// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotCacheSharedItem } from "./pivot-cache-shared-item";
function createSharedItems() {
  return {
    values: [],
    containsBlank: void 0,
    containsDate: void 0,
    containsNumeric: void 0,
    containsString: void 0,
    containsSemiMixedTypes: void 0,
    containsNonDate: void 0,
    containsInteger: void 0,
    minValue: void 0,
    maxValue: void 0,
    minDate: void 0,
    maxDate: void 0,
    count: void 0,
    containsMixedTypes: void 0,
    items: [],
    longText: void 0,
  };
}
export const SharedItems = {
  encode(message, writer = new BinaryWriter()) {
    for (let item of message.values) writer.uint32(10).string(item);
    (message.containsBlank !== void 0 &&
      writer.uint32(16).bool(message.containsBlank),
      message.containsDate !== void 0 &&
        writer.uint32(24).bool(message.containsDate),
      message.containsNumeric !== void 0 &&
        writer.uint32(32).bool(message.containsNumeric),
      message.containsString !== void 0 &&
        writer.uint32(40).bool(message.containsString),
      message.containsSemiMixedTypes !== void 0 &&
        writer.uint32(48).bool(message.containsSemiMixedTypes),
      message.containsNonDate !== void 0 &&
        writer.uint32(56).bool(message.containsNonDate),
      message.containsInteger !== void 0 &&
        writer.uint32(64).bool(message.containsInteger),
      message.minValue !== void 0 && writer.uint32(73).double(message.minValue),
      message.maxValue !== void 0 && writer.uint32(81).double(message.maxValue),
      message.minDate !== void 0 && writer.uint32(90).string(message.minDate),
      message.maxDate !== void 0 && writer.uint32(98).string(message.maxDate),
      message.count !== void 0 && writer.uint32(104).uint32(message.count),
      message.containsMixedTypes !== void 0 &&
        writer.uint32(112).bool(message.containsMixedTypes));
    for (let item of message.items)
      PivotCacheSharedItem.encode(item, writer.uint32(122).fork()).join();
    return (
      message.longText !== void 0 && writer.uint32(128).bool(message.longText),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSharedItems();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.values.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) break;
          message.containsBlank = reader.bool();
          continue;
        case 3:
          if (tag !== 24) break;
          message.containsDate = reader.bool();
          continue;
        case 4:
          if (tag !== 32) break;
          message.containsNumeric = reader.bool();
          continue;
        case 5:
          if (tag !== 40) break;
          message.containsString = reader.bool();
          continue;
        case 6:
          if (tag !== 48) break;
          message.containsSemiMixedTypes = reader.bool();
          continue;
        case 7:
          if (tag !== 56) break;
          message.containsNonDate = reader.bool();
          continue;
        case 8:
          if (tag !== 64) break;
          message.containsInteger = reader.bool();
          continue;
        case 9:
          if (tag !== 73) break;
          message.minValue = reader.double();
          continue;
        case 10:
          if (tag !== 81) break;
          message.maxValue = reader.double();
          continue;
        case 11:
          if (tag !== 90) break;
          message.minDate = reader.string();
          continue;
        case 12:
          if (tag !== 98) break;
          message.maxDate = reader.string();
          continue;
        case 13:
          if (tag !== 104) break;
          message.count = reader.uint32();
          continue;
        case 14:
          if (tag !== 112) break;
          message.containsMixedTypes = reader.bool();
          continue;
        case 15:
          if (tag !== 122) break;
          message.items.push(
            PivotCacheSharedItem.decode(reader, reader.uint32()),
          );
          continue;
        case 16:
          if (tag !== 128) break;
          message.longText = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return SharedItems.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSharedItems();
    return (
      (message.values = object.values?.map((item) => item) || []),
      (message.containsBlank = object.containsBlank ?? void 0),
      (message.containsDate = object.containsDate ?? void 0),
      (message.containsNumeric = object.containsNumeric ?? void 0),
      (message.containsString = object.containsString ?? void 0),
      (message.containsSemiMixedTypes =
        object.containsSemiMixedTypes ?? void 0),
      (message.containsNonDate = object.containsNonDate ?? void 0),
      (message.containsInteger = object.containsInteger ?? void 0),
      (message.minValue = object.minValue ?? void 0),
      (message.maxValue = object.maxValue ?? void 0),
      (message.minDate = object.minDate ?? void 0),
      (message.maxDate = object.maxDate ?? void 0),
      (message.count = object.count ?? void 0),
      (message.containsMixedTypes = object.containsMixedTypes ?? void 0),
      (message.items =
        object.items?.map((item) => PivotCacheSharedItem.fromPartial(item)) ||
        []),
      (message.longText = object.longText ?? void 0),
      message
    );
  },
};
