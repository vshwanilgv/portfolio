import type { Metadata } from 'next';
import Script from 'next/script';
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
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w28bzdqy47");
            `,
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}