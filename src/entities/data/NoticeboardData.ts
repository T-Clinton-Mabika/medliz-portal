/* */

import { NoticeboardDataStructure } from "../models/noticeboardDataStructure";

export const NoticeboardEntries: NoticeboardDataStructure[] = [
  /* =========================== HEALTH ALERTS =========================== */
  {
    nbEntryType: "Health Alerts",
    nbEntryId: "HA-NOTICE-01",
    nbEntryTitle: "Global Infant Formula Recall: Cereulide Toxin Contamination",
    nbEntryDate: "13-03-2026",
    nbEntrySynopsis:
      "For babies who rely entirely on formula, repeated feedings can increase the amount of toxin consumed, and using contaminated formula for rehydration can worsen illness.",
    nbEntryContent:
      "Multi-country recalls of infant formula and related products have been initiated after cereulide toxin was detected in batches of multiple internationally distributed brands. The contamination has been traced to arachidonic acid (ARA) oil used as an ingredient. As of 25 February 2026, affected products were distributed across 99 countries and territories, with 144 suspected and confirmed cases reported across 10 countries in three WHO regions. WHO rates the overall public health risk as moderate, citing the particular vulnerability of infants to rapid dehydration and the ongoing uncertainty around the full extent of contaminated product distribution.",
    nbEntrySource: "World Health Organization (WHO)",
    nbEntrySourceURL:
      "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON596",
  },
  {
    nbEntryType: "Health Alerts",
    nbEntryId: "HA-NOTICE-02",
    nbEntryTitle: "Mpox: New Recombinant Virus Strain Detected Globally",
    nbEntryDate: "14-02-2026",
    nbEntrySynopsis:
      "Transmission of this recombinant virus already involves at least four countries in three WHO regions, and is therefore likely to be more widespread than currently documented.",
    nbEntryContent:
      "A recombinant monkeypox virus (MPXV) strain combining genetic elements from both clade Ib and clade IIb has been detected in two cases — one in the United Kingdom and one in India — linked to travel in Asia and the Arabian Peninsula respectively. The cases occurred several weeks apart with near-identical viral sequences, suggesting a common origin and likely wider circulation than currently documented. Both patients recovered without severe outcomes and no secondary cases were identified through contact tracing. WHO's overall mpox risk assessment remains unchanged: moderate for men who have sex with men with new or multiple partners and for sex workers, and low for the general population.",
    nbEntrySource: "World Health Organization (WHO)",
    nbEntrySourceURL:
      "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON595",
  },

  /* =========================== SITE UPDATES ============================ */
  {
    nbEntryType: "Site Update",
    nbEntryId: "SU-NOTICE-01",
    nbEntryTitle: "Courses now live",
    nbEntryDate: "30-04-2026",
    nbEntrySynopsis:
      "Our Med-Courses Page is now live and packed full of educational content just for you!",
    nbEntryContent:
      "The Med-Course Page is now live and active with several courses on offer to help you better educate yourself in the medical space. Courses are carefully designed to be relevant and interactive with quizzes included in some course modules. So hop over there now to begin learning and improving!",
    nbEntrySource: "Medliz Admin",
  },
  {
    nbEntryType: "Site Update",
    nbEntryId: "SU-NOTICE-02",
    nbEntryTitle: "Articles now available",
    nbEntryDate: "30-04-2026",
    nbEntrySynopsis:
      "Our Med-Blog Page is now live and filled with insightful reads curated just for you!",
    nbEntryContent:
      "The Medliz Blog is now live and active, featuring a growing collection of posts covering health, wellness, and everything in between. Articles are carefully written to be informative, engaging, and relevant to your everyday life. Head over now to explore the latest posts and stay up to date with all things Medliz!",
    nbEntrySource: "Medliz Admin",
  },

  /* =========================== WELLNESS TIPS =========================== */
  {
    nbEntryType: "Wellness Tips",
    nbEntryId: "WT-NOTICE-01",
    nbEntryTitle: "Hydration Tip",
    nbEntryDate: "29-04-2026",
    nbEntrySynopsis:
      "Drinking 2 liters of water daily can significantly improve cognitive function.",
    nbEntryContent:
      "Hydration is critical for brain health. Even mild dehydration can impair concentration, memory, and mood. The general recommendation is about 2 liters (8 glasses) a day, but this can vary based on activity level, climate, and individual needs. Try carrying a reusable water bottle and setting reminders to drink throughout the day to maintain optimal hydration levels.",
    nbEntrySource: "ARIA GenAI",
  },
  {
    nbEntryType: "Wellness Tips",
    nbEntryId: "WT-NOTICE-02",
    nbEntryTitle: "Managing Sleep and Tiredness",
    nbEntryDate: "20-03-2026",
    nbEntrySynopsis:
      "Reasons why you might feel tired and advice about what you can do to prevent tiredness.",
    nbEntryContent:
      "The NHS provides guidance on understanding and managing tiredness, covering the common causes of fatigue and practical strategies to improve sleep quality. Resources include self-help tips for fighting tiredness and a bedtime meditation video to support better rest. Lifestyle adjustments such as maintaining a consistent sleep schedule, reducing caffeine, and practising relaxation techniques before bed can all make a significant difference. Persistent or unexplained fatigue should be discussed with a GP.",
    nbEntrySource: "National Health Service (NHS) UK",
    nbEntrySourceURL: "https://www.nhs.uk/live-well/sleep-and-tiredness/",
  },
  {
    nbEntryType: "Wellness Tips",
    nbEntryId: "WT-NOTICE-03",
    nbEntryTitle: "5 Steps to Better Mental Wellbeing",
    nbEntryDate: "16-12-2022",
    nbEntrySynopsis:
      "Evidence suggests there are 5 steps you can take to improve your mental health and wellbeing. Trying these things could help you feel more positive and able to get the most out of life.",
    nbEntryContent:
      "The NHS outlines five evidence-based steps to improve mental health and wellbeing: connect with other people, be physically active, learn new skills, give to others, and pay attention to the present moment through mindfulness. Simple daily actions — such as sharing a meal with family, picking up a new hobby, volunteering in your community, or practising mindfulness — can meaningfully boost mood, build resilience, and foster a greater sense of purpose over time.",
    nbEntrySource: "National Health Service (NHS) UK",
    nbEntrySourceURL:
      "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/",
  },
];
