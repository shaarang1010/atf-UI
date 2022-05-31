import React from "react";
import MarkdownIt from "markdown-it";
import { Text } from "@chakra-ui/react";
import { ReactMarkdownRender } from "./ReactMarkdownRender";

interface MarkdownProps {
  markdownText: string;
}

const RenderMarkdownToHTML: React.FC<MarkdownProps> = ({ markdownText }) => {
  const mdx = new MarkdownIt();
  const text = `### Awesome`;
  return <div dangerouslySetInnerHTML={{ __html: mdx.render(markdownText) }}></div>;
  // return <ReactMarkdownRender text={markdownText} />;
};

export default RenderMarkdownToHTML;
