import { Inter } from 'next/font/google'
import './globals.css'
import 'flowbite';

import Sidebar from '@/components/Sidebar';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Nownime',
  description: 'Stream any movie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <Providers>
          <Sidebar>
            {children}
          </Sidebar>
        </Providers>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
      </body>
    </html>
  )
}
