'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ArrowRight, Lightbulb, CheckCircle, XCircle, Home } from 'lucide-react'
import { quizzes, categoryEmojis, categoryNames } from '@/data/quizzes'

export default function QuizPage() {
  const router = useRouter()
  const params = useParams()
  const level = parseInt(params.level as string)
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [attempts, setAttempts] = useState(0)
  
  const quiz = quizzes.find(q => q.id === level)
  
  useEffect(() => {
    // Reset state when level changes
    setSelectedAnswer(null)
    setShowResult(false)
    setShowHint(false)
    setAttempts(0)
  }, [level])

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">퀴즈를 찾을 수 없어요 😅</h1>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            홈으로 가기
          </button>
        </div>
      </div>
    )
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    setShowResult(true)
    setAttempts(attempts + 1)
  }

  const handleNext = () => {
    if (level < quizzes.length) {
      router.push(`/quiz/${level + 1}`)
    } else {
      router.push('/success')
    }
  }

  const handleRetry = () => {
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const isCorrect = selectedAnswer === quiz.correctAnswer
  const showHintAfterWrongAnswer = showResult && !isCorrect && attempts >= 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-600 flex flex-col items-center justify-center p-4">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {categoryEmojis[quiz.category]}
          </motion.div>
        ))}
      </div>

      {/* 상단 정보 */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <motion.button
          onClick={() => router.push('/')}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Home size={20} />
        </motion.button>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold">
          {level} / {quizzes.length}
        </div>
      </div>

      {/* 메인 퀴즈 카드 */}
      <motion.div
        className="quiz-card max-w-2xl w-full p-6 md:p-8"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* 카테고리 표시 */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full">
            <span className="text-2xl">{categoryEmojis[quiz.category]}</span>
            <span className="font-semibold">{categoryNames[quiz.category]} 문제</span>
          </div>
        </motion.div>

        {/* 문제 */}
        <motion.h2
          className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {quiz.question}
        </motion.h2>

        {/* 선택지 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {quiz.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`p-4 rounded-xl text-left font-semibold transition-all duration-300 ${
                selectedAnswer === index
                  ? showResult
                    ? index === quiz.correctAnswer
                      ? 'bg-green-500 text-white transform scale-105'
                      : 'bg-red-500 text-white'
                    : 'bg-blue-500 text-white transform scale-105'
                  : showResult && index === quiz.correctAnswer
                    ? 'bg-green-400 text-white'
                    : 'bg-white hover:bg-blue-50 border-2 border-transparent hover:border-blue-300'
              }`}
              disabled={showResult}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={!showResult ? { scale: 1.02 } : {}}
              whileTap={!showResult ? { scale: 0.98 } : {}}
            >
              <span className="text-2xl mr-3">{String.fromCharCode(65 + index)}</span>
              {option}
              {showResult && index === quiz.correctAnswer && (
                <CheckCircle className="inline ml-2 text-white" size={20} />
              )}
              {showResult && selectedAnswer === index && index !== quiz.correctAnswer && (
                <XCircle className="inline ml-2 text-white" size={20} />
              )}
            </motion.button>
          ))}
        </div>

        {/* 힌트 버튼 */}
        {!showResult && (
          <div className="text-center mb-6">
            <motion.button
              onClick={() => setShowHint(!showHint)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Lightbulb size={20} />
              <span>{showHint ? '힌트 숨기기' : '힌트 보기'}</span>
            </motion.button>
          </div>
        )}

        {/* 힌트 표시 */}
        <AnimatePresence>
          {showHint && !showResult && (
            <motion.div
              className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-yellow-800 font-medium">💡 힌트: {quiz.hint}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 결과 표시 */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              className={`p-6 rounded-xl mb-6 ${
                isCorrect ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'
              } border-2`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-4">
                <div className={`text-6xl mb-2 ${isCorrect ? 'animate-bounce' : 'animate-pulse'}`}>
                  {isCorrect ? '🎉' : '😅'}
                </div>
                <h3 className={`text-xl font-bold ${
                  isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isCorrect ? '정답입니다!' : '아쉬워요!'}
                </h3>
              </div>
              
              <p className={`text-center mb-4 ${
                isCorrect ? 'text-green-700' : 'text-red-700'
              }`}>
                {quiz.explanation}
              </p>

              {isCorrect && (
                <motion.div
                  className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-blue-800 font-semibold">🔍 단서:</p>
                  <p className="text-blue-700">{quiz.storyClue}</p>
                </motion.div>
              )}

              {showHintAfterWrongAnswer && (
                <motion.div
                  className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded mt-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-yellow-800 font-medium">💡 힌트: {quiz.hint}</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 액션 버튼들 */}
        <div className="flex justify-center space-x-4">
          {!showResult ? (
            <motion.button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-full font-bold flex items-center space-x-2 ${
                selectedAnswer !== null
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={selectedAnswer !== null ? { scale: 1.05 } : {}}
              whileTap={selectedAnswer !== null ? { scale: 0.95 } : {}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span>답안 제출</span>
              <ArrowRight size={20} />
            </motion.button>
          ) : (
            <div className="flex space-x-4">
              {isCorrect ? (
                <motion.button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-bold flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span>{level < quizzes.length ? '다음 단계' : '최종 구출'}</span>
                  <ArrowRight size={20} />
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleRetry}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  다시 도전하기
                </motion.button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
