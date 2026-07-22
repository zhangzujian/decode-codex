// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createCacheHierarchy() {
  return {
    uniqueName: ``,
    caption: void 0,
    measure: void 0,
    attribute: void 0,
    defaultMemberUniqueName: void 0,
    allUniqueName: void 0,
    dimensionUniqueName: void 0,
    measureGroup: void 0,
    count: void 0,
    oneField: void 0,
    memberValueDatatype: void 0,
    unbalanced: void 0,
    hidden: void 0,
    fieldUsageIndexes: [],
    time: void 0,
  };
}
export const CacheHierarchy = {
  encode(message, writer = new BinaryWriter()) {
    (message.uniqueName !== `` && writer.uint32(10).string(message.uniqueName),
      message.caption !== void 0 && writer.uint32(18).string(message.caption),
      message.measure !== void 0 && writer.uint32(24).bool(message.measure),
      message.attribute !== void 0 && writer.uint32(32).bool(message.attribute),
      message.defaultMemberUniqueName !== void 0 &&
        writer.uint32(42).string(message.defaultMemberUniqueName),
      message.allUniqueName !== void 0 &&
        writer.uint32(50).string(message.allUniqueName),
      message.dimensionUniqueName !== void 0 &&
        writer.uint32(58).string(message.dimensionUniqueName),
      message.measureGroup !== void 0 &&
        writer.uint32(74).string(message.measureGroup),
      message.count !== void 0 && writer.uint32(80).uint32(message.count),
      message.oneField !== void 0 && writer.uint32(88).bool(message.oneField),
      message.memberValueDatatype !== void 0 &&
        writer.uint32(96).uint32(message.memberValueDatatype),
      message.unbalanced !== void 0 &&
        writer.uint32(104).bool(message.unbalanced),
      message.hidden !== void 0 && writer.uint32(112).bool(message.hidden),
      writer.uint32(122).fork());
    for (let item of message.fieldUsageIndexes) writer.int32(item);
    return (
      writer.join(),
      message.time !== void 0 && writer.uint32(128).bool(message.time),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createCacheHierarchy();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.uniqueName = reader.string();
          continue;
        case 2:
          if (tag !== 18) break;
          message.caption = reader.string();
          continue;
        case 3:
          if (tag !== 24) break;
          message.measure = reader.bool();
          continue;
        case 4:
          if (tag !== 32) break;
          message.attribute = reader.bool();
          continue;
        case 5:
          if (tag !== 42) break;
          message.defaultMemberUniqueName = reader.string();
          continue;
        case 6:
          if (tag !== 50) break;
          message.allUniqueName = reader.string();
          continue;
        case 7:
          if (tag !== 58) break;
          message.dimensionUniqueName = reader.string();
          continue;
        case 9:
          if (tag !== 74) break;
          message.measureGroup = reader.string();
          continue;
        case 10:
          if (tag !== 80) break;
          message.count = reader.uint32();
          continue;
        case 11:
          if (tag !== 88) break;
          message.oneField = reader.bool();
          continue;
        case 12:
          if (tag !== 96) break;
          message.memberValueDatatype = reader.uint32();
          continue;
        case 13:
          if (tag !== 104) break;
          message.unbalanced = reader.bool();
          continue;
        case 14:
          if (tag !== 112) break;
          message.hidden = reader.bool();
          continue;
        case 15:
          if (tag === 120) {
            message.fieldUsageIndexes.push(reader.int32());
            continue;
          }
          if (tag === 122) {
            let packedEnd = reader.uint32() + reader.pos;
            for (; reader.pos < packedEnd;)
              message.fieldUsageIndexes.push(reader.int32());
            continue;
          }
          break;
        case 16:
          if (tag !== 128) break;
          message.time = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return CacheHierarchy.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createCacheHierarchy();
    return (
      (message.uniqueName = object.uniqueName ?? ``),
      (message.caption = object.caption ?? void 0),
      (message.measure = object.measure ?? void 0),
      (message.attribute = object.attribute ?? void 0),
      (message.defaultMemberUniqueName =
        object.defaultMemberUniqueName ?? void 0),
      (message.allUniqueName = object.allUniqueName ?? void 0),
      (message.dimensionUniqueName = object.dimensionUniqueName ?? void 0),
      (message.measureGroup = object.measureGroup ?? void 0),
      (message.count = object.count ?? void 0),
      (message.oneField = object.oneField ?? void 0),
      (message.memberValueDatatype = object.memberValueDatatype ?? void 0),
      (message.unbalanced = object.unbalanced ?? void 0),
      (message.hidden = object.hidden ?? void 0),
      (message.fieldUsageIndexes =
        object.fieldUsageIndexes?.map((item) => item) || []),
      (message.time = object.time ?? void 0),
      message
    );
  },
};
