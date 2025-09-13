'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Heart, Home, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { getTotalLevels } from '@/data/quizzes';

export default function SuccessPage() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* 축하 효과 */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -50,
                rotate: 0,
                scale: Math.random() * 1 + 0.5
              }}
              animate={{
                y: window.innerHeight + 50,
                rotate: 360,
                scale: 0
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
              className="absolute text-2xl"
            >
              {['🎉', '🎊', '⭐', '🌟', '💫', '✨'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
        className="max-w-4xl w-full text-center"
      >
        {/* 메인 성공 메시지 */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-8xl md:text-9xl mb-6"
          >
            🏆
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold rainbow-text mb-4">
            축하합니다!
          </h1>
          
          <div className="text-3xl md:text-4xl font-bold text-white mb-6">
            🎉 엄마 아빠 구출 대작전 완주! 🎉
          </div>
        </motion.div>

        {/* 성공 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="quiz-card rounded-3xl p-8 mb-8"
        >
          <div className="text-2xl font-semibold text-gray-800 mb-6">
            🦸‍♀️🦸‍♂️ 당신은 진정한 영웅이에요! 🦸‍♀️🦸‍♂️
          </div>
          
          <div className="text-lg text-gray-700 leading-relaxed mb-6">
            <p className="mb-4">
              어둠의 마법사가 가둔 엄마와 아빠를 성공적으로 구출했습니다!
            </p>
            <p className="mb-4">
              총 <span className="font-bold text-purple-600">10개의 관문</span>을 통과하며
              용기와 지혜를 보여주었어요.
            </p>
            <p>
              이제 가족이 다시 함께할 수 있게 되었습니다! 💕
            </p>
          </div>

          {/* 가족 위치 힌트 요약 */}
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-6 mb-6">
            <div className="text-xl font-semibold text-gray-800 mb-4">
              🗝️ 수집한 힌트로 찾은 가족의 위치
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pink-100 rounded-xl p-4">
                <div className="text-lg font-semibold text-pink-800 mb-2">
                  👩 엄마는...
                </div>
                <div className="text-gray-700">
                  따뜻하고 부드러운 <span className="font-bold text-pink-600">침실</span>에 있었어요!<br/>
                  <span className="text-sm text-gray-600">• 따뜻한 곳 • 부드러운 것과 함께 • 달콤한 냄새 • 따뜻한 손길 • 가장 좋아하는 곳</span>
                </div>
              </div>
              <div className="bg-blue-100 rounded-xl p-4">
                <div className="text-lg font-semibold text-blue-800 mb-2">
                  👨 아빠는...
                </div>
                <div className="text-gray-700">
                  맛있는 냄새가 나는 <span className="font-bold text-blue-600">부엌</span>에 있었어요!<br/>
                  <span className="text-sm text-gray-600">• 높은 곳 • 시원한 곳 • 맛있는 냄새 • 강한 팔</span>
                </div>
              </div>
            </div>
          </div>

          {/* 달성 통계 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">10</div>
              <div className="text-sm">관문 완주</div>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-6 text-white">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">완주율</div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-6 text-white">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm">가족의 사랑</div>
            </div>
          </div>
        </motion.div>

        {/* 액션 버튼들 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-xl py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3"
            >
              <Home className="w-6 h-6" />
              홈으로 돌아가기 🏠
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/quiz/1'}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold text-xl py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3"
          >
            <RotateCcw className="w-6 h-6" />
            다시 모험하기 🔄
          </motion.button>
        </motion.div>

        {/* 최종 메시지 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-white text-lg"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <span>가족의 사랑은 어떤 마법보다 강력해요!</span>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <div className="text-sm opacity-80">
            수고하셨습니다! 언제든 다시 모험을 떠나보세요! ✨
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
