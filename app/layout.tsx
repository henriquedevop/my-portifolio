import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-to-top'
import { Toaster } from './components/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
})

export const Metadata = {
  icons: {
    icon: '/images/favicon.ico' // Caminho absoluto para o favicon
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <head>
        <link rel="icon" href={Metadata.icons.icon} />
      </head>
      <body>
        <Toaster/>
        <BackToTop/>
        <Header/>
        {children}
        <ContactForm/>
        <Footer/>
      </body>
    </html>
  )
}
