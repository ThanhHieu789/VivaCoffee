import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import './globals.css'
import { open_sans } from './components/fonts/font'
import Footer from './components/Footer'
import Header from './components/Header'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <div className={`${open_sans.className}`}>
        <Header/>
          {children}
        <Footer/>      
        </div>
      </body>
    </html>
  )
}
