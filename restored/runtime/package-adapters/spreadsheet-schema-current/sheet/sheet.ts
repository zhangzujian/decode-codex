// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import {
  AutoFilter,
  Column,
  ConditionalFormatting,
  DataValidations,
  Drawing,
  RangeTarget,
  Row,
  SharedFormula,
  SortState,
  SparklineGroups,
  Timeline,
} from "../../../../vendor/spreadsheet-schema-entry-current";
import {
  BinaryReader,
  BinaryWriter,
  presentationGn,
} from "../../presentation-current";
import { PivotTable } from "../pivot/pivot-table";
import { SheetProtection } from "./sheet-protection";
import { Table } from "./table";
import { Slicer } from "../slicer/slicer";
function createSheet() {
  return {
    id: void 0,
    sheetId: void 0,
    index: 0,
    name: ``,
    rows: [],
    innerXml: ``,
    outerXml: ``,
    columns: [],
    defaultRowHeight: 0,
    drawings: [],
    defaultColWidth: 0,
    baseColWidth: void 0,
    showGridLines: void 0,
    mergedCells: [],
    conditionalFormattings: [],
    sharedFormulas: [],
    tables: [],
    pivotTables: [],
    slicers: [],
    tabColor: void 0,
    timelines: [],
    sparklineGroups: void 0,
    dataValidations: void 0,
    dimensionRef: void 0,
    autoFilter: void 0,
    sortState: void 0,
    sheetProtection: void 0,
  };
}
export const Sheet = {
  encode(message, writer = new BinaryWriter()) {
    (message.id !== void 0 && writer.uint32(90).string(message.id),
      message.sheetId !== void 0 && writer.uint32(162).string(message.sheetId),
      message.index !== 0 && writer.uint32(8).int32(message.index),
      message.name !== `` && writer.uint32(18).string(message.name));
    for (let item of message.rows)
      Row.encode(item, writer.uint32(26).fork()).join();
    (message.innerXml !== `` && writer.uint32(34).string(message.innerXml),
      message.outerXml !== `` && writer.uint32(42).string(message.outerXml));
    for (let item of message.columns)
      Column.encode(item, writer.uint32(50).fork()).join();
    message.defaultRowHeight !== 0 &&
      writer.uint32(61).float(message.defaultRowHeight);
    for (let item of message.drawings)
      Drawing.encode(item, writer.uint32(66).fork()).join();
    (message.defaultColWidth !== 0 &&
      writer.uint32(77).float(message.defaultColWidth),
      message.baseColWidth !== void 0 &&
        writer.uint32(173).float(message.baseColWidth),
      message.showGridLines !== void 0 &&
        writer.uint32(80).bool(message.showGridLines));
    for (let item of message.mergedCells)
      RangeTarget.encode(item, writer.uint32(98).fork()).join();
    for (let item of message.conditionalFormattings)
      ConditionalFormatting.encode(item, writer.uint32(106).fork()).join();
    for (let item of message.sharedFormulas)
      SharedFormula.encode(item, writer.uint32(114).fork()).join();
    for (let item of message.tables)
      Table.encode(item, writer.uint32(122).fork()).join();
    for (let item of message.pivotTables)
      PivotTable.encode(item, writer.uint32(130).fork()).join();
    for (let item of message.slicers)
      Slicer.encode(item, writer.uint32(138).fork()).join();
    message.tabColor !== void 0 &&
      presentationGn.encode(message.tabColor, writer.uint32(146).fork()).join();
    for (let item of message.timelines)
      Timeline.encode(item, writer.uint32(154).fork()).join();
    return (
      message.sparklineGroups !== void 0 &&
        SparklineGroups.encode(
          message.sparklineGroups,
          writer.uint32(218).fork(),
        ).join(),
      message.dataValidations !== void 0 &&
        DataValidations.encode(
          message.dataValidations,
          writer.uint32(226).fork(),
        ).join(),
      message.dimensionRef !== void 0 &&
        writer.uint32(234).string(message.dimensionRef),
      message.autoFilter !== void 0 &&
        AutoFilter.encode(message.autoFilter, writer.uint32(242).fork()).join(),
      message.sortState !== void 0 &&
        SortState.encode(message.sortState, writer.uint32(250).fork()).join(),
      message.sheetProtection !== void 0 &&
        SheetProtection.encode(
          message.sheetProtection,
          writer.uint32(258).fork(),
        ).join(),
      writer
    );
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createSheet();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 11:
          if (tag !== 90) break;
          message.id = reader.string();
          continue;
        case 20:
          if (tag !== 162) break;
          message.sheetId = reader.string();
          continue;
        case 1:
          if (tag !== 8) break;
          message.index = reader.int32();
          continue;
        case 2:
          if (tag !== 18) break;
          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) break;
          message.rows.push(Row.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) break;
          message.innerXml = reader.string();
          continue;
        case 5:
          if (tag !== 42) break;
          message.outerXml = reader.string();
          continue;
        case 6:
          if (tag !== 50) break;
          message.columns.push(Column.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 61) break;
          message.defaultRowHeight = reader.float();
          continue;
        case 8:
          if (tag !== 66) break;
          message.drawings.push(Drawing.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 77) break;
          message.defaultColWidth = reader.float();
          continue;
        case 21:
          if (tag !== 173) break;
          message.baseColWidth = reader.float();
          continue;
        case 10:
          if (tag !== 80) break;
          message.showGridLines = reader.bool();
          continue;
        case 12:
          if (tag !== 98) break;
          message.mergedCells.push(RangeTarget.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) break;
          message.conditionalFormattings.push(
            ConditionalFormatting.decode(reader, reader.uint32()),
          );
          continue;
        case 14:
          if (tag !== 114) break;
          message.sharedFormulas.push(
            SharedFormula.decode(reader, reader.uint32()),
          );
          continue;
        case 15:
          if (tag !== 122) break;
          message.tables.push(Table.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) break;
          message.pivotTables.push(PivotTable.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) break;
          message.slicers.push(Slicer.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 146) break;
          message.tabColor = presentationGn.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) break;
          message.timelines.push(Timeline.decode(reader, reader.uint32()));
          continue;
        case 27:
          if (tag !== 218) break;
          message.sparklineGroups = SparklineGroups.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 28:
          if (tag !== 226) break;
          message.dataValidations = DataValidations.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 29:
          if (tag !== 234) break;
          message.dimensionRef = reader.string();
          continue;
        case 30:
          if (tag !== 242) break;
          message.autoFilter = AutoFilter.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) break;
          message.sortState = SortState.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag !== 258) break;
          message.sheetProtection = SheetProtection.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return Sheet.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createSheet();
    return (
      (message.id = object.id ?? void 0),
      (message.sheetId = object.sheetId ?? void 0),
      (message.index = object.index ?? 0),
      (message.name = object.name ?? ``),
      (message.rows = object.rows?.map((item) => Row.fromPartial(item)) || []),
      (message.innerXml = object.innerXml ?? ``),
      (message.outerXml = object.outerXml ?? ``),
      (message.columns =
        object.columns?.map((item) => Column.fromPartial(item)) || []),
      (message.defaultRowHeight = object.defaultRowHeight ?? 0),
      (message.drawings =
        object.drawings?.map((item) => Drawing.fromPartial(item)) || []),
      (message.defaultColWidth = object.defaultColWidth ?? 0),
      (message.baseColWidth = object.baseColWidth ?? void 0),
      (message.showGridLines = object.showGridLines ?? void 0),
      (message.mergedCells =
        object.mergedCells?.map((item) => RangeTarget.fromPartial(item)) || []),
      (message.conditionalFormattings =
        object.conditionalFormattings?.map((item) =>
          ConditionalFormatting.fromPartial(item),
        ) || []),
      (message.sharedFormulas =
        object.sharedFormulas?.map((item) => SharedFormula.fromPartial(item)) ||
        []),
      (message.tables =
        object.tables?.map((item) => Table.fromPartial(item)) || []),
      (message.pivotTables =
        object.pivotTables?.map((item) => PivotTable.fromPartial(item)) || []),
      (message.slicers =
        object.slicers?.map((item) => Slicer.fromPartial(item)) || []),
      (message.tabColor =
        object.tabColor !== void 0 && object.tabColor !== null
          ? presentationGn.fromPartial(object.tabColor)
          : void 0),
      (message.timelines =
        object.timelines?.map((item) => Timeline.fromPartial(item)) || []),
      (message.sparklineGroups =
        object.sparklineGroups !== void 0 && object.sparklineGroups !== null
          ? SparklineGroups.fromPartial(object.sparklineGroups)
          : void 0),
      (message.dataValidations =
        object.dataValidations !== void 0 && object.dataValidations !== null
          ? DataValidations.fromPartial(object.dataValidations)
          : void 0),
      (message.dimensionRef = object.dimensionRef ?? void 0),
      (message.autoFilter =
        object.autoFilter !== void 0 && object.autoFilter !== null
          ? AutoFilter.fromPartial(object.autoFilter)
          : void 0),
      (message.sortState =
        object.sortState !== void 0 && object.sortState !== null
          ? SortState.fromPartial(object.sortState)
          : void 0),
      (message.sheetProtection =
        object.sheetProtection !== void 0 && object.sheetProtection !== null
          ? SheetProtection.fromPartial(object.sheetProtection)
          : void 0),
      message
    );
  },
};
