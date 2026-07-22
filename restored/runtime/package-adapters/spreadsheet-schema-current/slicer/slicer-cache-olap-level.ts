// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { SlicerCacheOlapRange } from "./slicer-cache-olap-range";
function createSlicerCacheOlapLevel() {
  return {
    uniqueName: ``,
    sourceCaption: void 0,
    count: void 0,
    ranges: [],
  };
}
export const SlicerCacheOlapLevel = {
  encode(message, writer = new BinaryWriter()) {
    (message.uniqueName !== `` && writer.uint32(10).string(message.uniqueName),
      message.sourceCaption !== void 0 &&
        writer.uint32(18).string(message.sourceCaption),
      message.count !== void 0 && writer.uint32(24).uint32(message.count));
    for (let item of message.ranges)
      SlicerCacheOlapRange.encode(item, writer.uint32(34).fork()).join();
    return writer;
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSlicerCacheOlapLevel();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.uniqueName = reader.string();
          continue;
        case 2:
          if (tag !== 18) break;
          message.sourceCaption = reader.string();
          continue;
        case 3:
          if (tag !== 24) break;
          message.count = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) break;
          message.ranges.push(
            SlicerCacheOlapRange.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return SlicerCacheOlapLevel.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSlicerCacheOlapLevel();
    return (
      (message.uniqueName = object.uniqueName ?? ``),
      (message.sourceCaption = object.sourceCaption ?? void 0),
      (message.count = object.count ?? void 0),
      (message.ranges =
        object.ranges?.map((item) => SlicerCacheOlapRange.fromPartial(item)) ||
        []),
      message
    );
  },
};
