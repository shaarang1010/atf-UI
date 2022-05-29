import React from "react";
import MarkdownIt from "markdown-it";
import { Text } from "@chakra-ui/react";

interface MarkdownProps {
  markdownText: string | undefined;
}

const RenderMarkdownToHTML: React.FC<MarkdownProps> = ({ markdownText }) => {
  const mdx = new MarkdownIt();
  if (markdownText) {
    const formattedContent = mdx.render(markdownText);
    return <div dangerouslySetInnerHTML={{ __html: formattedContent }}></div>;
  } else {
    return <></>;
  }
};

export default RenderMarkdownToHTML;
