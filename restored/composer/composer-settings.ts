// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js
// Composer-relevant settings: the registry of setting definitions (each carrying
// a scope atom + metadata) and the hook that reads a setting's current value.
// Both resolve to the vendored shared runtime / worktree new-thread bundles they
// were code-split from.
import { Nt as settingsAtomsImpl } from "../vendor/current-app-initial-bnlvjk3w-shared-bundle";
import { Um as useSettingValueImpl } from "../vendor/worktree-new-thread-query-current-bundle";
import type { ScopeAtom } from "./composer-atoms";

export type SettingAgentAccess = "read-write" | "read" | "hidden";

/** A single setting: its scope atom plus key/default/description metadata. */
export interface SettingDefinition<Value> {
  readonly atom: ScopeAtom<Value>;
  readonly key: string;
  readonly default: Value;
  readonly description?: string;
  readonly agentAccess?: SettingAgentAccess;
}

/** Registry of setting definitions keyed by setting name (e.g. `composerEnterBehavior`). */
export interface SettingsAtoms {
  readonly [settingKey: string]: SettingDefinition<unknown>;
}

export const settingsAtoms: SettingsAtoms = settingsAtomsImpl;

/** Read the current value of a setting definition. */
export function useSettingValue<Value>(
  setting: SettingDefinition<Value>,
): Value {
  return useSettingValueImpl(setting);
}
