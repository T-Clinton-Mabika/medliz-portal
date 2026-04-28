/* */

/*
 * =========================== REVIEW ===========================
 * - Refers to the average rating score used for contents star rating system.
 * - reviewCounter: Is the total number of reviews left for the content.
 * - #StarRating: Is the total number of reviews equivalent to that star rating.
 *                e.g. 10 people can have left a rating of 5 stars therefore the value 10 is assigned to the fiveStarRating field.
 */

export interface ReviewSchema {
  reviewCounter: number
  oneStarRating: number
  twoStarRating: number
  threeStarRating: number
  fourStarRating: number
  fiveStarRating: number
}