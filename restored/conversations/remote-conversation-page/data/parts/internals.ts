// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import { RemoteConversationEventParsers } from "./event-parsers";

import { RemoteConversationFindSource } from "./find-source";

import { RemoteConversationHeaderData } from "./header-data";

import { RemoteConversationTurnStream } from "./turn-stream";

export class RemoteConversationDataInternals {
  static remoteConversationPageUnit24 =
    RemoteConversationHeaderData.remoteConversationPageUnit24;
  static remoteConversationPageUnit25 =
    RemoteConversationEventParsers.remoteConversationPageUnit25;
  static remoteConversationPageUnit26 =
    RemoteConversationEventParsers.remoteConversationPageUnit26;
  static remoteConversationPageUnit27 =
    RemoteConversationEventParsers.remoteConversationPageUnit27;
  static remoteConversationPageUnit28 =
    RemoteConversationEventParsers.remoteConversationPageUnit28;
  static remoteConversationPageUnit29 =
    RemoteConversationEventParsers.remoteConversationPageUnit29;
  static remoteConversationPageUnit30 =
    RemoteConversationEventParsers.remoteConversationPageUnit30;
  static remoteConversationPageUnit31 =
    RemoteConversationEventParsers.remoteConversationPageUnit31;
  static remoteConversationPageUnit32 =
    RemoteConversationEventParsers.remoteConversationPageUnit32;
  static remoteConversationPageUnit33 =
    RemoteConversationEventParsers.remoteConversationPageUnit33;
  static remoteConversationPageUnit34 =
    RemoteConversationEventParsers.remoteConversationPageUnit34;
  static remoteConversationPageUnit35 =
    RemoteConversationEventParsers.remoteConversationPageUnit35;
  static remoteConversationPageUnit36 =
    RemoteConversationEventParsers.remoteConversationPageUnit36;
  static remoteConversationPageUnit37 =
    RemoteConversationEventParsers.remoteConversationPageUnit37;
  static remoteConversationPageUnit38 =
    RemoteConversationEventParsers.remoteConversationPageUnit38;
  static remoteConversationPageUnit39 =
    RemoteConversationEventParsers.remoteConversationPageUnit39;
  static remoteConversationPageUnit40 =
    RemoteConversationEventParsers.remoteConversationPageUnit40;
  static remoteConversationPageUnit41 =
    RemoteConversationEventParsers.remoteConversationPageUnit41;
  static remoteConversationPageUnit42 =
    RemoteConversationEventParsers.remoteConversationPageUnit42;
  static createRemoteConversationFindSource =
    RemoteConversationFindSource.createRemoteConversationFindSource;
  static remoteConversationPageUnit43 =
    RemoteConversationFindSource.remoteConversationPageUnit43;
  static remoteConversationPageUnit44 =
    RemoteConversationFindSource.remoteConversationPageUnit44;
  static remoteConversationPageUnit45 =
    RemoteConversationTurnStream.remoteConversationPageUnit45;
  static remoteConversationPageUnit46 =
    RemoteConversationTurnStream.remoteConversationPageUnit46;

  static getBinding(index: number) {
    return index < 33
      ? RemoteConversationHeaderData.getBinding(index)
      : index < 37
        ? RemoteConversationFindSource.getBinding(index)
        : RemoteConversationTurnStream.getBinding(index);
  }
}
