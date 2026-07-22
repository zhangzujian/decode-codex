// Restored from ref/webview/assets/chat-home-hero-n7KRk-DH.js
// Animated heading shown on the ChatGPT conversation home screen.
import type { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  defineMessages,
  FormattedMessage,
  type MessageDescriptor,
} from "react-intl";
const messages = defineMessages({
  temporaryChat: {
    id: "chatgptConversations.home.temporaryHero",
    defaultMessage: "Temporary Chat",
    description:
      "Primary heading on the ChatGPT temporary chat home page in Codex Desktop",
  },
  readyWhenYouAre: {
    id: "chatgptConversations.home.hero.readyWhenYouAre",
    defaultMessage: "Ready when you are.",
    description:
      "One of four rotating headlines on the Chat home page in Codex Desktop. It invites an end user to begin a chat and should remain a short, friendly single-line headline.",
  },
  onYourMind: {
    id: "chatgptConversations.home.hero.onYourMind",
    defaultMessage: "What’s on your mind today?",
    description:
      "One of four rotating headlines on the Chat home page in Codex Desktop. It invites an end user to begin a chat and should remain a short, friendly single-line headline.",
  },
  agendaToday: {
    id: "chatgptConversations.home.hero.agendaToday",
    defaultMessage: "What’s on the agenda today?",
    description:
      "One of four rotating headlines on the Chat home page in Codex Desktop. It invites an end user to begin a chat and should remain a short, friendly single-line headline.",
  },
  shouldWeBegin: {
    id: "chatgptConversations.home.hero.shouldWeBegin",
    defaultMessage: "Where should we begin?",
    description:
      "One of four rotating headlines on the Chat home page in Codex Desktop. It invites an end user to begin a chat and should remain a short, friendly single-line headline.",
  },
});
const rotatingHeadlines: readonly MessageDescriptor[] = [
  messages.readyWhenYouAre,
  messages.onYourMind,
  messages.agendaToday,
  messages.shouldWeBegin,
];
let previousLocationKey: string | undefined;
let headlineIndex = -1;
function getHeadlineForLocation(locationKey: string): MessageDescriptor {
  if (locationKey !== previousLocationKey) {
    previousLocationKey = locationKey;
    headlineIndex = (headlineIndex + 1) % rotatingHeadlines.length;
  }
  return rotatingHeadlines[headlineIndex];
}
interface AnimatedHeadlineProps {
  headline: MessageDescriptor;
  isTemporaryChat: boolean;
}
function AnimatedHeadline({
  headline,
  isTemporaryChat,
}: AnimatedHeadlineProps): ReactElement {
  const hiddenHeadline = (
    <h1
      aria-hidden={true}
      className="heading-xl invisible font-normal whitespace-pre-wrap"
    >
      <FormattedMessage {...headline} />
    </h1>
  );
  return (
    <div
      className="relative w-full min-w-0 text-center select-none"
      style={{
        viewTransitionName: "var(--vt-splash-screen-headline)",
      }}
    >
      {hiddenHeadline}
      <AnimatePresence initial={false} mode="wait">
        {isTemporaryChat ? (
          <motion.div
            key="temporary-chat-content"
            animate={{
              opacity: 1,
            }}
            className="absolute inset-x-0 bottom-0 flex min-w-0 flex-col items-center gap-4"
            exit={{
              opacity: 0,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                y: 0,
              }}
              className="flex min-w-0 flex-col items-center gap-3"
              exit={{
                y: 24,
              }}
              initial={{
                y: 24,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h1 className="heading-xl font-normal whitespace-pre-wrap text-token-foreground">
                <FormattedMessage {...headline} />
              </h1>
              <p className="text-base leading-6 text-token-text-secondary">
                <FormattedMessage
                  id="chatgptConversations.home.temporaryDescription"
                  defaultMessage="This chat won't appear in your conversation history"
                  description="Short explanatory text shown on the ChatGPT temporary chat home page in Codex Desktop"
                />
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="chat-home-headline"
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="absolute inset-x-0 bottom-0"
            exit={{
              opacity: 0,
              y: -4,
              transition: {
                duration: 0,
              },
            }}
            initial={{
              opacity: 0,
              y: -4,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h1 className="heading-xl font-normal whitespace-pre-wrap text-token-foreground">
              <FormattedMessage {...headline} />
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export interface ChatHomeHeroProps {
  isTemporaryChat: boolean;
  locationKey: string;
}
export function ChatHomeHero({
  isTemporaryChat,
  locationKey,
}: ChatHomeHeroProps): ReactElement {
  const headline = isTemporaryChat
    ? messages.temporaryChat
    : getHeadlineForLocation(locationKey);
  return (
    <div className="mx-auto w-[min(100%,var(--thread-content-max-width))] min-w-0 px-panel">
      <AnimatedHeadline headline={headline} isTemporaryChat={isTemporaryChat} />
    </div>
  );
}
