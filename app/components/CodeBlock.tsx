'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css'; // Dark theme
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

export default function CodeBlock({ code }: { code: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
      <button
        onClick={copyCode}
        className="absolute top-3 right-3 z-10 text-xs px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Copy
      </button>

      <pre className="language-jsx text-sm p-5 overflow-x-auto">
        <code className="language-jsx">{code}</code>
      </pre>
    </div>
  );
}
