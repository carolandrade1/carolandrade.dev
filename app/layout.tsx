import './globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/header/navbar';
import { SkipLink } from '@/components/miscellaneous/skiplink';
import AnalyticsWrapper from '@/components/miscellaneous/analytics';
import Providers from '@/hooks/provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Carol Santos',
  },
  description: 'Portfolio',
  generator: 'Next.js',
  applicationName: 'Portfolio',
  referrer: 'origin-when-crossorigin',
  keywords: ['Portfolio', 'Next.js', 'React'],
  themeColor: 'tomato',
  colorScheme: 'dark',
  creator: 'Carol Andrade',
  publisher: 'Carol Andrade',
  icons: {
      shortcut: 'logoIcon.svg',
    },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-zinc-900 antialiased m-auto max-w-4xl p-6 flex flex-col height">
        <Providers>
          <SkipLink />
          <Navbar />
          <main id="main" className="flex-auto md:mx-16 md:flex flex-col md:px-0">
            {children}
            <AnalyticsWrapper />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
