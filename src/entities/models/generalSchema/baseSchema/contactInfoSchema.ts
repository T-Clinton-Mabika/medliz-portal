/* */

/*
 * =========================== SOCIALS ===========================
 * - Structure for social media link entry.
 * - Handle: Refers to the entity's name/id on that social media platform.
 * - URL: The link that leads to the social media page for the entity. 
 */
interface SocialMedia {
    socialHandle: string
    socialURL: string
}

/*
 * =========================== CONTACT INFORMATION ===========================
 * - Social links for contributor. Limited to five most common in the medical field according to AI.
 * - Aggregated from Claude AI, Gemini, CoPilot and ChatGPT.
 * - Additionally also included are contact details for direct contact.
 */
export interface ContactInformationSchema {
    email?: string
    phone?: string
    website?: SocialMedia
    linkedin?: SocialMedia
    facebook?: SocialMedia
    twitter?: SocialMedia
    instagram?: SocialMedia
}