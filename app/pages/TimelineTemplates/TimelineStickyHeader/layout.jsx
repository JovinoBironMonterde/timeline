import fs from 'fs';
import path from 'path';
import TabsLayout from './code';

export default function TimelineLayout({ children }) {
  const filePath = path.join(
    process.cwd(),
    'app/pages/TimelineTemplates/TimelineStickyHeader/page.jsx'
  );

  const code = fs.readFileSync(filePath, 'utf8');

  return <TabsLayout code={code}>{children}</TabsLayout>;
}
