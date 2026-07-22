// Restored from ref/webview/assets/home-ambient-suggestions-content-QPiHWv2t.js
// Home ambient suggestions content restored from the current Codex webview chunk.

import {
  AmbientSuggestionPluginTiles,
  initAmbientSuggestionPluginTilesChunk,
} from "./ambient-suggestion-plugin-tiles";

import {
  buildMailProviderSuggestionGroups,
  initMailProviderSuggestionsChunk,
} from "./mail-provider-suggestions";

export class HomeAmbientPluginsModule {
  static AmbientSuggestionPluginTiles = AmbientSuggestionPluginTiles;
  static buildMailProviderSuggestionGroups = buildMailProviderSuggestionGroups;
  static get homeAmbientBinding21() {
    return initAmbientSuggestionPluginTilesChunk;
  }
  static get homeAmbientBinding28() {
    return initMailProviderSuggestionsChunk;
  }
}
