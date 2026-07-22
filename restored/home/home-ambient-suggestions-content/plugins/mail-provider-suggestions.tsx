// Restored from ref/webview/assets/home-ambient-suggestions-content-QPiHWv2t.js
// Home ambient suggestions content restored from the current Codex webview chunk.

import { once as rolldownRuntimeN } from "../../../runtime/commonjs-interop";

import {
  worktreeNewThreadQueryCompatSlotUpperMLowerU as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMu,
  worktreeNewThreadQueryCompatSlotLowerZLowerU as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwZu,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  intlFormatDateTimeRuntime as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dIy,
  currentAppInitialSharedMember0273 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy,
  codexTextLinkTextLinkPromptRuntime as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dUr,
  markdownFunction0388 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dWr,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import type { BuildMailProviderSuggestionGroupsOptions } from "./types";

import {
  mapPluginNameForMailProvider as appInitialAppMainOnboardingPagePendingRequestItemPanelHomeAmbientSuggestionsContentI,
  initOnboardingMailProviderChunk as appInitialAppMainOnboardingPagePendingRequestItemPanelHomeAmbientSuggestionsContentO,
} from "../../../onboarding/onboarding-mail-provider";

export function buildMailProviderSuggestionGroups({
  intl: intl,
  mailProvider = `other`,
  plugins: plugins,
}: BuildMailProviderSuggestionGroupsOptions) {
  return homeAmbientBinding27.map((item) => ({
    id: item.id,
    starterPrompt: intl.formatMessage(item.starterPrompt),
    suggestions: item.suggestions.map((_item) =>
      buildMailProviderSuggestion({
        intl: intl,
        mailProvider: mailProvider,
        plugins: plugins,
        suggestion: _item,
      }),
    ),
    title: intl.formatMessage(item.title),
  }));
}

function buildMailProviderSuggestion({
  intl: intl,
  mailProvider: mailProvider,
  plugins: plugins,
  suggestion: suggestion,
}) {
  let homeAmbientBinding237 = intl.formatMessage(suggestion.title),
    homeAmbientBinding238 = mailProviderPromptLabels[mailProvider];
  return {
    id: suggestion.id,
    title: homeAmbientBinding237,
    description: homeAmbientBinding237,
    prompt: intl.formatMessage(
      suggestion.prompt,
      suggestion.artifact == null
        ? homeAmbientBinding238
        : {
            ...homeAmbientBinding238,
            artifact: formatPluginMention(suggestion.artifact),
          },
    ),
    appIds: suggestion.appIds.map((item) =>
      appInitialAppMainOnboardingPagePendingRequestItemPanelHomeAmbientSuggestionsContentI(
        item,
        mailProvider,
      ),
    ),
    status: `pending`,
    createdAtMs: 0,
    updatedAtMs: 0,
    analyticsType: `new_chat_page_suggestion`,
    homeAction: getSuggestionHomeAction({
      artifact: suggestion.artifact,
      pluginKey:
        appInitialAppMainOnboardingPagePendingRequestItemPanelHomeAmbientSuggestionsContentI(
          suggestion.pluginKey,
          mailProvider,
        ),
      plugins: plugins,
    }),
    showTooltip: !1,
    source: `default`,
  };
}

function getSuggestionHomeAction({
  artifact: artifact,
  pluginKey: pluginKey,
  plugins: plugins,
}) {
  let homeAmbientBinding250 = plugins.find(
    (item) => item.plugin.id === pluginKey || item.plugin.name === pluginKey,
  );
  return artifact != null ||
    homeAmbientBinding250 == null ||
    (homeAmbientBinding250.plugin.installed &&
      homeAmbientBinding250.plugin.enabled)
    ? {
        type: `fill-composer`,
      }
    : {
        type: `connect-plugin-onboarding`,
        plugin: homeAmbientBinding250,
      };
}

function formatPluginMention({ label: label, pluginId: pluginId }) {
  return appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dWr(
    `@${label}`,
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMu(
      pluginId,
    ),
  );
}

var homeAmbientBinding22;

var homeAmbientBinding23;

var homeAmbientBinding24;

var homeAmbientBinding25;

var mailProviderPromptLabels;

var homeAmbientBinding26;

var homeAmbientBinding27;

var homeAmbientBinding28 = rolldownRuntimeN(() => {
  (appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dIy(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwZu(),
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dUr(),
    appInitialAppMainOnboardingPagePendingRequestItemPanelHomeAmbientSuggestionsContentO(),
    (homeAmbientBinding22 = `presentations@openai-primary-runtime`),
    (homeAmbientBinding23 = `documents@openai-primary-runtime`),
    (homeAmbientBinding24 = `spreadsheets@openai-primary-runtime`),
    (homeAmbientBinding25 = `sites@openai-bundled`),
    (mailProviderPromptLabels = {
      google: {
        calendarApp: `Google Calendar`,
        chatApp: `Slack`,
        fileApp: `Google Drive`,
        mailApp: `Gmail`,
      },
      microsoft: {
        calendarApp: `Outlook Calendar`,
        chatApp: `Microsoft Teams`,
        fileApp: `SharePoint`,
        mailApp: `Outlook`,
      },
      other: {
        calendarApp: `Google Calendar or Outlook Calendar`,
        chatApp: `Slack or Microsoft Teams`,
        fileApp: `Google Drive or SharePoint`,
        mailApp: `Gmail or Outlook`,
      },
    }),
    (homeAmbientBinding26 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
        {
          id: `home.newChatPageSuggestions.create.prompt`,
          defaultMessage: `Create a `,
          description: `Composer prefill for creation tasks`,
        },
      )),
    (homeAmbientBinding27 = [
      {
        id: `create`,
        starterPrompt: homeAmbientBinding26,
        title:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
            {
              id: `home.newChatPageSuggestions.create`,
              defaultMessage: `Create a file or site`,
              description: `Top-level new chat suggestion for creation tasks`,
            },
          ),
        suggestions: [
          {
            appIds: [`file-word-document`],
            artifact: {
              label: `Document`,
              pluginId: homeAmbientBinding23,
            },
            id: `new-chat-page-create-document`,
            pluginKey: homeAmbientBinding23,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.createDocument.prompt`,
                  defaultMessage: `Create a {artifact} about `,
                  description: `Composer prefill for creating a document`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.createDocument`,
                  defaultMessage: `Create a document`,
                  description: `New chat follow-up suggestion for creating a document`,
                },
              ),
          },
          {
            appIds: [`file-spreadsheet`],
            artifact: {
              label: `Spreadsheet`,
              pluginId: homeAmbientBinding24,
            },
            id: `new-chat-page-create-spreadsheet`,
            pluginKey: homeAmbientBinding24,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.createSpreadsheet.prompt`,
                  defaultMessage: `Create a {artifact} for `,
                  description: `Composer prefill for creating a spreadsheet`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.createSpreadsheet`,
                  defaultMessage: `Create a spreadsheet`,
                  description: `New chat follow-up suggestion for creating a spreadsheet`,
                },
              ),
          },
          {
            appIds: [`file-presentation`],
            artifact: {
              label: `Presentation`,
              pluginId: homeAmbientBinding22,
            },
            id: `new-chat-page-create-presentation`,
            pluginKey: homeAmbientBinding22,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.createPresentation.prompt`,
                  defaultMessage: `Create a {artifact} about `,
                  description: `Composer prefill for creating a presentation`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.createPresentation`,
                  defaultMessage: `Create a presentation`,
                  description: `New chat follow-up suggestion for creating a presentation`,
                },
              ),
          },
          {
            appIds: [`sites`],
            artifact: {
              label: `Site`,
              pluginId: homeAmbientBinding25,
            },
            id: `new-chat-page-create-site`,
            pluginKey: homeAmbientBinding25,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.createSite.prompt`,
                  defaultMessage: `Create a {artifact} for `,
                  description: `Composer prefill for creating a site`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.createSite`,
                  defaultMessage: `Create a site`,
                  description: `New chat follow-up suggestion for creating a site`,
                },
              ),
          },
        ],
      },
      {
        id: `research`,
        starterPrompt:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
            {
              id: `home.newChatPageSuggestions.research.prompt`,
              defaultMessage: `Research `,
              description: `Composer prefill for research tasks`,
            },
          ),
        title:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
            {
              id: `home.newChatPageSuggestions.research`,
              defaultMessage: `Research and plan`,
              description: `Top-level new chat suggestion for research tasks`,
            },
          ),
        suggestions: [
          {
            appIds: [`google-drive`, `slack`, `gmail`, `notion`],
            id: `new-chat-page-research-topic`,
            pluginKey: `google-drive`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.researchTopic.prompt`,
                  defaultMessage: `Research a topic I choose using files in {fileApp}, messages in {chatApp}, emails in {mailApp}, or docs in Notion. If I have not named one, ask which topic.`,
                  description: `Composer prefill for researching a topic`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.researchTopic`,
                  defaultMessage: `Research a topic…`,
                  description: `New chat follow-up suggestion for researching a topic`,
                },
              ),
          },
          {
            appIds: [`google-drive`, `slack`, `notion`],
            id: `new-chat-page-research-options-and-tradeoffs`,
            pluginKey: `google-drive`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.researchOptionsAndTradeoffs.prompt`,
                  defaultMessage: `Research options and tradeoffs for a choice I name using files in {fileApp}, messages in {chatApp}, docs in Notion, or files in Dropbox. If I have not named one, ask which choice.`,
                  description: `Composer prefill for researching options and tradeoffs`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.researchOptionsAndTradeoffs`,
                  defaultMessage: `Research options and tradeoffs…`,
                  description: `New chat follow-up suggestion for researching options and tradeoffs`,
                },
              ),
          },
          {
            appIds: [`google-calendar`, `gmail`, `slack`, `google-drive`],
            id: `new-chat-page-plan-upcoming-meeting`,
            pluginKey: `google-calendar`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.planUpcomingMeeting.prompt`,
                  defaultMessage: `Plan for an upcoming meeting I choose using {calendarApp}, emails in {mailApp}, messages in {chatApp}, or files in {fileApp}. If I have not named one, ask which meeting.`,
                  description: `Composer prefill for planning an upcoming meeting`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.planUpcomingMeeting`,
                  defaultMessage: `Plan for an upcoming meeting…`,
                  description: `New chat follow-up suggestion for planning an upcoming meeting`,
                },
              ),
          },
          {
            appIds: [`google-drive`, `slack`, `notion`],
            id: `new-chat-page-plan-strategy-or-roadmap`,
            pluginKey: `google-drive`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.planStrategyOrRoadmap.prompt`,
                  defaultMessage: `Plan a strategy or roadmap I choose using files in {fileApp}, messages in {chatApp}, docs in Notion, or customer data in Salesforce. If I have not named one, ask which strategy or roadmap.`,
                  description: `Composer prefill for planning a strategy or roadmap`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.planStrategyOrRoadmap`,
                  defaultMessage: `Plan a strategy or roadmap…`,
                  description: `New chat follow-up suggestion for planning a strategy or roadmap`,
                },
              ),
          },
        ],
      },
      {
        id: `briefing`,
        starterPrompt:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
            {
              id: `home.newChatPageSuggestions.briefing.prompt`,
              defaultMessage: `Brief me on `,
              description: `Composer prefill for briefing tasks`,
            },
          ),
        title:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
            {
              id: `home.newChatPageSuggestions.briefing`,
              defaultMessage: `Give me a briefing`,
              description: `Top-level new chat suggestion for briefing tasks`,
            },
          ),
        suggestions: [
          {
            appIds: [`slack`, `google-drive`, `notion`],
            id: `new-chat-page-brief-project`,
            pluginKey: `slack`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.briefProject.prompt`,
                  defaultMessage: `Brief me on a project I choose from messages in {chatApp}, files in {fileApp}, docs in Notion, or files in Dropbox. If I have not named one, ask which project.`,
                  description: `Composer prefill for briefing on a project`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.briefProject`,
                  defaultMessage: `Brief me on a project…`,
                  description: `New chat follow-up suggestion for briefing on a project`,
                },
              ),
          },
          {
            appIds: [`slack`, `google-drive`, `gmail`, `notion`],
            id: `new-chat-page-brief-recent-decisions`,
            pluginKey: `slack`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.briefRecentDecisions.prompt`,
                  defaultMessage: `Brief me on recent decisions from messages in {chatApp}, files in {fileApp}, emails in {mailApp}, or docs in Notion. If I have not named a scope, ask what to cover.`,
                  description: `Composer prefill for briefing on recent decisions`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.briefRecentDecisions`,
                  defaultMessage: `Brief me on recent decisions…`,
                  description: `New chat follow-up suggestion for briefing on recent decisions`,
                },
              ),
          },
          {
            appIds: [`google-drive`, `slack`, `notion`, `gmail`],
            id: `new-chat-page-brief-stakeholder-updates`,
            pluginKey: `google-drive`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.briefStakeholderUpdates.prompt`,
                  defaultMessage: `Brief me on key updates for stakeholders from files in {fileApp}, messages in {chatApp}, docs in Notion, or emails in {mailApp}. If I have not named a scope, ask what to cover.`,
                  description: `Composer prefill for briefing on stakeholder updates`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.briefStakeholderUpdates`,
                  defaultMessage: `Brief me on key updates for stakeholders…`,
                  description: `New chat follow-up suggestion for briefing on stakeholder updates`,
                },
              ),
          },
          {
            appIds: [`gmail`, `slack`, `google-drive`],
            id: `new-chat-page-brief-customer-feedback`,
            pluginKey: `gmail`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.briefCustomerFeedback.prompt`,
                  defaultMessage: `Brief me on customer feedback from emails in {mailApp}, messages in {chatApp}, Salesforce, or files in {fileApp}. If I have not named a scope, ask what to cover.`,
                  description: `Composer prefill for briefing on customer feedback`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.briefCustomerFeedback`,
                  defaultMessage: `Brief me on customer feedback…`,
                  description: `New chat follow-up suggestion for briefing on customer feedback`,
                },
              ),
          },
        ],
      },
      {
        id: `automate`,
        starterPrompt:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
            {
              id: `home.newChatPageSuggestions.automate.prompt`,
              defaultMessage: `Schedule `,
              description: `Composer prefill for scheduled tasks`,
            },
          ),
        title:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
            {
              id: `home.newChatPageSuggestions.automate`,
              defaultMessage: `Schedule ongoing work`,
              description: `Top-level new chat suggestion for scheduled tasks`,
            },
          ),
        suggestions: [
          {
            appIds: [`google-drive`, `slack`, `gmail`],
            id: `new-chat-page-automate-recurring-report`,
            pluginKey: `google-drive`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.automateRecurringReport.prompt`,
                  defaultMessage: `Schedule a recurring report I choose from files in {fileApp}, messages in {chatApp}, emails in {mailApp}, or Salesforce data. If I have not named one, ask which report and schedule.`,
                  description: `Composer prefill for scheduling a recurring report`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.automateRecurringReport`,
                  defaultMessage: `Schedule a recurring report`,
                  description: `New chat follow-up suggestion for scheduling a recurring report`,
                },
              ),
          },
          {
            appIds: [`google-calendar`, `gmail`, `slack`, `google-drive`],
            id: `new-chat-page-automate-morning-prep`,
            pluginKey: `google-calendar`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.automateMorningPrep.prompt`,
                  defaultMessage: `Schedule my morning prep with {calendarApp}, emails in {mailApp}, messages in {chatApp}, or files in {fileApp}.`,
                  description: `Composer prefill for scheduling morning prep`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.automateMorningPrep`,
                  defaultMessage: `Schedule my morning prep`,
                  description: `New chat follow-up suggestion for morning prep`,
                },
              ),
          },
          {
            appIds: [`gmail`, `slack`, `notion`],
            id: `new-chat-page-automate-triage`,
            pluginKey: `gmail`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.automateTriage.prompt`,
                  defaultMessage: `Schedule triage of incoming emails in {mailApp}, incoming messages in {chatApp}, new requests in Notion, or new Salesforce records. Ask which queue and rules to use.`,
                  description: `Composer prefill for scheduling triage`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.automateTriage`,
                  defaultMessage: `Schedule triage…`,
                  description: `New chat follow-up suggestion for scheduling triage`,
                },
              ),
          },
          {
            appIds: [`slack`, `gmail`, `google-calendar`, `google-drive`],
            id: `new-chat-page-monitor-changes`,
            pluginKey: `slack`,
            prompt:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.monitorChanges.prompt`,
                  defaultMessage: `Monitor important changes in {chatApp} messages, {mailApp} emails, {calendarApp}, or {fileApp} files. Ask which changes matter.`,
                  description: `Composer prefill for monitoring important changes`,
                },
              ),
            title:
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPy(
                {
                  id: `home.newChatPageSuggestions.monitorChanges`,
                  defaultMessage: `Monitor important changes…`,
                  description: `New chat follow-up suggestion for monitoring important changes`,
                },
              ),
          },
        ],
      },
    ]));
});

export function initMailProviderSuggestionsChunk(): void {
  homeAmbientBinding28();
}
