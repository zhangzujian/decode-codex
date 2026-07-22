// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~appgen-settings-page~page~pull-request-r~ll1u4x0e-Bl9B7AEa.js
const threadAndComposerCommandDefinitions = [
  {
    id: `newTask`,
    titleIntlId: `codex.command.newThread`,
    descriptionIntlId: `codex.commandDescription.newThread`,
    commandMenuGroupKey: `thread`,
    commandMenu: true,
    electron: {
      menuTitle: `New Chat`,
      menuTitleIntlId: `codex.commandMenuTitle.newThread`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+N`,
        },
        {
          key: `CmdOrCtrl+Shift+O`,
        },
      ],
    },
    vscodeCommand: {
      commandId: `chatgpt.newChat`,
      title: `New Chat in ChatGPT Sidebar`,
      keybinding: {
        key: `ctrl+n`,
        mac: `cmd+n`,
        when: `chatgpt.supportsNewChatKeyShortcut`,
      },
    },
  },
  {
    id: `newProjectlessTask`,
    titleIntlId: `codex.command.newProjectlessTask`,
    descriptionIntlId: `codex.commandDescription.newProjectlessTask`,
    availableIn: [`electron`],
    commandMenuGroupKey: `thread`,
    commandMenu: true,
    commandMenuFeature: `codex`,
    electron: {
      menuTitle: `New standalone chat`,
      menuTitleIntlId: `codex.commandMenuTitle.newProjectlessTask`,
      defaultKeybindings: [{ key: `CmdOrCtrl+Alt+O` }],
    },
  },
  {
    id: `quickChat`,
    titleIntlId: `codex.command.quickChat`,
    descriptionIntlId: `codex.commandDescription.quickChat`,
    shortcutScope: `app`,
    commandMenuGroupKey: `thread`,
    commandMenu: true,
    commandMenuFeature: `chatgpt`,
    electron: {
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Alt+N`,
        },
      ],
    },
  },
  {
    id: `openThreadInNewWindow`,
    titleIntlId: `codex.command.openThreadInNewWindow`,
    descriptionIntlId: `codex.commandDescription.openThreadInNewWindow`,
    commandMenuGroupKey: `thread`,
    commandMenu: true,
    commandMenuFeature: `codex`,
    electron: {
      menuTitle: `Open in New Window`,
      menuTitleIntlId: `codex.commandMenuTitle.openThreadInNewWindow`,
    },
  },
  {
    id: `archiveThread`,
    titleIntlId: `codex.command.archiveThread`,
    descriptionIntlId: `codex.commandDescription.archiveThread`,
    commandMenuGroupKey: `thread`,
    commandMenu: true,
    electron: {
      menuTitle: `Archive chat`,
      menuTitleIntlId: `codex.commandMenuTitle.archiveThread`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+A`,
        },
      ],
    },
  },
  {
    id: `toggleThreadPin`,
    titleIntlId: `codex.command.toggleThreadPin`,
    descriptionIntlId: `codex.commandDescription.toggleThreadPin`,
    commandMenuGroupKey: `thread`,
    commandMenu: true,
    electron: {
      menuTitle: `Pin/unpin chat`,
      menuTitleIntlId: `codex.commandMenuTitle.toggleThreadPin`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Alt+P`,
        },
      ],
    },
  },
  {
    id: `copyConversationMarkdown`,
    titleIntlId: `codex.command.copyConversationMarkdown`,
    descriptionIntlId: `codex.commandDescription.copyConversationMarkdown`,
  },
  {
    id: `openSideChat`,
    titleIntlId: `codex.command.openSideChat`,
    descriptionIntlId: `codex.commandDescription.openSideChat`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    commandMenuGroupKey: `thread`,
    commandMenu: true,
    commandMenuFeature: `codex`,
    electron: {
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Alt+S`,
        },
      ],
    },
  },
  {
    id: `openControlWindow`,
    titleIntlId: `codex.command.openControlWindow`,
    descriptionIntlId: `codex.commandDescription.openControlWindow`,
    commandMenuGroupKey: `app`,
    commandMenu: true,
  },
  {
    id: `undoAppAction`,
    titleIntlId: `codex.command.undoAppAction`,
    descriptionIntlId: `codex.commandDescription.undoAppAction`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    commandMenuGroupKey: `app`,
    commandMenu: true,
    electron: { defaultKeybindings: [{ key: `CmdOrCtrl+Z` }] },
  },
  {
    id: `redoAppAction`,
    titleIntlId: `codex.command.redoAppAction`,
    descriptionIntlId: `codex.commandDescription.redoAppAction`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    commandMenuGroupKey: `app`,
    commandMenu: true,
    electron: {
      platformDefaultKeybindings: {
        macOS: [{ key: `Command+Shift+Z` }],
        default: [{ key: `Ctrl+Y` }, { key: `Ctrl+Shift+Z` }],
      },
    },
  },
  {
    id: `composer.openModelPicker`,
    titleIntlId: `codex.command.composer.openModelPicker`,
    descriptionIntlId: `codex.commandDescription.composer.openModelPicker`,
    shortcutScope: `app`,
    electron: {
      defaultKeybindings: [
        {
          key: `Ctrl+Shift+M`,
        },
      ],
    },
  },
  {
    id: `composer.openProjectPicker`,
    titleIntlId: `codex.command.composer.openProjectPicker`,
    descriptionIntlId: `codex.commandDescription.composer.openProjectPicker`,
    availableIn: [`browser`, `electron`],
    shortcutScope: `app`,
    electron: { defaultKeybindings: [{ key: `CmdOrCtrl+Alt+Shift+O` }] },
  },
  {
    id: `composer.startVoiceMode`,
    titleIntlId: `codex.command.composer.startVoiceMode`,
    descriptionIntlId: `codex.commandDescription.composer.startVoiceMode`,
    shortcutScope: `app`,
    electron: {
      defaultKeybindings: [
        {
          key: `Ctrl+Shift+V`,
        },
      ],
    },
  },
  {
    id: `composer.startDictation`,
    titleIntlId: `codex.command.composer.startDictation`,
    descriptionIntlId: `codex.commandDescription.composer.startDictation`,
    shortcutScope: `app`,
    electron: {
      menuTitle: `Dictation`,
      menuTitleIntlId: `codex.commandMenuTitle.composer.startDictation`,
      defaultKeybindings: [
        {
          key: `Ctrl+Shift+D`,
        },
      ],
    },
  },
  {
    id: `composer.submit`,
    titleIntlId: `codex.command.composer.submit`,
    descriptionIntlId: `codex.commandDescription.composer.submit`,
    shortcutScope: `app`,
  },
  {
    id: `composer.addPhotos`,
    titleIntlId: `codex.command.composer.addPhotos`,
    descriptionIntlId: `codex.commandDescription.composer.addPhotos`,
    availableIn: [`electron`],
    shortcutScope: `app`,
  },
  {
    id: `composer.captureAppshot`,
    titleIntlId: `codex.command.composer.captureAppshot`,
    descriptionIntlId: `codex.commandDescription.composer.captureAppshot`,
    availableIn: [`electron`],
    shortcutConfigurable: false,
  },
  {
    id: `composer.addFiles`,
    titleIntlId: `codex.command.composer.addFiles`,
    descriptionIntlId: `codex.commandDescription.composer.addFiles`,
    availableIn: [`electron`],
    shortcutScope: `app`,
  },
  {
    id: `composer.toggleFastMode`,
    titleIntlId: `codex.command.composer.toggleFastMode`,
    descriptionIntlId: `codex.commandDescription.composer.toggleFastMode`,
    shortcutScope: `app`,
  },
  {
    id: `composer.increaseReasoningEffort`,
    titleIntlId: `codex.command.composer.increaseReasoningEffort`,
    descriptionIntlId: `codex.commandDescription.composer.increaseReasoningEffort`,
    shortcutScope: `app`,
  },
  {
    id: `composer.decreaseReasoningEffort`,
    titleIntlId: `codex.command.composer.decreaseReasoningEffort`,
    descriptionIntlId: `codex.commandDescription.composer.decreaseReasoningEffort`,
    shortcutScope: `app`,
  },
  {
    id: `composer.cycleReasoningEffort`,
    titleIntlId: `codex.command.composer.cycleReasoningEffort`,
    descriptionIntlId: `codex.commandDescription.composer.cycleReasoningEffort`,
    shortcutScope: `app`,
  },
  {
    id: `composer.togglePlanMode`,
    titleIntlId: `codex.command.composer.togglePlanMode`,
    descriptionIntlId: `codex.commandDescription.composer.togglePlanMode`,
    shortcutScope: `app`,
  },
  {
    id: `approval.approve`,
    titleIntlId: `codex.command.approval.approve`,
    descriptionIntlId: `codex.commandDescription.approval.approve`,
    shortcutScope: `app`,
    electron: {
      defaultKeybindings: [
        {
          key: `Enter`,
        },
      ],
    },
  },
  {
    id: `approval.decline`,
    titleIntlId: `codex.command.approval.decline`,
    descriptionIntlId: `codex.commandDescription.approval.decline`,
    shortcutScope: `app`,
    electron: {
      defaultKeybindings: [
        {
          key: `Escape`,
        },
      ],
    },
  },
  {
    id: `git.commit`,
    titleIntlId: `codex.command.git.commit`,
    descriptionIntlId: `codex.commandDescription.git.commit`,
    shortcutScope: `app`,
    commandMenuGroupKey: `workspace`,
    commandMenu: true,
    commandMenuFeature: `codex`,
  },
  {
    id: `git.createPullRequest`,
    titleIntlId: `codex.command.git.createPullRequest`,
    descriptionIntlId: `codex.commandDescription.git.createPullRequest`,
    shortcutScope: `app`,
    commandMenuGroupKey: `workspace`,
    commandMenu: true,
    commandMenuFeature: `codex`,
  },
  {
    id: `forkThread`,
    titleIntlId: `codex.command.forkThread`,
    descriptionIntlId: `codex.commandDescription.forkThread`,
    shortcutScope: `app`,
  },
  {
    id: `openAvatarOverlay`,
    titleIntlId: `codex.command.openPetOverlay`,
    descriptionIntlId: `codex.commandDescription.openPetOverlay`,
    commandMenuGroupKey: `app`,
    commandMenu: true,
    commandMenuFeature: `codex`,
    electron: {
      menuTitle: `Show pet`,
      menuTitleIntlId: `codex.commandMenuTitle.openAvatarOverlay`,
    },
  },
  {
    id: `searchChats`,
    titleIntlId: `codex.command.searchChats`,
    descriptionIntlId: `codex.commandDescription.searchChats`,
    availableIn: [`electron`],
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      menuTitle: `Search Chats…`,
      menuTitleIntlId: `codex.commandMenuTitle.searchChats`,
    },
  },
];

export { threadAndComposerCommandDefinitions };
