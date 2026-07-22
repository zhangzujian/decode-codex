// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createPivotCacheMeasureDimensionMap() {
  return {
    measureGroup: 0,
    dimension: 0,
  };
}
export const PivotCacheMeasureDimensionMap = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.measureGroup !== 0 &&
        writer.uint32(8).uint32(message.measureGroup),
      message.dimension !== 0 && writer.uint32(16).uint32(message.dimension),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotCacheMeasureDimensionMap();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.measureGroup = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) break;
          message.dimension = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotCacheMeasureDimensionMap.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotCacheMeasureDimensionMap();
    return (
      (message.measureGroup = object.measureGroup ?? 0),
      (message.dimension = object.dimension ?? 0),
      message
    );
  },
};
