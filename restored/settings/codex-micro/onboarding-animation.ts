// Restored from ref/webview/assets/codex-micro-onboarding-animation-RtdsjVn5.js
// Time-driven onboarding animation state and derived agent-slot signals.
import { createLazyEsmInitializer } from "../../runtime/rolldown";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB as initAppStateStore,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDt as createDerivedSignal,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX as initSignalRuntime,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyXt as createWritableSignal,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY as appStateStore,
} from "../../runtime/current-app-initial/shared-react-runtime";
type AnimationStore = {
  set(signal: unknown, value: number | null): void;
};
type AgentStatus =
  | "working"
  | "awaiting-approval"
  | "awaiting-response"
  | "error"
  | "unread"
  | "idle";
export interface CodexMicroOnboardingAgentSlot {
  id: number;
  threadKey: null;
  title: null;
  status: AgentStatus;
  selected: false;
}
export interface CodexMicroOnboardingAnimationState {
  actionKeycapIds: string[];
  agentSlots: CodexMicroOnboardingAgentSlot[];
}
const TICK_INTERVAL_MS = 100;
const CYCLE_DURATION_MS = 12_000;
const AGENT_STAGGER_MS = 800;
const KEYCAP_STAGGER_MS = 700;
const PHASE_THRESHOLDS = [
  [0.25, 0.33],
  [0.58, 0.66],
  [0.92, 1],
].map(([start, end]) => Math.round(((start + end) / 2) * CYCLE_DURATION_MS));
const AGENT_STATUS_FRAMES: AgentStatus[][] = [
  ["working", "awaiting-approval", "error"],
  ["unread", "working", "idle"],
  ["awaiting-approval", "idle", "working"],
  ["idle", "error", "unread"],
  ["working", "unread", "awaiting-response"],
  ["awaiting-response", "working", "idle"],
];
const KEYCAP_FRAMES = [
  ["FAST", "PLAY", "BUG"],
  ["APPR", "SPLIT", "SETUP"],
  ["REJ", "NEW", "CODEX"],
  ["SPLIT", "BUG", "FAST"],
  ["MIC", "NEW", "PLAY"],
  ["CODEX", "APPR", "SETUP"],
];
let animationClockSignal: unknown;
export function startCodexMicroOnboardingAnimationClock(
  store: AnimationStore,
  frozen: boolean,
): () => void {
  const startedAt = globalThis.performance.now();
  store.set(animationClockSignal, frozen ? -1 : 0);
  const interval = frozen
    ? null
    : globalThis.setInterval(() => {
        store.set(
          animationClockSignal,
          globalThis.performance.now() - startedAt,
        );
      }, TICK_INTERVAL_MS);
  return () => {
    if (interval != null) globalThis.clearInterval(interval);
    store.set(animationClockSignal, null);
  };
}
export const initCodexMicroOnboardingAnimationChunk = createLazyEsmInitializer(
  () => {
    initSignalRuntime();
    initAppStateStore();
    animationClockSignal = createWritableSignal(appStateStore, null);
    onboardingAnimationStateSignal = createDerivedSignal(
      appStateStore,
      ({ get }: { get(signal: unknown): number | null }) => {
        const elapsed = get(animationClockSignal);
        return elapsed == null
          ? null
          : buildCodexMicroOnboardingAnimationState(elapsed);
      },
    );
    onboardingAgentSlotsSignal = createDerivedSignal(
      appStateStore,
      ({
        get,
      }: {
        get(signal: unknown): CodexMicroOnboardingAnimationState | null;
      }) => get(onboardingAnimationStateSignal)?.agentSlots ?? null,
    );
  },
);
export let onboardingAgentSlotsSignal: unknown;
export function buildCodexMicroOnboardingAnimationState(
  elapsedMs: number,
): CodexMicroOnboardingAnimationState {
  const frozen = elapsedMs === -1;
  const elapsed = frozen ? 0 : elapsedMs;
  return {
    actionKeycapIds: KEYCAP_FRAMES.map((frames, index) =>
      frameAt(frames, elapsed, frozen ? 0 : (index + 1) * KEYCAP_STAGGER_MS),
    ),
    agentSlots: AGENT_STATUS_FRAMES.map((frames, index) => ({
      id: index,
      threadKey: null,
      title: null,
      status: frameAt(frames, elapsed, frozen ? 0 : index * AGENT_STAGGER_MS),
      selected: false,
    })),
  };
}
export let onboardingAnimationStateSignal: unknown;
function frameAt<T>(frames: T[], elapsedMs: number, offsetMs: number): T {
  return frames[phaseIndex((elapsedMs + offsetMs) % CYCLE_DURATION_MS)]!;
}
function phaseIndex(elapsedMs: number): number {
  if (elapsedMs < PHASE_THRESHOLDS[0]!) return 0;
  if (elapsedMs < PHASE_THRESHOLDS[1]!) return 1;
  if (elapsedMs < PHASE_THRESHOLDS[2]!) return 2;
  return 0;
}
