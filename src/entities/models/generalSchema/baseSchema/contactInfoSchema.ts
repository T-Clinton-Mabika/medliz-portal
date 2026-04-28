/* */

/*
 * =========================== PLATFORMS ===========================
 * - Structure for an external platform profile entry.
 * - Handle: Refers to the entity's name/id on the external platform.
 * - URL: The link that leads to the entity's profile/page on the external platform. 
 */
interface PlatformMedia {
    platformHandle: string
    platformURL: string
}

/*
 * =========================== CONTACT INFORMATION ===========================
 * - Contact details for a site contributor or benefactor. Limited to five most common in the medical field according to AI.
 * - Aggregated from Claude AI, Gemini, CoPilot and ChatGPT.
 * - Additionally also included are contact details for direct contact.
 * - All contact options are optional.
 * - Email: The entity's email address.
 * - Phone: The entity's phone number including the country code.
 * - Website: The general/shortened name of the entity's website and the associated URL.
 * - LinkedIn: The entity's LinkedIn profile name and the public URL to see their page.
 * - Facebook: The name of the entity's facebook profile page and the URL to access it.
 * - TwitterX: The entity's X (formerly known as Twitter) profile name and the URL to view the page.
 * - Instagram: The entity's Instagram handle and the URL leading to the profile page.
 */
export interface ContactInformationSchema {
    email?: string
    phone?: string
    website?: PlatformMedia
    linkedIn?: PlatformMedia
    facebook?: PlatformMedia
    twitterX?: PlatformMedia
    instagram?: PlatformMedia
}