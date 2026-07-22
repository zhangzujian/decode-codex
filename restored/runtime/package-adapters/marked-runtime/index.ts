// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~index~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-D~ch0na97m-DGJ4C9j8.js
// npm-backed adapter for Marked plus the surrounding Vite preload helper.
import { Lexer, Marked, marked, walkTokens } from "marked";
type ModuleLoader<T> = () => Promise<T>;
const preloadModule = <T>(
  load: ModuleLoader<T>,
  _dependencies?: readonly string[],
  _baseUrl?: string,
): Promise<T> => load();
const initMarkedRuntime = (): void => {};
const initPreloadRuntime = (): void => {};
export {
  Lexer,
  marked,
  walkTokens,
  preloadModule,
  initMarkedRuntime,
  initPreloadRuntime,
  Marked,
};
