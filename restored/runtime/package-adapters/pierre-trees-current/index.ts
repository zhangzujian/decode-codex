// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~ntg60hiq-7MggXT9j.js
// @pierre/trees runtime entry with the bundled PathStore static surface.
import {
  CONTEXT_MENU_SLOT_NAME as pierreContextMenuSlotName,
  FILE_TREE_TAG_NAME as pierreFileTreeTagName,
  FileTree as PierreFileTree,
  HEADER_SLOT_NAME as pierreHeaderSlotName,
  createFileTreeIconResolver as createPierreFileTreeIconResolver,
  getBuiltInSpriteSheet as getPierreBuiltInSpriteSheet,
  prepareFileTreeInput,
  preparePresortedFileTreeInput,
} from "@pierre/trees";
type PrepareFileTreeOptions = Parameters<typeof prepareFileTreeInput>[1];
export const createFileTreeIconResolver = createPierreFileTreeIconResolver;
export const FILE_TREE_TAG_NAME = pierreFileTreeTagName;
export const getBuiltInSpriteSheet = getPierreBuiltInSpriteSheet;
export function initBuiltInFileTreeIcons(): void {}
export function initFileTreePathStore(): void {}
export const HEADER_SLOT_NAME = pierreHeaderSlotName;
export function initFileTreeRuntime(): void {}
export function initFileTreeIconResolver(): void {}
export class FileTreePathStore {
  static preparePaths(
    paths: readonly string[],
    options: PrepareFileTreeOptions = {},
  ): readonly string[] {
    return prepareFileTreeInput(paths, options).paths;
  }
  static prepareInput(
    paths: readonly string[],
    options: PrepareFileTreeOptions = {},
  ): ReturnType<typeof prepareFileTreeInput> {
    return prepareFileTreeInput(paths, options);
  }
  static preparePresortedInput(
    paths: readonly string[],
  ): ReturnType<typeof preparePresortedFileTreeInput> {
    return preparePresortedFileTreeInput(paths);
  }
}
export const CONTEXT_MENU_SLOT_NAME = pierreContextMenuSlotName;
export const FileTree = PierreFileTree;
export function initFileTreeConstants(): void {}
