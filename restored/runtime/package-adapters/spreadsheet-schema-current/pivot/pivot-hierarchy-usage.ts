// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createPivotHierarchyUsage() {
  return {
    hierarchyUsage: void 0,
  };
}
export const PivotHierarchyUsage = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.hierarchyUsage !== void 0 &&
        writer.uint32(8).int32(message.hierarchyUsage),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotHierarchyUsage();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.hierarchyUsage = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotHierarchyUsage.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotHierarchyUsage();
    return (
      (message.hierarchyUsage = object.hierarchyUsage ?? void 0),
      message
    );
  },
};
