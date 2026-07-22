// Restored from ref/webview/assets/home-suggestion-staggered-item-By0VdfSA.js
// Reduced-motion-aware entrance animation for home suggestion rows and cards.
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../utils/use-reduced-motion";
export function initHomeSuggestionStaggeredItemChunk(): void {}
export interface HomeSuggestionStaggeredItemProps {
  children: ReactNode;
  className?: string;
  index: number;
  variant: "card" | "list";
}
export function HomeSuggestionStaggeredItem({
  children,
  className,
  index,
  variant,
}: HomeSuggestionStaggeredItemProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      initial={{
        opacity: 0,
        transform: reduceMotion
          ? "translateY(0)"
          : `translateY(${variant === "list" ? 4 : 8}px)`,
      }}
      transition={{
        delay: reduceMotion ? 0 : index * 0.025,
        duration: 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
