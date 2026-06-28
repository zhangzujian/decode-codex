// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
//
// TYPED BOUNDARY FACADE for cross-chunk symbols consumed by the automation
// editor and composer intelligence dropdown slice. These resolve at runtime
// through the chunk barrel; here they are given readable, usage-based names so
// the restored components can reference them. Replace with real restored
// modules as those design-system / composer-runtime chunks are scoped.
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement, ReactNode } from "react";

// --- Motion (framer-motion namespace used for the reasoning-effort slider) ---
export const motion: any = undefined as any;

// --- Platform conditional rendering primitives ---
export const PlatformGate: (props: {
  children?: ReactNode;
  browser?: boolean;
  electron?: boolean;
  extension?: boolean;
  chromeExtension?: boolean;
}) => ReactElement = undefined as any;
export const isFlyoutSubmenuDisabled: () => boolean = undefined as any;

// --- Popover primitives for the schedule picker ---
export const SchedulePopoverRoot: any = undefined as any;
export const SchedulePopoverTrigger: any = undefined as any;
export const SchedulePopoverContent: any = undefined as any;

// --- Icons that are imported from sibling chunks ---
export const ScheduleClockIcon: (props: { className?: string }) => ReactElement =
  undefined as any;
export const WorktreeIcon: (props: { className?: string }) => ReactElement =
  undefined as any;

// --- Model + reasoning-effort helpers ---
export const useModelsQuery: (options: {
  includeUltraReasoningEffort: boolean;
}) => { data?: { models?: ModelOption[] } } = undefined as any;
export const resolveReasoningEffort: (input: {
  model: ModelOption | null;
  reasoningEffort: string | null;
}) => string | null = undefined as any;
export const coerceReasoningEffort: (
  reasoningEffort: string | null,
  available: string[],
) => string | null = undefined as any;
export const normalizeModelDisplayName: (displayName: string) => string =
  undefined as any;
export const isVerboseModelDescriptionLocale: (locale: string) => boolean =
  undefined as any;
export const modelSupportsServiceTier: (
  model: ModelOption | null | undefined,
  serviceTier: string | null,
) => boolean = undefined as any;

export interface ReasoningEffortOption {
  reasoningEffort: string;
  description: string;
}
export interface ModelOption {
  model: string;
  displayName?: string;
  description: string;
  supportedReasoningEfforts: ReasoningEffortOption[];
  defaultReasoningEffort: string;
}

// --- Composer runtime for the automation prompt form ---
export const LOCAL_HOST_ID: string = undefined as any;
export const createPromptComposerController: (
  initialText: string,
  options: Record<string, unknown>,
) => any = undefined as any;
export const useMentionAutocomplete: (controller: any) => any =
  undefined as any;
export const useSkillAutocomplete: (controller: any) => any = undefined as any;
export const useConfiguredApps: (options: { hostId: string }) => any =
  undefined as any;
export const usePluginAvailability: (
  hostId: string,
  roots: string[],
) => { availablePlugins: any } = undefined as any;
export const selectActivePlugins: (availablePlugins: any) => any =
  undefined as any;
export const useNativeApps: (options: { enabled: boolean }) => {
  nativeApps: any;
} = undefined as any;
export const useSkills: (roots: string[]) => { skills: any } =
  undefined as any;
export const subscribeComposerDocChanges: (
  view: unknown,
  onChange: () => void,
) => () => void = undefined as any;
export const handleComposerSuggestionEvent: (
  event: unknown,
  handlers: {
    onAtMention: (event: unknown) => void;
    onSkillMention: (event: unknown) => void;
  },
) => void = undefined as any;
export const MentionAutocompletePanel: (props: Record<string, unknown>) => ReactElement =
  undefined as any;
export const ComposerAnchoredOverlay: (props: Record<string, unknown>) => ReactElement =
  undefined as any;
export const SkillAutocompleteOverlay: (props: Record<string, unknown>) => ReactElement =
  undefined as any;
export const PromptComposerInput: (props: Record<string, unknown>) => ReactElement =
  undefined as any;
