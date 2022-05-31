import React from "react";
import ReactMarkdown from "react-markdown";

type MarkdownProp = {
  text: string;
};

export const ReactMarkdownRender: React.FC<MarkdownProp> = ({ text }) => {
  return <ReactMarkdown>{text}</ReactMarkdown>;
};
