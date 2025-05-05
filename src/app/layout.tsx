import type { Metadata } from 'next'
import { Jua } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Celebrate today',
  description: 'celebration ',
}

const juaFont = Jua({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jua',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${juaFont.variable} antialiased`}>{children}</body>
    </html>
  )
}
