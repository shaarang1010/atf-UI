import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { formatMarkdownText } from "../../util/format-markdown-text";

interface MarkdownProps {
  markdownText: string;
}

const RenderMarkdownToHTML: React.FC<MarkdownProps> = ({ markdownText }) => {
  const formattedMarkdownText = formatMarkdownText(markdownText, { from: "NEWLINE", to: "\n \n " });
  console.log(formattedMarkdownText);
  return <ReactMarkdown remarkPlugins={[gfm]}>{formattedMarkdownText}</ReactMarkdown>;
};

export default RenderMarkdownToHTML;