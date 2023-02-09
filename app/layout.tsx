import Navbar from '@/components/navbar'
import SkipLink from '@/components/skiplink'
import { Ibarra_Real_Nova } from '@next/font/google'
import clsx from 'clsx'
import './globals.css'

const ibarra = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-ibarra',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(
      "text-black bg-white dark:text-white dark:bg-[#111010]", ibarra.className
    )} >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="antialiased max-w-4xl mb-40 flex flex-col mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <SkipLink />

        <Navbar />
        
        <main id="main" className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </main>
      
      </body>
    </html>
  )
}
