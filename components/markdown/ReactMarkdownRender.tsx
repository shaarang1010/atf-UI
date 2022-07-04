import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

type MarkdownProp = {
  text: string;
};

const theme = {
  a: (props: any) => {
    const { children } = props;
    return (
      <a href={props.href} target='_blank' rel='noreferrer' style={{ textDecoration: "underline" }}>
        {props.children}
      </a>
    );
  }
};

export const ReactMarkdownRender: React.FC<MarkdownProp> = ({ text }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={ChakraUIRenderer(theme)}
      children={text}
      skipHtml={true}
    />
  );
};
