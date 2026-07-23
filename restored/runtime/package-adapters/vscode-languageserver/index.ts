// Restored from ref/webview/assets/main-D3tz-rgZ.js
// Compatibility surface for the bundled VS Code language-server primitives.
import * as jsonRpc from "vscode-jsonrpc";
import { TextDocument } from "vscode-languageserver-textdocument";
import * as languageServerTypes from "vscode-languageserver-types";
export { Position, Range } from "vscode-languageserver-types";
export { TextDocument };
export const languageServerTypeGuards = languageServerTypes;
export const emitterModule = jsonRpc;
export function initLanguageServerTypesChunk(): void {}
export function initTextDocumentChunk(): void {}
export const runtimeAbstractionLayerModule = jsonRpc.RAL;
export const cancellationModule = jsonRpc;
export { languageServerTypes };
