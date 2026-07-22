// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotMemberPropertyIndex } from "./pivot-member-property-index";
function createPivotFieldItem() {
  return {
    type: void 0,
    index: void 0,
    hidden: void 0,
    calculated: void 0,
    missing: void 0,
    repeatedItemCount: void 0,
    dataFieldIndex: void 0,
    hideDetails: void 0,
    memberPropertyIndexes: [],
    memberProperties: [],
    name: void 0,
  };
}
export const PivotFieldItem = {
  encode(message, writer = new BinaryWriter()) {
    (message.type !== void 0 && writer.uint32(10).string(message.type),
      message.index !== void 0 && writer.uint32(16).int32(message.index),
      message.hidden !== void 0 && writer.uint32(24).bool(message.hidden),
      message.calculated !== void 0 &&
        writer.uint32(32).bool(message.calculated),
      message.missing !== void 0 && writer.uint32(40).bool(message.missing),
      message.repeatedItemCount !== void 0 &&
        writer.uint32(48).int32(message.repeatedItemCount),
      message.dataFieldIndex !== void 0 &&
        writer.uint32(56).int32(message.dataFieldIndex),
      message.hideDetails !== void 0 &&
        writer.uint32(64).bool(message.hideDetails),
      writer.uint32(74).fork());
    for (let item of message.memberPropertyIndexes) writer.int32(item);
    writer.join();
    for (let item of message.memberProperties)
      PivotMemberPropertyIndex.encode(item, writer.uint32(82).fork()).join();
    return (
      message.name !== void 0 && writer.uint32(90).string(message.name),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotFieldItem();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 16) break;
          message.index = reader.int32();
          continue;
        case 3:
          if (tag !== 24) break;
          message.hidden = reader.bool();
          continue;
        case 4:
          if (tag !== 32) break;
          message.calculated = reader.bool();
          continue;
        case 5:
          if (tag !== 40) break;
          message.missing = reader.bool();
          continue;
        case 6:
          if (tag !== 48) break;
          message.repeatedItemCount = reader.int32();
          continue;
        case 7:
          if (tag !== 56) break;
          message.dataFieldIndex = reader.int32();
          continue;
        case 8:
          if (tag !== 64) break;
          message.hideDetails = reader.bool();
          continue;
        case 9:
          if (tag === 72) {
            message.memberPropertyIndexes.push(reader.int32());
            continue;
          }
          if (tag === 74) {
            let packedEnd = reader.uint32() + reader.pos;
            for (; reader.pos < packedEnd;)
              message.memberPropertyIndexes.push(reader.int32());
            continue;
          }
          break;
        case 10:
          if (tag !== 82) break;
          message.memberProperties.push(
            PivotMemberPropertyIndex.decode(reader, reader.uint32()),
          );
          continue;
        case 11:
          if (tag !== 90) break;
          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotFieldItem.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotFieldItem();
    return (
      (message.type = object.type ?? void 0),
      (message.index = object.index ?? void 0),
      (message.hidden = object.hidden ?? void 0),
      (message.calculated = object.calculated ?? void 0),
      (message.missing = object.missing ?? void 0),
      (message.repeatedItemCount = object.repeatedItemCount ?? void 0),
      (message.dataFieldIndex = object.dataFieldIndex ?? void 0),
      (message.hideDetails = object.hideDetails ?? void 0),
      (message.memberPropertyIndexes =
        object.memberPropertyIndexes?.map((item) => item) || []),
      (message.memberProperties =
        object.memberProperties?.map((item) =>
          PivotMemberPropertyIndex.fromPartial(item),
        ) || []),
      (message.name = object.name ?? void 0),
      message
    );
  },
};
