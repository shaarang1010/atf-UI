import React from "react";
import MarkdownIt from "markdown-it";

interface MarkdownProps {
  markdownText: string;
}

const RenderMarkdownToHTML: React.FC<MarkdownProps> = ({ markdownText }) => {
  const mdx = new MarkdownIt();
  const formattedContent = mdx.render(markdownText);
  console.log(formattedContent);

  return <div dangerouslySetInnerHTML={{ __html: formattedContent }}></div>;
};

export default RenderMarkdownToHTML;
