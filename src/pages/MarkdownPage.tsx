// src/pages/MarkdownPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MarkdownPage: React.FC = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>('Loading...');

  useEffect(() => {
    fetch(`/projects/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Markdown not found');
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent('# 404\nMarkdown file not found.'));
  }, [slug]);

  return (
    <div className="prose prose-m dark:prose-invert mx-auto pt-32 px-4 pb-12">
    <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
    >
        {content}
    </ReactMarkdown>
    </div>

  );
};

export default MarkdownPage;
