/*
 * =========================== CONTROL ICONS ===========================
 * - Registry for all control icons.
 * - These icons are used for control elements in the website.
 * - Such elements are like the toggle for dark/light mode, menu when on smaller devices, etc.
 */

import { MdMenuOpen, MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { BsFillMoonStarsFill, BsSunFill, BsSearch } from "react-icons/bs";

export const controlIcons = {
  closedMenu: MdMenu,
  openMenu: MdMenuOpen,
  closeIcon: IoClose,
  darkMode: BsFillMoonStarsFill,
  lightMode: BsSunFill,
  search: BsSearch,
} as const;
