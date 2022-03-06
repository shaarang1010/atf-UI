const REGEX_OPTIONS = {
  NEWLINE: "'\r?\n','g'"
};

export const formatMarkdownText = (markdownText, formatOption) => {
  return markdownText.replace(REGEX_OPTIONS[formatOption.from], formatOption.to);
};
