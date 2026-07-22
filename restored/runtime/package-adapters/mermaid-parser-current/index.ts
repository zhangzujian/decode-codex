// Restored from ref/webview/assets/chunk-K5T4RW27-DBsaZQmV.js
// npm-backed adapter for @mermaid-js/parser 1.1 and Langium 4 runtime exports.
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
  TreeViewGeneratedModule,
  TreemapGeneratedModule,
  WardleyGeneratedModule,
} from "@mermaid-js/parser";
import {
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject,
} from "langium";
import { NodeFileSystem } from "langium/node";
const initMermaidParserRuntime = (): void => {};
const initParserServices = initMermaidParserRuntime;
const initNodeFileSystem = initMermaidParserRuntime;
const initGeneratedGrammars = initMermaidParserRuntime;
const initLangiumCore = initMermaidParserRuntime;
const setFunctionName = <T extends Function>(value: T, name: string): T => {
  Object.defineProperty(value, "name", {
    value: name,
    configurable: true,
  });
  return value;
};
export {
  initMermaidParserRuntime,
  createDefaultSharedCoreModule,
  NodeFileSystem,
  GitGraphGeneratedModule,
  inject,
  PacketGeneratedModule,
  TreeViewGeneratedModule,
  TreemapGeneratedModule,
  initParserServices,
  initNodeFileSystem,
  CommonValueConverter,
  PieGeneratedModule,
  setFunctionName,
  AbstractMermaidValueConverter,
  InfoGeneratedModule,
  WardleyGeneratedModule,
  ArchitectureGeneratedModule,
  MermaidGeneratedSharedModule,
  AbstractMermaidTokenBuilder,
  RadarGeneratedModule,
  initGeneratedGrammars,
  createDefaultCoreModule,
  initLangiumCore,
};
