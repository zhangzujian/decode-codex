// Restored from ref/webview/assets/shiki-highlight-provider-BrNw2qKd.js
// Settings-driven Shiki highlighter provider for Codex diff rendering.
import type { ReactNode } from "react";
import { useEffect, useMemo } from "react";
import {
  WorkerPoolContextProvider,
  useWorkerPool,
  type WorkerInitializationRenderOptions,
  type WorkerPoolOptions,
} from "@pierre/diffs/react";
import { useAppScopeValue } from "../boundaries/app-scope";
import {
  getCodeThemeRegistration,
  wordDiffsEnabledSignal,
} from "../github/diff-view-mode";
import { SettingKeys } from "../settings/settings-keys-runtime";
import { useSettingValue } from "../settings/setting-storage";
import { useResolvedThemeVariant } from "../utils/use-resolved-theme-variant";
type LineDiffType = "none" | "word-alt";
type ThemeVariantPreference = Parameters<typeof useResolvedThemeVariant>[0];
interface ShikiHighlightProviderProps {
  children: ReactNode;
}
interface DiffRenderOptionsEffectProps {
  lineDiffType: LineDiffType;
  theme: string;
}
type SettingDefinition<T> = {
  default: T;
  key: string;
};
const DIFF_HIGHLIGHTER_LANGUAGES = [
  "typescript",
  "javascript",
  "css",
  "html",
  "python",
] as const;
const workerUrl = new URL("worker-CqaGbKqD.js", import.meta.url);
const diffWorkerPoolOptions: WorkerPoolOptions = {
  workerFactory: createDiffHighlighterWorker,
  poolSize: 4,
  totalASTLRUCacheSize: 100,
};
function createDiffHighlighterWorker(): Worker {
  return new Worker(workerUrl, {
    type: "module",
  });
}
export function ShikiHighlightProvider({
  children,
}: ShikiHighlightProviderProps) {
  const themePreference =
    useSettingValue(
      SettingKeys.theme as SettingDefinition<ThemeVariantPreference>,
    ) ?? "system";
  const themeVariant = useResolvedThemeVariant(themePreference);
  const lightCodeThemeId = useSettingValue(
    SettingKeys.lightCodeThemeId as SettingDefinition<string | null>,
  );
  const darkCodeThemeId = useSettingValue(
    SettingKeys.darkCodeThemeId as SettingDefinition<string | null>,
  );
  const wordDiffsEnabled = useAppScopeValue<boolean>(wordDiffsEnabledSignal);
  const codeTheme =
    themeVariant === "light"
      ? getCodeThemeRegistration(lightCodeThemeId as string, "light")
      : getCodeThemeRegistration(darkCodeThemeId as string, "dark");
  const theme = codeTheme.name;
  const lineDiffType: LineDiffType = wordDiffsEnabled ? "word-alt" : "none";
  const highlighterOptions = useMemo<WorkerInitializationRenderOptions>(
    () => ({
      theme,
      lineDiffType,
      langs: [...DIFF_HIGHLIGHTER_LANGUAGES],
    }),
    [lineDiffType, theme],
  );
  return (
    <WorkerPoolContextProvider
      poolOptions={diffWorkerPoolOptions}
      highlighterOptions={highlighterOptions}
    >
      <DiffRenderOptionsEffect lineDiffType={lineDiffType} theme={theme} />
      {children}
    </WorkerPoolContextProvider>
  );
}
function DiffRenderOptionsEffect({
  lineDiffType,
  theme,
}: DiffRenderOptionsEffectProps): null {
  const workerPool = useWorkerPool();
  useEffect(() => {
    workerPool?.setRenderOptions({
      lineDiffType,
      theme,
    });
  }, [lineDiffType, theme, workerPool]);
  return null;
}
