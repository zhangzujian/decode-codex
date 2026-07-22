// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import {
  AutoFilter,
  SortState,
  TableStyleInfo,
} from "../../../../vendor/spreadsheet-schema-entry-current";
import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { TableColumn } from "./table-column";
function createTable() {
  return {
    id: 0,
    name: ``,
    displayName: ``,
    ref: ``,
    columns: [],
    style: void 0,
    totalsRowShown: void 0,
    headerRowCount: void 0,
    totalsRowCount: void 0,
    autoFilter: void 0,
    dataDxfId: void 0,
    headerRowCellStyle: void 0,
    sortState: void 0,
    headerRowBorderDxfId: void 0,
  };
}
export const Table = {
  encode(message, writer = new BinaryWriter()) {
    (message.id !== 0 && writer.uint32(8).int32(message.id),
      message.name !== `` && writer.uint32(18).string(message.name),
      message.displayName !== `` &&
        writer.uint32(26).string(message.displayName),
      message.ref !== `` && writer.uint32(34).string(message.ref));
    for (let item of message.columns)
      TableColumn.encode(item, writer.uint32(42).fork()).join();
    return (
      message.style !== void 0 &&
        TableStyleInfo.encode(message.style, writer.uint32(50).fork()).join(),
      message.totalsRowShown !== void 0 &&
        writer.uint32(56).bool(message.totalsRowShown),
      message.headerRowCount !== void 0 &&
        writer.uint32(64).int32(message.headerRowCount),
      message.totalsRowCount !== void 0 &&
        writer.uint32(72).int32(message.totalsRowCount),
      message.autoFilter !== void 0 &&
        AutoFilter.encode(message.autoFilter, writer.uint32(82).fork()).join(),
      message.dataDxfId !== void 0 &&
        writer.uint32(88).int32(message.dataDxfId),
      message.headerRowCellStyle !== void 0 &&
        writer.uint32(98).string(message.headerRowCellStyle),
      message.sortState !== void 0 &&
        SortState.encode(message.sortState, writer.uint32(106).fork()).join(),
      message.headerRowBorderDxfId !== void 0 &&
        writer.uint32(112).int32(message.headerRowBorderDxfId),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createTable();
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
          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 34) break;
          message.ref = reader.string();
          continue;
        case 5:
          if (tag !== 42) break;
          message.columns.push(TableColumn.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) break;
          message.style = TableStyleInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) break;
          message.totalsRowShown = reader.bool();
          continue;
        case 8:
          if (tag !== 64) break;
          message.headerRowCount = reader.int32();
          continue;
        case 9:
          if (tag !== 72) break;
          message.totalsRowCount = reader.int32();
          continue;
        case 10:
          if (tag !== 82) break;
          message.autoFilter = AutoFilter.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) break;
          message.dataDxfId = reader.int32();
          continue;
        case 12:
          if (tag !== 98) break;
          message.headerRowCellStyle = reader.string();
          continue;
        case 13:
          if (tag !== 106) break;
          message.sortState = SortState.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 112) break;
          message.headerRowBorderDxfId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return Table.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createTable();
    return (
      (message.id = object.id ?? 0),
      (message.name = object.name ?? ``),
      (message.displayName = object.displayName ?? ``),
      (message.ref = object.ref ?? ``),
      (message.columns =
        object.columns?.map((item) => TableColumn.fromPartial(item)) || []),
      (message.style =
        object.style !== void 0 && object.style !== null
          ? TableStyleInfo.fromPartial(object.style)
          : void 0),
      (message.totalsRowShown = object.totalsRowShown ?? void 0),
      (message.headerRowCount = object.headerRowCount ?? void 0),
      (message.totalsRowCount = object.totalsRowCount ?? void 0),
      (message.autoFilter =
        object.autoFilter !== void 0 && object.autoFilter !== null
          ? AutoFilter.fromPartial(object.autoFilter)
          : void 0),
      (message.dataDxfId = object.dataDxfId ?? void 0),
      (message.headerRowCellStyle = object.headerRowCellStyle ?? void 0),
      (message.sortState =
        object.sortState !== void 0 && object.sortState !== null
          ? SortState.fromPartial(object.sortState)
          : void 0),
      (message.headerRowBorderDxfId = object.headerRowBorderDxfId ?? void 0),
      message
    );
  },
};
