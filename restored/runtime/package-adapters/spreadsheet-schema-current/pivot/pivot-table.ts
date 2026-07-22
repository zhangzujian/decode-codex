// Restored from ref/webview/assets/spreadsheet-Jf_OOZQP.js
// Generated protobuf codecs for the current spreadsheet schema delta.

import {
  PivotDataField,
  PivotPageField,
  PivotTableLocation,
} from "../../../../vendor/spreadsheet-schema-entry-current";
import { BinaryReader, BinaryWriter } from "../../presentation-current";
import { PivotConditionalFormat } from "./pivot-conditional-format";
import { PivotFieldItem } from "./pivot-field-item";
import { PivotField } from "./pivot-field";
import { PivotFilter } from "./pivot-filter";
import { PivotFormat } from "./pivot-format";
import { PivotHierarchyUsage } from "./pivot-hierarchy-usage";
import { PivotHierarchy } from "./pivot-hierarchy";
function createPivotTable() {
  return {
    name: ``,
    cacheId: 0,
    location: void 0,
    dataOnRows: void 0,
    rowGrandTotals: void 0,
    columnGrandTotals: void 0,
    pivotFields: [],
    rowFields: [],
    columnFields: [],
    pageFields: [],
    dataFields: [],
    filters: [],
    compact: void 0,
    outline: void 0,
    showDrill: void 0,
    styleName: void 0,
    rowItems: [],
    columnItems: [],
    showRowHeaders: void 0,
    showColHeaders: void 0,
    showRowStripes: void 0,
    showColStripes: void 0,
    showLastColumn: void 0,
    applyNumberFormats: void 0,
    applyBorderFormats: void 0,
    applyFontFormats: void 0,
    applyPatternFormats: void 0,
    applyAlignmentFormats: void 0,
    applyWidthHeightFormats: void 0,
    dataCaption: void 0,
    updatedVersion: void 0,
    minRefreshableVersion: void 0,
    useAutoFormatting: void 0,
    itemPrintTitles: void 0,
    createdVersion: void 0,
    indent: void 0,
    outlineData: void 0,
    multipleFieldFilters: void 0,
    chartFormat: void 0,
    extensionListXml: void 0,
    grandTotalCaption: void 0,
    compactData: void 0,
    formats: [],
    conditionalFormats: [],
    rowHeaderCaption: void 0,
    columnHeaderCaption: void 0,
    dataPosition: void 0,
    pivotHierarchies: [],
    subtotalHiddenItems: void 0,
    showHeaders: void 0,
    rowHierarchyUsages: [],
    columnHierarchyUsages: [],
  };
}
export const PivotTable = {
  encode(message, writer = new BinaryWriter()) {
    (message.name !== `` && writer.uint32(10).string(message.name),
      message.cacheId !== 0 && writer.uint32(16).int32(message.cacheId),
      message.location !== void 0 &&
        PivotTableLocation.encode(
          message.location,
          writer.uint32(26).fork(),
        ).join(),
      message.dataOnRows !== void 0 &&
        writer.uint32(32).bool(message.dataOnRows),
      message.rowGrandTotals !== void 0 &&
        writer.uint32(40).bool(message.rowGrandTotals),
      message.columnGrandTotals !== void 0 &&
        writer.uint32(48).bool(message.columnGrandTotals));
    for (let item of message.pivotFields)
      PivotField.encode(item, writer.uint32(58).fork()).join();
    writer.uint32(66).fork();
    for (let item of message.rowFields) writer.int32(item);
    (writer.join(), writer.uint32(74).fork());
    for (let item of message.columnFields) writer.int32(item);
    writer.join();
    for (let item of message.pageFields)
      PivotPageField.encode(item, writer.uint32(82).fork()).join();
    for (let item of message.dataFields)
      PivotDataField.encode(item, writer.uint32(90).fork()).join();
    for (let item of message.filters)
      PivotFilter.encode(item, writer.uint32(98).fork()).join();
    (message.compact !== void 0 && writer.uint32(104).bool(message.compact),
      message.outline !== void 0 && writer.uint32(112).bool(message.outline),
      message.showDrill !== void 0 &&
        writer.uint32(120).bool(message.showDrill),
      message.styleName !== void 0 &&
        writer.uint32(130).string(message.styleName));
    for (let item of message.rowItems)
      PivotFieldItem.encode(item, writer.uint32(138).fork()).join();
    for (let item of message.columnItems)
      PivotFieldItem.encode(item, writer.uint32(146).fork()).join();
    (message.showRowHeaders !== void 0 &&
      writer.uint32(152).bool(message.showRowHeaders),
      message.showColHeaders !== void 0 &&
        writer.uint32(160).bool(message.showColHeaders),
      message.showRowStripes !== void 0 &&
        writer.uint32(168).bool(message.showRowStripes),
      message.showColStripes !== void 0 &&
        writer.uint32(176).bool(message.showColStripes),
      message.showLastColumn !== void 0 &&
        writer.uint32(184).bool(message.showLastColumn),
      message.applyNumberFormats !== void 0 &&
        writer.uint32(192).bool(message.applyNumberFormats),
      message.applyBorderFormats !== void 0 &&
        writer.uint32(200).bool(message.applyBorderFormats),
      message.applyFontFormats !== void 0 &&
        writer.uint32(208).bool(message.applyFontFormats),
      message.applyPatternFormats !== void 0 &&
        writer.uint32(216).bool(message.applyPatternFormats),
      message.applyAlignmentFormats !== void 0 &&
        writer.uint32(224).bool(message.applyAlignmentFormats),
      message.applyWidthHeightFormats !== void 0 &&
        writer.uint32(232).bool(message.applyWidthHeightFormats),
      message.dataCaption !== void 0 &&
        writer.uint32(242).string(message.dataCaption),
      message.updatedVersion !== void 0 &&
        writer.uint32(248).uint32(message.updatedVersion),
      message.minRefreshableVersion !== void 0 &&
        writer.uint32(256).uint32(message.minRefreshableVersion),
      message.useAutoFormatting !== void 0 &&
        writer.uint32(264).bool(message.useAutoFormatting),
      message.itemPrintTitles !== void 0 &&
        writer.uint32(272).bool(message.itemPrintTitles),
      message.createdVersion !== void 0 &&
        writer.uint32(280).uint32(message.createdVersion),
      message.indent !== void 0 && writer.uint32(289).double(message.indent),
      message.outlineData !== void 0 &&
        writer.uint32(296).bool(message.outlineData),
      message.multipleFieldFilters !== void 0 &&
        writer.uint32(304).bool(message.multipleFieldFilters),
      message.chartFormat !== void 0 &&
        writer.uint32(312).uint32(message.chartFormat),
      message.extensionListXml !== void 0 &&
        writer.uint32(322).string(message.extensionListXml),
      message.grandTotalCaption !== void 0 &&
        writer.uint32(330).string(message.grandTotalCaption),
      message.compactData !== void 0 &&
        writer.uint32(336).bool(message.compactData));
    for (let item of message.formats)
      PivotFormat.encode(item, writer.uint32(346).fork()).join();
    for (let item of message.conditionalFormats)
      PivotConditionalFormat.encode(item, writer.uint32(354).fork()).join();
    (message.rowHeaderCaption !== void 0 &&
      writer.uint32(362).string(message.rowHeaderCaption),
      message.columnHeaderCaption !== void 0 &&
        writer.uint32(370).string(message.columnHeaderCaption),
      message.dataPosition !== void 0 &&
        writer.uint32(376).uint32(message.dataPosition));
    for (let item of message.pivotHierarchies)
      PivotHierarchy.encode(item, writer.uint32(386).fork()).join();
    (message.subtotalHiddenItems !== void 0 &&
      writer.uint32(392).bool(message.subtotalHiddenItems),
      message.showHeaders !== void 0 &&
        writer.uint32(400).bool(message.showHeaders));
    for (let item of message.rowHierarchyUsages)
      PivotHierarchyUsage.encode(item, writer.uint32(410).fork()).join();
    for (let item of message.columnHierarchyUsages)
      PivotHierarchyUsage.encode(item, writer.uint32(418).fork()).join();
    return writer;
  },
  decode(input, length) {
    let reader =
        input instanceof BinaryReader ? input : new BinaryReader(input),
      end = length === void 0 ? reader.len : reader.pos + length,
      message = createPivotTable();
    for (; reader.pos < end;) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) break;
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) break;
          message.cacheId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) break;
          message.location = PivotTableLocation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) break;
          message.dataOnRows = reader.bool();
          continue;
        case 5:
          if (tag !== 40) break;
          message.rowGrandTotals = reader.bool();
          continue;
        case 6:
          if (tag !== 48) break;
          message.columnGrandTotals = reader.bool();
          continue;
        case 7:
          if (tag !== 58) break;
          message.pivotFields.push(PivotField.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag === 64) {
            message.rowFields.push(reader.int32());
            continue;
          }
          if (tag === 66) {
            let packedEnd = reader.uint32() + reader.pos;
            for (; reader.pos < packedEnd;)
              message.rowFields.push(reader.int32());
            continue;
          }
          break;
        case 9:
          if (tag === 72) {
            message.columnFields.push(reader.int32());
            continue;
          }
          if (tag === 74) {
            let packedEnd = reader.uint32() + reader.pos;
            for (; reader.pos < packedEnd;)
              message.columnFields.push(reader.int32());
            continue;
          }
          break;
        case 10:
          if (tag !== 82) break;
          message.pageFields.push(
            PivotPageField.decode(reader, reader.uint32()),
          );
          continue;
        case 11:
          if (tag !== 90) break;
          message.dataFields.push(
            PivotDataField.decode(reader, reader.uint32()),
          );
          continue;
        case 12:
          if (tag !== 98) break;
          message.filters.push(PivotFilter.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 104) break;
          message.compact = reader.bool();
          continue;
        case 14:
          if (tag !== 112) break;
          message.outline = reader.bool();
          continue;
        case 15:
          if (tag !== 120) break;
          message.showDrill = reader.bool();
          continue;
        case 16:
          if (tag !== 130) break;
          message.styleName = reader.string();
          continue;
        case 17:
          if (tag !== 138) break;
          message.rowItems.push(PivotFieldItem.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 146) break;
          message.columnItems.push(
            PivotFieldItem.decode(reader, reader.uint32()),
          );
          continue;
        case 19:
          if (tag !== 152) break;
          message.showRowHeaders = reader.bool();
          continue;
        case 20:
          if (tag !== 160) break;
          message.showColHeaders = reader.bool();
          continue;
        case 21:
          if (tag !== 168) break;
          message.showRowStripes = reader.bool();
          continue;
        case 22:
          if (tag !== 176) break;
          message.showColStripes = reader.bool();
          continue;
        case 23:
          if (tag !== 184) break;
          message.showLastColumn = reader.bool();
          continue;
        case 24:
          if (tag !== 192) break;
          message.applyNumberFormats = reader.bool();
          continue;
        case 25:
          if (tag !== 200) break;
          message.applyBorderFormats = reader.bool();
          continue;
        case 26:
          if (tag !== 208) break;
          message.applyFontFormats = reader.bool();
          continue;
        case 27:
          if (tag !== 216) break;
          message.applyPatternFormats = reader.bool();
          continue;
        case 28:
          if (tag !== 224) break;
          message.applyAlignmentFormats = reader.bool();
          continue;
        case 29:
          if (tag !== 232) break;
          message.applyWidthHeightFormats = reader.bool();
          continue;
        case 30:
          if (tag !== 242) break;
          message.dataCaption = reader.string();
          continue;
        case 31:
          if (tag !== 248) break;
          message.updatedVersion = reader.uint32();
          continue;
        case 32:
          if (tag !== 256) break;
          message.minRefreshableVersion = reader.uint32();
          continue;
        case 33:
          if (tag !== 264) break;
          message.useAutoFormatting = reader.bool();
          continue;
        case 34:
          if (tag !== 272) break;
          message.itemPrintTitles = reader.bool();
          continue;
        case 35:
          if (tag !== 280) break;
          message.createdVersion = reader.uint32();
          continue;
        case 36:
          if (tag !== 289) break;
          message.indent = reader.double();
          continue;
        case 37:
          if (tag !== 296) break;
          message.outlineData = reader.bool();
          continue;
        case 38:
          if (tag !== 304) break;
          message.multipleFieldFilters = reader.bool();
          continue;
        case 39:
          if (tag !== 312) break;
          message.chartFormat = reader.uint32();
          continue;
        case 40:
          if (tag !== 322) break;
          message.extensionListXml = reader.string();
          continue;
        case 41:
          if (tag !== 330) break;
          message.grandTotalCaption = reader.string();
          continue;
        case 42:
          if (tag !== 336) break;
          message.compactData = reader.bool();
          continue;
        case 43:
          if (tag !== 346) break;
          message.formats.push(PivotFormat.decode(reader, reader.uint32()));
          continue;
        case 44:
          if (tag !== 354) break;
          message.conditionalFormats.push(
            PivotConditionalFormat.decode(reader, reader.uint32()),
          );
          continue;
        case 45:
          if (tag !== 362) break;
          message.rowHeaderCaption = reader.string();
          continue;
        case 46:
          if (tag !== 370) break;
          message.columnHeaderCaption = reader.string();
          continue;
        case 47:
          if (tag !== 376) break;
          message.dataPosition = reader.uint32();
          continue;
        case 48:
          if (tag !== 386) break;
          message.pivotHierarchies.push(
            PivotHierarchy.decode(reader, reader.uint32()),
          );
          continue;
        case 49:
          if (tag !== 392) break;
          message.subtotalHiddenItems = reader.bool();
          continue;
        case 50:
          if (tag !== 400) break;
          message.showHeaders = reader.bool();
          continue;
        case 51:
          if (tag !== 410) break;
          message.rowHierarchyUsages.push(
            PivotHierarchyUsage.decode(reader, reader.uint32()),
          );
          continue;
        case 52:
          if (tag !== 418) break;
          message.columnHierarchyUsages.push(
            PivotHierarchyUsage.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag === 0) break;
      reader.skip(tag & 7);
    }
    return message;
  },
  create(properties) {
    return PivotTable.fromPartial(properties ?? {});
  },
  fromPartial(object) {
    let message = createPivotTable();
    return (
      (message.name = object.name ?? ``),
      (message.cacheId = object.cacheId ?? 0),
      (message.location =
        object.location !== void 0 && object.location !== null
          ? PivotTableLocation.fromPartial(object.location)
          : void 0),
      (message.dataOnRows = object.dataOnRows ?? void 0),
      (message.rowGrandTotals = object.rowGrandTotals ?? void 0),
      (message.columnGrandTotals = object.columnGrandTotals ?? void 0),
      (message.pivotFields =
        object.pivotFields?.map((item) => PivotField.fromPartial(item)) || []),
      (message.rowFields = object.rowFields?.map((item) => item) || []),
      (message.columnFields = object.columnFields?.map((item) => item) || []),
      (message.pageFields =
        object.pageFields?.map((item) => PivotPageField.fromPartial(item)) ||
        []),
      (message.dataFields =
        object.dataFields?.map((item) => PivotDataField.fromPartial(item)) ||
        []),
      (message.filters =
        object.filters?.map((item) => PivotFilter.fromPartial(item)) || []),
      (message.compact = object.compact ?? void 0),
      (message.outline = object.outline ?? void 0),
      (message.showDrill = object.showDrill ?? void 0),
      (message.styleName = object.styleName ?? void 0),
      (message.rowItems =
        object.rowItems?.map((item) => PivotFieldItem.fromPartial(item)) || []),
      (message.columnItems =
        object.columnItems?.map((item) => PivotFieldItem.fromPartial(item)) ||
        []),
      (message.showRowHeaders = object.showRowHeaders ?? void 0),
      (message.showColHeaders = object.showColHeaders ?? void 0),
      (message.showRowStripes = object.showRowStripes ?? void 0),
      (message.showColStripes = object.showColStripes ?? void 0),
      (message.showLastColumn = object.showLastColumn ?? void 0),
      (message.applyNumberFormats = object.applyNumberFormats ?? void 0),
      (message.applyBorderFormats = object.applyBorderFormats ?? void 0),
      (message.applyFontFormats = object.applyFontFormats ?? void 0),
      (message.applyPatternFormats = object.applyPatternFormats ?? void 0),
      (message.applyAlignmentFormats = object.applyAlignmentFormats ?? void 0),
      (message.applyWidthHeightFormats =
        object.applyWidthHeightFormats ?? void 0),
      (message.dataCaption = object.dataCaption ?? void 0),
      (message.updatedVersion = object.updatedVersion ?? void 0),
      (message.minRefreshableVersion = object.minRefreshableVersion ?? void 0),
      (message.useAutoFormatting = object.useAutoFormatting ?? void 0),
      (message.itemPrintTitles = object.itemPrintTitles ?? void 0),
      (message.createdVersion = object.createdVersion ?? void 0),
      (message.indent = object.indent ?? void 0),
      (message.outlineData = object.outlineData ?? void 0),
      (message.multipleFieldFilters = object.multipleFieldFilters ?? void 0),
      (message.chartFormat = object.chartFormat ?? void 0),
      (message.extensionListXml = object.extensionListXml ?? void 0),
      (message.grandTotalCaption = object.grandTotalCaption ?? void 0),
      (message.compactData = object.compactData ?? void 0),
      (message.formats =
        object.formats?.map((item) => PivotFormat.fromPartial(item)) || []),
      (message.conditionalFormats =
        object.conditionalFormats?.map((item) =>
          PivotConditionalFormat.fromPartial(item),
        ) || []),
      (message.rowHeaderCaption = object.rowHeaderCaption ?? void 0),
      (message.columnHeaderCaption = object.columnHeaderCaption ?? void 0),
      (message.dataPosition = object.dataPosition ?? void 0),
      (message.pivotHierarchies =
        object.pivotHierarchies?.map((item) =>
          PivotHierarchy.fromPartial(item),
        ) || []),
      (message.subtotalHiddenItems = object.subtotalHiddenItems ?? void 0),
      (message.showHeaders = object.showHeaders ?? void 0),
      (message.rowHierarchyUsages =
        object.rowHierarchyUsages?.map((item) =>
          PivotHierarchyUsage.fromPartial(item),
        ) || []),
      (message.columnHierarchyUsages =
        object.columnHierarchyUsages?.map((item) =>
          PivotHierarchyUsage.fromPartial(item),
        ) || []),
      message
    );
  },
};
