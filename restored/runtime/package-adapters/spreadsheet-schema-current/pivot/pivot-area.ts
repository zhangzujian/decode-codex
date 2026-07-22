// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotAreaReference } from "./pivot-area-reference";
function createPivotArea() {
  return {
    field: void 0,
    dataOnly: void 0,
    labelOnly: void 0,
    outline: void 0,
    fieldPosition: void 0,
    references: [],
    type: void 0,
    axis: void 0,
    collapsedLevelsAreSubtotals: void 0,
    grandRow: void 0,
    grandColumn: void 0,
    offset: void 0,
  };
}
export const PivotArea = {
  encode(message, writer = new BinaryWriter()) {
    (message.field !== void 0 && writer.uint32(8).int32(message.field),
      message.dataOnly !== void 0 && writer.uint32(16).bool(message.dataOnly),
      message.labelOnly !== void 0 && writer.uint32(24).bool(message.labelOnly),
      message.outline !== void 0 && writer.uint32(32).bool(message.outline),
      message.fieldPosition !== void 0 &&
        writer.uint32(40).uint32(message.fieldPosition));
    for (let item of message.references)
      PivotAreaReference.encode(item, writer.uint32(50).fork()).join();
    return (
      message.type !== void 0 && writer.uint32(58).string(message.type),
      message.axis !== void 0 && writer.uint32(66).string(message.axis),
      message.collapsedLevelsAreSubtotals !== void 0 &&
        writer.uint32(72).bool(message.collapsedLevelsAreSubtotals),
      message.grandRow !== void 0 && writer.uint32(80).bool(message.grandRow),
      message.grandColumn !== void 0 &&
        writer.uint32(88).bool(message.grandColumn),
      message.offset !== void 0 && writer.uint32(98).string(message.offset),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotArea();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.field = reader.int32();
          continue;
        case 2:
          if (tag !== 16) break;
          message.dataOnly = reader.bool();
          continue;
        case 3:
          if (tag !== 24) break;
          message.labelOnly = reader.bool();
          continue;
        case 4:
          if (tag !== 32) break;
          message.outline = reader.bool();
          continue;
        case 5:
          if (tag !== 40) break;
          message.fieldPosition = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) break;
          message.references.push(
            PivotAreaReference.decode(reader, reader.uint32()),
          );
          continue;
        case 7:
          if (tag !== 58) break;
          message.type = reader.string();
          continue;
        case 8:
          if (tag !== 66) break;
          message.axis = reader.string();
          continue;
        case 9:
          if (tag !== 72) break;
          message.collapsedLevelsAreSubtotals = reader.bool();
          continue;
        case 10:
          if (tag !== 80) break;
          message.grandRow = reader.bool();
          continue;
        case 11:
          if (tag !== 88) break;
          message.grandColumn = reader.bool();
          continue;
        case 12:
          if (tag !== 98) break;
          message.offset = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotArea.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotArea();
    return (
      (message.field = object.field ?? void 0),
      (message.dataOnly = object.dataOnly ?? void 0),
      (message.labelOnly = object.labelOnly ?? void 0),
      (message.outline = object.outline ?? void 0),
      (message.fieldPosition = object.fieldPosition ?? void 0),
      (message.references =
        object.references?.map((item) =>
          PivotAreaReference.fromPartial(item),
        ) || []),
      (message.type = object.type ?? void 0),
      (message.axis = object.axis ?? void 0),
      (message.collapsedLevelsAreSubtotals =
        object.collapsedLevelsAreSubtotals ?? void 0),
      (message.grandRow = object.grandRow ?? void 0),
      (message.grandColumn = object.grandColumn ?? void 0),
      (message.offset = object.offset ?? void 0),
      message
    );
  },
};
