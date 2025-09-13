'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function StoryPage() {
  const router = useRouter()
  const [currentScene, setCurrentScene] = useState(0)

  const scenes = [
    {
      title: "평화로운 일상",
      content: "어느 평화로운 아침, 엄마와 아빠가 맛있는 아침을 준비하고 있었어요.",
      characters: "👨‍👩‍👧‍👦",
      background: "bg-gradient-to-b from-yellow-200 to-green-200"
    },
    {
      title: "악당의 등장!",
      content: "그런데 갑자기! 나쁜 악당이 나타나서 엄마와 아빠를 잡아가 버렸어요!",
      characters: "🦹‍♂️💨",
      background: "bg-gradient-to-b from-red-300 to-gray-500"
    },
    {
      title: "영웅의 탄생",
      content: "이제 여러분이 영웅이 되어 퀴즈를 풀고 부모님을 구출해야 해요!",
      characters: "🦸‍♀️⚡",
      background: "bg-gradient-to-b from-blue-300 to-purple-400"
    }
  ]

  const handleNext = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1)
    } else {
      router.push('/quiz/1')
    }
  }

  const currentSceneData = scenes[currentScene]

  return (
    <div className={`min-h-screen ${currentSceneData.background} flex flex-col items-center justify-center p-4`}>
      {/* 진행 표시기 */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {scenes.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index <= currentScene ? 'bg-white' : 'bg-white/30'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>

      {/* 메인 스토리 카드 */}
      <motion.div
        className="quiz-card max-w-lg w-full p-8 text-center"
        key={currentScene}
        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
      >
        {/* 제목 */}
        <motion.h1
          className="game-title text-2xl md:text-3xl text-gray-800 mb-6"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {currentSceneData.title}
        </motion.h1>

        {/* 캐릭터 */}
        <motion.div
          className="text-8xl mb-6"
          animate={{ 
            rotate: currentScene === 1 ? [0, -10, 10, 0] : [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: currentScene === 1 ? 0.5 : 2,
            repeat: Infinity 
          }}
        >
          {currentSceneData.characters}
        </motion.div>

        {/* 스토리 텍스트 */}
        <motion.p
          className="text-lg text-gray-700 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {currentSceneData.content}
        </motion.p>

        {/* 효과 요소 */}
        {currentScene === 1 && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-500 text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  rotate: [0, 360],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                💥
              </motion.div>
            ))}
          </div>
        )}

        {currentScene === 2 && (
          <motion.div
            className="absolute -top-4 -right-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Shield className="text-blue-500" size={32} />
          </motion.div>
        )}

        {/* 다음 버튼 */}
        <motion.button
          onClick={handleNext}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 mx-auto shadow-lg"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: ["0 4px 15px rgba(0,0,0,0.1)", "0 8px 25px rgba(0,0,0,0.2)", "0 4px 15px rgba(0,0,0,0.1)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>
            {currentScene < scenes.length - 1 ? '다음' : '모험 시작!'}
          </span>
          {currentScene < scenes.length - 1 ? (
            <ArrowRight size={20} />
          ) : (
            <Zap size={20} />
          )}
        </motion.button>
      </motion.div>

      {/* 하단 정보 */}
      {currentScene === 2 && (
        <motion.div
          className="mt-6 text-center text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-lg font-semibold mb-2">🎯 미션</p>
          <p>각 단계의 퀴즈를 풀고 단서를 모으세요!</p>
          <p className="text-sm mt-2 opacity-80">총 5개의 단계가 기다리고 있어요.</p>
        </motion.div>
      )}
    </div>
  )
}
