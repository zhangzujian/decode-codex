// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotArea } from "./pivot-area";
function createPivotConditionalFormat() {
  return {
    scope: void 0,
    priority: void 0,
    areas: [],
    scopeEnum: void 0,
  };
}
export const PivotConditionalFormat = {
  encode(message, writer = new BinaryWriter()) {
    (message.scope !== void 0 && writer.uint32(10).string(message.scope),
      message.priority !== void 0 &&
        writer.uint32(16).uint32(message.priority));
    for (let item of message.areas)
      PivotArea.encode(item, writer.uint32(26).fork()).join();
    return (
      message.scopeEnum !== void 0 &&
        writer.uint32(240).int32(message.scopeEnum),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotConditionalFormat();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.scope = reader.string();
          continue;
        case 2:
          if (tag !== 16) break;
          message.priority = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) break;
          message.areas.push(PivotArea.decode(reader, reader.uint32()));
          continue;
        case 30:
          if (tag !== 240) break;
          message.scopeEnum = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotConditionalFormat.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotConditionalFormat();
    return (
      (message.scope = object.scope ?? void 0),
      (message.priority = object.priority ?? void 0),
      (message.areas =
        object.areas?.map((item) => PivotArea.fromPartial(item)) || []),
      (message.scopeEnum = object.scopeEnum ?? void 0),
      message
    );
  },
};
