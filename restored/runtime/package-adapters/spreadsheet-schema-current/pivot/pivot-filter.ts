// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import { AutoFilter } from "../../../../vendor/spreadsheet-schema-entry-current";
import { BinaryReader, BinaryWriter } from "../../presentation-current";
function createPivotFilter() {
  return {
    field: 0,
    type: ``,
    name: void 0,
    description: void 0,
    evaluationOrder: void 0,
    measureField: void 0,
    autoFilter: void 0,
    typeEnum: void 0,
  };
}
export const PivotFilter = {
  encode(message, writer = new BinaryWriter()) {
    return (
      message.field !== 0 && writer.uint32(8).int32(message.field),
      message.type !== `` && writer.uint32(18).string(message.type),
      message.name !== void 0 && writer.uint32(26).string(message.name),
      message.description !== void 0 &&
        writer.uint32(34).string(message.description),
      message.evaluationOrder !== void 0 &&
        writer.uint32(40).int32(message.evaluationOrder),
      message.measureField !== void 0 &&
        writer.uint32(48).uint32(message.measureField),
      message.autoFilter !== void 0 &&
        AutoFilter.encode(message.autoFilter, writer.uint32(58).fork()).join(),
      message.typeEnum !== void 0 && writer.uint32(240).int32(message.typeEnum),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotFilter();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) break;
          message.field = reader.int32();
          continue;
        case 2:
          if (tag !== 18) break;
          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) break;
          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) break;
          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) break;
          message.evaluationOrder = reader.int32();
          continue;
        case 6:
          if (tag !== 48) break;
          message.measureField = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) break;
          message.autoFilter = AutoFilter.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 240) break;
          message.typeEnum = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotFilter.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotFilter();
    return (
      (message.field = object.field ?? 0),
      (message.type = object.type ?? ``),
      (message.name = object.name ?? void 0),
      (message.description = object.description ?? void 0),
      (message.evaluationOrder = object.evaluationOrder ?? void 0),
      (message.measureField = object.measureField ?? void 0),
      (message.autoFilter =
        object.autoFilter !== void 0 && object.autoFilter !== null
          ? AutoFilter.fromPartial(object.autoFilter)
          : void 0),
      (message.typeEnum = object.typeEnum ?? void 0),
      message
    );
  },
};
