import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Meli Challenge',
    template: '%s | Meli Challenge',
  },
  description: 'Frontend Challenge',
  authors: { name: 'Gabriel Robert' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
