import { Inter } from 'next/font/google'
import './globals.css'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { FloatingFooter } from './components/FloatingFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Express  | Portfolio',
  description: 'Allier pour votre création de site web booster avec I.A',
  icon: {
    icon: ['favicon.icon'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`{inter.className} bg-[#f8f3f3] overflow-x-hidden w-full`}
      >
        <Navigation />
        {children}
      </body>
      <Footer />
      {/* <FloatingFooter className="fixed" /> */}
    </html>
  )
}
