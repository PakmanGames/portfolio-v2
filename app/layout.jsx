import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Particle from '@/components/Particle/Particle';
import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['800'],
  display: 'swap',
})

export const metadata = {
  title: 'Andy Pak',
  description: `Andy Pak's Personal Portfolio`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={jetbrains.className}>
        <div className="flex flex-col min-h-screen">
          <Particle />
          <Navbar/>
          <div className="flex grow">
            {children}
          </div>
          <Footer/>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
