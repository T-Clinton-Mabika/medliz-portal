/* */

import { ContactInformationSchema } from "./generalSchema/baseSchema/contactInfoSchema";
import { ThumbnailSchema } from "./generalSchema/baseSchema/thumbnailSchema";

/*
 * =========================== CONTRIBUTOR METADATA ===========================
 * - Meta information about contributors.
 * - Role Title: The current role in their job that the contributor holds.
 * - Content Generator: Boolean identifier to indicate that the contributor generates course or article content.
 * -                    If true then their qualifications need to be present.
 * -                    If false then they are a team member responsible for something else other than content contribution.
 * -                    In that case then under qualifications are optional.
 * - Qualifications: Refers to a contributor's past education and certifications.
 * - Contact Info: These are the various links to the contact information stored on the contributor as laid out by ContactInformationSchema interface.
 */

interface ContributorMetadata {
  contributorRoleTitle: string
  contentGenerator: boolean
  contributorQualifications: string[]
  contributorContactInfo: ContactInformationSchema
}

/*
 * =========================== CONTRIBUTOR ===========================
 * - Combination of all data required for a site contributor.
 * - Type: Refers to whether the contributor is a Team-Member who is apart of the Medliz team.
 * -       Or they are general contributor meaning they are either an author, instructor or both but not considered a team member.
 * - Id: The contributors unique identifier in the format xx-xxxx-##.
 * -     xx is either TM for team member or GC for general contributor.
 * -     xxxx is an alpha-based code derived from the contributor's name.
 * -     ## is the contributor entry number.
 * - Avatar: The pathway to the contributor's profile picture.
 * - Name: The name of the contributor.
 * - Metadata: The particulars/more detailed information on the contributor as laid out by the ContributorMetadata interface.
 * - Synopsis: Refers to a shortened bio descriptions used for the default state of contributor UI cards.
 * - Bio: This is the detailed description of the contributor.
 */
export interface ContributorDataStructure {
  contributorType: "Team-Member" | "General-Contributor"
  contributorId: string
  contributorAvatar: ThumbnailSchema
  contributorName: string
  contributorMetadata: ContributorMetadata
  contributorSynopsis: string
  contributorBio: string
}