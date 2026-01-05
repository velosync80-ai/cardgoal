import './globals.css'
import { ReactNode } from 'react'
import Script from 'next/script'
import AnalyticsTracker from '@/components/AnalyticsTracker'

export const metadata = {
  title: 'Cardgoal - Get best value for your gift cards',
  description:
    'Cardgoal offers you the fastest way to sell your gift cards for instant cash at best value.',
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <AnalyticsTracker />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EDDPQBE3QJ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EDDPQBE3QJ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  )
}