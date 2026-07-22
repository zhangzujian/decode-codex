// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createSlicerCacheOlapSelection() {
  return {
    name: ``,
    parentNames: [],
  };
}
export const SlicerCacheOlapSelection = {
  encode(message, writer = new BinaryWriter()) {
    message.name !== `` && writer.uint32(10).string(message.name);
    for (let item of message.parentNames) writer.uint32(18).string(item);
    return writer;
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSlicerCacheOlapSelection();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) break;
          message.parentNames.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return SlicerCacheOlapSelection.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSlicerCacheOlapSelection();
    return (
      (message.name = object.name ?? ``),
      (message.parentNames = object.parentNames?.map((item) => item) || []),
      message
    );
  },
};
