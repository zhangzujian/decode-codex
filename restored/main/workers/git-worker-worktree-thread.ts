// Restored from ref/.vite/build/worker.js
// Worktree thread ownership metadata stored under the repository git dir.

import { runGitCommand } from "./git-worker-commands";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

type ThreadOwnerConfig = {
  version: 1;
  ownerThreadId: string;
};

export async function setWorktreeOwnerThread({
  conversationId,
  host,
  signal,
  worktree,
}: {
  conversationId: string;
  host: WorkerExecutionHostClient;
  signal: AbortSignal;
  worktree: string;
}): Promise<void> {
  const configPath = await resolveGitPath({
    host,
    path: "codex-thread.json",
    root: worktree,
    signal,
  });
  if (configPath == null) {
    throw Error("No git repository found for thread config");
  }

  await host.writeFile(
    configPath,
    `${JSON.stringify(createThreadOwnerConfig(conversationId), null, 2)}\n`,
    { signal },
  );
}

function createThreadOwnerConfig(ownerThreadId: string): ThreadOwnerConfig {
  return {
    version: 1,
    ownerThreadId,
  };
}

async function resolveGitPath({
  host,
  path,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  path: string;
  root: string;
  signal: AbortSignal;
}): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-path", path],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;

  const pathApi = await host.platformPath();
  if (pathApi.isAbsolute(result.stdout)) return result.stdout;
  if (result.stdout.startsWith(".git/")) {
    return pathApi.join(root, result.stdout);
  }

  const gitDir = await resolveGitDir(host, root, signal);
  return gitDir == null ? null : pathApi.join(gitDir, result.stdout);
}

async function resolveGitDir(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    args: ["rev-parse", "--git-dir"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;

  const pathApi = await host.platformPath();
  return pathApi.isAbsolute(result.stdout)
    ? result.stdout
    : pathApi.join(root, result.stdout);
}
