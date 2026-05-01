/* */

import { CourseDataStructure } from "../../models/courseDataStructure";

export const cscddm002: CourseDataStructure[] = [
  /*
   * =========================== COURSE 2 ===========================
   * - Clinical Diagnostics & Decision Making
   * - Modules: 1 | Quizzes: 1 (Located in Module 1) | AI USED
   */

  {
    courseId: "CS-CDDM002",
    courseInformation: {
      contentSlug: "clinical-diagnostics-and-decision-making",
      contentTitle: "Clinical Diagnostics & Decision Making",
      contentThumbnail: {
        avifPath:
          "assets/images/avif/course-cover-cs-cddm002-clinicalDiagnosticsAndDecisionMaking.avif",
        pngPath:
          "assets/images/png/course-cover-cs-cddm002-clinicalDiagnosticsAndDecisionMaking.png",
        webpPath:
          "assets/images/webp/course-cover-cs-cddm002-clinicalDiagnosticsAndDecisionMaking.webp",
        altText: "Course Cover: Clinical Diagnostics & Decision Making",
      },
      contentSynopsis:
        "This course explores the structured methods clinicians use to move from presenting symptoms to an accurate diagnosis. It covers the diagnostic process, cognitive biases, clinical decision support tools, managing uncertainty, and the recognition of red flag symptoms.",
      contentMetadata: {
        contentAiUsage: true,
        contentAiDisclaimer:
          "ARIA GenAI was involved in the generation and editing of the content in this course.",
        contentContributorIds: ["GC-GNAI-01", "TM-ERMS-01"],
        contentPublishDate: "01-05-2026",
        contentEstimatedDuration: {
          estimatedDurationMeasurement: "min",
          estimatedDuration: 45,
        },
        contentLabels: [
          "Clinical Diagnostics",
          "Decision Making",
          "Clinical Reasoning",
          "Cognitive Bias",
          "Decision Support",
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
      courseLevel: "Beginner",
      coursePreRequisites: ["The Foundations of Clinical Practice"],
      courseTargetAudience: [
        "Medical Students",
        "Junior Doctors",
        "Nursing Students",
        "Clinical Trainees",
      ],
      courseLanguage: "English",
    },
    courseModules: [
      {
        moduleId: "CS-CDDM002-MDDP01",
        moduleTitle: "The Diagnostic Process and Clinical Reasoning",
        moduleContentPath:
          "content/courses/cs-cddm002-mddp01-theDiagnosticProcessAndClinicalReasoning.md",
        moduleQuizzes: [
          {
            quizId: "CS-CDDM002-MDDP01-QZ1",
            quizPassMark: 60,
            quizEstimatedDuration: {
              estimatedDurationMeasurement: "min",
              estimatedDuration: 20,
            },
            quizDifficulty: "Easy",
            quizQuestions: [
              {
                questionId: "CS-CDDM002-MDDP01-QZ1-01",
                questionContent:
                  "What is the correct order of the diagnostic process?",
                questionResponseOptions: [
                  "Investigations → History → Examination → Diagnosis",
                  "History → Examination → Investigations → Differential → Working Diagnosis",
                  "Working Diagnosis → History → Investigations → Examination",
                  "Differential → Investigations → History → Working Diagnosis",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-CDDM002-MDDP01-QZ1-02",
                questionContent:
                  "Which cognitive bias involves fixating on an initial diagnosis and failing to update it?",
                questionResponseOptions: [
                  "Availability bias",
                  "Framing effect",
                  "Anchoring bias",
                  "Premature closure",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-CDDM002-MDDP01-QZ1-03",
                questionContent:
                  "A clinician diagnoses a condition they saw three times last week in a similar patient. This is an example of:",
                questionResponseOptions: [
                  "Anchoring bias",
                  "Availability bias",
                  "Framing effect",
                  "Confirmation bias",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-CDDM002-MDDP01-QZ1-04",
                questionContent:
                  "Which of the following is a red flag symptom requiring urgent escalation?",
                questionResponseOptions: [
                  "Sudden-onset severe headache",
                  "Mild fatigue lasting one week",
                  "Intermittent headache relieved by paracetamol",
                  "Low-grade fever in an otherwise well adult",
                ],
                questionAnswerIndex: 0,
              },
              {
                questionId: "CS-CDDM002-MDDP01-QZ1-05",
                questionContent:
                  "What is the primary purpose of a differential diagnosis?",
                questionResponseOptions: [
                  "To justify ordering investigations to the patient",
                  "To document the final diagnosis for the medical record",
                  "To identify the cheapest treatment option",
                  "To generate a ranked list of possible diagnoses before committing to one",
                ],
                questionAnswerIndex: 3,
              },
              {
                questionId: "CS-CDDM002-MDDP01-QZ1-06",
                questionContent:
                  "The CURB-65 score is a clinical decision tool used in the management of:",
                questionResponseOptions: [
                  "Deep vein thrombosis",
                  "Pneumonia",
                  "Pulmonary embolism",
                  "Sepsis",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-CDDM002-MDDP01-QZ1-07",
                questionContent:
                  "Which of the following best describes 'premature closure' in clinical reasoning?",
                questionResponseOptions: [
                  "Refusing to change a diagnosis once a treatment has begun",
                  "Ordering too many investigations too early",
                  "Stopping the diagnostic process after reaching a plausible diagnosis without fully ruling out alternatives",
                  "Accepting a referral bias in the clinical history",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-CDDM002-MDDP01-QZ1-08",
                questionContent:
                  "A patient presents with haemoptysis and unexplained weight loss over three months. What is the appropriate initial action?",
                questionResponseOptions: [
                  "Escalate urgently and initiate investigation for serious underlying pathology",
                  "Refer to physiotherapy",
                  "Treat empirically with antibiotics",
                  "Reassure the patient and review in six weeks",
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
