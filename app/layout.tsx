import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '엄마 아빠 구출 대작전! 🦸‍♀️🦸‍♂️',
  description: '8살 아이를 위한 재미있는 퀴즈 게임 - 어둠의 마법사로부터 엄마 아빠를 구출하세요!',
  keywords: ['퀴즈', '게임', '아이', '교육', '가족'],
  authors: [{ name: 'Quiz Game Creator' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#667eea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400">
        <div className="min-h-screen relative overflow-hidden">
          {/* 배경 애니메이션 요소들 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="star absolute top-10 left-10 text-2xl">⭐</div>
            <div className="star absolute top-20 right-20 text-xl" style={{animationDelay: '0.5s'}}>✨</div>
            <div className="star absolute bottom-20 left-20 text-3xl" style={{animationDelay: '1s'}}>🌟</div>
            <div className="star absolute bottom-10 right-10 text-2xl" style={{animationDelay: '1.5s'}}>💫</div>
            <div className="star absolute top-1/2 left-1/4 text-xl" style={{animationDelay: '2s'}}>⭐</div>
            <div className="star absolute top-1/3 right-1/3 text-2xl" style={{animationDelay: '2.5s'}}>✨</div>
          </div>
          
          {/* 메인 콘텐츠 */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
