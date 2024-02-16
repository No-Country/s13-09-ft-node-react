import {Poppins} from 'next/font/google';
import './globals.css'

const poppins = Poppins({subsets: ['latin'], weight: '400'});

export const metadata = {
  title: 'HealthMate',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
