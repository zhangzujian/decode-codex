// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
import { useEffect, useRef, useState } from "react";

import type {
  ExternalCrdtRestoreState,
  PopcornCrdtBootstrapState,
  UseBootstrappedExternalCrdtUpdatesOptions,
  UseBootstrappedExternalCrdtUpdatesResult,
  UseExternalCrdtRestoreStateOptions,
} from "./types";
import {
  compactPendingCrdtUpdates,
  createBootstrapState,
  nonEmptyCrdtUpdates,
  remainingExternalCrdtUpdates,
  sameCrdtUpdateList,
} from "./updates";

const LARGE_RESTORE_UPDATE_COUNT = 500;

export function formatExternalCrdtRestoreError(
  error: unknown,
  artifactLabel: string,
): string {
  return error instanceof Error && error.message.trim().length > 0
    ? error.message
    : `Failed to restore external ${artifactLabel.toLowerCase()} edits.`;
}

export function useBootstrappedExternalCrdtUpdates({
  initialCrdtState,
  externalCrdtUpdates,
}: UseBootstrappedExternalCrdtUpdatesOptions): UseBootstrappedExternalCrdtUpdatesResult {
  const bootstrapStateRef = useRef<PopcornCrdtBootstrapState | null>(null);
  bootstrapStateRef.current ??= createBootstrapState({
    initialCrdtState,
    externalCrdtUpdates,
  });
  const bootstrapState = bootstrapStateRef.current;
  return {
    initialCrdtState: bootstrapState.initialCrdtState,
    externalCrdtUpdates: remainingExternalCrdtUpdates({
      bootstrapState,
      updates: externalCrdtUpdates,
    }),
  };
}

export function useExternalCrdtRestoreState({
  artifactLabel,
  controller,
  externalCrdtUpdates,
  onCrdtUpdate,
}: UseExternalCrdtRestoreStateOptions): ExternalCrdtRestoreState | null {
  const appliedUpdateCountRef = useRef(0);
  const stableUpdatesRef = useRef(nonEmptyCrdtUpdates(externalCrdtUpdates));
  const [restoreState, setRestoreState] =
    useState<ExternalCrdtRestoreState | null>(null);
  const nextUpdates = nonEmptyCrdtUpdates(externalCrdtUpdates);
  if (!sameCrdtUpdateList(stableUpdatesRef.current, nextUpdates)) {
    stableUpdatesRef.current = nextUpdates;
  }
  const stableUpdates = stableUpdatesRef.current;

  useEffect(() => {
    if (controller == null || onCrdtUpdate == null) return;
    return controller.subscribeCrdtUpdates?.(onCrdtUpdate);
  }, [controller, onCrdtUpdate]);

  useEffect(() => {
    if (controller == null) return;
    const updates = stableUpdates;
    if (updates.length < appliedUpdateCountRef.current) {
      appliedUpdateCountRef.current = updates.length;
      setRestoreState(null);
      return;
    }
    if (updates.length === appliedUpdateCountRef.current) {
      setRestoreState(null);
      return;
    }
    let cancelled = false;
    void (async () => {
      const pendingUpdateCount = updates.length - appliedUpdateCountRef.current;
      setRestoreState(
        pendingUpdateCount >= LARGE_RESTORE_UPDATE_COUNT
          ? { kind: "restoring", pendingUpdateCount }
          : null,
      );
      try {
        const compactedUpdate = compactPendingCrdtUpdates(
          updates,
          appliedUpdateCountRef.current,
        );
        if (cancelled) return;
        if (compactedUpdate != null) {
          await controller.applyCrdtUpdate(compactedUpdate);
          if (cancelled) return;
        }
        appliedUpdateCountRef.current = updates.length;
        setRestoreState(null);
      } catch (error) {
        if (cancelled) return;
        setRestoreState({
          kind: "failed",
          artifactLabel,
          errorMessage: formatExternalCrdtRestoreError(error, artifactLabel),
          pendingUpdateCount,
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [artifactLabel, controller, stableUpdates]);

  return restoreState;
}
