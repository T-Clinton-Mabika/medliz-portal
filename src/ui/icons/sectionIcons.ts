/*
 * =========================== SECTION ICONS ===========================
 * - Registry for all section icons.
 * - These are icons used in website/content sections such as quizzes, noticeboard, etc.
 */

import { IoMegaphone, IoWarning } from "react-icons/io5";
import { FaCookieBite, FaUserShield } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

export const sectionIcons = {
  quiz: MdQuiz,
  noticeboard: IoMegaphone,
  disclaimer: IoWarning,
  cookiePolicy: FaCookieBite,
  privacyPolicy: FaUserShield,
} as const;
