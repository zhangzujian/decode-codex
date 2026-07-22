// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { SlicerCacheItem } from "../../../../vendor/spreadsheet-schema-entry-current";
import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { SlicerCacheOlapLevel } from "./slicer-cache-olap-level";
import { SlicerCacheOlapSelection } from "./slicer-cache-olap-selection";
import { SlicerCachePivotTableReference } from "./slicer-cache-pivot-table-reference";
function createSlicerCache() {
  return {
    name: ``,
    caption: void 0,
    sourceName: void 0,
    type: void 0,
    pivotCacheId: void 0,
    pivotTableIds: [],
    tableId: void 0,
    tableName: void 0,
    columnName: void 0,
    crossFilter: void 0,
    sortOrder: void 0,
    items: [],
    typeEnum: void 0,
    crossFilterEnum: void 0,
    pivotTableRefs: [],
    olap: void 0,
    olapLevels: [],
    olapSelections: [],
  };
}
export const SlicerCache = {
  encode(message, writer = new BinaryWriter()) {
    (message.name !== `` && writer.uint32(10).string(message.name),
      message.caption !== void 0 && writer.uint32(18).string(message.caption),
      message.sourceName !== void 0 &&
        writer.uint32(26).string(message.sourceName),
      message.type !== void 0 && writer.uint32(34).string(message.type),
      message.pivotCacheId !== void 0 &&
        writer.uint32(40).int32(message.pivotCacheId),
      writer.uint32(50).fork());
    for (let item of message.pivotTableIds) writer.int32(item);
    (writer.join(),
      message.tableId !== void 0 && writer.uint32(56).int32(message.tableId),
      message.tableName !== void 0 &&
        writer.uint32(66).string(message.tableName),
      message.columnName !== void 0 &&
        writer.uint32(74).string(message.columnName),
      message.crossFilter !== void 0 &&
        writer.uint32(82).string(message.crossFilter),
      message.sortOrder !== void 0 &&
        writer.uint32(90).string(message.sortOrder));
    for (let item of message.items)
      SlicerCacheItem.encode(item, writer.uint32(98).fork()).join();
    (message.typeEnum !== void 0 && writer.uint32(104).int32(message.typeEnum),
      message.crossFilterEnum !== void 0 &&
        writer.uint32(112).int32(message.crossFilterEnum));
    for (let item of message.pivotTableRefs)
      SlicerCachePivotTableReference.encode(
        item,
        writer.uint32(122).fork(),
      ).join();
    message.olap !== void 0 && writer.uint32(128).bool(message.olap);
    for (let item of message.olapLevels)
      SlicerCacheOlapLevel.encode(item, writer.uint32(138).fork()).join();
    for (let item of message.olapSelections)
      SlicerCacheOlapSelection.encode(item, writer.uint32(146).fork()).join();
    return writer;
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSlicerCache();
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
          message.sourceName = reader.string();
          continue;
        case 4:
          if (tag !== 34) break;
          message.type = reader.string();
          continue;
        case 5:
          if (tag !== 40) break;
          message.pivotCacheId = reader.int32();
          continue;
        case 6:
          if (tag === 48) {
            message.pivotTableIds.push(reader.int32());
            continue;
          }
          if (tag === 50) {
            let packedEnd = reader.uint32() + reader.pos;
            for (; reader.pos < packedEnd;)
              message.pivotTableIds.push(reader.int32());
            continue;
          }
          break;
        case 7:
          if (tag !== 56) break;
          message.tableId = reader.int32();
          continue;
        case 8:
          if (tag !== 66) break;
          message.tableName = reader.string();
          continue;
        case 9:
          if (tag !== 74) break;
          message.columnName = reader.string();
          continue;
        case 10:
          if (tag !== 82) break;
          message.crossFilter = reader.string();
          continue;
        case 11:
          if (tag !== 90) break;
          message.sortOrder = reader.string();
          continue;
        case 12:
          if (tag !== 98) break;
          message.items.push(SlicerCacheItem.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 104) break;
          message.typeEnum = reader.int32();
          continue;
        case 14:
          if (tag !== 112) break;
          message.crossFilterEnum = reader.int32();
          continue;
        case 15:
          if (tag !== 122) break;
          message.pivotTableRefs.push(
            SlicerCachePivotTableReference.decode(reader, reader.uint32()),
          );
          continue;
        case 16:
          if (tag !== 128) break;
          message.olap = reader.bool();
          continue;
        case 17:
          if (tag !== 138) break;
          message.olapLevels.push(
            SlicerCacheOlapLevel.decode(reader, reader.uint32()),
          );
          continue;
        case 18:
          if (tag !== 146) break;
          message.olapSelections.push(
            SlicerCacheOlapSelection.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return SlicerCache.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSlicerCache();
    return (
      (message.name = object.name ?? ``),
      (message.caption = object.caption ?? void 0),
      (message.sourceName = object.sourceName ?? void 0),
      (message.type = object.type ?? void 0),
      (message.pivotCacheId = object.pivotCacheId ?? void 0),
      (message.pivotTableIds = object.pivotTableIds?.map((item) => item) || []),
      (message.tableId = object.tableId ?? void 0),
      (message.tableName = object.tableName ?? void 0),
      (message.columnName = object.columnName ?? void 0),
      (message.crossFilter = object.crossFilter ?? void 0),
      (message.sortOrder = object.sortOrder ?? void 0),
      (message.items =
        object.items?.map((item) => SlicerCacheItem.fromPartial(item)) || []),
      (message.typeEnum = object.typeEnum ?? void 0),
      (message.crossFilterEnum = object.crossFilterEnum ?? void 0),
      (message.pivotTableRefs =
        object.pivotTableRefs?.map((item) =>
          SlicerCachePivotTableReference.fromPartial(item),
        ) || []),
      (message.olap = object.olap ?? void 0),
      (message.olapLevels =
        object.olapLevels?.map((item) =>
          SlicerCacheOlapLevel.fromPartial(item),
        ) || []),
      (message.olapSelections =
        object.olapSelections?.map((item) =>
          SlicerCacheOlapSelection.fromPartial(item),
        ) || []),
      message
    );
  },
};
