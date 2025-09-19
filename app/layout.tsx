import type { Metadata } from 'next'
import './globals.css'
import BackgroundMusic from './components/BackgroundMusic'

export const metadata: Metadata = {
  title: '엄마 아빠 구출 대작전 🦸‍♂️',
  description: '퀴즈를 풀고 엄마 아빠를 악당으로부터 구출하세요!',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '퀴즈게임',
  },
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/icon-152x152.png', sizes: '152x152', type: 'image/png' }
    ]
  }
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#16213e',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  )
}