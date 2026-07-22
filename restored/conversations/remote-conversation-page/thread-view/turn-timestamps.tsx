// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import { worktreeNewThreadOrchestratorCompatSlotUpperULowerL } from "../../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

import { worktreeNewThreadQueryCompatSlotLowerMLowerD } from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { RemoteConversationTurnActions } from "./turn-actions";

function remoteConversationPageUnit63(remoteConversationPageOperand26) {
  return remoteConversationPageOperand26.map(({ node, activeId }) => {
    let remoteConversationPageBinding425 = `user:${node.userTurn.id}`,
      remoteConversationPageBinding426 =
        worktreeNewThreadQueryCompatSlotLowerMLowerD(
          node.assistantTurns,
          activeId,
        ),
      remoteConversationPageBinding427 =
        remoteConversationPageBinding426?.output_items ?? [];
    return {
      id: worktreeNewThreadOrchestratorCompatSlotUpperULowerL(
        remoteConversationPageBinding425,
        "message",
      ),
      getPreview: () => {
        let remoteConversationPageBinding449 =
          remoteConversationPageBinding427.flatMap((item) => {
            let remoteConversationPageBinding487 =
              remoteConversationPageUnit64(item);
            if (remoteConversationPageBinding487 == null) return [];
            let remoteConversationPageBinding488 = null;
            return (
              item.type === "pr"
                ? (remoteConversationPageBinding488 =
                    item.pr_title.trim() || null)
                : (item.type === "comment" || item.type === "suggested_task") &&
                  (remoteConversationPageBinding488 =
                    item.title?.trim() || null),
              [
                {
                  label: remoteConversationPageBinding488,
                  type: remoteConversationPageBinding487,
                },
              ]
            );
          });
        return (
          remoteConversationPageBinding426?.direct_push_pushed_commit_sha !=
            null &&
            remoteConversationPageBinding449.push({
              label: null,
              type: "commit",
            }),
          {
            outputs: remoteConversationPageBinding449,
            response:
              RemoteConversationTurnActions.remoteConversationPageUnit62(
                remoteConversationPageBinding427.filter(
                  (item) => item.type === "message",
                ),
              ).trim(),
          }
        );
      },
      getLabel: () =>
        RemoteConversationTurnActions.remoteConversationPageUnit62(
          node.userTurn.input_items.filter((item) => item.type === "message"),
        ).trim(),
      isHeartbeat: false,
      turnKey: remoteConversationPageBinding425,
    };
  });
}

function remoteConversationPageUnit64(remoteConversationPageOperand36) {
  switch (remoteConversationPageOperand36.type) {
    case "output_diff":
    case "follow_up_diff":
    case "output_asset_pointer":
      return "file";
    case "output_image_asset_pointer":
      return "image";
    case "output_preview":
    case "output_deployment_info":
      return "website";
    case "pr":
      return "pull-request";
    case "comment":
    case "cr":
    case "review":
    case "sr":
    case "suggested_task":
      return "review";
    case "message":
    case "output_session_info":
    case "partial_repo_snapshot":
    case "rollout_summary":
    case undefined:
      return null;
  }
}

export class RemoteConversationTurnTimestamps {
  static remoteConversationPageUnit63 = remoteConversationPageUnit63;
  static remoteConversationPageUnit64 = remoteConversationPageUnit64;
}
