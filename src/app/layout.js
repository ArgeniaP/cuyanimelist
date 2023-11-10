import { Gabarito } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/components/Navbar'

const font = Gabarito({
  subsets: ['latin']
})

export const metadata = {
  title: 'CuyAnimeList',
  description: 'Website anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${font.className} bg-color-dark` } suppressHydrationWarning={ true }>
        <Navbar />
        { children }
      </body>
    </html>
  )
}
