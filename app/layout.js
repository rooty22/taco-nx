import './globals.css'
import { Inter } from 'next/font/google'

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Git Users API',
  description: 'New Next Project'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
