// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~l0zkuzaj-DDSIe85-.js
// Public-package adapter for the bundled mdast/micromark runtime.
import { decodeNamedCharacterReference } from "decode-named-character-reference";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString as mdastToString } from "mdast-util-to-string";
import { blankLine } from "micromark-core-commonmark";
import { factorySpace } from "micromark-factory-space";
import { factoryWhitespace } from "micromark-factory-whitespace";
import {
  asciiAlpha,
  asciiAlphanumeric,
  asciiControl,
  markdownLineEnding,
  markdownLineEndingOrSpace,
  markdownSpace,
  unicodePunctuation,
  unicodeWhitespace,
} from "micromark-util-character";
import { splice } from "micromark-util-chunked";
import { classifyCharacter } from "micromark-util-classify-character";
import { combineExtensions } from "micromark-util-combine-extensions";
import { decodeString } from "micromark-util-decode-string";
import { normalizeIdentifier } from "micromark-util-normalize-identifier";
import { resolveAll } from "micromark-util-resolve-all";
import { stringifyPosition } from "unist-util-stringify-position";
function initRuntime(): void {}
const initMicromarkCharacterUtilities = initRuntime;
const initNamedCharacterReferenceDecoder = initRuntime;
const initMdastToStringRuntime = initRuntime;
const initCombineExtensions = initRuntime;
const initChunkedArrayUtilities = initRuntime;
const initMdastToStringOptions = initRuntime;
const initCharacterClassifier = initRuntime;
const initStringifyPositionCore = initRuntime;
const initDecodeString = initRuntime;
const initFactoryWhitespace = initRuntime;
const initStringifyPosition = initRuntime;
const initNormalizeIdentifier = initRuntime;
const initCommonmarkConstructs = initRuntime;
const initResolveAll = initRuntime;
const initBlankLine = initRuntime;
const initFromMarkdownDependencies = initRuntime;
const initFromMarkdown = initRuntime;
const initFactorySpace = initRuntime;
export {
  normalizeIdentifier,
  initMicromarkCharacterUtilities,
  unicodePunctuation,
  markdownSpace,
  decodeNamedCharacterReference,
  initNamedCharacterReferenceDecoder,
  initMdastToStringRuntime,
  initCombineExtensions,
  initChunkedArrayUtilities,
  unicodeWhitespace,
  splice,
  initMdastToStringOptions,
  asciiControl,
  markdownLineEndingOrSpace,
  initCharacterClassifier,
  initStringifyPositionCore,
  asciiAlpha,
  initDecodeString,
  initFactoryWhitespace,
  blankLine,
  classifyCharacter,
  resolveAll,
  initStringifyPosition,
  combineExtensions,
  initNormalizeIdentifier,
  initCommonmarkConstructs,
  initResolveAll,
  fromMarkdown,
  stringifyPosition,
  initBlankLine,
  initFromMarkdownDependencies,
  decodeString,
  initFromMarkdown,
  factoryWhitespace,
  factorySpace,
  markdownLineEnding,
  asciiAlphanumeric,
  initFactorySpace,
  mdastToString,
};
