/*
 * =========================== SCROLL FUNCTIONS ===========================
 * - Scroll To Top: function to reset page position to top of page as user navigates from page to page.
 */

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const scrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
