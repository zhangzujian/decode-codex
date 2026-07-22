// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotArea } from "./pivot-area";
function createPivotFormat() {
  return {
    formatId: void 0,
    area: void 0,
  };
}
export const PivotFormat = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.formatId !== void 0 && writer.uint32(8).uint32(message.formatId),
      message.area !== void 0 &&
        PivotArea.encode(message.area, writer.uint32(18).fork()).join(),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotFormat();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.formatId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) break;
          message.area = PivotArea.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotFormat.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotFormat();
    return (
      (message.formatId = object.formatId ?? void 0),
      (message.area =
        object.area !== void 0 && object.area !== null
          ? PivotArea.fromPartial(object.area)
          : void 0),
      message
    );
  },
};
