/* */

import { ContributorDataStructure } from "../models/contributorDataStructure";

export const Contributors: ContributorDataStructure[] = [
  /* =========================== NON-TEAM MEMBERS =========================== */
  {
    contributorType: "General-Contributor",
    contributorId: "GC-GNAI-01",
    contributorAvatar: {
      avifPath: "assets/images/avif/profile-contributor-lizia.avif",
      pngPath: "assets/images/png/profile-contributor-lizia.png",
      webpPath: "assets/images/webp/profile-contributor-lizia.webp",
      altText: "Profile Picture: AI Assistant",
    },
    contributorName: "ARIA GenAI",
    contributorMetadata: {
      contributorRoleTitle: "Generative AI Assistant",
      contentGenerator: true,
      contributorQualifications: ["Not Applicable"],
    },
    contributorSynopsis:
      "A.R.I.A. (Applied Research & Insights Assistant) Generative Artifical Intelligence is Medliz’s generative artificial intelligence collaborator, supporting the development of articles and educational content through the synthesis and structuring of information.",
    contributorBio:
      "A.R.I.A. (Applied Research & Insights Assistant) is Medliz’s generative artificial intelligence system, designed to support the creation of educational and editorial content across the platform. Acting as a research and drafting partner, A.R.I.A. assists in synthesising information, structuring articles, and accelerating the development of courses and learning materials. It represents a composite workflow built on leading generative AI technologies, contributing to the drafting, refinement, and organisation of content. All outputs involving A.R.I.A. are reviewed, validated, and curated by the Medliz team to ensure accuracy, clarity, and alignment with medical and educational standards, with A.R.I.A. serving to augment — not replace — professional judgement.",
  },

  /* =========================== TEAM MEMBERS ============================== */
  /* ==================== CONTENT GENERATORS =============================== */
  {
    contributorType: "Team-Member",
    contributorId: "TM-ERMS-01",
    contributorAvatar: {
      avifPath: "assets/images/avif/profile-contributor-emush.avif",
      pngPath: "assets/images/png/profile-contributor-emush.png",
      webpPath: "assets/images/webp/profile-contributor-emush.webp",
      altText: "Profile Picture: Elizabeth R. Mushambi",
    },
    contributorName: "Elizabeth R. Mushambi",
    contributorMetadata: {
      contributorRoleTitle: "Founder & CEO",
      contentGenerator: true,
      contributorQualifications: [
        "Nursing Science Master's Degree - University of Zimbabwe",
        "Trauma Life Support Instructor Certificate - Jamaica Rescue Academy",
        "Nursing Education Bachelor's Degree - Chinhoyi University of Technology",
      ],
      contributorContactInfo: {
        website: {
          platformHandle: "Elizabeth Mushambi",
          platformName: "ResearchGate",
          platformURL:
            "https://www.researchgate.net/profile/Elizabeth-Mushambi",
        },
        linkedIn: {
          platformHandle: "Elizabeth R Mushambi",
          platformName: "LinkedIn",
          platformURL:
            "https://www.linkedin.com/in/elizabeth-r-mushambi-ba431553/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdMA7tfmZRx6Tm95cmiuFmg%3D%3D",
        },
        facebook: {
          platformHandle: "Elizabeth Matora Mushambi",
          platformName: "Facebook",
          platformURL: "https://www.facebook.com/elizabeth.matoramushambi/",
        },
      },
    },
    contributorSynopsis:
      "Elizabeth R. Mushambi is an experienced emergency nursing professional based in the UK, with expertise spanning trauma life support, ICU care, and medical education.",
    contributorBio:
      "Elizabeth R. Mushambi is a highly skilled healthcare professional based in Oldbury, United Kingdom, with a distinguished career in emergency medicine and nursing. She has held numerous clinical and leadership roles at MARS Zimbabwe — including Flight Nurse, ICU Advanced Nurse Practitioner, and Head of Operations and Training — and has served as an ITLS Instructor for International Trauma Life Support since 2023. A committed educator, Elizabeth has lectured in Emergency Medical Care at the Women's University in Africa and the University of Zimbabwe. She holds a Master's degree in Nursing Science and is a certified BLS and ACLS Instructor with the American Heart Association.",
  },

  /* ==================== NON-CONTENT GENERATORS =========================== */
  {
    contributorType: "Team-Member",
    contributorId: "TM-AEMS-02",
    contributorAvatar: {
      avifPath: "assets/images/avif/profile-contributor-amush.avif",
      pngPath: "assets/images/png/profile-contributor-amush.png",
      webpPath: "assets/images/webp/profile-contributor-amush.webp",
      altText: "Profile Picture: Anesu E. Mushambi",
    },
    contributorName: "Anesu E. Mushambi",
    contributorMetadata: {
      contributorRoleTitle: "Site Editor",
      contentGenerator: false,
      contributorQualifications: [],
      contributorContactInfo: {
        linkedIn: {
          platformHandle: "Anesu (Eddie) Mushambi",
          platformName: "LinkedIn",
          platformURL:
            "https://www.linkedin.com/in/anesu-mushambi-382a6a196/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLighvieeTdm7NWxSFSbFBQ%3D%3D",
        },
        instagram: {
          platformHandle: "@anesu.e_",
          platformName: "Instagram",
          platformURL:
            "https://www.instagram.com/anesu.e_?ighs=MXRsZW13MzNmNDN1aQ==",
        },
      },
    },
    contributorSynopsis: "TBA",
    contributorBio: "TBA",
  },
  {
    contributorType: "Team-Member",
    contributorId: "TM-TCMB-03",
    contributorAvatar: {
      avifPath: "assets/images/avif/profile-contributor-tmab.avif",
      pngPath: "assets/images/png/profile-contributor-tmab.png",
      webpPath: "assets/images/webp/profile-contributor-tmab.webp",
      altText: "Profile Picture: Takudzwa Clinton Mabika",
    },
    contributorName: "Takudzwa C. Mabika",
    contributorMetadata: {
      contributorRoleTitle: "Site Manager and Developer",
      contentGenerator: false,
      contributorQualifications: [
        "Computer Science and Business Computing Bachelor's Degree - University of Cape Town",
      ],
      contributorContactInfo: {
        email: "t.clinton.mabika@outlook.com",
        linkedIn: {
          platformHandle: "Takudzwa Clinton Mabika",
          platformName: "LinkedIn",
          platformURL:
            "https://www.linkedin.com/in/takudzwa-clinton-mabika/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWKSsxTDUToa6Op8a17Yp%2BA%3D%3D",
        },
        github: {
          platformHandle: "T-Clinton-Mabika",
          platformName: "GitHub",
          platformURL: "https://github.com/T-Clinton-Mabika",
        },
        behance: {
          platformHandle: "Takudzwa Clinton Mabika",
          platformName: "Behance",
          platformURL:
            "https://www.linkedin.com/in/takudzwa-clinton-mabika/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWKSsxTDUToa6Op8a17Yp%2BA%3D%3D",
        },
      },
    },
    contributorSynopsis:
      "Takudzwa Clinton Mabika is a designer and developer at Medliz, responsible for the platform’s design, development, and overall user experience, with a background in Computer Science and Business Computing from the University of Cape Town.",
    contributorBio:
      "Takudzwa Clinton Mabika is a designer and developer at Medliz, where he leads the end-to-end design and development of the platform, shaping its user experience, visual identity, and technical implementation. Working independently, he has been responsible for building the site from the ground up, combining design and engineering to deliver a cohesive and functional product. He holds a Bachelor's degree in Computer Science and Business Computing from the University of Cape Town and operates under the studio name 'Voldr Studio', providing freelance design services across brand identity, logo design, and promotional materials including banners, business cards, and flyers, with a focus on creating clear, effective, and visually consistent solutions aligned with user needs and business goals.",
  },
];
