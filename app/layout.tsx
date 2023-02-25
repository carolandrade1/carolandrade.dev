import './globals.css';
import Script from 'next/script';
import { Inter } from '@next/font/google';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SkipLink } from '@/components/skiplink';
import AnalyticsWrapper from '@/components/analytics';

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

  const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `;

  return (
    <html lang="en" className={inter.className}>
      <body className="text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-zinc-900 antialiased m-auto max-w-4xl p-6 flex flex-col height">
        <Script id="data-theme" dangerouslySetInnerHTML={{ __html: setInitialTheme }}/>
        <SkipLink />
        <Navbar />
        <main id="main" className="flex-auto md:mx-16 md:flex flex-col md:px-0">
          {children}
          <AnalyticsWrapper />
        </main>
        <Footer />
      </body>
    </html>
  )
}
