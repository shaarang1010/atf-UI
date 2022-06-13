interface LevelOfEvidence {
  evidenceStatement?: string;
  additionalText?: string;
  evidenceDropdown?: string;
}

interface videoFile {
  url?: string;
  alternativeText?: string;
}

interface TherapyResources {
  videoFile?: videoFile;
  literature?: string;
  other?: string;
}

interface TherapyMode {
  setting?: string;
  groupSize?: string;
  delivery?: string;
  doseAndSchedule?: string;
  teleHealth?: string;
}

interface ClientSelection {
  aphasiaText?: string;
  aphasiaTypeList?: string;
  aphasiaSeverity?: string;
  aphasiaAetiology?: string;
  aphasiaSeverityList?: string;
  aphasiaAetiologyList?: string;
  timeSinceOnset?: string;
  timeSinceOnsetList?: string;
  timeSinceOnsetText?: string;
  clientSelection?: string;
}

interface TherapyIngredients {
  therapyProtocol?: string;
  keyTherapeuticPrincipals?: string;
  therapyMode?: TherapyMode;
  therapyMethod?: string;
  materials?: string;
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

interface TherapyTags {
  evidenceLevel?: string[];
  icfDomains?: string[];
  aphasiaType?: string[];
  aphasiaSeverity?: string[];
  aphasiaAetiology?: string[];
  timeSinceOnset?: string[];
  setting?: string[];
  delivery?: string[];
}

export interface TherapyInfoProps {
  id: string | number;
  therapyname?: string;
  summaryStatement?: string;
  relatedTherapies?: string;
  levelOfEvidence?: LevelOfEvidence;
  alternativeNames?: string;
  published_at?: string;
  mechainismOfAction?: MechanismOfAction;
  therapyIngredients?: TherapyIngredients;
  therapyTargets?: TherapyTargets;
  therapyResources?: TherapyResources;
  keywords?: string;
  tags?: TherapyTags;
}
