import type { Metadata } from 'next'
import './globals.css'
import BackgroundMusic from './components/BackgroundMusic'

export const metadata: Metadata = {
  title: '엄마 아빠 구출 대작전 🦸‍♂️',
  description: '퀴즈를 풀고 엄마 아빠를 악당으로부터 구출하세요!',
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