import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import AppBar from '@/components/AppBar'
import { OverlaysProvider } from '@blueprintjs/core'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cool Order',
  description: 'A food ordering UI demo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppBar />
        {children}
      </body>
    </html>
  )
}
