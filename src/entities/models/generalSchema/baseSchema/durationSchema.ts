/* */

/*
 * =========================== QUIZ QUESTION ===========================
 * - Duration values interface.
 * - Duration Measurement: The possible values that can be used for the duration, namely minutes, hours or days.
 * - Estimated Duration: The estimated amount of time that it will take to complete the content.
 */

export interface DurationSchema {
  estimatedDurationMeasurement: "min" | "hrs" | "d"
  estimatedDuration: number
}