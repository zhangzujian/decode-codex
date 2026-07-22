// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotAutoSortScope } from "./pivot-auto-sort-scope";
import { PivotFieldItem } from "./pivot-field-item";
function createPivotField() {
  return {
    index: 0,
    name: ``,
    axis: void 0,
    dataField: void 0,
    showAll: void 0,
    subtotalTop: void 0,
    items: [],
    numberFormatId: void 0,
    sortType: void 0,
    multipleItemSelectionAllowed: void 0,
    autoSortScope: void 0,
    compact: void 0,
    outline: void 0,
    defaultSubtotal: void 0,
    measureFilter: void 0,
    allDrilled: void 0,
    dataSourceSort: void 0,
    defaultAttributeDrillState: void 0,
    dragToRow: void 0,
    dragToColumn: void 0,
    dragToPage: void 0,
    axisEnum: void 0,
    sortTypeEnum: void 0,
  };
}
export const PivotField = {
  encode(message, writer = new BinaryWriter()) {
    (message.index !== 0 && writer.uint32(8).int32(message.index),
      message.name !== `` && writer.uint32(18).string(message.name),
      message.axis !== void 0 && writer.uint32(26).string(message.axis),
      message.dataField !== void 0 && writer.uint32(32).bool(message.dataField),
      message.showAll !== void 0 && writer.uint32(40).bool(message.showAll),
      message.subtotalTop !== void 0 &&
        writer.uint32(48).bool(message.subtotalTop));
    for (let item of message.items)
      PivotFieldItem.encode(item, writer.uint32(58).fork()).join();
    return (
      message.numberFormatId !== void 0 &&
        writer.uint32(64).uint32(message.numberFormatId),
      message.sortType !== void 0 && writer.uint32(74).string(message.sortType),
      message.multipleItemSelectionAllowed !== void 0 &&
        writer.uint32(80).bool(message.multipleItemSelectionAllowed),
      message.autoSortScope !== void 0 &&
        PivotAutoSortScope.encode(
          message.autoSortScope,
          writer.uint32(90).fork(),
        ).join(),
      message.compact !== void 0 && writer.uint32(96).bool(message.compact),
      message.outline !== void 0 && writer.uint32(104).bool(message.outline),
      message.defaultSubtotal !== void 0 &&
        writer.uint32(112).bool(message.defaultSubtotal),
      message.measureFilter !== void 0 &&
        writer.uint32(120).bool(message.measureFilter),
      message.allDrilled !== void 0 &&
        writer.uint32(128).bool(message.allDrilled),
      message.dataSourceSort !== void 0 &&
        writer.uint32(136).bool(message.dataSourceSort),
      message.defaultAttributeDrillState !== void 0 &&
        writer.uint32(144).bool(message.defaultAttributeDrillState),
      message.dragToRow !== void 0 &&
        writer.uint32(152).bool(message.dragToRow),
      message.dragToColumn !== void 0 &&
        writer.uint32(160).bool(message.dragToColumn),
      message.dragToPage !== void 0 &&
        writer.uint32(168).bool(message.dragToPage),
      message.axisEnum !== void 0 && writer.uint32(240).int32(message.axisEnum),
      message.sortTypeEnum !== void 0 &&
        writer.uint32(248).int32(message.sortTypeEnum),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotField();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.index = reader.int32();
          continue;
        case 2:
          if (tag !== 18) break;
          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) break;
          message.axis = reader.string();
          continue;
        case 4:
          if (tag !== 32) break;
          message.dataField = reader.bool();
          continue;
        case 5:
          if (tag !== 40) break;
          message.showAll = reader.bool();
          continue;
        case 6:
          if (tag !== 48) break;
          message.subtotalTop = reader.bool();
          continue;
        case 7:
          if (tag !== 58) break;
          message.items.push(PivotFieldItem.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) break;
          message.numberFormatId = reader.uint32();
          continue;
        case 9:
          if (tag !== 74) break;
          message.sortType = reader.string();
          continue;
        case 10:
          if (tag !== 80) break;
          message.multipleItemSelectionAllowed = reader.bool();
          continue;
        case 11:
          if (tag !== 90) break;
          message.autoSortScope = PivotAutoSortScope.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 96) break;
          message.compact = reader.bool();
          continue;
        case 13:
          if (tag !== 104) break;
          message.outline = reader.bool();
          continue;
        case 14:
          if (tag !== 112) break;
          message.defaultSubtotal = reader.bool();
          continue;
        case 15:
          if (tag !== 120) break;
          message.measureFilter = reader.bool();
          continue;
        case 16:
          if (tag !== 128) break;
          message.allDrilled = reader.bool();
          continue;
        case 17:
          if (tag !== 136) break;
          message.dataSourceSort = reader.bool();
          continue;
        case 18:
          if (tag !== 144) break;
          message.defaultAttributeDrillState = reader.bool();
          continue;
        case 19:
          if (tag !== 152) break;
          message.dragToRow = reader.bool();
          continue;
        case 20:
          if (tag !== 160) break;
          message.dragToColumn = reader.bool();
          continue;
        case 21:
          if (tag !== 168) break;
          message.dragToPage = reader.bool();
          continue;
        case 30:
          if (tag !== 240) break;
          message.axisEnum = reader.int32();
          continue;
        case 31:
          if (tag !== 248) break;
          message.sortTypeEnum = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotField.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotField();
    return (
      (message.index = object.index ?? 0),
      (message.name = object.name ?? ``),
      (message.axis = object.axis ?? void 0),
      (message.dataField = object.dataField ?? void 0),
      (message.showAll = object.showAll ?? void 0),
      (message.subtotalTop = object.subtotalTop ?? void 0),
      (message.items =
        object.items?.map((item) => PivotFieldItem.fromPartial(item)) || []),
      (message.numberFormatId = object.numberFormatId ?? void 0),
      (message.sortType = object.sortType ?? void 0),
      (message.multipleItemSelectionAllowed =
        object.multipleItemSelectionAllowed ?? void 0),
      (message.autoSortScope =
        object.autoSortScope !== void 0 && object.autoSortScope !== null
          ? PivotAutoSortScope.fromPartial(object.autoSortScope)
          : void 0),
      (message.compact = object.compact ?? void 0),
      (message.outline = object.outline ?? void 0),
      (message.defaultSubtotal = object.defaultSubtotal ?? void 0),
      (message.measureFilter = object.measureFilter ?? void 0),
      (message.allDrilled = object.allDrilled ?? void 0),
      (message.dataSourceSort = object.dataSourceSort ?? void 0),
      (message.defaultAttributeDrillState =
        object.defaultAttributeDrillState ?? void 0),
      (message.dragToRow = object.dragToRow ?? void 0),
      (message.dragToColumn = object.dragToColumn ?? void 0),
      (message.dragToPage = object.dragToPage ?? void 0),
      (message.axisEnum = object.axisEnum ?? void 0),
      (message.sortTypeEnum = object.sortTypeEnum ?? void 0),
      message
    );
  },
};
