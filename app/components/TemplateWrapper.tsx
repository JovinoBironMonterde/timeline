'use client';

import Tabs from './Tabs';
import CodeBlock from './CodeBlock';

type Props = {
  preview: React.ReactNode;
  code: string;
};

export default function TemplateWrapper({ preview, code }: Props) {
  return (
    <Tabs
      tabs={[
        {
          label: 'Preview',
          content: preview,
        },
        {
          label: 'Code',
          content: <CodeBlock code={code} />,
        },
      ]}
    />
  );
}
