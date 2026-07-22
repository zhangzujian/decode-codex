// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotAreaReferenceValue } from "./pivot-area-reference-value";
function createPivotAreaReference() {
  return {
    field: void 0,
    count: void 0,
    selected: void 0,
    values: [],
  };
}
export const PivotAreaReference = {
  encode(message, writer = new BinaryWriter()) {
    (message.field !== void 0 && writer.uint32(8).uint32(message.field),
      message.count !== void 0 && writer.uint32(16).uint32(message.count),
      message.selected !== void 0 && writer.uint32(24).bool(message.selected));
    for (let item of message.values)
      PivotAreaReferenceValue.encode(item, writer.uint32(34).fork()).join();
    return writer;
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotAreaReference();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.field = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) break;
          message.count = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) break;
          message.selected = reader.bool();
          continue;
        case 4:
          if (tag !== 34) break;
          message.values.push(
            PivotAreaReferenceValue.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotAreaReference.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotAreaReference();
    return (
      (message.field = object.field ?? void 0),
      (message.count = object.count ?? void 0),
      (message.selected = object.selected ?? void 0),
      (message.values =
        object.values?.map((item) =>
          PivotAreaReferenceValue.fromPartial(item),
        ) || []),
      message
    );
  },
};
