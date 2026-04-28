/* */

import { GeneralContentSchema } from "./generalSchema/contentGeneralSchema";
import { DurationSchema } from "./generalSchema/baseSchema/durationSchema";

/*
 * =========================== QUIZ QUESTION ===========================
 * - Course Module Quiz Question structure.
 * - Id: Unique identifier for the question in the format CS-xxxx###-MDxx##-QZ#-##.
 * -     CS-xxxx###-MDxx##-QZ# is derived/taken from the corresponding/associated module quiz id.
 * -     ## is the question number.
 * - Actual: This actual question that will be displayed during the quiz.
 * - Response Options: This is a list of potential answers the user can choose from to answer the question.
 * - Answer Index: Refers to the index value for the correct answer as stored in the response options list.
 */

interface QuizQuestion {
  questionId: string
  questionActual: string
  questionResponseOptions: string[]
  questionAnswerIndex: number
}

/*
 * =========================== MODULE QUIZ ===========================
 * - Course Module Quiz structure.
 * - Id: Unique identifier for the question in the format CS-xxxx###-MDxx##-QZ#.
 * -     CS-xxxx###-MDxx## is derived/taken from the corresponding modules id.
 * -     QZ# is the quiz number in the module.
 * - Questions: List of all questions and their relevant data for this particular module quiz.
 * - Estimated Duration: Data on how long it will possibly take to complete the quiz.
 * - Difficulty: The estimated difficulty level of the quiz.
 */

interface ModuleQuiz {
  quizId: string
  quizQuestions: QuizQuestion[]
  quizPassMark: number
  quizEstimatedDuration: DurationSchema
  quizDifficulty: "Easy" | "Medium" | "Hard"
}

/*
 * =========================== COURSE MODULE ===========================
 * - Course Module structure.
 * - Id: Unique identifier for the question in the format CS-xxxx###-MDxx##.
 * -     CS-xxxx### is derived/taken from the corresponding courses id.
 * -     MDxx## is a alphanumeric code based on the module title and the module number in the course.
 * - Title: The name/heading/title of the module.
 * - Content Path: The filepath to the module/lesson content saved as a markdown file.
 * - Quiz: A list of all the quizzes that the module has.
 */

interface CourseModule {
  moduleId: string
  moduleTitle: string
  moduleContentPath: string
  moduleQuiz: ModuleQuiz[]
}

/*
 * =========================== METADATA ===========================
 * - Course Metadata
 * - PreRequisites: This a list of information of items/prior experience recommended before undertaking the course.
 * - TargetAudience: The group/demographics of the people the course is catered towards.
 * - Language: The language that the course is offered in. 
 */

interface CourseMetadata {
  coursePreRequisites: string[]
  courseTargetAudience: string[]
  courseLanguage: string
}

/*
 * =========================== COURSE STRUCTURE ===========================
 * - Full Course Structure.
 * - Id: Unique identifier for the question in the format CS-xxxx###.
 * -     CS means Course.
 * -     xxxx### is an alphanumeric code based on the title of the course and its entry number.
 * - Details: Course information stored in the format dictated by the GeneralContentSchema interface.
 * - Metadata: Course specific metadata as outlined bt the CourseMetdata interface.
 * - Modules: List of all the modules offered under the course.
 */

export interface CourseDataStructure {
  courseId: string
  courseDetails: GeneralContentSchema
  courseMetadata: CourseMetadata
  courseModules: CourseModule[]
}
