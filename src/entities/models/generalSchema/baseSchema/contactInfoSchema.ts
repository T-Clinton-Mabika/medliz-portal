/* */

/*
 * =========================== PLATFORMS ===========================
 * - Structure for an external platform profile entry.
 * - Handle: Refers to the entity's name/id on the external platform.
 * - Name: The platform name.
 * -       Used inorder to create a concatenated string with the handle.
 * -       This concatenated string will be used as the text in the callout that appears on hover.
 * - URL: The link that leads to the entity's profile/page on the external platform.
 */
interface PlatformMedia {
  platformHandle: string;
  platformName: string;
  platformURL: string;
}

/*
 * =========================== CONTACT INFORMATION ===========================
 * - Contact details for a site contributor or benefactor.
 * - All contact options are optional.
 * - Email: The entity's email address.
 * - Phone: The entity's phone number including the country code.
 * - Website: The general/shortened name of the entity's website and the associated URL.
 * - LinkedIn: The entity's LinkedIn profile name and the public URL to see their page.
 * - Facebook: The name of the entity's facebook profile page and the URL to access it.
 * - TwitterX: The entity's X (formerly known as Twitter) profile name and the URL to view the page.
 * - Instagram: The entity's Instagram handle and the URL leading to the profile page.
 * -
 * - The following are more auxillary and not typical across contributors.
 * - They are just additional offerings in the case of non-medical staff and/or benefactors.
 * - Github: Mainly used for non-medical but design staff.
 * - Behance: Mainly used for non-medical but design staff.
 * - Dribbble: Mainly used for non-medical but design staff.
 * - Youtube: Additional profile in case entity wishes to add their youtube channel.
 * - Tiktok: Additional profile in case entity wishes to add their tiktok page.
 */
export interface ContactInformationSchema {
  email?: string;
  phone?: string;
  website?: PlatformMedia;
  linkedIn?: PlatformMedia;
  facebook?: PlatformMedia;
  twitterX?: PlatformMedia;
  instagram?: PlatformMedia;
  github?: PlatformMedia;
  behance?: PlatformMedia;
  dribbble?: PlatformMedia;
  youtube?: PlatformMedia;
  tiktok?: PlatformMedia;
}
