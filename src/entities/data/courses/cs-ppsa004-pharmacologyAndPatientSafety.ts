/* */

import { CourseDataStructure } from "../../models/courseDataStructure";

export const csppsa004: CourseDataStructure[] = [
  /*
   * =========================== COURSE 4 ===========================
   * - Pharmacology and Patient Safety
   * - Modules: 4 | Quizzes: 2 (Located in Module 2 and 4) | AI USED
   */

  {
    courseId: "CS-PPSA004",
    courseInformation: {
      contentSlug: "pharmacology-and-patient-safety",
      contentTitle: "Pharmacology and Patient Safety",
      contentThumbnail: {
        avifPath:
          "assets/images/avif/course-cover-cs-ppsa004-pharmacologyAndPatientSafety.avif",
        pngPath:
          "assets/images/png/course-cover-cs-ppsa004-pharmacologyAndPatientSafety.png",
        webpPath:
          "assets/images/webp/course-cover-cs-ppsa004-pharmacologyAndPatientSafety.webp",
        altText: "Course Cover: Pharmacology and Patient Safety",
      },
      contentSynopsis:
        "This comprehensive course covers the core principles of pharmacology and safe prescribing practice. From foundational PK/PD concepts to adverse drug reactions, medication safety systems, and antibiotic stewardship, this course equips clinicians with the knowledge and habits to prescribe safely and responsibly.",
      contentMetadata: {
        contentAiUsage: true,
        contentAiDisclaimer:
          "ARIA GenAI was involved in the generation and editing of the content in this course.",
        contentContributorIds: ["GC-GNAI-01", "TM-ERMS-01"],
        contentPublishDate: "01-05-2026",
        contentEstimatedDuration: {
          estimatedDurationMeasurement: "hrs",
          estimatedDuration: 3,
        },
        contentLabels: [
          "Pharmacology",
          "Prescribing",
          "Adverse Drug Reactions",
          "Drug Interactions",
          "Medication Safety",
        ],
        contentReviewData: {
          reviewCounter: 0,
          oneStarRating: 0,
          twoStarRating: 0,
          threeStarRating: 0,
          fourStarRating: 0,
          fiveStarRating: 0,
        },
      },
    },
    courseMetadata: {
      courseLevel: "Intermediate",
      coursePreRequisites: ["The Foundations of Clinical Practice"],
      courseTargetAudience: [
        "Medical Students",
        "Junior Doctors",
        "Pharmacists",
        "Nurse Prescribers",
        "Clinical Trainees",
      ],
      courseLanguage: "English",
    },
    courseModules: [
      {
        moduleId: "CS-PPSA004-MDCP01",
        moduleTitle: "Core Principles of Pharmacology",
        moduleContentPath:
          "content/courses/cs-ppsa004-mdcp01-corePrinciplesOfPharmacology.md",
      },
      {
        moduleId: "CS-PPSA004-MDAD02",
        moduleTitle: "Adverse Drug Reactions and Drug Interactions",
        moduleContentPath:
          "content/courses/cs-ppsa004-mdad02-adverseDrugReactionsAndDrugInteractions.md",
        moduleQuizzes: [
          {
            quizId: "CS-PPSA004-MDAD02-QZ1",
            quizPassMark: 65,
            quizEstimatedDuration: {
              estimatedDurationMeasurement: "min",
              estimatedDuration: 25,
            },
            quizDifficulty: "Medium",
            quizQuestions: [
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-01",
                questionContent:
                  "Which type of adverse drug reaction (ADR) is dose-dependent and predictable?",
                questionResponseOptions: [
                  "Type B (Bizarre)",
                  "Type D (Delayed)",
                  "Type E (End-of-use)",
                  "Type A (Augmented)",
                ],
                questionAnswerIndex: 3,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-02",
                questionContent:
                  "A patient on long-term corticosteroids develops adrenal suppression. This is classified as which type of ADR?",
                questionResponseOptions: [
                  "Type A",
                  "Type B",
                  "Type C",
                  "Type F",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-03",
                questionContent:
                  "Rifampicin reduces the efficacy of warfarin. What pharmacokinetic mechanism underlies this interaction?",
                questionResponseOptions: [
                  "Enzyme inhibition",
                  "Enzyme induction",
                  "Protein binding displacement",
                  "Reduced renal excretion",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-04",
                questionContent:
                  "A patient on simvastatin is prescribed clarithromycin for a chest infection. What is the primary concern?",
                questionResponseOptions: [
                  "Reduced clarithromycin efficacy due to enzyme induction",
                  "Additive QT prolongation leading to arrhythmia",
                  "Reduced antibiotic absorption due to altered gastric motility",
                  "Elevated simvastatin levels due to enzyme inhibition, increasing myopathy risk",
                ],
                questionAnswerIndex: 3,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-05",
                questionContent:
                  "Serotonin syndrome is most likely to occur with which drug combination?",
                questionResponseOptions: [
                  "Metformin + ramipril",
                  "Warfarin + aspirin",
                  "SSRI + tramadol",
                  "Beta-blocker + calcium channel blocker",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-06",
                questionContent:
                  "Which of the following ADR presentations should prompt urgent assessment for QT prolongation?",
                questionResponseOptions: [
                  "Ankle swelling in a patient on amlodipine",
                  "Dry cough in a patient on an ACE inhibitor",
                  "Palpitations and near-syncope in a patient on an antipsychotic",
                  "Mild nausea in a patient started on metformin",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-07",
                questionContent:
                  "To which system should UK healthcare professionals report suspected adverse drug reactions?",
                questionResponseOptions: [
                  "Yellow Card scheme",
                  "MedWatch",
                  "EudraVigilance",
                  "VigiBase",
                ],
                questionAnswerIndex: 0,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-08",
                questionContent:
                  "What percentage of adverse drug reactions are classified as Type A (augmented)?",
                questionResponseOptions: [
                  "Approximately 65%",
                  "Approximately 80%",
                  "Approximately 50%",
                  "Approximately 20%",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-09",
                questionContent:
                  "ACE inhibitor combined with a potassium-sparing diuretic most commonly risks causing:",
                questionResponseOptions: [
                  "Hypernatraemia",
                  "Hyponatraemia",
                  "Hypokalaemia",
                  "Hyperkalaemia",
                ],
                questionAnswerIndex: 3,
              },
              {
                questionId: "CS-PPSA004-MDAD02-QZ1-10",
                questionContent:
                  "Which of the following best describes a pharmacodynamic drug interaction?",
                questionResponseOptions: [
                  "Two drugs with similar mechanisms produce additive or synergistic effects",
                  "One drug displaces another from plasma protein binding sites",
                  "One drug alters the metabolism of another via CYP450 enzymes",
                  "One drug reduces the absorption of another from the GI tract",
                ],
                questionAnswerIndex: 0,
              },
            ],
          },
        ],
      },
      {
        moduleId: "CS-PPSA004-MDSP03",
        moduleTitle: "",
        moduleContentPath:
          "content/courses/cs-ppsa004-mdsp03-safePrescribingAndMedicationErrorPrevention.md",
      },
      {
        moduleId: "CS-PPSA004-MDAS04",
        moduleTitle: "",
        moduleContentPath:
          "content/courses/cs-ppsa004-mdsp03-safePrescribingAndMedicationErrorPrevention.md",
        moduleQuizzes: [
          {
            quizId: "CS-PPSA004-MDAS04-QZ1",
            quizPassMark: 65,
            quizEstimatedDuration: {
              estimatedDurationMeasurement: "min",
              estimatedDuration: 25,
            },
            quizDifficulty: "Medium",
            quizQuestions: [
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-01",
                questionContent:
                  "According to the Word Health Organisation projections, how many deaths annually could be caused by drug-resistant infections by 2050 if no action is taken?",
                questionResponseOptions: [
                  "1 million",
                  "5 million",
                  "10 million",
                  "25 million",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-02",
                questionContent:
                  "Which resistance mechanism does MRSA use to resist beta-lactam antibiotics?",
                questionResponseOptions: [
                  "Beta-lactamase production",
                  "Altered penicillin-binding protein (PBP2a)",
                  "Efflux pump overexpression",
                  "Reduced outer membrane permeability",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-03",
                questionContent:
                  "What is the recommended timing for sending microbiological specimens relative to starting antibiotics?",
                questionResponseOptions: [
                  "After 48 hours of antibiotic therapy",
                  "At the same time as administering the first antibiotic dose",
                  "Before starting antibiotics wherever possible",
                  "Only if the patient fails to respond within 72 hours",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-04",
                questionContent:
                  "De-escalation in antibiotic prescribing refers to:",
                questionResponseOptions: [
                  "Switching from oral to IV antibiotics for severe infections",
                  "Stopping all antibiotics once the patient is afebrile",
                  "Reducing the frequency of antibiotic dosing to minimise side effects",
                  "Narrowing the spectrum of antimicrobial therapy once culture and sensitivity results are available",
                ],
                questionAnswerIndex: 3,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-05",
                questionContent:
                  "Which of the following is NOT a core principle of antibiotic stewardship?",
                questionResponseOptions: [
                  "Right drug",
                  "Right patient",
                  "Right duration",
                  "Right prescriber grade",
                ],
                questionAnswerIndex: 3,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-06",
                questionContent:
                  "ESBL-producing E. coli primarily resists antibiotics through which mechanism?",
                questionResponseOptions: [
                  "Efflux pumps",
                  "Target site modification",
                  "Beta-lactamase enzyme production",
                  "Reduced membrane permeability",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-07",
                questionContent:
                  "A patient with a urinary tract infection is responding well to IV co-amoxiclav. Cultures confirm a sensitive organism. The appropriate stewardship action at 48 hours is:",
                questionResponseOptions: [
                  "Switch to an appropriate oral antibiotic (IV-to-oral switch)",
                  "Continue IV antibiotics for the full 14-day course",
                  "Add a second IV antibiotic to broaden cover",
                  "Stop all antibiotics as the patient is improving",
                ],
                questionAnswerIndex: 0,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-08",
                questionContent:
                  "A patient requests antibiotics for a common cold. The correct response is:",
                questionResponseOptions: [
                  "Prescribe a short course of amoxicillin to prevent secondary bacterial infection",
                  "Prescribe antibiotics to maintain the therapeutic relationship",
                  "Explain that common colds are viral and antibiotics will not help, and discuss appropriate symptomatic management",
                  "Refer the patient to a specialist for further assessment",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-09",
                questionContent:
                  "Which antibiotic prescription review is considered a cornerstone of stewardship programmes?",
                questionResponseOptions: [
                  "12-hour review",
                  "48 to 72 hour review with culture results",
                  "Weekly ward round review",
                  "Review only if the patient deteriorates",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-PPSA004-MDAS04-QZ1-10",
                questionContent:
                  "Which of the following is listed by the Word Health Organisation as a key driver of antimicrobial resistance?",
                questionResponseOptions: [
                  "Overuse and inappropriate prescribing of antibiotics in human medicine",
                  "Increased vaccination rates in high-income countries",
                  "Expansion of generic antibiotic manufacturing",
                  "Improved sanitation in healthcare settings",
                ],
                questionAnswerIndex: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];
