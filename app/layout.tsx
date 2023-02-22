import './globals.css';
import Script from 'next/script';
import { Ibarra_Real_Nova } from '@next/font/google';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SkipLink } from '@/components/skiplink';

const ibarra = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-ibarra',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Carol Santos',
    template: '%s | Carol Santos',
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
    <html lang="en" >

      <body className="text-[#18181B] bg-white dark:text-white dark:bg-[#18181B] antialiased m-auto max-w-4xl p-6 flex flex-col height">
        <Script
          id="data-theme"
          dangerouslySetInnerHTML={{ __html: setInitialTheme }}
        />

        {/* <div className="z-[-1] pointer-events-none absolute top-0 left-0 h-72 w-full md:h-80 lg:h-96">
          <div className="content h-full">
            <div className="    bg-gradient-to-b from-purple-200 w-full h-full"></div>
          </div>
        </div> */}

        <SkipLink />

        <Navbar />
        
        <main id="main" className="flex-auto min-w-0 md:flex flex-col px-2 md:px-0">
          {children}
        </main>
      
        <Footer />
      </body>
    </html>
  )
}
