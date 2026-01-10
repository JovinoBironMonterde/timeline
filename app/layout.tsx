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
           <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/ol@latest/ol.css"
        />
      </head>
      <body className="flex min-h-screen bg-white">
        <Sidebar />
        <main className="relative flex-1 p-0 ">{children}</main>
      </body>
    </html>
  );
}
