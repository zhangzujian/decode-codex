// Restored from ref/webview/assets/linear-light-NGsibIX1.js
// LinearLight theme data restored from the current Codex webview bundle.
var linearLightBg = `#f7f8fa`,
  linearLightColors = {
    "activityBar.activeBorder": `#5e6ad2`,
    "activityBar.background": `#f2f4f8`,
    "activityBarBadge.background": `#5e6ad2`,
    "button.background": `#5e6ad2`,
    "editor.background": `#f7f8fa`,
    "editor.foreground": `#2a3140`,
    "editorCursor.foreground": `#5e6ad2`,
    "editorGroupHeader.tabsBackground": `#f2f4f8`,
    focusBorder: `#5e6ad2`,
    foreground: `#2a3140`,
    "panel.background": `#f2f4f8`,
    "sideBar.background": `#f2f4f8`,
    "sideBar.foreground": `#4a5263`,
    "sideBarTitle.foreground": `#1f2430`,
    "textLink.foreground": `#5e6ad2`,
  },
  linearLightChromeTheme = {
    fonts: {
      ui: `Inter`,
    },
    ink: `#1b1b1b`,
    opaqueWindows: !0,
    semanticColors: {
      diffAdded: `#52a450`,
      diffRemoved: `#c94446`,
      skill: `#8160d8`,
    },
    surface: `#fcfcfd`,
  },
  linearLightFg = `#2a3140`,
  linearLightName = `Linear Light`,
  linearLightSettings = [
    {
      scope: [`comment`, `punctuation.definition.comment`],
      settings: {
        foreground: `#8a93a6`,
      },
    },
    {
      scope: [
        `string`,
        `string.quoted`,
        `constant.other.symbol`,
        `entity.other.attribute-name`,
      ],
      settings: {
        foreground: `#0f8f83`,
      },
    },
    {
      scope: [
        `constant.numeric`,
        `constant.language`,
        `constant.language.boolean`,
        `constant.character.escape`,
        `regexp`,
        `string.regexp`,
      ],
      settings: {
        foreground: `#b4831f`,
      },
    },
    {
      scope: [
        `keyword`,
        `keyword.control`,
        `storage`,
        `storage.type`,
        `storage.modifier`,
      ],
      settings: {
        foreground: `#5e6ad2`,
      },
    },
    {
      scope: [
        `entity.name.type`,
        `entity.other.inherited-class`,
        `support.class`,
        `support.type`,
      ],
      settings: {
        foreground: `#4380d8`,
      },
    },
    {
      scope: [
        `entity.name.function`,
        `support.function`,
        `variable.function`,
        `meta.function-call`,
      ],
      settings: {
        foreground: `#8160d8`,
      },
    },
    {
      scope: [
        `keyword.operator`,
        `punctuation.accessor`,
        `punctuation.definition.tag`,
        `punctuation`,
        `punctuation.bracket`,
        `punctuation.separator`,
      ],
      settings: {
        foreground: `#6f7788`,
      },
    },
    {
      scope: [
        `variable`,
        `meta.object-literal.key`,
        `meta.object.member`,
        `meta.property-name`,
      ],
      settings: {
        foreground: `#2a3140`,
      },
    },
  ],
  linearLightType = `light`;
export const linearLightDefault = {
  bg: linearLightBg,
  colors: linearLightColors,
  chromeTheme: linearLightChromeTheme,
  fg: linearLightFg,
  name: linearLightName,
  settings: linearLightSettings,
  type: linearLightType,
};
export const LinearLightTheme = linearLightDefault;
export {
  linearLightBg as bg,
  linearLightChromeTheme as chromeTheme,
  linearLightColors as colors,
  linearLightFg,
  linearLightName as name,
  linearLightSettings as settings,
  linearLightType as type,
};
