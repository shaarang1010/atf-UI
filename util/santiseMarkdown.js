import { replaceBreakTags, replaceNewLineChar } from "./listFilter";
export const sanitiseMarkdown = (markdownString) => {
  // remove all new-line char and <br> tags
  const updatedMarkdownString = replaceBreakTags(markdownString);
  return replaceNewLineChar(updatedMarkdownString);
};
