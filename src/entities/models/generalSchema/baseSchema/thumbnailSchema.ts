/* */

/*
 * =========================== THUMBNAIL ===========================
 * - Structure for thumbnails that will be used in the web-application.
 * - avifPath: The pathway to the avif version of the thumbnail file.
 * - pngPath: The pathway to the png version of the thumbnail file.
 * - webpPath: The pathway to the webp version of the thumbnail file.
 * - altText: The alternate text in the case that the image cannot be loaded.
 */
export interface ThumbnailSchema {
  avifPath: string;
  pngPath: string;
  webpPath: string;
  altText: string;
}
