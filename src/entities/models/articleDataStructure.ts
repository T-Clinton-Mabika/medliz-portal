/* */

import { GeneralContentSchema } from "./baseSchema/contentGeneralSchema";

/*
 * =========================== ARTICLE ===========================
 * - Final structure for article data as represented on the website.
 * - Id: The unique identifier that is an alphanumeric code that has AE-xxxx-###-xx.
 * -     Where AE means article.
 * -     xxxx is four letter code based on the article name.
 * -     ### is a numeric code referencing the articles post number.
 * -     xx a two letter code referencing involvement of AI, where it could be either AI - for fully written by AI, HA - written by human author with the assistance of AI or HU - for completely written by a human.
 * - Information: Refers to base data about the content as laid out by GeneralContentSchema interface.
 * - ContentPath: Refers the pathway to the markdown file that contains the article content.
 */

export interface ArticleDataStructure {
  articleId: string
  articleInformation: GeneralContentSchema
  articleContentPath: string
}