/* */

import { ReviewSchema } from "./baseSchema/reviewSchema";
import { ThumbnailSchema } from "./baseSchema/thumbnailSchema";
import { DurationSchema } from "./baseSchema/durationSchema";

/*
 * =========================== CONTENT METADATA ===========================
 * - Meta information about content on the site.
 * - This includes the following data:
 * - AIUsage: a boolean value to declare if AI was used in the generation of the content.
 * - AIDisclaimer: this is a disclaimer detailing where AI was used in the contents generation. (Dependent on true value under AIUsage field)
 * - ContributorIds: a list of all the contributors who were involved in the generation/publishing of the content. (If AIUsage true then AI contributor is to be included as well)
 * - PublishDate: the date when the content was published onto the website.
 * - EstimatedDuration: the estimated time to read an article or complete a course.
 * - ContentLabels: these are tags/categories that the content fits underneath, mainly used for filtering.
 * - ReviewData: refers to the review data for the content as outlined in ReviewSchema.
 */

interface ContentMetadata {
  contentAiUsage: boolean;
  contentAiDisclaimer?: string;
  contentContributorIds: string[];
  contentPublishDate: string;
  contentEstimatedDuration: DurationSchema;
  contentLabels: string[];
  contentReviewData: ReviewSchema;
}

/*
 * =========================== CONTENT GENERAL DATA ===========================
 * - Refers to basic data structure that applies to all content the site.
 * - Content refers to all markdown based information (i.e. articles and course data).
 * - The shared data across both site offerings includes:
 * - Slug: Used for the name on the content's url page.
 * - Title: The main name/title for the content which will appear on the page and in UI cards.
 * - Thumbnail: The cover image path used for content, that will be shown on UI cards and the content page.
 * - Synopsis: The excerpt (articles) or description (courses) that will appear on content UI cards.
 * - Metadata: Refers the information/data stored for the content as governed by the ContentMetdadata interface.
 */

export interface GeneralContentSchema {
  contentSlug: string;
  contentTitle: string;
  contentThumbnail: ThumbnailSchema;
  contentSynopsis: string;
  contentMetadata: ContentMetadata;
}
