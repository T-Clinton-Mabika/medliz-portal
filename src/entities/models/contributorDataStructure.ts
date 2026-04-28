/* */

import { ContactInformationSchema } from "./generalSchema/baseSchema/contactInfoSchema";
import { ThumbnailSchema } from "./generalSchema/baseSchema/thumbnailSchema";

/*
 * =========================== CONTRIBUTOR METADATA ===========================
 * - Meta information about contributors.
 * - RoleTitle: The current role in their job that the contributor holds.
 * - Qualifications: Refers to a contributor's past education and certifications.
 * - ContactInfo: These are the various links to the contact information stored on the contributor as laid out by ContactInformationSchema interface.
 */

interface ContributorMetadata {
  contributorRoleTitle: string
  contributorQualifications: string[]
  contributorContactInfo: ContactInformationSchema
}

/*
 * =========================== CONTRIBUTOR ===========================
 * - Combination of all data required for a site contributor.
 * - Id: The contributors unique identifier in the format xx-xxxx-##.
 * -     CR means contributor.
 * -     xxxx is an alpha-based code derived from the contributor's name.
 * -     ## is the contributor entry number.
 * - Avatar: The pathway to the contributor's profile picture.
 * - Name: The name of the contributor.
 * - Metadata: The particulars/more detailed information on the contributor as laid out by the ContributorMetadata interface.
 * - Synopsis: Refers to a shortened bio descriptions used for the default state of contributor UI cards.
 * - Bio: This is the detailed description of the contributor.
 */
export interface ContributorDataStructure {
  contributorId: string
  contributorAvatar: ThumbnailSchema
  contributorName: string
  contributorMetadata: ContributorMetadata
  contributorSynopsis: string
  contributorBio: string
}