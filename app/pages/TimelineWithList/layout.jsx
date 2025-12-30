import fs from 'fs';
import path from 'path';
import TabsLayout from '../../TabsLayout';

export default function TimelineLayout({ children }) {
  const filePath = path.join(
    process.cwd(),
    'app/pages/TimelineWithList/page.jsx'
  );

  const code = fs.readFileSync(filePath, 'utf8');

  return <TabsLayout code={code}>{children}</TabsLayout>;
}
