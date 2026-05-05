/* */

import { ArticleDataStructure } from "../models/articleDataStructure";

import { aebfak001ai } from "./articles/ae-bfak001-ai-basicFirstAid";
import { aeghgu002ai } from "./articles/ae-ghgu002-ai-gutHealthGuide";
import { aendeg003ai } from "./articles/ae-ndeg003-ai-nutritionAndDietEvidenceBasedGuide";
import { aeslre004ai } from "./articles/ae-slre004-ai-sleepAndRecovery";
import { aeundb005ai } from "./articles/ae-undb005-ai-understandingDiabetes";

export const Articles: ArticleDataStructure[] = [
  ...aebfak001ai,
  ...aeghgu002ai,
  ...aendeg003ai,
  ...aeslre004ai,
  ...aeundb005ai,
];
