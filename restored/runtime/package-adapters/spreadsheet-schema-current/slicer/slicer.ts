// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { AnchorMarker } from "../../../../vendor/spreadsheet-schema-entry-current";
import {
  BinaryReader,
  BinaryWriter,
  presentationTextStyle,
  presentationTr,
  presentationYn,
} from "../../presentation-current";
function createSlicer() {
  return {
    name: ``,
    caption: ``,
    cache: ``,
    lockedPosition: void 0,
    displayHeader: void 0,
    showNoDataItems: void 0,
    sortBy: void 0,
    style: void 0,
    fromAnchor: void 0,
    toAnchor: void 0,
    cacheId: void 0,
    width: void 0,
    height: void 0,
    isMultiSelect: void 0,
    fill: void 0,
    line: void 0,
    headerTextStyle: void 0,
    sortByEnum: void 0,
    columnCount: void 0,
    rowHeight: void 0,
    level: void 0,
    startItem: void 0,
  };
}
export const Slicer = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.name !== `` && writer.uint32(10).string(message.name),
      message.caption !== `` && writer.uint32(18).string(message.caption),
      message.cache !== `` && writer.uint32(26).string(message.cache),
      message.lockedPosition !== void 0 &&
        writer.uint32(32).bool(message.lockedPosition),
      message.displayHeader !== void 0 &&
        writer.uint32(40).bool(message.displayHeader),
      message.showNoDataItems !== void 0 &&
        writer.uint32(48).bool(message.showNoDataItems),
      message.sortBy !== void 0 && writer.uint32(58).string(message.sortBy),
      message.style !== void 0 && writer.uint32(66).string(message.style),
      message.fromAnchor !== void 0 &&
        AnchorMarker.encode(
          message.fromAnchor,
          writer.uint32(74).fork(),
        ).join(),
      message.toAnchor !== void 0 &&
        AnchorMarker.encode(message.toAnchor, writer.uint32(82).fork()).join(),
      message.cacheId !== void 0 && writer.uint32(88).int32(message.cacheId),
      message.width !== void 0 && writer.uint32(97).double(message.width),
      message.height !== void 0 && writer.uint32(105).double(message.height),
      message.isMultiSelect !== void 0 &&
        writer.uint32(112).bool(message.isMultiSelect),
      message.fill !== void 0 &&
        presentationYn.encode(message.fill, writer.uint32(122).fork()).join(),
      message.line !== void 0 &&
        presentationTr.encode(message.line, writer.uint32(130).fork()).join(),
      message.headerTextStyle !== void 0 &&
        presentationTextStyle
          .encode(message.headerTextStyle, writer.uint32(138).fork())
          .join(),
      message.sortByEnum !== void 0 &&
        writer.uint32(144).int32(message.sortByEnum),
      message.columnCount !== void 0 &&
        writer.uint32(152).int32(message.columnCount),
      message.rowHeight !== void 0 &&
        writer.uint32(160).uint32(message.rowHeight),
      message.level !== void 0 && writer.uint32(168).uint32(message.level),
      message.startItem !== void 0 &&
        writer.uint32(176).uint32(message.startItem),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSlicer();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) break;
          message.caption = reader.string();
          continue;
        case 3:
          if (tag !== 26) break;
          message.cache = reader.string();
          continue;
        case 4:
          if (tag !== 32) break;
          message.lockedPosition = reader.bool();
          continue;
        case 5:
          if (tag !== 40) break;
          message.displayHeader = reader.bool();
          continue;
        case 6:
          if (tag !== 48) break;
          message.showNoDataItems = reader.bool();
          continue;
        case 7:
          if (tag !== 58) break;
          message.sortBy = reader.string();
          continue;
        case 8:
          if (tag !== 66) break;
          message.style = reader.string();
          continue;
        case 9:
          if (tag !== 74) break;
          message.fromAnchor = AnchorMarker.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) break;
          message.toAnchor = AnchorMarker.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) break;
          message.cacheId = reader.int32();
          continue;
        case 12:
          if (tag !== 97) break;
          message.width = reader.double();
          continue;
        case 13:
          if (tag !== 105) break;
          message.height = reader.double();
          continue;
        case 14:
          if (tag !== 112) break;
          message.isMultiSelect = reader.bool();
          continue;
        case 15:
          if (tag !== 122) break;
          message.fill = presentationYn.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) break;
          message.line = presentationTr.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) break;
          message.headerTextStyle = presentationTextStyle.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 18:
          if (tag !== 144) break;
          message.sortByEnum = reader.int32();
          continue;
        case 19:
          if (tag !== 152) break;
          message.columnCount = reader.int32();
          continue;
        case 20:
          if (tag !== 160) break;
          message.rowHeight = reader.uint32();
          continue;
        case 21:
          if (tag !== 168) break;
          message.level = reader.uint32();
          continue;
        case 22:
          if (tag !== 176) break;
          message.startItem = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return Slicer.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSlicer();
    return (
      (message.name = object.name ?? ``),
      (message.caption = object.caption ?? ``),
      (message.cache = object.cache ?? ``),
      (message.lockedPosition = object.lockedPosition ?? void 0),
      (message.displayHeader = object.displayHeader ?? void 0),
      (message.showNoDataItems = object.showNoDataItems ?? void 0),
      (message.sortBy = object.sortBy ?? void 0),
      (message.style = object.style ?? void 0),
      (message.fromAnchor =
        object.fromAnchor !== void 0 && object.fromAnchor !== null
          ? AnchorMarker.fromPartial(object.fromAnchor)
          : void 0),
      (message.toAnchor =
        object.toAnchor !== void 0 && object.toAnchor !== null
          ? AnchorMarker.fromPartial(object.toAnchor)
          : void 0),
      (message.cacheId = object.cacheId ?? void 0),
      (message.width = object.width ?? void 0),
      (message.height = object.height ?? void 0),
      (message.isMultiSelect = object.isMultiSelect ?? void 0),
      (message.fill =
        object.fill !== void 0 && object.fill !== null
          ? presentationYn.fromPartial(object.fill)
          : void 0),
      (message.line =
        object.line !== void 0 && object.line !== null
          ? presentationTr.fromPartial(object.line)
          : void 0),
      (message.headerTextStyle =
        object.headerTextStyle !== void 0 && object.headerTextStyle !== null
          ? presentationTextStyle.fromPartial(object.headerTextStyle)
          : void 0),
      (message.sortByEnum = object.sortByEnum ?? void 0),
      (message.columnCount = object.columnCount ?? void 0),
      (message.rowHeight = object.rowHeight ?? void 0),
      (message.level = object.level ?? void 0),
      (message.startItem = object.startItem ?? void 0),
      message
    );
  },
};
