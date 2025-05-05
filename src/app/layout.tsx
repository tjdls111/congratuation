import type { Metadata } from 'next'
import { Geist, Geist_Mono, Jua } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const juaFont = Jua({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jua',
})

export const metadata: Metadata = {
  title: 'Celebrate today',
  description: 'celebration ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={`${juaFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
