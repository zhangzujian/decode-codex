// Restored from ref/webview/assets/chunk-FPAJGGOC-CN4fXTF-.js
// npm-backed compatibility adapter for the legacy @mermaid-js/parser runtime.
import {
  AbstractMermaidTokenBuilder,
  AbstractMermaidValueConverter,
  ArchitectureGeneratedModule,
  CommonValueConverter,
  GitGraphGeneratedModule,
  InfoGeneratedModule,
  MermaidGeneratedSharedModule,
  PacketGeneratedModule,
  PieGeneratedModule,
  RadarGeneratedModule,
  TreemapGeneratedModule,
} from "@mermaid-js/parser";
import {
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject,
} from "langium";
import { NodeFileSystem } from "langium/node";
const initLegacyMermaidParser = (): void => {};
const initParserServices = initLegacyMermaidParser;
const initNodeFileSystem = initLegacyMermaidParser;
const initGeneratedGrammars = initLegacyMermaidParser;
const initLangiumCore = initLegacyMermaidParser;
const createDefaultSharedModule = (
  context: Parameters<typeof createDefaultSharedCoreModule>[0],
) => {
  const { profilers: _profilers, ...legacyModule } =
    createDefaultSharedCoreModule(context);
  return legacyModule;
};
const setFunctionName = <T extends Function>(value: T, name: string): T => {
  Object.defineProperty(value, "name", {
    value: name,
    configurable: true,
  });
  return value;
};
export {
  initLegacyMermaidParser,
  GitGraphGeneratedModule,
  createDefaultSharedModule,
  PacketGeneratedModule,
  TreemapGeneratedModule,
  setFunctionName,
  initParserServices,
  NodeFileSystem,
  CommonValueConverter,
  PieGeneratedModule,
  initNodeFileSystem,
  AbstractMermaidValueConverter,
  InfoGeneratedModule,
  initGeneratedGrammars,
  ArchitectureGeneratedModule,
  MermaidGeneratedSharedModule,
  AbstractMermaidTokenBuilder,
  RadarGeneratedModule,
  inject,
  initLangiumCore,
  createDefaultCoreModule,
};
