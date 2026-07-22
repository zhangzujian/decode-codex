// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~dg0b1kws-BsrA2AI_.js
// Current Radix menu facade, menu icons, and shared motion constants.
import { CheckMdIcon as CheckmarkIcon } from "../../icons/check-md-icon";
import { ChevronIcon as ChevronDownIcon } from "../../icons/chevron-icon";
import { ChevronRightIcon } from "../../icons/chevron-right-icon";
import {
  createMenuScope,
  Menu,
  MenuAnchor,
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuItemIndicator,
  MenuLabel,
  MenuPortal,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
} from "../../vendor/radix-menu";
import { DropdownSearchIcon as MenuSearchIcon } from "../dropdown/search";
const MENU_EASING_CURVE = [0.23, 1, 0.32, 1] as const;
const MENU_TRANSITION = {
  duration: 0.3,
  ease: [0.19, 1, 0.22, 1],
} as const;
function initMenuRuntime(): void {}
function initSearchIconRuntime(): void {}
function initChevronDownIconRuntime(): void {}
function initCheckmarkIconRuntime(): void {}
function initMenuMotionRuntime(): void {}
function initChevronRightIconRuntime(): void {}
export {
  MenuSub,
  initMenuRuntime,
  createMenuScope,
  ChevronDownIcon,
  MenuSeparator,
  MenuSubTrigger,
  MenuLabel,
  initSearchIconRuntime,
  MenuRadioItem,
  CheckmarkIcon,
  MenuArrow,
  MenuCheckboxItem,
  MenuItemIndicator,
  MenuItem,
  MenuSearchIcon,
  initChevronDownIconRuntime,
  initCheckmarkIconRuntime,
  MenuGroup,
  MENU_EASING_CURVE,
  ChevronRightIcon,
  MenuContent,
  initMenuMotionRuntime,
  initChevronRightIconRuntime,
  MENU_TRANSITION,
  MenuAnchor,
  MenuPortal,
  MenuSubContent,
  Menu,
  MenuRadioGroup,
};
