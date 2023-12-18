
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '../components/sidebar/page'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import './globals.css'
import ReduxProvider from './ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick And Morty',
  description: 'Have a Fun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Sidebar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
