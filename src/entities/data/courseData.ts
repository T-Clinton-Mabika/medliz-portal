/* */

import { CourseDataStructure } from "../models/courseDataStructure";

import { csfocp001 } from "./courses/cs-focp001-foundationsOfClinicalPractice";
import { cscddm002 } from "./courses/cs-cddm002-clinicalDiagnosticsAndDecisionMaking";
import { csaclp003 } from "./courses/cs-aclp003-advancedClinicalLeadership";
import { csppsa004 } from "./courses/cs-ppsa004-pharmacologyAndPatientSafety";

export const courses: CourseDataStructure[] = [
  ...csfocp001,
  ...cscddm002,
  ...csaclp003,
  ...csppsa004,
]