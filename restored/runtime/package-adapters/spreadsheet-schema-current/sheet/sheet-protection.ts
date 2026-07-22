// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createSheetProtection() {
  return {
    password: void 0,
    algorithmName: void 0,
    hashValue: void 0,
    saltValue: void 0,
    spinCount: void 0,
    sheet: void 0,
    objects: void 0,
    scenarios: void 0,
    formatCells: void 0,
    formatColumns: void 0,
    formatRows: void 0,
    insertColumns: void 0,
    insertRows: void 0,
    insertHyperlinks: void 0,
    deleteColumns: void 0,
    deleteRows: void 0,
    selectLockedCells: void 0,
    sort: void 0,
    autoFilter: void 0,
    pivotTables: void 0,
    selectUnlockedCells: void 0,
  };
}
export const SheetProtection = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.password !== void 0 && writer.uint32(10).bytes(message.password),
      message.algorithmName !== void 0 &&
        writer.uint32(18).string(message.algorithmName),
      message.hashValue !== void 0 &&
        writer.uint32(26).string(message.hashValue),
      message.saltValue !== void 0 &&
        writer.uint32(34).string(message.saltValue),
      message.spinCount !== void 0 &&
        writer.uint32(40).uint32(message.spinCount),
      message.sheet !== void 0 && writer.uint32(48).bool(message.sheet),
      message.objects !== void 0 && writer.uint32(56).bool(message.objects),
      message.scenarios !== void 0 && writer.uint32(64).bool(message.scenarios),
      message.formatCells !== void 0 &&
        writer.uint32(72).bool(message.formatCells),
      message.formatColumns !== void 0 &&
        writer.uint32(80).bool(message.formatColumns),
      message.formatRows !== void 0 &&
        writer.uint32(88).bool(message.formatRows),
      message.insertColumns !== void 0 &&
        writer.uint32(96).bool(message.insertColumns),
      message.insertRows !== void 0 &&
        writer.uint32(104).bool(message.insertRows),
      message.insertHyperlinks !== void 0 &&
        writer.uint32(112).bool(message.insertHyperlinks),
      message.deleteColumns !== void 0 &&
        writer.uint32(120).bool(message.deleteColumns),
      message.deleteRows !== void 0 &&
        writer.uint32(128).bool(message.deleteRows),
      message.selectLockedCells !== void 0 &&
        writer.uint32(136).bool(message.selectLockedCells),
      message.sort !== void 0 && writer.uint32(144).bool(message.sort),
      message.autoFilter !== void 0 &&
        writer.uint32(152).bool(message.autoFilter),
      message.pivotTables !== void 0 &&
        writer.uint32(160).bool(message.pivotTables),
      message.selectUnlockedCells !== void 0 &&
        writer.uint32(168).bool(message.selectUnlockedCells),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSheetProtection();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.password = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) break;
          message.algorithmName = reader.string();
          continue;
        case 3:
          if (tag !== 26) break;
          message.hashValue = reader.string();
          continue;
        case 4:
          if (tag !== 34) break;
          message.saltValue = reader.string();
          continue;
        case 5:
          if (tag !== 40) break;
          message.spinCount = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) break;
          message.sheet = reader.bool();
          continue;
        case 7:
          if (tag !== 56) break;
          message.objects = reader.bool();
          continue;
        case 8:
          if (tag !== 64) break;
          message.scenarios = reader.bool();
          continue;
        case 9:
          if (tag !== 72) break;
          message.formatCells = reader.bool();
          continue;
        case 10:
          if (tag !== 80) break;
          message.formatColumns = reader.bool();
          continue;
        case 11:
          if (tag !== 88) break;
          message.formatRows = reader.bool();
          continue;
        case 12:
          if (tag !== 96) break;
          message.insertColumns = reader.bool();
          continue;
        case 13:
          if (tag !== 104) break;
          message.insertRows = reader.bool();
          continue;
        case 14:
          if (tag !== 112) break;
          message.insertHyperlinks = reader.bool();
          continue;
        case 15:
          if (tag !== 120) break;
          message.deleteColumns = reader.bool();
          continue;
        case 16:
          if (tag !== 128) break;
          message.deleteRows = reader.bool();
          continue;
        case 17:
          if (tag !== 136) break;
          message.selectLockedCells = reader.bool();
          continue;
        case 18:
          if (tag !== 144) break;
          message.sort = reader.bool();
          continue;
        case 19:
          if (tag !== 152) break;
          message.autoFilter = reader.bool();
          continue;
        case 20:
          if (tag !== 160) break;
          message.pivotTables = reader.bool();
          continue;
        case 21:
          if (tag !== 168) break;
          message.selectUnlockedCells = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return SheetProtection.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSheetProtection();
    return (
      (message.password = object.password ?? void 0),
      (message.algorithmName = object.algorithmName ?? void 0),
      (message.hashValue = object.hashValue ?? void 0),
      (message.saltValue = object.saltValue ?? void 0),
      (message.spinCount = object.spinCount ?? void 0),
      (message.sheet = object.sheet ?? void 0),
      (message.objects = object.objects ?? void 0),
      (message.scenarios = object.scenarios ?? void 0),
      (message.formatCells = object.formatCells ?? void 0),
      (message.formatColumns = object.formatColumns ?? void 0),
      (message.formatRows = object.formatRows ?? void 0),
      (message.insertColumns = object.insertColumns ?? void 0),
      (message.insertRows = object.insertRows ?? void 0),
      (message.insertHyperlinks = object.insertHyperlinks ?? void 0),
      (message.deleteColumns = object.deleteColumns ?? void 0),
      (message.deleteRows = object.deleteRows ?? void 0),
      (message.selectLockedCells = object.selectLockedCells ?? void 0),
      (message.sort = object.sort ?? void 0),
      (message.autoFilter = object.autoFilter ?? void 0),
      (message.pivotTables = object.pivotTables ?? void 0),
      (message.selectUnlockedCells = object.selectUnlockedCells ?? void 0),
      message
    );
  },
};
