import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatMarkdownText } from "../../util/format-markdown-text";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";

interface MarkdownProps {
  markdownText: string;
}

const RenderMarkdownToHTML: React.FC<MarkdownProps> = ({ markdownText }) => {
  const formattedMarkdownText = formatMarkdownText(markdownText, { from: "NEWLINE", to: "\n \n " });
  const content = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { createElement: React.createElement })
    .processSync(formattedMarkdownText).result;

  // return <ReactMarkdown remarkPlugins={[remarkGfm]} children={formattedMarkdownText}></ReactMarkdown>;
  return <>{content}</>;
};

export default RenderMarkdownToHTML;
