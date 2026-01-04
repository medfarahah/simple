import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoTransit - Bus Booking',
  description: 'Book bus tickets online for routes across Djibouti and Ethiopia',
  icons: {
    icon: '/logo.png',
  },
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

