// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createPivotCacheDimension() {
  return {
    measure: void 0,
    name: ``,
    uniqueName: ``,
    caption: ``,
  };
}
export const PivotCacheDimension = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.measure !== void 0 && writer.uint32(8).bool(message.measure),
      message.name !== `` && writer.uint32(18).string(message.name),
      message.uniqueName !== `` && writer.uint32(26).string(message.uniqueName),
      message.caption !== `` && writer.uint32(34).string(message.caption),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotCacheDimension();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.measure = reader.bool();
          continue;
        case 2:
          if (tag !== 18) break;
          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) break;
          message.uniqueName = reader.string();
          continue;
        case 4:
          if (tag !== 34) break;
          message.caption = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotCacheDimension.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotCacheDimension();
    return (
      (message.measure = object.measure ?? void 0),
      (message.name = object.name ?? ``),
      (message.uniqueName = object.uniqueName ?? ``),
      (message.caption = object.caption ?? ``),
      message
    );
  },
};
