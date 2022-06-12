import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

type MarkdownProp = {
  text: string;
};

export const ReactMarkdownRender: React.FC<MarkdownProp> = ({ text }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={ChakraUIRenderer()}
      children={text}
      skipHtml={true}
    />
  );
};
