// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createRangePr() {
  return {
    groupBy: ``,
    startDate: ``,
    endDate: ``,
    startNum: void 0,
    endNum: void 0,
    groupInterval: void 0,
  };
}
export const RangePr = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.groupBy !== `` && writer.uint32(10).string(message.groupBy),
      message.startDate !== `` && writer.uint32(18).string(message.startDate),
      message.endDate !== `` && writer.uint32(26).string(message.endDate),
      message.startNum !== void 0 && writer.uint32(33).double(message.startNum),
      message.endNum !== void 0 && writer.uint32(41).double(message.endNum),
      message.groupInterval !== void 0 &&
        writer.uint32(49).double(message.groupInterval),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createRangePr();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.groupBy = reader.string();
          continue;
        case 2:
          if (tag !== 18) break;
          message.startDate = reader.string();
          continue;
        case 3:
          if (tag !== 26) break;
          message.endDate = reader.string();
          continue;
        case 4:
          if (tag !== 33) break;
          message.startNum = reader.double();
          continue;
        case 5:
          if (tag !== 41) break;
          message.endNum = reader.double();
          continue;
        case 6:
          if (tag !== 49) break;
          message.groupInterval = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return RangePr.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createRangePr();
    return (
      (message.groupBy = object.groupBy ?? ``),
      (message.startDate = object.startDate ?? ``),
      (message.endDate = object.endDate ?? ``),
      (message.startNum = object.startNum ?? void 0),
      (message.endNum = object.endNum ?? void 0),
      (message.groupInterval = object.groupInterval ?? void 0),
      message
    );
  },
};
