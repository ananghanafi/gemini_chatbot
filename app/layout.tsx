import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Xenith MVP | Modern Gym Management Platform',
  description: 'Transform your gym operations into a digital ecosystem. Manage members, QR check-ins, PT bookings, schedules, payments, and analytics in one modern platform.',
  keywords: ['gym management', 'fitness software', 'PT booking', 'QR check-in', 'member management', 'gym analytics'],
  authors: [{ name: 'Agetive Gym' }],
  openGraph: {
    title: 'Xenith MVP | Modern Gym Management Platform',
    description: 'Transform your gym operations into a digital ecosystem.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark bg-background`}>
      <body className="font-sans antialiased min-h-screen bg-[#050505] text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
