/* */

/*
 * =========================== WEBSITE NOTICEBOARD ===========================
 * - Structure for storage of website noticeboard data.
 * - Type: The kind of noticeboard entry.
 * - Id: Alphanumeric code following the pattern xx-NOTICE-##.
 * -     xx is either WT - for Wellness Tips, HA - for Health Alerts or SU - for Site Update.
 * -     ## is the entry number in the current batch of notices.
 * - Title: Refers to the heading that will appear on the noticeboard entry.
 * - Date: This is date that the noticeboard entry was made.
 * -       For external notices this date is the one that corresponds with when the source released the notice on their platform.
 * - Synopsis: The description of the noticeboard entry that will appear on the UI card.
 * - Source: The name of the source for the noticeboard entry.
 * - URL: Used for noticeboard entries derived from an external source.
 * -      The URL leads to the original post.
 */
export interface NoticeboardDataStructure {
  nbEntryType: "Wellness Tips" | "Health Alerts" | "Site Update";
  nbEntryId: string;
  nbEntryTitle: string;
  nbEntryDate: string;
  nbEntrySynopsis: string;
  nbEntryContent: string;
  nbEntrySource: string;
  nbEntrySourceURL?: string;
}
