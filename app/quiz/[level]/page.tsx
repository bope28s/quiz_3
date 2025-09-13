'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Lightbulb, Trophy, Star } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getLevelById, getTotalLevels, getRandomQuestion } from '@/data/quizzes';

export default function QuizPage() {
  const params = useParams();
  const levelId = parseInt(params.level as string);
  
  const [currentLevel, setCurrentLevel] = useState(getLevelById(levelId));
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    const level = getLevelById(levelId);
    setCurrentLevel(level);
    
    // 랜덤 문제 생성
    if (level) {
      const randomQuiz = getRandomQuestion(levelId, level.category);
      setCurrentQuiz(randomQuiz);
    }
    
    setSelectedAnswer(null);
    setShowResult(false);
    setShowHint(false);
    setIsCorrect(false);
    setShowReward(false);
  }, [levelId]);

  if (!currentLevel || !currentQuiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-white">로딩 중...</div>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === currentQuiz.correctAnswer) {
      setIsCorrect(true);
      setTimeout(() => setShowReward(true), 1500);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextLevel = () => {
    if (levelId < getTotalLevels()) {
      window.location.href = `/quiz/${levelId + 1}`;
    } else {
      window.location.href = '/success';
    }
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
          </Link>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">
              {currentLevel.title}
            </div>
            <div className="text-lg text-white/80">
              레벨 {currentLevel.id} / {getTotalLevels()}
            </div>
          </div>

          <div className="w-12"></div>
        </motion.div>

        {/* 진행도 바 */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(currentLevel.id / getTotalLevels()) * 100}%` }}
          className="h-4 bg-white/20 rounded-full mb-8 overflow-hidden"
        >
          <div className="h-full progress-bar rounded-full"></div>
        </motion.div>

        {/* 스토리 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="quiz-card rounded-3xl p-6 mb-8"
        >
          <div className="text-xl font-semibold text-gray-800 mb-4">
            📖 이야기
          </div>
          <div className="text-lg text-gray-700 leading-relaxed">
            {currentLevel.storyText}
          </div>
        </motion.div>

        {/* 퀴즈 카드 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="quiz-card rounded-3xl p-8 mb-6"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {currentQuiz.title}
            </h2>
            <div className="text-xl text-gray-700 mb-6">
              {currentQuiz.question}
            </div>
          </div>

          {/* 선택지 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {currentQuiz.options.map((option: string, index: number) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`
                  option-button p-6 rounded-2xl text-lg font-semibold transition-all duration-300
                  ${showResult 
                    ? index === currentQuiz.correctAnswer 
                      ? 'correct' 
                      : selectedAnswer === index 
                        ? 'incorrect' 
                        : 'bg-gray-100 text-gray-500'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                  }
                `}
              >
                {option}
              </motion.button>
            ))}
          </div>

          {/* 힌트 버튼 */}
          {!showResult && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={handleShowHint}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Lightbulb className="w-5 h-5" />
              힌트 보기 💡
            </motion.button>
          )}

          {/* 힌트 표시 */}
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-r-2xl"
              >
                <div className="text-lg font-semibold text-yellow-800">
                  💡 힌트: {currentQuiz.hint}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 결과 표시 */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="quiz-card rounded-3xl p-8 text-center"
            >
              {isCorrect ? (
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-6xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <h3 className="text-3xl font-bold text-green-600 mb-4">
                    정답이에요! 🎊
                  </h3>
                  <div className="text-xl text-gray-700 mb-6">
                    {currentQuiz.rewardText}
                  </div>
                  
                  {levelId < getTotalLevels() ? (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      onClick={handleNextLevel}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-xl py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                      <Star className="w-6 h-6" />
                      다음 관문으로! 🚀
                    </motion.button>
                  ) : (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => window.location.href = '/success'}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                      <Trophy className="w-6 h-6" />
                      엄마 아빠 구출하기! 🏆
                    </motion.button>
                  )}
                </div>
              ) : (
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-6xl mb-4"
                  >
                    😔
                  </motion.div>
                  <h3 className="text-3xl font-bold text-red-600 mb-4">
                    아쉽게 틀렸어요
                  </h3>
                  <div className="text-xl text-gray-700 mb-6">
                    다시 도전해보세요! 힌트를 보고 다시 생각해보면 될 것 같아요! 💪
                  </div>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => {
                      setShowResult(false);
                      setSelectedAnswer(null);
                      setShowHint(false);
                    }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl py-4 px-8 rounded-2xl transition-all duration-300"
                  >
                    다시 도전! 🔄
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
