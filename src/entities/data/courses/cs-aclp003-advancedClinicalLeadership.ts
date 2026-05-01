/* */

import { CourseDataStructure } from "../../models/courseDataStructure";

export const csaclp003: CourseDataStructure[] = [
  /*
   * =========================== COURSE 3 ===========================
   * - Advanced Clinical Leadership
   * - Modules: 2 | Quizzes: 1 (Located in Module 2) | AI USED
   */

  {
    courseId: "CS-ACLP003",
    courseInformation: {
      contentSlug: "advanced-clinical-leadership",
      contentTitle: "Advanced Clinical Leadership",
      contentThumbnail: {
        avifPath:
          "assets/images/avif/course-cover-cs-aclp003-advancedClinicalLeadership.avif",
        pngPath:
          "assets/images/png/course-cover-cs-aclp003-advancedClinicalLeadership.png",
        webpPath:
          "assets/images/webp/course-cover-cs-aclp003-advancedClinicalLeadership.webp",
        altText: "Course Cover: Advanced Clinical Leadership",
      },
      contentSynopsis:
        "This advanced course examines the leadership competencies and quality improvement frameworks required of senior clinicians. Topics include crew resource management, managing clinical deterioration, psychological safety, resilience, clinical governance, PDSA methodology, root cause analysis, and the senior clinician's role in organisational quality.",
      contentMetadata: {
        contentAiUsage: true,
        contentAiDisclaimer:
          "ARIA GenAI was involved in the generation and editing of the content in this course.",
        contentContributorIds: ["GC-GNAI-01", "TM-ERMS-01"],
        contentPublishDate: "01-05-2026",
        contentEstimatedDuration: {
          estimatedDurationMeasurement: "hrs",
          estimatedDuration: 1.5,
        },
        contentLabels: [
          "Clinical Leadership",
          "Crew Resource Management",
          "Quality Improvement",
          "Clinical Governance",
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
      courseLevel: "Advanced",
      coursePreRequisites: [
        "The Foundations of Clinical Practice",
        "Clinical Diagnostics & Decision Making",
      ],
      courseTargetAudience: [
        "Senior Clinicians",
        "Consultants",
        "Registrars",
        "Clinical Leads",
        "Advanced Nurse Practitioners",
      ],
      courseLanguage: "English",
    },
    courseModules: [
      {
        moduleId: "CS-ACLP003-MDLT01",
        moduleTitle: "Leading Clinical Teams Under Pressure",
        moduleContentPath:
          "content/courses/cs-aclp003-mdlt01-leadingClinicalTeamsUnderPressure.md",
      },
      {
        moduleId: "CS-ACLP003-MDQI02",
        moduleTitle: "Quality Improvement and Clinical Governance",
        moduleContentPath:
          "content/courses/cs-aclp003-mdqi02-qualityImprovementAndClinicalGovernance.md",
        moduleQuizzes: [
          {
            quizId: "CS-ACLP003-MDQI02-QZ1",
            quizPassMark: 50,
            quizEstimatedDuration: {
              estimatedDurationMeasurement: "min",
              estimatedDuration: 22,
            },
            quizDifficulty: "Hard",
            quizQuestions: [
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-01",
                questionContent:
                  "What is the correct sequence of the PDSA cycle?",
                questionResponseOptions: [
                  "Plan → Do → Study → Act",
                  "Plan → Study → Do → Act",
                  "Do → Plan → Study → Act",
                  "Study → Plan → Act → Do",
                ],
                questionAnswerIndex: 0,
              },
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-02",
                questionContent:
                  "Which type of QI metric measures the result of care (e.g., 30-day readmission rate)?",
                questionResponseOptions: [
                  "Process metric",
                  "Balancing metric",
                  "Outcome metric",
                  "Structure metric",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-03",
                questionContent:
                  "What is the purpose of a 'balancing metric' in quality improvement?",
                questionResponseOptions: [
                  "To measure baseline performance before a PDSA cycle",
                  "To ensure financial targets are met alongside clinical targets",
                  "To compare performance across different NHS trusts",
                  "To detect unintended consequences of an improvement intervention",
                ],
                questionAnswerIndex: 3,
              },
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-04",
                questionContent:
                  "Root cause analysis (RCA) is primarily intended to:",
                questionResponseOptions: [
                  "Attribute blame to the individual responsible for an error",
                  "Identify the systemic and contributing factors behind an adverse event",
                  "Determine whether disciplinary action is required",
                  "Generate a report for the Care Quality Commission",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-05",
                questionContent:
                  "An Ishikawa (fishbone) diagram is used in quality improvement to:",
                questionResponseOptions: [
                  "Organise potential causes of a problem into categories",
                  "Plot control charts showing variation over time",
                  "Map patient journeys from referral to discharge",
                  "Display run chart data for a PDSA cycle",
                ],
                questionAnswerIndex: 0,
              },
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-06",
                questionContent:
                  "Which of the following best describes clinical governance?",
                questionResponseOptions: [
                  "The framework through which organisations are accountable for continuously improving quality and safeguarding standards",
                  "The process of credentialing new medical staff",
                  "A statutory body that investigates clinical complaints",
                  "A national benchmarking database for hospital performance",
                ],
                questionAnswerIndex: 0,
              },
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-07",
                questionContent:
                  "Which of the following is NOT a core pillar of clinical governance?",
                questionResponseOptions: [
                  "Clinical audit",
                  "Risk management",
                  "Pharmaceutical supply chain management",
                  "Education and training",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-08",
                questionContent:
                  "When conducting a mortality and morbidity (M&M) review, the primary aim should be to:",
                questionResponseOptions: [
                  "Determine whether the clinical team acted negligently",
                  "Identify learning points and system improvements to prevent recurrence",
                  "Produce documentation for use in medical litigation",
                  "Assess whether further investigation by management is required",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-ACLP003-MDQI02-QZ1-09",
                questionContent:
                  "Which CRM principle involves the receiver repeating back an instruction to confirm they have understood it correctly?",
                questionResponseOptions: [
                  "Shared mental model",
                  "Assertive challenge",
                  "Situational awareness",
                  "Closed-loop communication",
                ],
                questionAnswerIndex: 3,
              },
            ],
          },
        ],
      },
    ],
  },
];
