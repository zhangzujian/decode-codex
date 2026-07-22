// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createCellFormat() {
  return {
    numFmtId: void 0,
    fontId: void 0,
    fillId: void 0,
    borderId: void 0,
    xfId: void 0,
    applyFill: void 0,
    applyFont: void 0,
    applyBorder: void 0,
    applyAlignment: void 0,
    horizontalAlignment: void 0,
    verticalAlignment: void 0,
    applyNumberFormat: void 0,
    applyProtection: void 0,
    wrapText: void 0,
    shrinkToFit: void 0,
    featurePropertyBagIndex: void 0,
    locked: void 0,
    formulaHidden: void 0,
  };
}
export const CellFormat = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.numFmtId !== void 0 && writer.uint32(8).int32(message.numFmtId),
      message.fontId !== void 0 && writer.uint32(16).int32(message.fontId),
      message.fillId !== void 0 && writer.uint32(24).int32(message.fillId),
      message.borderId !== void 0 && writer.uint32(32).int32(message.borderId),
      message.xfId !== void 0 && writer.uint32(40).int32(message.xfId),
      message.applyFill !== void 0 && writer.uint32(48).bool(message.applyFill),
      message.applyFont !== void 0 && writer.uint32(56).bool(message.applyFont),
      message.applyBorder !== void 0 &&
        writer.uint32(64).bool(message.applyBorder),
      message.applyAlignment !== void 0 &&
        writer.uint32(72).bool(message.applyAlignment),
      message.horizontalAlignment !== void 0 &&
        writer.uint32(82).string(message.horizontalAlignment),
      message.verticalAlignment !== void 0 &&
        writer.uint32(90).string(message.verticalAlignment),
      message.applyNumberFormat !== void 0 &&
        writer.uint32(96).bool(message.applyNumberFormat),
      message.applyProtection !== void 0 &&
        writer.uint32(104).bool(message.applyProtection),
      message.wrapText !== void 0 && writer.uint32(112).bool(message.wrapText),
      message.shrinkToFit !== void 0 &&
        writer.uint32(120).bool(message.shrinkToFit),
      message.featurePropertyBagIndex !== void 0 &&
        writer.uint32(128).uint32(message.featurePropertyBagIndex),
      message.locked !== void 0 && writer.uint32(136).bool(message.locked),
      message.formulaHidden !== void 0 &&
        writer.uint32(144).bool(message.formulaHidden),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createCellFormat();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.numFmtId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) break;
          message.fontId = reader.int32();
          continue;
        case 3:
          if (tag !== 24) break;
          message.fillId = reader.int32();
          continue;
        case 4:
          if (tag !== 32) break;
          message.borderId = reader.int32();
          continue;
        case 5:
          if (tag !== 40) break;
          message.xfId = reader.int32();
          continue;
        case 6:
          if (tag !== 48) break;
          message.applyFill = reader.bool();
          continue;
        case 7:
          if (tag !== 56) break;
          message.applyFont = reader.bool();
          continue;
        case 8:
          if (tag !== 64) break;
          message.applyBorder = reader.bool();
          continue;
        case 9:
          if (tag !== 72) break;
          message.applyAlignment = reader.bool();
          continue;
        case 10:
          if (tag !== 82) break;
          message.horizontalAlignment = reader.string();
          continue;
        case 11:
          if (tag !== 90) break;
          message.verticalAlignment = reader.string();
          continue;
        case 12:
          if (tag !== 96) break;
          message.applyNumberFormat = reader.bool();
          continue;
        case 13:
          if (tag !== 104) break;
          message.applyProtection = reader.bool();
          continue;
        case 14:
          if (tag !== 112) break;
          message.wrapText = reader.bool();
          continue;
        case 15:
          if (tag !== 120) break;
          message.shrinkToFit = reader.bool();
          continue;
        case 16:
          if (tag !== 128) break;
          message.featurePropertyBagIndex = reader.uint32();
          continue;
        case 17:
          if (tag !== 136) break;
          message.locked = reader.bool();
          continue;
        case 18:
          if (tag !== 144) break;
          message.formulaHidden = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return CellFormat.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createCellFormat();
    return (
      (message.numFmtId = object.numFmtId ?? void 0),
      (message.fontId = object.fontId ?? void 0),
      (message.fillId = object.fillId ?? void 0),
      (message.borderId = object.borderId ?? void 0),
      (message.xfId = object.xfId ?? void 0),
      (message.applyFill = object.applyFill ?? void 0),
      (message.applyFont = object.applyFont ?? void 0),
      (message.applyBorder = object.applyBorder ?? void 0),
      (message.applyAlignment = object.applyAlignment ?? void 0),
      (message.horizontalAlignment = object.horizontalAlignment ?? void 0),
      (message.verticalAlignment = object.verticalAlignment ?? void 0),
      (message.applyNumberFormat = object.applyNumberFormat ?? void 0),
      (message.applyProtection = object.applyProtection ?? void 0),
      (message.wrapText = object.wrapText ?? void 0),
      (message.shrinkToFit = object.shrinkToFit ?? void 0),
      (message.featurePropertyBagIndex =
        object.featurePropertyBagIndex ?? void 0),
      (message.locked = object.locked ?? void 0),
      (message.formulaHidden = object.formulaHidden ?? void 0),
      message
    );
  },
};
