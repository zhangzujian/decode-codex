// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~cc80cam6-BCKQAAO_.js
// Current persisted atom, signal registry, button, spinner, zoom, tooltip, and close-icon runtime.
import { XIcon as CloseIcon } from "../../icons/x-icon";
import {
  dynamicSignalResolver as persistedAtomRegistrySelector,
  persistedSignalInitialValuesSignal as persistedAtomsRegistrySignal,
  createPersistedSignal as createPersistedAtomRegistryEntry,
  createPersistedAtomSignal,
  subscribePersistedSignalInitialValues as subscribePersistedAtomRegistry,
} from "../persisted-signal";
import { buttonRadiusClasses, Button } from "../../ui/button";
import { Spinner, SpinnerIcon } from "../../ui/spinner";
import {
  PERSISTED_ATOM_LOCAL_STORAGE_PREFIX,
  clearPersistedAtomLocalStorage,
  clearPersistedAtomPrefix,
  clearPersistedAtomStore,
  createPersistedAtomStore,
  flushPendingPersistedAtoms,
  flushPersistedAtomKey,
  getPersistedAtomValue,
  initializePersistedAtomStore,
  markPersistedAtomsSynced,
  readPersistedAtomLocalStorage,
  schedulePersistedAtomWrite,
  setPersistedAtomItem,
  setPersistedAtomValueInMemory,
  subscribePersistedAtomValue,
} from "../../utils/persisted-atom-store";
import {
  DISMISS_TOOLTIPS_EVENT,
  dismissTooltips,
} from "../../utils/tooltip-dismiss";
import {
  WindowZoomContext,
  getZoomScaleRatio,
  useWindowZoom,
  windowZoomPersistedAtom,
} from "../../utils/window-zoom-context";
function initPersistedAtomStoreRuntime(): void {}
function initPersistedAtomRegistryRuntime(): void {}
function initButtonRuntime(): void {}
function initButtonRadiusClasses(): void {}
function initSpinnerIconRuntime(): void {}
function initSpinnerRuntime(): void {}
function initWindowZoomRuntime(): void {}
function initDismissTooltipsRuntime(): void {}
function initCloseIconRuntime(): void {}
export {
  createPersistedAtomStore,
  subscribePersistedAtomValue,
  buttonRadiusClasses,
  clearPersistedAtomLocalStorage,
  setPersistedAtomValueInMemory,
  readPersistedAtomLocalStorage,
  clearPersistedAtomPrefix,
  clearPersistedAtomStore,
  initPersistedAtomStoreRuntime,
  initializePersistedAtomStore,
  flushPersistedAtomKey,
  markPersistedAtomsSynced,
  setPersistedAtomItem,
  initSpinnerIconRuntime,
  PERSISTED_ATOM_LOCAL_STORAGE_PREFIX,
  Button,
  initDismissTooltipsRuntime,
  initSpinnerRuntime,
  getZoomScaleRatio,
  initPersistedAtomRegistryRuntime,
  createPersistedAtomRegistryEntry,
  subscribePersistedAtomRegistry,
  persistedAtomRegistrySelector,
  dismissTooltips,
  getPersistedAtomValue,
  flushPendingPersistedAtoms,
  useWindowZoom,
  persistedAtomsRegistrySignal,
  initCloseIconRuntime,
  WindowZoomContext,
  createPersistedAtomSignal,
  DISMISS_TOOLTIPS_EVENT,
  initWindowZoomRuntime,
  CloseIcon,
  windowZoomPersistedAtom,
  initButtonRuntime,
  initButtonRadiusClasses,
  SpinnerIcon,
  Spinner,
  schedulePersistedAtomWrite,
};
