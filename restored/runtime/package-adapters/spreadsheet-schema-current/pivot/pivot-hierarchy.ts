// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createPivotHierarchy() {
  return {
    outline: void 0,
    multipleItemSelectionAllowed: void 0,
    subtotalTop: void 0,
    showInFieldList: void 0,
    dragToRow: void 0,
    dragToColumn: void 0,
    dragToPage: void 0,
    dragToData: void 0,
    dragOff: void 0,
    includeNewItemsInFilter: void 0,
    caption: void 0,
  };
}
export const PivotHierarchy = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.outline !== void 0 && writer.uint32(8).bool(message.outline),
      message.multipleItemSelectionAllowed !== void 0 &&
        writer.uint32(16).bool(message.multipleItemSelectionAllowed),
      message.subtotalTop !== void 0 &&
        writer.uint32(24).bool(message.subtotalTop),
      message.showInFieldList !== void 0 &&
        writer.uint32(32).bool(message.showInFieldList),
      message.dragToRow !== void 0 && writer.uint32(40).bool(message.dragToRow),
      message.dragToColumn !== void 0 &&
        writer.uint32(48).bool(message.dragToColumn),
      message.dragToPage !== void 0 &&
        writer.uint32(56).bool(message.dragToPage),
      message.dragToData !== void 0 &&
        writer.uint32(64).bool(message.dragToData),
      message.dragOff !== void 0 && writer.uint32(72).bool(message.dragOff),
      message.includeNewItemsInFilter !== void 0 &&
        writer.uint32(80).bool(message.includeNewItemsInFilter),
      message.caption !== void 0 && writer.uint32(90).string(message.caption),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotHierarchy();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.outline = reader.bool();
          continue;
        case 2:
          if (tag !== 16) break;
          message.multipleItemSelectionAllowed = reader.bool();
          continue;
        case 3:
          if (tag !== 24) break;
          message.subtotalTop = reader.bool();
          continue;
        case 4:
          if (tag !== 32) break;
          message.showInFieldList = reader.bool();
          continue;
        case 5:
          if (tag !== 40) break;
          message.dragToRow = reader.bool();
          continue;
        case 6:
          if (tag !== 48) break;
          message.dragToColumn = reader.bool();
          continue;
        case 7:
          if (tag !== 56) break;
          message.dragToPage = reader.bool();
          continue;
        case 8:
          if (tag !== 64) break;
          message.dragToData = reader.bool();
          continue;
        case 9:
          if (tag !== 72) break;
          message.dragOff = reader.bool();
          continue;
        case 10:
          if (tag !== 80) break;
          message.includeNewItemsInFilter = reader.bool();
          continue;
        case 11:
          if (tag !== 90) break;
          message.caption = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotHierarchy.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotHierarchy();
    return (
      (message.outline = object.outline ?? void 0),
      (message.multipleItemSelectionAllowed =
        object.multipleItemSelectionAllowed ?? void 0),
      (message.subtotalTop = object.subtotalTop ?? void 0),
      (message.showInFieldList = object.showInFieldList ?? void 0),
      (message.dragToRow = object.dragToRow ?? void 0),
      (message.dragToColumn = object.dragToColumn ?? void 0),
      (message.dragToPage = object.dragToPage ?? void 0),
      (message.dragToData = object.dragToData ?? void 0),
      (message.dragOff = object.dragOff ?? void 0),
      (message.includeNewItemsInFilter =
        object.includeNewItemsInFilter ?? void 0),
      (message.caption = object.caption ?? void 0),
      message
    );
  },
};
