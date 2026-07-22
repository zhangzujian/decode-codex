// Restored from ref/webview/assets/_baseFor-DBc6wfxY.js
// npm-backed adapter for the Lodash helpers bundled into this runtime chunk.
import MapCache from "lodash/_MapCache";
import Stack from "lodash/_Stack";
import arrayLikeKeys from "lodash/_arrayLikeKeys";
import baseFor from "lodash/_baseFor";
import baseGetTag from "lodash/_baseGetTag";
import baseUnary from "lodash/_baseUnary";
import eq from "lodash/eq";
import getNative from "lodash/_getNative";
import identity from "lodash/identity";
import isArguments from "lodash/isArguments";
import isArray from "lodash/isArray";
import isArrayLike from "lodash/isArrayLike";
import isFunction from "lodash/isFunction";
import isIndex from "lodash/_isIndex";
import isLength from "lodash/isLength";
import isObject from "lodash/isObject";
import isObjectLike from "lodash/isObjectLike";
import isPrototype from "lodash/_isPrototype";
import isTypedArray from "lodash/isTypedArray";
import memoize from "lodash/memoize";
import nodeUtilTypes from "lodash/_nodeUtil";
import overArg from "lodash/_overArg";
import root from "lodash/_root";
import toSource from "lodash/_toSource";
type InitFunction = () => void;
const noopInit: InitFunction = () => {};
const initRoot = noopInit;
const initNativeMap = noopInit;
const initIndexRuntime = noopInit;
const initArgumentsRuntime = noopInit;
const initFunctionRuntime = noopInit;
const initGetNative = noopInit;
const initStackRuntime = noopInit;
const initUint8Array = noopInit;
const initSymbol = noopInit;
const initMapCache = noopInit;
const initMapCacheStorage = noopInit;
const initToSource = noopInit;
const initBaseGetTag = noopInit;
const initNodeUtil = noopInit;
const initMemoize = noopInit;
const initNodeUtilFallback = noopInit;
const initIsPrototype = noopInit;
const initIsTypedArray = noopInit;
const initIdentity = noopInit;
const initIsArray = noopInit;
const initIsObjectLike = noopInit;
const initOverArg = noopInit;
const initArrayLikeKeys = noopInit;
const initBaseFor = noopInit;
const initEq = noopInit;
const initIsObject = noopInit;
const initIsArrayLike = noopInit;
const initIsLength = noopInit;
const Uint8ArrayConstructor = root.Uint8Array;
const SymbolConstructor = root.Symbol;
const MapConstructor = getNative(root, "Map");
const isBuffer = (_value: unknown): boolean => false;
export {
  initRoot,
  isObjectLike,
  initNativeMap,
  initIndexRuntime,
  initArgumentsRuntime,
  isBuffer,
  Stack,
  initFunctionRuntime,
  initGetNative,
  initStackRuntime,
  isObject,
  isFunction,
  MapCache,
  isArray,
  Uint8ArrayConstructor,
  isArguments,
  initUint8Array,
  initSymbol,
  initMapCache,
  isLength,
  initMapCacheStorage,
  initToSource,
  getNative,
  toSource,
  initBaseGetTag,
  baseGetTag,
  SymbolConstructor,
  initNodeUtil,
  initMemoize,
  initNodeUtilFallback,
  isArrayLike,
  initIsPrototype,
  root,
  isPrototype,
  isTypedArray,
  initIsTypedArray,
  initIdentity,
  initIsArray,
  initIsObjectLike,
  initOverArg,
  initArrayLikeKeys,
  initBaseFor,
  initEq,
  memoize,
  arrayLikeKeys,
  initIsObject,
  identity,
  initIsArrayLike,
  baseFor,
  eq,
  overArg,
  nodeUtilTypes,
  isIndex,
  initIsLength,
  baseUnary,
  MapConstructor,
};
