import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['800'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={jetbrains.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <div className="flex flex-grow">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
