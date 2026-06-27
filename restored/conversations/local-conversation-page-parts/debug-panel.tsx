// Restored from ref/webview/assets/local-conversation-page-D7JrTtqP.js
import React from "react";

import {
  Em as conversationTurnsSignal,
  FB as useScope,
  M_ as localConversationRouteScope,
  cm as conversationHostIdSignal,
  dV as createDerivedSignal,
  gp as conversationCwdSignal,
  jm as conversationModeSignal,
  lm as conversationResumeStateSignal,
  um as rolloutPathSignal,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  createDebugPanelSourceId,
  getEditedFilesFromTurns,
  getReferencedFilesFromTurns,
  registerDebugPanelSource,
  unregisterDebugPanelSource,
  useIsDebugPanelEnabled,
} from "../../boundaries/current-ref/debug-panel-producer";
import type { Scope } from "./types";

type LocalConversationDebugPanelReporterProps = { conversationId: string };

export function LocalConversationDebugPanelReporter({
  conversationId,
}: LocalConversationDebugPanelReporterProps): null {
  const scope = useScope(localConversationRouteScope) as Scope;
  const enabled = useIsDebugPanelEnabled();

  React.useEffect(() => {
    if (!enabled) {
      return undefined;
    }
    const sourceId = createDebugPanelSourceId("local-conversation", conversationId);
    registerDebugPanelSource(scope, sourceId, localConversationDebugPanelSource);
    return () => {
      unregisterDebugPanelSource(scope, sourceId);
    };
  }, [conversationId, enabled, scope]);

  return null;
}

const localConversationDebugPanelSource = createDerivedSignal(
  localConversationRouteScope,
  ({ get, scope }: { get: Scope["get"]; scope: Scope }) => {
    const conversationId = scope.value?.conversationId as string | undefined;
    if (!conversationId) {
      return null;
    }
    const turns = get<unknown[]>(conversationTurnsSignal, conversationId) ?? [];
    return {
      conversationId,
      cwd: get<string | null>(conversationCwdSignal, conversationId),
      editedFiles: getEditedFilesFromTurns(turns),
      hostId: get<string | null>(conversationHostIdSignal, conversationId),
      mode: get<string | null>(conversationModeSignal, conversationId),
      referencedFiles: getReferencedFilesFromTurns(turns),
      resumeState: get<string | null>(conversationResumeStateSignal, conversationId),
      rolloutPath: get<string | null>(rolloutPathSignal, conversationId),
    };
  },
);
