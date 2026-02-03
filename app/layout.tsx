import type { Metadata } from 'next';
import { PORTFOLIO_DATA } from '@/config/content';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.profile.name} - ${PORTFOLIO_DATA.profile.role}`,
  description: PORTFOLIO_DATA.profile.bio,
  authors: [{ name: PORTFOLIO_DATA.profile.name }],
  keywords: ['software engineer', 'researcher', 'portfolio', 'developer', 'AI', 'robotics'],
  openGraph: {
    title: PORTFOLIO_DATA.profile.name,
    description: PORTFOLIO_DATA.profile.bio,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
