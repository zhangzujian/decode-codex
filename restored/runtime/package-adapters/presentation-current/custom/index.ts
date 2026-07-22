// Restored from ref/webview/assets/presentation-BABpKpp4.js
// Current-only presentation schema additions and changed codec bindings.
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import * as previous from "../../../../vendor/presentation-runtime-current";
for (const initialize of [
  previous._presentationFn,
  previous._presentationHn,
  previous._presentationQt,
  previous._presentationUn,
  previous.presentationBr,
  previous.presentationYr,
]) {
  initialize();
}
function initRuntime(): void {}
const initPresentationCoreSchema = initRuntime;
const initProtobufWireRuntime = initRuntime;
const initPresentationSchema = initRuntime;
const initPresentationSchemaPartA = initRuntime;
const initPresentationSchemaPartB = initRuntime;
const initPresentationMathSchema = initRuntime;
const initPresentationRuntime = initRuntime;
type Message = Record<string, unknown>;
type GeneratedCodec = {
  encode(value: Message, writer?: BinaryWriter): BinaryWriter;
  decode(input: Uint8Array | BinaryReader, length?: number): Message;
  create(value?: Partial<Message>): Message;
  fromPartial(value: Partial<Message>): Message;
};
function extendCodec(base: GeneratedCodec, defaults: Message): GeneratedCodec {
  const codec: GeneratedCodec = {
    encode: (value, writer) => base.encode(value, writer),
    decode: (input, length) => ({
      ...defaults,
      ...base.decode(input, length),
    }),
    create: (value) => codec.fromPartial(value ?? {}),
    fromPartial: (value) => ({
      ...defaults,
      ...base.fromPartial(value),
      ...Object.fromEntries(
        Object.keys(defaults).map((key) => [key, value[key] ?? defaults[key]]),
      ),
    }),
  };
  return codec;
}
const presentationParagraph = extendCodec(
  previous._presentationG as unknown as GeneratedCodec,
  {
    level: undefined,
    endParagraphTextStyle: undefined,
  },
);
const presentationTheme = extendCodec(
  previous.presentationYt as unknown as GeneratedCodec,
  {
    objectDefaults: undefined,
  },
);
const presentationElement = extendCodec(
  previous._presentationO as unknown as GeneratedCodec,
  {
    useBackgroundFill: undefined,
  },
);
const presentationTextStyle = extendCodec(
  previous.presentationPr as unknown as GeneratedCodec,
  {
    columnCount: undefined,
    columnSpacing: undefined,
    rightToLeftColumns: undefined,
    baseline: undefined,
    anchorCenter: undefined,
    kerningMinimumFontSize: undefined,
  },
);
const presentationShape = extendCodec(
  previous._presentationFt as unknown as GeneratedCodec,
  {
    customGeometryGuides: [],
  },
);
const presentationReflectionEffect = extendCodec(
  previous._presentationIt as unknown as GeneratedCodec,
  {
    alignmentType: undefined,
  },
);
const presentationChart = extendCodec(
  previous._presentationYn as unknown as GeneratedCodec,
  {
    plotAreaManualLayout: undefined,
    titleText: undefined,
    titleManualLayout: undefined,
    autoTitleDeleted: undefined,
    userShapes: [],
  },
);
const PresentationLayoutMode = {
  0: "LAYOUT_MODE_UNSPECIFIED",
  1: "LAYOUT_MODE_EDGE",
  2: "LAYOUT_MODE_FACTOR",
  LAYOUT_MODE_UNSPECIFIED: 0,
  LAYOUT_MODE_EDGE: 1,
  LAYOUT_MODE_FACTOR: 2,
  UNRECOGNIZED: -1,
  [-1]: "UNRECOGNIZED",
} as const;
const PresentationLayoutTarget = {
  0: "LAYOUT_TARGET_UNSPECIFIED",
  1: "LAYOUT_TARGET_INNER",
  2: "LAYOUT_TARGET_OUTER",
  LAYOUT_TARGET_UNSPECIFIED: 0,
  LAYOUT_TARGET_INNER: 1,
  LAYOUT_TARGET_OUTER: 2,
  UNRECOGNIZED: -1,
  [-1]: "UNRECOGNIZED",
} as const;
const PresentationTimeUnit = {
  0: "TIME_UNIT_UNSPECIFIED",
  1: "TIME_UNIT_DAYS",
  2: "TIME_UNIT_MONTHS",
  3: "TIME_UNIT_YEARS",
  TIME_UNIT_UNSPECIFIED: 0,
  TIME_UNIT_DAYS: 1,
  TIME_UNIT_MONTHS: 2,
  TIME_UNIT_YEARS: 3,
  UNRECOGNIZED: -1,
  [-1]: "UNRECOGNIZED",
} as const;
const PresentationAxisKind = {
  0: "AXIS_KIND_UNSPECIFIED",
  1: "AXIS_KIND_CATEGORY",
  2: "AXIS_KIND_DATE",
  3: "AXIS_KIND_VALUE",
  4: "AXIS_KIND_SERIES",
  AXIS_KIND_UNSPECIFIED: 0,
  AXIS_KIND_CATEGORY: 1,
  AXIS_KIND_DATE: 2,
  AXIS_KIND_VALUE: 3,
  AXIS_KIND_SERIES: 4,
  UNRECOGNIZED: -1,
  [-1]: "UNRECOGNIZED",
} as const;
type PresentationElement = ReturnType<typeof presentationElement.create>;
type PresentationObjectDefaults = {
  shape?: PresentationElement;
  line?: PresentationElement;
  text?: PresentationElement;
};
const presentationObjectDefaults = {
  encode(
    value: PresentationObjectDefaults,
    writer = new BinaryWriter(),
  ): BinaryWriter {
    if (value.shape !== undefined) {
      presentationElement
        .encode(value.shape, writer.uint32(10).fork() as never)
        .join();
    }
    if (value.line !== undefined) {
      presentationElement
        .encode(value.line, writer.uint32(18).fork() as never)
        .join();
    }
    if (value.text !== undefined) {
      presentationElement
        .encode(value.text, writer.uint32(26).fork() as never)
        .join();
    }
    return writer;
  },
  decode(
    input: Uint8Array | BinaryReader,
    length?: number,
  ): PresentationObjectDefaults {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const value: PresentationObjectDefaults = {
      shape: undefined,
      line: undefined,
      text: undefined,
    };
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          value.shape = presentationElement.decode(reader.bytes());
          continue;
        case 2:
          value.line = presentationElement.decode(reader.bytes());
          continue;
        case 3:
          value.text = presentationElement.decode(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return value;
  },
  create(
    value?: Partial<PresentationObjectDefaults>,
  ): PresentationObjectDefaults {
    return presentationObjectDefaults.fromPartial(value ?? {});
  },
  fromPartial(
    value: Partial<PresentationObjectDefaults>,
  ): PresentationObjectDefaults {
    return {
      shape:
        value.shape === undefined
          ? undefined
          : presentationElement.fromPartial(value.shape),
      line:
        value.line === undefined
          ? undefined
          : presentationElement.fromPartial(value.line),
      text:
        value.text === undefined
          ? undefined
          : presentationElement.fromPartial(value.text),
    };
  },
};
export const presentationCustomBindings = {
  initPresentationCoreSchema,
  initProtobufWireRuntime,
  BinaryWriter,
  presentationParagraph,
  presentationTheme,
  initPresentationSchema,
  PresentationLayoutMode,
  presentationElement,
  PresentationLayoutTarget,
  initPresentationSchemaPartA,
  BinaryReader,
  presentationObjectDefaults,
  PresentationTimeUnit,
  presentationTextStyle,
  presentationShape,
  initPresentationSchemaPartB,
  PresentationAxisKind,
  presentationReflectionEffect,
  initPresentationMathSchema,
  initPresentationRuntime,
  presentationChart,
};
