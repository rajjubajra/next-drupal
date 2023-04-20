import {Poppins} from 'next/font/google';
import './globals.css'
import Header from './components/Header';


const poppins = Poppins({
  weight: ['400','700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Yellow-website',
  description: 'freelance Web designer',
  keywords: `web design, web development, web application`
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <Header />
          <main className="w-full min-h-screen px-4">
          {children}
          </main>
      </body>
    </html>
  )
}
