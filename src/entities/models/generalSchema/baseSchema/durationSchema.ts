/* */

/*
 * =========================== QUIZ QUESTION ===========================
 * - Duration values interface.
 * - Estimated Duration: The estimated amount of time that it will take to complete the content.
 * - Duration Measurement: The possible values that can be used for the duration, namely minutes, hours or days.
 */

export interface DurationSchema {
  estimatedDuration: number
  estimatedDurationMeasurement: "minutes" | "hours" | "days"
}