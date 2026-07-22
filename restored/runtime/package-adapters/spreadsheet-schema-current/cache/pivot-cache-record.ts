// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotCacheSharedItem } from "./pivot-cache-shared-item";
function createPivotCacheRecord() {
  return {
    values: [],
  };
}
export const PivotCacheRecord = {
  encode(message, writer = new BinaryWriter()) {
    for (let item of message.values)
      PivotCacheSharedItem.encode(item, writer.uint32(10).fork()).join();
    return writer;
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotCacheRecord();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.values.push(
            PivotCacheSharedItem.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotCacheRecord.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotCacheRecord();
    return (
      (message.values =
        object.values?.map((item) => PivotCacheSharedItem.fromPartial(item)) ||
        []),
      message
    );
  },
};
