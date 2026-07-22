// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { CacheField } from "./cache-field";
import { CacheHierarchy } from "./cache-hierarchy";
import { PivotCacheDimension } from "./pivot-cache-dimension";
import { PivotCacheMeasureDimensionMap } from "./pivot-cache-measure-dimension-map";
import { PivotCacheMeasureGroup } from "./pivot-cache-measure-group";
import { PivotCacheRecord } from "./pivot-cache-record";
function createPivotCache() {
  return {
    id: 0,
    name: void 0,
    fields: [],
    worksheetSourceReference: void 0,
    worksheetSourceSheet: void 0,
    refreshedBy: void 0,
    refreshedDate: void 0,
    createdVersion: void 0,
    refreshedVersion: void 0,
    minRefreshableVersion: void 0,
    recordCount: void 0,
    extensionListXml: void 0,
    worksheetSourceName: void 0,
    sourceType: void 0,
    connectionId: void 0,
    saveData: void 0,
    backgroundQuery: void 0,
    supportSubquery: void 0,
    supportAdvancedDrill: void 0,
    cacheHierarchies: [],
    dimensions: [],
    measureGroups: [],
    maps: [],
    records: [],
    recordsCount: void 0,
    refreshOnLoad: void 0,
    workbookExtensionCache: void 0,
  };
}
export const PivotCache = {
  encode(message, writer = new BinaryWriter()) {
    (message.id !== 0 && writer.uint32(8).int32(message.id),
      message.name !== void 0 && writer.uint32(18).string(message.name));
    for (let item of message.fields)
      CacheField.encode(item, writer.uint32(26).fork()).join();
    (message.worksheetSourceReference !== void 0 &&
      writer.uint32(50).string(message.worksheetSourceReference),
      message.worksheetSourceSheet !== void 0 &&
        writer.uint32(58).string(message.worksheetSourceSheet),
      message.refreshedBy !== void 0 &&
        writer.uint32(66).string(message.refreshedBy),
      message.refreshedDate !== void 0 &&
        writer.uint32(74).string(message.refreshedDate),
      message.createdVersion !== void 0 &&
        writer.uint32(80).uint32(message.createdVersion),
      message.refreshedVersion !== void 0 &&
        writer.uint32(88).uint32(message.refreshedVersion),
      message.minRefreshableVersion !== void 0 &&
        writer.uint32(96).uint32(message.minRefreshableVersion),
      message.recordCount !== void 0 &&
        writer.uint32(104).uint32(message.recordCount),
      message.extensionListXml !== void 0 &&
        writer.uint32(114).string(message.extensionListXml),
      message.worksheetSourceName !== void 0 &&
        writer.uint32(122).string(message.worksheetSourceName),
      message.sourceType !== void 0 &&
        writer.uint32(128).int32(message.sourceType),
      message.connectionId !== void 0 &&
        writer.uint32(136).uint32(message.connectionId),
      message.saveData !== void 0 && writer.uint32(144).bool(message.saveData),
      message.backgroundQuery !== void 0 &&
        writer.uint32(152).bool(message.backgroundQuery),
      message.supportSubquery !== void 0 &&
        writer.uint32(160).bool(message.supportSubquery),
      message.supportAdvancedDrill !== void 0 &&
        writer.uint32(168).bool(message.supportAdvancedDrill));
    for (let item of message.cacheHierarchies)
      CacheHierarchy.encode(item, writer.uint32(178).fork()).join();
    for (let item of message.dimensions)
      PivotCacheDimension.encode(item, writer.uint32(194).fork()).join();
    for (let item of message.measureGroups)
      PivotCacheMeasureGroup.encode(item, writer.uint32(202).fork()).join();
    for (let item of message.maps)
      PivotCacheMeasureDimensionMap.encode(
        item,
        writer.uint32(210).fork(),
      ).join();
    for (let item of message.records)
      PivotCacheRecord.encode(item, writer.uint32(218).fork()).join();
    return (
      message.recordsCount !== void 0 &&
        writer.uint32(224).uint32(message.recordsCount),
      message.refreshOnLoad !== void 0 &&
        writer.uint32(232).bool(message.refreshOnLoad),
      message.workbookExtensionCache !== void 0 &&
        writer.uint32(240).bool(message.workbookExtensionCache),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotCache();
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
          message.fields.push(CacheField.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) break;
          message.worksheetSourceReference = reader.string();
          continue;
        case 7:
          if (tag !== 58) break;
          message.worksheetSourceSheet = reader.string();
          continue;
        case 8:
          if (tag !== 66) break;
          message.refreshedBy = reader.string();
          continue;
        case 9:
          if (tag !== 74) break;
          message.refreshedDate = reader.string();
          continue;
        case 10:
          if (tag !== 80) break;
          message.createdVersion = reader.uint32();
          continue;
        case 11:
          if (tag !== 88) break;
          message.refreshedVersion = reader.uint32();
          continue;
        case 12:
          if (tag !== 96) break;
          message.minRefreshableVersion = reader.uint32();
          continue;
        case 13:
          if (tag !== 104) break;
          message.recordCount = reader.uint32();
          continue;
        case 14:
          if (tag !== 114) break;
          message.extensionListXml = reader.string();
          continue;
        case 15:
          if (tag !== 122) break;
          message.worksheetSourceName = reader.string();
          continue;
        case 16:
          if (tag !== 128) break;
          message.sourceType = reader.int32();
          continue;
        case 17:
          if (tag !== 136) break;
          message.connectionId = reader.uint32();
          continue;
        case 18:
          if (tag !== 144) break;
          message.saveData = reader.bool();
          continue;
        case 19:
          if (tag !== 152) break;
          message.backgroundQuery = reader.bool();
          continue;
        case 20:
          if (tag !== 160) break;
          message.supportSubquery = reader.bool();
          continue;
        case 21:
          if (tag !== 168) break;
          message.supportAdvancedDrill = reader.bool();
          continue;
        case 22:
          if (tag !== 178) break;
          message.cacheHierarchies.push(
            CacheHierarchy.decode(reader, reader.uint32()),
          );
          continue;
        case 24:
          if (tag !== 194) break;
          message.dimensions.push(
            PivotCacheDimension.decode(reader, reader.uint32()),
          );
          continue;
        case 25:
          if (tag !== 202) break;
          message.measureGroups.push(
            PivotCacheMeasureGroup.decode(reader, reader.uint32()),
          );
          continue;
        case 26:
          if (tag !== 210) break;
          message.maps.push(
            PivotCacheMeasureDimensionMap.decode(reader, reader.uint32()),
          );
          continue;
        case 27:
          if (tag !== 218) break;
          message.records.push(
            PivotCacheRecord.decode(reader, reader.uint32()),
          );
          continue;
        case 28:
          if (tag !== 224) break;
          message.recordsCount = reader.uint32();
          continue;
        case 29:
          if (tag !== 232) break;
          message.refreshOnLoad = reader.bool();
          continue;
        case 30:
          if (tag !== 240) break;
          message.workbookExtensionCache = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotCache.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotCache();
    return (
      (message.id = object.id ?? 0),
      (message.name = object.name ?? void 0),
      (message.fields =
        object.fields?.map((item) => CacheField.fromPartial(item)) || []),
      (message.worksheetSourceReference =
        object.worksheetSourceReference ?? void 0),
      (message.worksheetSourceSheet = object.worksheetSourceSheet ?? void 0),
      (message.refreshedBy = object.refreshedBy ?? void 0),
      (message.refreshedDate = object.refreshedDate ?? void 0),
      (message.createdVersion = object.createdVersion ?? void 0),
      (message.refreshedVersion = object.refreshedVersion ?? void 0),
      (message.minRefreshableVersion = object.minRefreshableVersion ?? void 0),
      (message.recordCount = object.recordCount ?? void 0),
      (message.extensionListXml = object.extensionListXml ?? void 0),
      (message.worksheetSourceName = object.worksheetSourceName ?? void 0),
      (message.sourceType = object.sourceType ?? void 0),
      (message.connectionId = object.connectionId ?? void 0),
      (message.saveData = object.saveData ?? void 0),
      (message.backgroundQuery = object.backgroundQuery ?? void 0),
      (message.supportSubquery = object.supportSubquery ?? void 0),
      (message.supportAdvancedDrill = object.supportAdvancedDrill ?? void 0),
      (message.cacheHierarchies =
        object.cacheHierarchies?.map((item) =>
          CacheHierarchy.fromPartial(item),
        ) || []),
      (message.dimensions =
        object.dimensions?.map((item) =>
          PivotCacheDimension.fromPartial(item),
        ) || []),
      (message.measureGroups =
        object.measureGroups?.map((item) =>
          PivotCacheMeasureGroup.fromPartial(item),
        ) || []),
      (message.maps =
        object.maps?.map((item) =>
          PivotCacheMeasureDimensionMap.fromPartial(item),
        ) || []),
      (message.records =
        object.records?.map((item) => PivotCacheRecord.fromPartial(item)) ||
        []),
      (message.recordsCount = object.recordsCount ?? void 0),
      (message.refreshOnLoad = object.refreshOnLoad ?? void 0),
      (message.workbookExtensionCache =
        object.workbookExtensionCache ?? void 0),
      message
    );
  },
};
