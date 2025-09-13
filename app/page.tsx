'use client'
import { motion } from 'framer-motion'
import { Play, Heart, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const handleStartGame = () => {
    router.push('/story')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="text-yellow-300 opacity-70" size={12 + Math.random() * 16} />
          </motion.div>
        ))}
      </div>

      {/* 메인 콘텐츠 */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 제목 */}
        <motion.h1
          className="game-title text-4xl md:text-6xl text-white mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🦸‍♂️ 엄마 아빠 구출 대작전 🦸‍♀️
        </motion.h1>

        {/* 캐릭터 영역 */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <motion.div
            className="text-6xl floating"
            whileHover={{ scale: 1.1 }}
          >
            👩‍🦰
          </motion.div>
          
          <motion.div
            className="text-8xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡
          </motion.div>

          <motion.div
            className="text-6xl floating"
            whileHover={{ scale: 1.1 }}
            style={{ animationDelay: '1s' }}
          >
            👨‍🦳
          </motion.div>
        </div>

        {/* 설명 텍스트 */}
        <motion.p
          className="text-xl text-white mb-8 max-w-md mx-auto font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          악당이 엄마와 아빠를 잡아갔어요! <br />
          퀴즈를 풀고 부모님을 구출해주세요! 💪
        </motion.p>

        {/* 시작 버튼 */}
        <motion.button
          onClick={handleStartGame}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg flex items-center space-x-2 mx-auto"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Play size={24} />
          <span>모험 시작하기!</span>
          <Heart className="text-pink-200" size={24} />
        </motion.button>

        {/* 게임 정보 */}
        <motion.div
          className="mt-8 text-white/80 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p>🧮 수학 • 📚 한글 • 🏛️ 역사</p>
          <p>재미있는 퀴즈를 풀며 학습해요!</p>
        </motion.div>
      </motion.div>
    </div>
  )
}