// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createSlicerCachePivotTableReference() {
  return {
    tabId: 0,
    name: ``,
  };
}
export const SlicerCachePivotTableReference = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.tabId !== 0 && writer.uint32(8).uint32(message.tabId),
      message.name !== `` && writer.uint32(18).string(message.name),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSlicerCachePivotTableReference();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.tabId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) break;
          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return SlicerCachePivotTableReference.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSlicerCachePivotTableReference();
    return (
      (message.tabId = object.tabId ?? 0),
      (message.name = object.name ?? ``),
      message
    );
  },
};
