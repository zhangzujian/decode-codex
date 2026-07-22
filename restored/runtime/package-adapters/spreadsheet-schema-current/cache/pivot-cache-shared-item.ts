// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createPivotCacheSharedItem() {
  return {
    type: void 0,
    text: void 0,
    number: void 0,
    boolean: void 0,
    dateTime: void 0,
    sharedItemIndex: void 0,
    unused: void 0,
  };
}
export const PivotCacheSharedItem = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.type !== void 0 && writer.uint32(8).int32(message.type),
      message.text !== void 0 && writer.uint32(18).string(message.text),
      message.number !== void 0 && writer.uint32(25).double(message.number),
      message.boolean !== void 0 && writer.uint32(32).bool(message.boolean),
      message.dateTime !== void 0 && writer.uint32(42).string(message.dateTime),
      message.sharedItemIndex !== void 0 &&
        writer.uint32(48).uint32(message.sharedItemIndex),
      message.unused !== void 0 && writer.uint32(56).bool(message.unused),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotCacheSharedItem();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.type = reader.int32();
          continue;
        case 2:
          if (tag !== 18) break;
          message.text = reader.string();
          continue;
        case 3:
          if (tag !== 25) break;
          message.number = reader.double();
          continue;
        case 4:
          if (tag !== 32) break;
          message.boolean = reader.bool();
          continue;
        case 5:
          if (tag !== 42) break;
          message.dateTime = reader.string();
          continue;
        case 6:
          if (tag !== 48) break;
          message.sharedItemIndex = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) break;
          message.unused = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotCacheSharedItem.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotCacheSharedItem();
    return (
      (message.type = object.type ?? void 0),
      (message.text = object.text ?? void 0),
      (message.number = object.number ?? void 0),
      (message.boolean = object.boolean ?? void 0),
      (message.dateTime = object.dateTime ?? void 0),
      (message.sharedItemIndex = object.sharedItemIndex ?? void 0),
      (message.unused = object.unused ?? void 0),
      message
    );
  },
};
