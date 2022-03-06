interface LevelOfEvidence {
  evidenceStatement?: string;
  additionalText?: string;
}

interface TherapyResources {
  videoFile?: string;
  literature?: string;
  other?: string;
}

interface TherapyMode {
  setting?: string;
  groupSize?: string;
  doseAndSchedule?: string;
  teleHealth?: string;
}

interface ClientSelection {
  aphasiaText?: string;
  aphasiaSeverity?: string;
  aphasiaAetiology?: string;
  timeSinceOnsetOfAphasia?: string;
}

interface TherapyIngredients {
  therapyProtocol?: string;
  keyTherapeuticPrincipals?: string;
  therapyMode?: TherapyMode;
  therapyMethod?: string;
  resources?: string;
}

interface TherapyTargets {
  icfDomains?: string;
  therapeuticTargets?: string;
  clientSelection?: ClientSelection;
}

interface MechanismOfAction {
  theoreticalUnderPinnings?: string;
  supportingEmpiricalEvidence?: string;
}

export interface TherapyInfoProps {
  therapyName?: string;
  summaryStatement?: string;
  relatedTherapies?: string;
  levelOfEvidence?: LevelOfEvidence;
  alternativeNames?: string;
  published_at?: string;
  mechainismOfAction?: MechanismOfAction;
  therapyIngredients?: TherapyIngredients;
  therapyTargets?: TherapyTargets;
}
