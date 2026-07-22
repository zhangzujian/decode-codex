// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
import { Dt as compactWorkbookRuntimeUpdates } from "../../../boundaries/workbook-runtime";
import type {
  PopcornCrdtBootstrapState,
  PopcornCrdtUpdate,
  PopcornCrdtUpdateInput,
  UseBootstrappedExternalCrdtUpdatesOptions,
} from "./types";

export function nonEmptyCrdtUpdates(
  updates: readonly PopcornCrdtUpdateInput[] | null | undefined,
): PopcornCrdtUpdate[] {
  return (updates ?? []).filter(
    (update): update is PopcornCrdtUpdate =>
      update != null && update.length > 0,
  );
}

export function compactPendingCrdtUpdates(
  updates: readonly PopcornCrdtUpdate[],
  startIndex: number,
): PopcornCrdtUpdate | null {
  const nonEmptyUpdates = updates
    .slice(startIndex)
    .filter((update) => update.length > 0);
  if (nonEmptyUpdates.length === 0) return null;
  if (nonEmptyUpdates.length === 1) return nonEmptyUpdates[0] ?? null;
  return compactWorkbookRuntimeUpdates(nonEmptyUpdates) as PopcornCrdtUpdate;
}

function sameCrdtUpdate(
  left: PopcornCrdtUpdate,
  right: PopcornCrdtUpdate,
): boolean {
  if (left === right) return true;
  if (left.length !== right.length) return false;
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) return false;
  }
  return true;
}

export function sameCrdtUpdateList(
  left: readonly PopcornCrdtUpdate[],
  right: readonly PopcornCrdtUpdate[],
): boolean {
  if (left === right) return true;
  if (left.length !== right.length) return false;
  for (let index = 0; index < left.length; index += 1) {
    const leftUpdate = left[index];
    const rightUpdate = right[index];
    if (
      leftUpdate == null ||
      rightUpdate == null ||
      !sameCrdtUpdate(leftUpdate, rightUpdate)
    ) {
      return false;
    }
  }
  return true;
}

export function createBootstrapState(
  options: UseBootstrappedExternalCrdtUpdatesOptions,
): PopcornCrdtBootstrapState {
  const bootstrappedExternalCrdtUpdates = nonEmptyCrdtUpdates(
    options.externalCrdtUpdates,
  );
  const mergedUpdates = [...bootstrappedExternalCrdtUpdates];
  if (options.initialCrdtState != null && options.initialCrdtState.length > 0) {
    mergedUpdates.unshift(options.initialCrdtState);
  }
  const initialCrdtState =
    mergedUpdates.length === 0
      ? options.initialCrdtState
      : mergedUpdates.length === 1
        ? mergedUpdates[0]
        : (compactWorkbookRuntimeUpdates(mergedUpdates) as PopcornCrdtUpdate);
  return { initialCrdtState, bootstrappedExternalCrdtUpdates };
}

export function remainingExternalCrdtUpdates({
  bootstrapState,
  updates,
}: {
  bootstrapState: PopcornCrdtBootstrapState;
  updates: readonly PopcornCrdtUpdateInput[] | null | undefined;
}): PopcornCrdtUpdate[] {
  const nonEmptyUpdates = nonEmptyCrdtUpdates(updates);
  const bootstrappedUpdates = bootstrapState.bootstrappedExternalCrdtUpdates;
  if (
    bootstrappedUpdates.length === 0 ||
    nonEmptyUpdates.length < bootstrappedUpdates.length
  ) {
    return nonEmptyUpdates;
  }
  for (let index = 0; index < bootstrappedUpdates.length; index += 1) {
    const bootstrappedUpdate = bootstrappedUpdates[index];
    const update = nonEmptyUpdates[index];
    if (
      bootstrappedUpdate == null ||
      update == null ||
      !sameCrdtUpdate(bootstrappedUpdate, update)
    ) {
      return nonEmptyUpdates;
    }
  }
  return nonEmptyUpdates.slice(bootstrappedUpdates.length);
}
