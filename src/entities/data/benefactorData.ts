/* */

import { BenefactorSchema } from "../models/benefactorDataStructure";

export const benefactors: BenefactorSchema[] = [
  /* =========================== LONG-TEAM BENEFACTORS ============================ */
  {
    benefactorType: "Long-Term",
    benefactorId: "LT-DOFA-01",
    benefactorAvatar: {
      avifPath: "assets/images/avif/profile-benefactor-lt-donnaFarine.avif",
      pngPath: "assets/images/png/profile-benefactor-lt-donnaFarine.png",
      webpPath: "assets/images/webp/profile-benefactor-lt-donnaFarine.webp",
      altText: "Profile Picture: Donna Farine",
    },
    benefactorName: "Donna Farine",
    benefactorDetails: {
      benefactorSynopsis:
        "Donna Farine is a UK-based boutique baking business founded and run by Sharai Gumbo, specialising in handcrafted scones and cake confectioneries, with custom orders available.",
      benefactorBio:
        "Donna Farine is a boutique baking business founded and run by Sharai Gumbo, a passionate baker based in the UK. A one-woman operation, Donna Farine is built on Sharai's love for creating beautifully handcrafted baked goods, with a speciality in scones and cake confectioneries. The business caters to customers seeking quality homemade treats, offering a bespoke custom order service for those looking for something truly special — whether for everyday indulgence or memorable occasions. With skill, creativity, and a personal touch in every bake, Sharai has built Donna Farine into a trusted name for delicious, made-with-love creations.",
      benefactorContactInfo: {
        email: "donsharai@gmail.com",
        phone: "+44-749-351-7249",
        facebook: {
          platformHandle: "Donna Farine",
          platformName: "Facebook",
          platformURL:
            "https://www.facebook.com/people/Donna-Farine/100075842006001/?mibextid=wwXIfr&rdid=deFMDvdIjw3q8hLO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17RJ2TnciR%2F%3Fmibextid%3DwwXIfr",
        },
        twitterX: {
          platformHandle: "donnafarine",
          platformName: "X (formerly known as Twitter)",
          platformURL: "https://x.com/donnafarine",
        },
        instagram: {
          platformHandle: "@donnafarine",
          platformName: "Instagram",
          platformURL: "https://www.instagram.com/donnafarine/",
        },
      },
    },
  },
  {
    benefactorType: "Long-Term",
    benefactorId: "LT-MBCS-02",
    benefactorAvatar: {
      avifPath: "assets/images/avif/profile-benefactor-lt-makeItBright.avif",
      pngPath: "assets/images/png/profile-benefactor-lt-makeItBright.png",
      webpPath: "assets/images/webp/profile-benefactor-lt-makeItBright.webp",
      altText: "Profile Picture: Make It Bright Cleaning Solutions",
    },
    benefactorName: "Make It Bright Cleaning Solutions",
    benefactorDetails: {
      benefactorSynopsis:
        "Make It Bright Cleaning Solutions is a UK-based cleaning company founded in 2022, providing professional cleaning services to homeowners in and around Adwick le Street, Doncaster.",
      benefactorBio:
        "Make It Bright Cleaning Solutions Ltd is a professional cleaning company established in 2022 and based in Adwick le Street, Doncaster, UK. The company offers a range of cleaning services tailored to meet the needs of homeowners and residential clients across the local area. With a focus on quality and reliability, Make It Bright Cleaning Solutions is committed to delivering thorough, dependable cleaning services to help households maintain clean, comfortable living spaces.",
      benefactorContactInfo: {
        website: {
          platformHandle: "Make It Bright Cleaning Solutions",
          platformName: "Checkatrade Profile",
          platformURL:
            "https://www.checkatrade.com/trades/makeitbrightcleaningsolutionsltd",
        },
      },
    },
  },

  /* =========================== SHORT-TEAM BENEFACTORS =========================== */
  {
    benefactorType: "Short-Term",
    benefactorId: "ST-KZMB-01",
    benefactorAvatar: {
      avifPath: "assets/images/avif/profile-benefactor-st-kezMabika.avif",
      pngPath: "assets/images/png/profile-benefactor-st-kezMabika.png",
      webpPath: "assets/images/webp/profile-benefactor-st-kezMabika.webp",
      altText: "Profile Picture: Kudzai EZ Mabika",
    },
    benefactorName: "Kudzai EZ Mabika",
  },
];
