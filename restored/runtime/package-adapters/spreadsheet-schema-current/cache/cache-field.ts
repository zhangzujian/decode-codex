// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { FieldGroup } from "../../../../vendor/spreadsheet-schema-entry-current";
import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotCacheCachedUniqueName } from "./pivot-cache-cached-unique-name";
import { SharedItems } from "./shared-items";
function createCacheField() {
  return {
    name: ``,
    numFmtId: void 0,
    sharedItems: void 0,
    fieldGroup: void 0,
    caption: void 0,
    hierarchy: void 0,
    level: void 0,
    cachedUniqueNames: [],
    formula: void 0,
    databaseField: void 0,
  };
}
export const CacheField = {
  encode(message, writer = new BinaryWriter()) {
    (message.name !== `` && writer.uint32(10).string(message.name),
      message.numFmtId !== void 0 && writer.uint32(16).uint32(message.numFmtId),
      message.sharedItems !== void 0 &&
        SharedItems.encode(
          message.sharedItems,
          writer.uint32(26).fork(),
        ).join(),
      message.fieldGroup !== void 0 &&
        FieldGroup.encode(message.fieldGroup, writer.uint32(34).fork()).join(),
      message.caption !== void 0 && writer.uint32(42).string(message.caption),
      message.hierarchy !== void 0 &&
        writer.uint32(48).int32(message.hierarchy),
      message.level !== void 0 && writer.uint32(56).uint32(message.level));
    for (let item of message.cachedUniqueNames)
      PivotCacheCachedUniqueName.encode(item, writer.uint32(66).fork()).join();
    return (
      message.formula !== void 0 && writer.uint32(74).string(message.formula),
      message.databaseField !== void 0 &&
        writer.uint32(80).bool(message.databaseField),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createCacheField();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) break;
          message.numFmtId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) break;
          message.sharedItems = SharedItems.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) break;
          message.fieldGroup = FieldGroup.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) break;
          message.caption = reader.string();
          continue;
        case 6:
          if (tag !== 48) break;
          message.hierarchy = reader.int32();
          continue;
        case 7:
          if (tag !== 56) break;
          message.level = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) break;
          message.cachedUniqueNames.push(
            PivotCacheCachedUniqueName.decode(reader, reader.uint32()),
          );
          continue;
        case 9:
          if (tag !== 74) break;
          message.formula = reader.string();
          continue;
        case 10:
          if (tag !== 80) break;
          message.databaseField = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return CacheField.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createCacheField();
    return (
      (message.name = object.name ?? ``),
      (message.numFmtId = object.numFmtId ?? void 0),
      (message.sharedItems =
        object.sharedItems !== void 0 && object.sharedItems !== null
          ? SharedItems.fromPartial(object.sharedItems)
          : void 0),
      (message.fieldGroup =
        object.fieldGroup !== void 0 && object.fieldGroup !== null
          ? FieldGroup.fromPartial(object.fieldGroup)
          : void 0),
      (message.caption = object.caption ?? void 0),
      (message.hierarchy = object.hierarchy ?? void 0),
      (message.level = object.level ?? void 0),
      (message.cachedUniqueNames =
        object.cachedUniqueNames?.map((item) =>
          PivotCacheCachedUniqueName.fromPartial(item),
        ) || []),
      (message.formula = object.formula ?? void 0),
      (message.databaseField = object.databaseField ?? void 0),
      message
    );
  },
};
