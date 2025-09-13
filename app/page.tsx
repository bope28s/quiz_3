'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Heart, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
      >
        {/* 메인 타이틀 */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold rainbow-text mb-4">
            엄마 아빠 구출 대작전!
          </h1>
          <div className="flex justify-center items-center gap-4 text-4xl md:text-6xl mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🦸‍♀️
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              🦸‍♂️
            </motion.div>
          </div>
        </motion.div>

        {/* 스토리 설명 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="quiz-card rounded-3xl p-8 mb-8"
        >
          <div className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            🏰 어둠의 마법사가 엄마와 아빠를 마법의 성에 가두었어요! 🏰
          </div>
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
            용감한 영웅이 되어 퀴즈와 미니게임을 통해 엄마와 아빠를 구출해보세요!<br/>
            각 관문을 지키는 마법사들과 대화하며 문제를 해결해서<br/>
            마침내 가족의 위치를 찾고 다시 만날 수 있을 거예요! 💕
          </div>
        </motion.div>

        {/* 게임 특징 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="quiz-card rounded-2xl p-6">
            <div className="text-4xl mb-4">🧮</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">재미있는 퀴즈</h3>
            <p className="text-gray-600">수학, 한글, 동물, 색깔 등 다양한 문제를 풀어보세요!</p>
          </div>
          <div className="quiz-card rounded-2xl p-6">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">미니게임</h3>
            <p className="text-gray-600">기억력, 순서 맞추기, 패턴 찾기 등 재미있는 게임을 해보세요!</p>
          </div>
          <div className="quiz-card rounded-2xl p-6">
            <div className="text-4xl mb-4">🧙‍♂️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">마법사 대화</h3>
            <p className="text-gray-600">각 관문의 마법사들과 대화하며 문제를 해결해보세요!</p>
          </div>
          <div className="quiz-card rounded-2xl p-6">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">가족 구출</h3>
            <p className="text-gray-600">모든 단계를 완료하면 엄마 아빠를 구출할 수 있어요!</p>
          </div>
        </motion.div>

        {/* 시작 버튼 */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <Link href="/quiz/1">
            <motion.button
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-2xl md:text-3xl py-6 px-12 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-4 mx-auto"
            >
              <Play className={`w-8 h-8 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              모험을 시작해요! 🚀
            </motion.button>
          </Link>
        </motion.div>

        {/* 추가 정보 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-gray-600 text-lg"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <span>가족의 사랑이 당신의 힘이 될 거예요!</span>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <div className="text-sm">
            총 7개의 관문을 통과하면 엄마와 아빠를 구출할 수 있습니다! 💪
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
