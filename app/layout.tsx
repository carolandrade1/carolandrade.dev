import './globals.css';
import { Inter } from 'next/font/google';
import { Banner } from '@/components/layout/header/banner';
import { SkipLink } from '@/components/miscellaneous/skiplink';
import { Navbar } from '@/components/layout/header/navbar';
import { Footer } from '@/components/layout/footer';
import AnalyticsWrapper from '@/components/miscellaneous/analytics';
import NextThemeProvider from '@/hooks/useThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Carol Santos',
  description: 'Portfolio',
  generator: 'Next.js',
  applicationName: 'Portfolio',
  referrer: 'origin-when-crossorigin',
  keywords: ['Portfolio', 'Next.js', 'React', 'Tailwind'],
  themeColor: 'tomato',
  colorScheme: 'dark',
  creator: 'Carol Andrade',
  publisher: 'Carol Andrade',
  icons: {
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Carol Andrade | Portfolio',
    description: 'Portfolio',
    url: 'https://www.carolandrade.dev/',
    images: [
      {
        url: 'public/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.className}`} suppressHydrationWarning>
      <body className='text-black dark:bg-zinc-900 antialiased m-auto max-w-7xl p-6 flex flex-col height'>
        <NextThemeProvider>
          <SkipLink />
          <Navbar />
          <main
            id='main'
            className='flex-auto m-auto md:flex flex-col md:px-0 max-w-3xl w-full'
          >
            {children}
            <AnalyticsWrapper />
          </main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
