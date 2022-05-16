import React from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { formatMarkdownText } from "../../util/format-markdown-text";
// import { unified } from "unified";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import rehypeReact from "rehype-react";
import MarkdownIt from "markdown-it";

interface MarkdownProps {
  markdownText: string;
}

const RenderMarkdownToHTML: React.FC<MarkdownProps> = ({ markdownText }) => {
  // const formattedMarkdownText = formatMarkdownText(markdownText, { from: "NEWLINE", to: "\n \n " });
  // const content = unified()
  //   .use(remarkParse)
  //   .use(remarkRehype)
  //   .use(rehypeReact, { createElement: React.createElement })
  //   .processSync(formattedMarkdownText).result;
  const mdx = new MarkdownIt();
  const formattedContent = mdx.render(markdownText);

  // return <ReactMarkdown remarkPlugins={[remarkGfm]} children={formattedMarkdownText}></ReactMarkdown>;
  return <div dangerouslySetInnerHTML={{ __html: formattedContent }}></div>;
};

export default RenderMarkdownToHTML;
