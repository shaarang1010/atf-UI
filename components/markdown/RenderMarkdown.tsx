import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatMarkdownText } from "../../util/format-markdown-text";

interface MarkdownProps {
  markdownText: string;
}

const RenderMarkdownToHTML: React.FC<MarkdownProps> = ({ markdownText }) => {
  const formattedMarkdownText = formatMarkdownText(markdownText, { from: "NEWLINE", to: "\n \n " });
  return <ReactMarkdown remarkPlugins={[remarkGfm]} children={formattedMarkdownText}></ReactMarkdown>;
};

export default RenderMarkdownToHTML;
