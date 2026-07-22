// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~appgen-settings-p~fdh9zbdm-D8bu_Ji3.js
// Current AppGen settings helpers backed by semantic app modules and tldts.
import { getPublicSuffix, parse as parseDomain } from "tldts";
import { ChatsIcon } from "../icons/chats-icon";
import { EditIcon } from "../icons/edit-icon";
import { LinkIcon } from "../icons/link-icon";
import {
  formatRepoSkillScopeLabel,
  formatSkillScope,
  formatSkillScopeLabel,
} from "../plugins/format-skill-scope";
import { ListNavigation } from "../utils/list-navigation";
type AppDescriptor = {
  name: string;
  pluginDisplayNames: readonly string[];
};
type PluginDescriptor = {
  interface?: {
    displayName?: string | null;
  } | null;
  name: string;
};
type AppNameIndex = {
  aliases: Map<string, AppDescriptor[]>;
  exact: Map<string, AppDescriptor[]>;
};
const appIndexCache = new WeakMap<readonly AppDescriptor[], AppNameIndex>();
const appKeyCache = new WeakMap<AppDescriptor, Set<string>>();
const pluginKeyCache = new WeakMap<PluginDescriptor, Set<string>>();
function normalizeAppName(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "");
}
function getPluginKeys(plugin: PluginDescriptor): Set<string> {
  const cached = pluginKeyCache.get(plugin);
  if (cached != null) return cached;
  const keys = new Set(
    [plugin.name, plugin.interface?.displayName ?? ""].map(normalizeAppName),
  );
  pluginKeyCache.set(plugin, keys);
  return keys;
}
function getAppKeys(app: AppDescriptor): Set<string> {
  const cached = appKeyCache.get(app);
  if (cached != null) return cached;
  const keys = new Set(
    [app.name, ...app.pluginDisplayNames].map(normalizeAppName),
  );
  appKeyCache.set(app, keys);
  return keys;
}
function doesAppMatchPlugin(
  app: AppDescriptor,
  plugin: PluginDescriptor,
): boolean {
  const pluginKeys = getPluginKeys(plugin);
  for (const appKey of getAppKeys(app)) {
    if (pluginKeys.has(appKey)) return true;
  }
  return false;
}
function addIndexedApp(
  index: Map<string, AppDescriptor[]>,
  key: string,
  app: AppDescriptor,
): void {
  const matches = index.get(key);
  if (matches == null) index.set(key, [app]);
  else matches.push(app);
}
function getAppNameIndex(apps: readonly AppDescriptor[]): AppNameIndex {
  const cached = appIndexCache.get(apps);
  if (cached != null) return cached;
  const exact = new Map<string, AppDescriptor[]>();
  const aliases = new Map<string, AppDescriptor[]>();
  for (const app of apps) {
    addIndexedApp(exact, normalizeAppName(app.name), app);
    for (const alias of new Set(app.pluginDisplayNames.map(normalizeAppName))) {
      addIndexedApp(aliases, alias, app);
    }
  }
  const index = {
    aliases,
    exact,
  };
  appIndexCache.set(apps, index);
  return index;
}
function collectIndexedApps(
  index: Map<string, AppDescriptor[]>,
  keys: Set<string>,
): AppDescriptor[] {
  const matches = new Set<AppDescriptor>();
  for (const key of keys) {
    for (const app of index.get(key) ?? []) matches.add(app);
  }
  return Array.from(matches);
}
function findUniqueAppForPlugin(
  apps: readonly AppDescriptor[],
  plugin: PluginDescriptor,
): AppDescriptor | null {
  const pluginKeys = getPluginKeys(plugin);
  const { aliases, exact } = getAppNameIndex(apps);
  const exactMatches = collectIndexedApps(exact, pluginKeys);
  if (exactMatches.length > 0) {
    return exactMatches.length === 1 ? (exactMatches[0] ?? null) : null;
  }
  const aliasMatches = collectIndexedApps(aliases, pluginKeys);
  return aliasMatches.length === 1 ? (aliasMatches[0] ?? null) : null;
}
function initChatsIconRuntime(): void {}
function initLinkIconRuntime(): void {}
function initListNavigationRuntime(): void {}
function initTldtsRuntime(): void {}
function initAppMatcherRuntime(): void {}
function initEditIconRuntime(): void {}
function initSkillScopeMessagesRuntime(): void {}
export {
  ChatsIcon,
  initLinkIconRuntime,
  initListNavigationRuntime,
  formatRepoSkillScopeLabel,
  formatSkillScope,
  parseDomain,
  initTldtsRuntime,
  LinkIcon,
  ListNavigation,
  getPublicSuffix,
  initAppMatcherRuntime,
  EditIcon,
  initSkillScopeMessagesRuntime,
  doesAppMatchPlugin,
  initEditIconRuntime,
  findUniqueAppForPlugin,
  formatSkillScopeLabel,
  initChatsIconRuntime,
};
