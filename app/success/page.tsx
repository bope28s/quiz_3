'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Home, RotateCcw, Star, Heart, Trophy } from 'lucide-react'

export default function SuccessPage() {
  const router = useRouter()
  const [showCelebration, setShowCelebration] = useState(false)
  const [currentScene, setCurrentScene] = useState(0)

  const celebrationScenes = [
    {
      title: "문을 열었어요!",
      emoji: "🗝️",
      description: "모든 퀴즈를 풀어서 마침내 문이 열렸어요!",
      characters: "🚪✨"
    },
    {
      title: "부모님을 발견했어요!",
      emoji: "👀",
      description: "어두운 지하실에서 엄마와 아빠를 찾았어요!",
      characters: "👨‍👩‍👧‍👦❤️"
    },
    {
      title: "가족 재회!",
      emoji: "🎉",
      description: "드디어 가족이 다시 만났어요! 정말 대단해요!",
      characters: "🤗💕"
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCelebration(true)
    }, 1000)

    const sceneTimer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % celebrationScenes.length)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(sceneTimer)
    }
  }, [])

  const handlePlayAgain = () => {
    router.push('/')
  }

  const handleHome = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 relative overflow-hidden">
      {/* 축하 파티클 효과 */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            {['🎉', '🎊', '✨', '🌟', '💫', '🎈', '🎁'][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>

      {/* 무지개 효과 */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="text-8xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🌈
        </motion.div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
        {/* 메인 성공 카드 */}
        <motion.div
          className="quiz-card max-w-2xl w-full p-8 text-center relative"
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          {/* 트로피 아이콘 */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy className="text-yellow-500 w-16 h-16" />
          </motion.div>

          {/* 제목 */}
          <motion.h1
            className="game-title text-3xl md:text-5xl text-gray-800 mb-6 mt-8"
            animate={{ 
              scale: [1, 1.05, 1],
              color: ['#374151', '#dc2626', '#059669', '#7c3aed', '#374151']
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎊 미션 완료! 🎊
          </motion.h1>

          {/* 성공 메시지 */}
          <motion.p
            className="text-xl text-gray-700 mb-8 font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            축하해요! 모든 퀴즈를 풀어서<br />
            엄마와 아빠를 구출했어요! 🦸‍♂️✨
          </motion.p>

          {/* 스토리 시퀀스 */}
          <AnimatePresence mode="wait">
            {showCelebration && (
              <motion.div
                key={currentScene}
                className="mb-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {celebrationScenes[currentScene].characters}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                  <span className="mr-2">{celebrationScenes[currentScene].emoji}</span>
                  {celebrationScenes[currentScene].title}
                </h3>
                
                <p className="text-gray-700 text-lg">
                  {celebrationScenes[currentScene].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 성취 통계 */}
          <motion.div
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">🏆 당신의 성취</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  🧮
                </motion.div>
                <p className="font-semibold text-gray-700">수학</p>
                <p className="text-sm text-gray-600">완료!</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  📚
                </motion.div>
                <p className="font-semibold text-gray-700">한글</p>
                <p className="text-sm text-gray-600">완료!</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🏛️
                </motion.div>
                <p className="font-semibold text-gray-700">역사</p>
                <p className="text-sm text-gray-600">완료!</p>
              </div>
            </div>
          </motion.div>

          {/* 축하 메시지 */}
          <motion.div
            className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center mb-2">
              <Star className="text-yellow-500 mr-2" size={24} />
              <span className="font-bold text-yellow-800 text-xl">영웅 인증서</span>
              <Star className="text-yellow-500 ml-2" size={24} />
            </div>
            <p className="text-yellow-800 font-semibold">
              지혜롭고 용감한 어린 영웅에게<br />
              가족 구출 성공 인증서를 수여합니다! 🏅
            </p>
          </motion.div>

          {/* 액션 버튼들 */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              onClick={handlePlayAgain}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full flex items-center space-x-2 justify-center shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <RotateCcw size={24} />
              <span>다시 도전하기</span>
            </motion.button>

            <motion.button
              onClick={handleHome}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full flex items-center space-x-2 justify-center shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
            >
              <Home size={24} />
              <span>처음으로</span>
              <Heart className="text-pink-200" size={24} />
            </motion.button>
          </div>
        </motion.div>

        {/* 하단 메시지 */}
        <motion.div
          className="mt-8 text-center text-white/90 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <p className="text-lg mb-2">🎓 학습 완료! 정말 잘했어요!</p>
          <p>퀴즈를 통해 많은 것을 배웠네요! 👏</p>
        </motion.div>
      </div>
    </div>
  )
}