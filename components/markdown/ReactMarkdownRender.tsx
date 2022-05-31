import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type MarkdownProp = {
  text: string;
};

export const ReactMarkdownRender: React.FC<MarkdownProp> = ({ text }) => {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} children={text} />;
};
