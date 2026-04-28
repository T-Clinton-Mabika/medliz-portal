/** */

import { ContactInformationSchema } from "./generalSchema/baseSchema/contactInfoSchema";
import { ThumbnailSchema } from "./generalSchema/baseSchema/thumbnailSchema";

/*
 * =========================== BENEFACTOR DETAILS ===========================
 * - Refers to more detailed data for Medliz benefactors that fall under the Long-Term type.
 * - Synopsis: Refers to the shortened bio for the benefactor that will appear on the benefactor's UI card.
 * - Bio: Refers to the full bio for the benefactor which appears in the modal and on-hover of the UI card.
 * - ContactInfo: The benefactor's contact details as laid out by the ContactInformationSchema interface.
 */

interface BenefactorDetails {
  benefactorSynopsis: string
  benefactorBio: string
  benefactorContactInfo: ContactInformationSchema
}

/*
 * =========================== BENEFACTOR SCHEMA ===========================
 * - Combination of all data required for a site benefactor.
 * - Type: Refers to whether the benefactor is a more fixed sponsor (long-term) of the site, in which case they warrant a UI card.
 * -       The other case a short-term sponsor who is only contributing to obtain a advertisement slot on the site (i.e. more one time sponsorship), do not warrant a UI card.
 * - Id: Follows the format xx-xxxx-##.
 * -     xx is either ST - for short-term benefactor or LT - for long-term benefactor. 
 * -     xxxx is a letter based code derived from the benefactors name.
 * -     ## is the entry number of the benefactor.
 * - Avatar: The pathway to the benefactor's profile picture.
 * - Name: The name of the benefactor.
 * - Details: These are the details for long-term benefactors as outlined under the BenefactorDetails interface. 
 */
export interface BenefactorSchema {
  benefactorType: "Short-Term" | "Long-Term"
  benefactorId: string
  benefactorAvatar: ThumbnailSchema
  benefactorName: string
  benefactorDetails?: BenefactorDetails
}