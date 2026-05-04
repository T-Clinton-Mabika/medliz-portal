/*
 * =========================== UTILITIES INDEX ===========================
 * Central export file for all base components and utilities
 */

// Hero Underline Feature
export { default as marker } from "./heroUnderlineFeature";

// Carousel Feature
export { carouselActual as carousel } from "./carouselFeature";
export type { carouselItem } from "./carouselFeature";

// Dark Mode Context
export { DarkModeProvider, useDarkMode } from "./darkModeContext";

// Scroll Feature
export { scrollToTop } from "./scrollFeature";

// Search Overlay
export { default as SearchOverlay } from "./searchOverlay";
