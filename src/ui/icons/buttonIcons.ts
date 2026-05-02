/*
 * =========================== BUTTON ICONS ===========================
 * - Central registry for all button icons.
 * - These include icons that will appear in buttons such as those used for Articles and Courses buttons.
 */

import { FaNewspaper, FaGraduationCap } from "react-icons/fa6";
import { FaExternalLinkAlt, FaComment } from "react-icons/fa";

export const buttonIcons = {
  article: FaNewspaper,
  course: FaGraduationCap,
  link: FaExternalLinkAlt,
  comment: FaComment,
} as const;
