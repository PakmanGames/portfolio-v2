import Navbar from "@/components/Navbar";
import Head from 'next/head';

import './globals.css';

export const metadata = {
  title: 'Andy Pak',
  description: `Andy Pak's Personal Portfolio`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar></Navbar>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
