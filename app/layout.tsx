import './globals.css';
import Sidebar from './Sidebar';

export const metadata = {
  title: 'Timeline App',
  description: 'Next.js Timeline Example',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-white">
        <Sidebar />
        <main className="relative flex-1 p-0 xl:p-6">{children}</main>
      </body>
    </html>
  );
}
