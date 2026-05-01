/* */

import { CourseDataStructure } from "../../models/courseDataStructure";

export const csfocp001: CourseDataStructure[] = [
  /*
   * =========================== COURSE 1 ===========================
   * - The Foundations of Clinical Practice
   * - Modules: 2 | Quizzes: 1 (Located in Module 1) | AI USED
   */

  {
    courseId: "CS-FOCP001",
    courseInformation: {
      contentSlug: "foundations-of-clinical-practice",
      contentTitle: "The Foundations of Clinical Practice",
      contentThumbnail: {
        avifPath:
          "assets/images/avif/course-cover-cs-focp001-foundationsOfClinicalPractice.avif",
        pngPath:
          "assets/images/png/course-cover-cs-focp001-foundationsOfClinicalPractice.png",
        webpPath:
          "assets/images/webp/course-cover-cs-focp001-foundationsOfClinicalPractice.webp",
        altText: "Course Cover: The Foundations of Clinical Practice",
      },
      contentSynopsis:
        "This course covers the foundational principles of clinical practice, including patient-centred care, medical ethics, communication techniques, professional standards, and accurate medical documentation. It equips healthcare professionals with the ethical and practical tools needed for every patient interaction.",
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
          "Patient Care",
          "Medical Ethics",
          "Communication",
          "Professional Standards",
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
      coursePreRequisites: ["None"],
      courseTargetAudience: [
        "Medical Students",
        "Junior Doctors",
        "Nursing Students",
      ],
      courseLanguage: "English",
    },
    courseModules: [
      {
        moduleId: "CS-FOCP001-MDPC01",
        moduleTitle: "Patient-Centred Care and Medical Ethics",
        moduleContentPath:
          "content/courses/cs-focp001-mdpc01-patientCentredCareAndMedicalEthics.md",
        moduleQuizzes: [
          {
            quizId: "CS-FOCP001-MDPC01-QZ1",
            quizPassMark: 60,
            quizEstimatedDuration: {
              estimatedDurationMeasurement: "min",
              estimatedDuration: 18,
            },
            quizDifficulty: "Easy",
            quizQuestions: [
              {
                questionId: "CS-FOCP001-MDPC01-QZ1-01",
                questionContent:
                  "What is the primary goal of patient-centered care?",
                questionResponseOptions: [
                  "Patient Comfort",
                  "Efficiency",
                  "Cost Reduction",
                  "Doctor Convenience",
                ],
                questionAnswerIndex: 0,
              },
              {
                questionId: "CS-FOCP001-MDPC01-QZ1-02",
                questionContent:
                  "Which of these is a core ethical principle in medicine?",
                questionResponseOptions: [
                  "Profitability",
                  "Autonomy",
                  "Speed",
                  "Popularity",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-FOCP001-MDPC01-QZ1-03",
                questionContent: "How often should patient records be updated?",
                questionResponseOptions: [
                  "Weekly",
                  "Monthly",
                  "After every interaction",
                  "Annually",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-FOCP001-MDPC01-QZ1-04",
                questionContent:
                  "Which ethical principle refers to the obligation to do good for the patient?",
                questionResponseOptions: [
                  "Non-maleficence",
                  "Justice",
                  "Beneficence",
                  "Autonomy",
                ],
                questionAnswerIndex: 2,
              },
              {
                questionId: "CS-FOCP001-MDPC01-QZ1-05",
                questionContent:
                  "What does 'non-maleficence' mean in medical ethics?",
                questionResponseOptions: [
                  "Treating all patients equally",
                  "Do no harm",
                  "Respecting patient decisions",
                  "Providing the best available treatment",
                ],
                questionAnswerIndex: 0,
              },
              {
                questionId: "CS-FOCP001-MDPC01-QZ1-06",
                questionContent:
                  "Which communication approach is most appropriate when breaking bad news to a patient?",
                questionResponseOptions: [
                  "Deliver all information as quickly as possible",
                  "Use a structured approach with empathy and clarity",
                  "Delegate the task to a junior colleague",
                  "Use technical jargon to appear professional",
                ],
                questionAnswerIndex: 1,
              },
              {
                questionId: "CS-FOCP001-MDPC01-QZ1-07",
                questionContent:
                  "A patient refuses a recommended treatment. What is the correct first response?",
                questionResponseOptions: [
                  "Proceed with treatment regardless",
                  "Contact the patient's family to override the decision",
                  "Discharge the patient immediately",
                  "Respect the decision if the patient has capacity",
                ],
                questionAnswerIndex: 3,
              },
            ],
          },
        ],
      },
      {
        moduleId: "CS-FOCP001-MDCD02",
        moduleTitle: "Clinical Documentation and Record Keeping",
        moduleContentPath:
          "content/courses/cs-focp001-mdcd02-clinicalDocumentationAndRecordKeeping.md",
      },
    ],
  },
];
