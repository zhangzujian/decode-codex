// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { SlicerCacheOlapItem } from "./slicer-cache-olap-item";
function createSlicerCacheOlapRange() {
  return {
    startItem: void 0,
    items: [],
  };
}
export const SlicerCacheOlapRange = {
  encode(message, writer = new BinaryWriter()) {
    message.startItem !== void 0 && writer.uint32(8).uint32(message.startItem);
    for (let item of message.items)
      SlicerCacheOlapItem.encode(item, writer.uint32(18).fork()).join();
    return writer;
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSlicerCacheOlapRange();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.startItem = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) break;
          message.items.push(
            SlicerCacheOlapItem.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return SlicerCacheOlapRange.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSlicerCacheOlapRange();
    return (
      (message.startItem = object.startItem ?? void 0),
      (message.items =
        object.items?.map((item) => SlicerCacheOlapItem.fromPartial(item)) ||
        []),
      message
    );
  },
};
