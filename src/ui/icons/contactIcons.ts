/*
 * =========================== CONTACT ICONS ===========================
 * - Registry for all contact icons.
 * - These icons are used to visually allude to contact information.
 * - This includes contact details such phone, email, social media platforms, etc.
 */

import { IoMail, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { FaPhone, FaGlobe } from "react-icons/fa6";
import { SiProtonmail, SiGmail } from "react-icons/si";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import {
  BsTwitterX,
  BsFacebook,
  BsBehance,
  BsGithub,
  BsTiktok,
} from "react-icons/bs";
import { TbBrandDribbbleFilled } from "react-icons/tb";

export const contactIcons = {
  website: FaGlobe,
  phone: FaPhone,
  whatsapp: RiWhatsappFill,
  email: IoMail,
  gmail: SiGmail,
  protonmail: SiProtonmail,
  linkedin: IoLogoLinkedin,
  instagram: RiInstagramFill,
  twitterX: BsTwitterX,
  facebook: BsFacebook,
  behance: BsBehance,
  dribbble: TbBrandDribbbleFilled,
  github: BsGithub,
  tiktok: BsTiktok,
  youtube: IoLogoYoutube,
} as const;
