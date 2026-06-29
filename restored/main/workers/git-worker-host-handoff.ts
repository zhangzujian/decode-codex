// Restored from ref/.vite/build/worker.js
// Host handoff transfer cleanup helpers for Git worker thread moves.

import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function cleanupHostHandoffTransfer({
  host,
  rolloutPath,
}: {
  host: WorkerExecutionHostClient;
  rolloutPath: string;
}): Promise<{ success: true }> {
  const pathApi = await host.platformPath();
  const rolloutDir = pathApi.dirname(rolloutPath);
  const handoffsRoot = pathApi.join(String(await host.codexHome()), "handoffs");
  const relativeDir = pathApi.relative(handoffsRoot, rolloutDir);

  if (
    pathApi.basename(rolloutPath) !== "rollout.jsonl" ||
    relativeDir.length === 0 ||
    relativeDir === ".." ||
    relativeDir.startsWith(`..${pathApi.sep}`) ||
    pathApi.isAbsolute(relativeDir) ||
    relativeDir.includes(pathApi.sep)
  ) {
    throw Error("Host handoff cleanup requires a copied rollout path");
  }

  await host.remove(rolloutDir, { recursive: true, force: true });
  return { success: true };
}
