// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createPivotCacheMeasureGroup() {
  return {
    name: ``,
    caption: ``,
  };
}
export const PivotCacheMeasureGroup = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.name !== `` && writer.uint32(10).string(message.name),
      message.caption !== `` && writer.uint32(18).string(message.caption),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotCacheMeasureGroup();
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
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotCacheMeasureGroup.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotCacheMeasureGroup();
    return (
      (message.name = object.name ?? ``),
      (message.caption = object.caption ?? ``),
      message
    );
  },
};
