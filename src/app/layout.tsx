// app/layout.tsx
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'Next.js App Router Example',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/timeline">Timeline</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}