interface LevelOfEvidence {
  evidenceStatement?: String;
  additionalText?: String;
}

interface TherapyResources {
  videoFile?: String;
  literature?: String;
  other?: String;
}

interface TherapyMode {
  setting?: String;
  groupSize?: String;
  doseAndSchedule?: String;
  teleHealth?: String;
}

interface ClientSelection {
  aphasiaText?: String;
  aphasiaSeverity?: String;
  aphasiaAetiology?: String;
  timeSinceOnsetOfAphasia?: String;
}

interface TherapyIngredients {
  therapyProtocol?: String;
  keyTherapeuticPrincipals?: String;
  therapyMode?: TherapyMode;
  therapyMethod?: String;
  resources?: String;
}

interface TherapyTargets {
  icfDomains?: String;
  therapeuticTargets?: String;
  clientSelection?: ClientSelection;
}

interface MechanismOfAction {
  theoreticalUnderPinnings?: String;
  supportingEmpiricalEvidence?: String;
}

export interface TherapyInfoProps {
  therapyName?: String;
  summaryStatement?: String;
  relatedTherapies?: String;
  levelOfEvidence?: LevelOfEvidence;
  alternativeNames?: String;
  published_at?: String;
  mechainismOfAction?: MechanismOfAction;
  therapyIngredients?: TherapyIngredients;
  therapyTargets?: TherapyTargets;
}
