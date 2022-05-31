export type FilterOptionProps = {
  label: string;
  value: string;
};

export type TableData = {
  dataItems: string[];
};

export type SelectedFilters = {
  filterName: string;
  filterValues: string[];
};

export type FilterType = {
  filterType:
    | "levelOfEvidence"
    | "icfDomains"
    | "aphasiaType"
    | "aphasiaSeverity"
    | "settings"
    | "aphasiaAetiology"
    | "timeSinceOnset"
    | "delivery";
};

export type AdditionalPages = {
  aboutpage?: string;
  homepage?: string;
  glossarypage?: string;
  toolspage?: string;
};
