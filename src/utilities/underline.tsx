/*
 * =========================== HERO UNDERLINE FEATURE ===========================
 * - Animated Underline feature for buzzwords in hero sections.
 */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MarkerStyleUnderlineProps {
  children: React.ReactNode;
  underlineVariable?: string;
  textVariable?: string;
  className?: string;
  underlinePadding?: string | number;
  triggerOnView?: boolean; // If true, animates when scrolled into view
  viewMargin?: string; // CSS margin format: e.g., "-50px", "0px", "100px 0px"
}

export const MarkerStyleUnderline: React.FC<MarkerStyleUnderlineProps> = ({
  children,
  underlineVariable = "--color-auxiliary-white", //default to auxiliary white colour in the case of not defining a specific colour.
  textVariable,
  className = "",
  underlinePadding = "-0.75rem", //set default padding unless specified for text and the marker style underline.
  triggerOnView = false, // Default to immediate animation (false = animate on load)
  viewMargin = "-50px", // Trigger slightly before element comes into view
}) => {
  const effectiveTextVariable = textVariable || underlineVariable; //set the text to use the same colour as the underline feature if not explicitly stated.

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true, // Animate only once when first seen
    margin: viewMargin as any, // Type assertion to work around TypeScript strictness
  });

  // Determine whether animation should play
  const shouldAnimate = triggerOnView ? isInView : true;

  return (
    <span
      ref={triggerOnView ? ref : undefined}
      className={`relative inline-block font-heroBuzzword ${className}`}
      style={{
        color: `var(${effectiveTextVariable}, var(--color-auxiliary-blue))`,
      }}
    >
      {children}
      <svg
        aria-hidden="true"
        className="absolute left-0 w-full h-[0.45rem] pointer-events-none overflow-visible"
        style={{ bottom: underlinePadding }}
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 2 4 C 20 3.5, 80 3, 98 4"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: shouldAnimate ? 1 : 0,
            opacity: shouldAnimate ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.path
          d="M 15 9 C 40 8.5, 75 8, 95 9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-80"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: shouldAnimate ? 1 : 0,
            opacity: shouldAnimate ? 0.8 : 0,
          }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </span>
  );
};
