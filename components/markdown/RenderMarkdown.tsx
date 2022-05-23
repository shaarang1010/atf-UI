import React from "react";
import MarkdownIt from "markdown-it";
import { Text } from "@chakra-ui/react";

interface MarkdownProps {
  markdownText: string;
}

const RenderMarkdownToHTML: React.FC<MarkdownProps> = ({ markdownText }) => {
  const mdx = new MarkdownIt();
  const formattedContent = mdx.render(markdownText);

  return <Text fontSize={"lg"} fontWeight={300} dangerouslySetInnerHTML={{ __html: formattedContent }}></Text>;
};

export default RenderMarkdownToHTML;
