/* */

import { ThumbnailSchema } from "./baseSchema/thumbnailSchema"

/*
 * =========================== ADVERTISEMENT LINK INFORMATION ===========================
 * - URL: hosts the link where the user must be redirected to when the click the button.
 * - BtnText: The text that appears on the button.
 */
interface AdvertismentLink {
  advertisementURL: string
  advertisementBtnText: string
}

/*
 * =========================== ADVERTISEMENTS ===========================
 * - Final structure for the advertisements that will be displayed on the Home and About & Contact pages.
 * - Id: The id which follows the format xx-ADVERT-xxxx-##.
 * -     The first xx is either LT for long-term benefactor or ST for short-term benefactor.
 * -     The xxxx is a alpha-based code which is a combination of the advert title.
 * - Thumbnail: The thumbnail are the pathways and alternative text for the cover image for the advert.
 * - Title: The title/heading that will displayed on the advert.
 * - OwnerId: The internal benefactor id for the owner of the advert.
 * - Synopsis: This is the short description for the advert that will appear on the UI card.
 * - Details: Offers more information/context on the advertisement. 
 * -          This appears when hovering over the card. (or initial tap on smaller devices)
 * - BtnContent: This refers to the information stored for the ad in the structure detailed by AdvertisementLink interface.
 */
export interface AdvertisementDataStructure {
  advertisementId: string
  advertisementThumbnail: ThumbnailSchema
  advertisementTitle: string
  advertisementOwnerId: string
  advertisementSynopsis: string
  advertisementDetails: string
  advertisementBtnContet: AdvertismentLink
}