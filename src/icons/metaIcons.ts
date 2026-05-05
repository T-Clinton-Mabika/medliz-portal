/*
 * =========================== META ICONS ===========================
 * - Registry for all metaicons.
 * - These are used on meta elements such as date of publish, duration.
 */

import { GiTeacher } from "react-icons/gi";
import { BsClockFill, BsTranslate } from "react-icons/bs";
import { IoCalendarClear } from "react-icons/io5";
import { FaRegStarHalfStroke, FaRegStar, FaStar } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

export const metaIcons = {
  clearStar: FaRegStar,
  halfStar: FaRegStarHalfStroke,
  fullStar: FaStar,
  calendar: IoCalendarClear,
  language: BsTranslate,
  clock: BsClockFill,
  instructor: GiTeacher,
  difficulty: BiSolidBarChartAlt2,
} as const;
