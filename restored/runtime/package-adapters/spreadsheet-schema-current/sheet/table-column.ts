// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createTableColumn() {
  return {
    id: 0,
    name: ``,
    totalsRowLabel: void 0,
    totalsRowFunction: void 0,
    dataDxfId: void 0,
    calculatedColumnFormula: void 0,
    calculatedColumnFormulaArray: void 0,
    totalsRowFormula: void 0,
    totalsRowFormulaArray: void 0,
  };
}
export const TableColumn = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.id !== 0 && writer.uint32(8).int32(message.id),
      message.name !== `` && writer.uint32(18).string(message.name),
      message.totalsRowLabel !== void 0 &&
        writer.uint32(26).string(message.totalsRowLabel),
      message.totalsRowFunction !== void 0 &&
        writer.uint32(34).string(message.totalsRowFunction),
      message.dataDxfId !== void 0 &&
        writer.uint32(40).int32(message.dataDxfId),
      message.calculatedColumnFormula !== void 0 &&
        writer.uint32(50).string(message.calculatedColumnFormula),
      message.calculatedColumnFormulaArray !== void 0 &&
        writer.uint32(56).bool(message.calculatedColumnFormulaArray),
      message.totalsRowFormula !== void 0 &&
        writer.uint32(66).string(message.totalsRowFormula),
      message.totalsRowFormulaArray !== void 0 &&
        writer.uint32(72).bool(message.totalsRowFormulaArray),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createTableColumn();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) break;
          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) break;
          message.totalsRowLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) break;
          message.totalsRowFunction = reader.string();
          continue;
        case 5:
          if (tag !== 40) break;
          message.dataDxfId = reader.int32();
          continue;
        case 6:
          if (tag !== 50) break;
          message.calculatedColumnFormula = reader.string();
          continue;
        case 7:
          if (tag !== 56) break;
          message.calculatedColumnFormulaArray = reader.bool();
          continue;
        case 8:
          if (tag !== 66) break;
          message.totalsRowFormula = reader.string();
          continue;
        case 9:
          if (tag !== 72) break;
          message.totalsRowFormulaArray = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return TableColumn.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createTableColumn();
    return (
      (message.id = object.id ?? 0),
      (message.name = object.name ?? ``),
      (message.totalsRowLabel = object.totalsRowLabel ?? void 0),
      (message.totalsRowFunction = object.totalsRowFunction ?? void 0),
      (message.dataDxfId = object.dataDxfId ?? void 0),
      (message.calculatedColumnFormula =
        object.calculatedColumnFormula ?? void 0),
      (message.calculatedColumnFormulaArray =
        object.calculatedColumnFormulaArray ?? void 0),
      (message.totalsRowFormula = object.totalsRowFormula ?? void 0),
      (message.totalsRowFormulaArray = object.totalsRowFormulaArray ?? void 0),
      message
    );
  },
};
