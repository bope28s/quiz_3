'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minigame } from '@/data/minigames';

interface MinigameComponentProps {
  minigame: Minigame;
  onComplete: (success: boolean) => void;
}

export default function MinigameComponent({ minigame, onComplete }: MinigameComponentProps) {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [userInput, setUserInput] = useState<any>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleGameEnd(false);
    }
  }, [timeLeft, gameState]);

  const handleGameEnd = (success: boolean) => {
    setGameState('result');
    setScore(success ? 100 : 0);
    setTimeout(() => onComplete(success), 2000);
  };

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(30);
  };

  const renderGame = () => {
    switch (minigame.type) {
      case 'memory':
        return <MemoryGame minigame={minigame} onComplete={handleGameEnd} />;
      case 'sequence':
        return <SequenceGame minigame={minigame} onComplete={handleGameEnd} />;
      case 'pattern':
        return <PatternGame minigame={minigame} onComplete={handleGameEnd} />;
      case 'counting':
        return <CountingGame minigame={minigame} onComplete={handleGameEnd} />;
      case 'matching':
        return <MatchingGame minigame={minigame} onComplete={handleGameEnd} />;
      default:
        return <div>게임을 불러올 수 없습니다.</div>;
    }
  };

  if (gameState === 'intro') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="quiz-card rounded-3xl p-8 text-center"
      >
        <div className="text-4xl mb-6">🎮</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {minigame.title}
        </h2>
        <div className="text-lg text-gray-700 mb-6">
          {minigame.storyText}
        </div>
        <div className="text-xl text-gray-600 mb-8">
          {minigame.instructions}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startGame}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl py-4 px-8 rounded-2xl transition-all duration-300"
        >
          게임 시작! 🚀
        </motion.button>
      </motion.div>
    );
  }

  if (gameState === 'result') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="quiz-card rounded-3xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-6xl mb-4"
        >
          {score > 0 ? '🎉' : '😔'}
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          {score > 0 ? '훌륭해요!' : '아쉽게 틀렸어요'}
        </h3>
        <div className="text-xl text-gray-700 mb-6">
          {minigame.reward}
        </div>
        <div className="text-lg text-gray-600">
          점수: {score}점
        </div>
      </motion.div>
    );
  }

  return (
    <div className="quiz-card rounded-3xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {minigame.title}
        </h2>
        <div className="text-lg font-semibold text-gray-600">
          ⏰ {timeLeft}초
        </div>
      </div>
      {renderGame()}
    </div>
  );
}

// 기억력 게임 컴포넌트
function MemoryGame({ minigame, onComplete }: { minigame: Minigame; onComplete: (success: boolean) => void }) {
  const [showSequence, setShowSequence] = useState(true);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (showSequence) {
      const timer = setTimeout(() => setShowSequence(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSequence]);

  const handleNumberClick = (num: number) => {
    const newSequence = [...userSequence, num];
    setUserSequence(newSequence);
    
    if (newSequence.length === minigame.data.sequence.length) {
      const isCorrect = JSON.stringify(newSequence) === JSON.stringify(minigame.data.sequence);
      onComplete(isCorrect);
    }
  };

  if (showSequence) {
    return (
      <div className="text-center">
        <div className="text-2xl mb-4">숫자들을 기억하세요!</div>
        <div className="flex justify-center gap-4 text-4xl">
          {minigame.data.sequence.map((num: number, index: number) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.5 }}
              className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center"
            >
              {num}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="text-2xl mb-6">이제 숫자들을 순서대로 클릭하세요!</div>
      <div className="flex justify-center gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <motion.button
            key={num}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNumberClick(num)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full text-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            {num}
          </motion.button>
        ))}
      </div>
      <div className="mt-4 text-lg text-gray-600">
        입력한 순서: {userSequence.join(', ')}
      </div>
    </div>
  );
}

// 순서 게임 컴포넌트
function SequenceGame({ minigame, onComplete }: { minigame: Minigame; onComplete: (success: boolean) => void }) {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [availableItems, setAvailableItems] = useState<any[]>(minigame.data.words || minigame.data.bodyParts || minigame.data.activities);

  const handleItemClick = (item: any, index: number) => {
    const newSelected = [...selectedItems, { item, originalIndex: index }];
    setSelectedItems(newSelected);
    
    if (newSelected.length === availableItems.length) {
      const isCorrect = JSON.stringify(newSelected.map(s => s.originalIndex)) === JSON.stringify(minigame.data.correctOrder);
      onComplete(isCorrect);
    }
  };

  return (
    <div className="text-center">
      <div className="text-2xl mb-6">올바른 순서로 클릭하세요!</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {availableItems.map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleItemClick(item, index)}
            disabled={selectedItems.some(s => s.originalIndex === index)}
            className={`p-4 rounded-2xl text-xl font-semibold transition-all duration-300 ${
              selectedItems.some(s => s.originalIndex === index)
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
            }`}
          >
            {typeof item === 'string' ? item : item.emoji || item}
          </motion.button>
        ))}
      </div>
      <div className="text-lg text-gray-600">
        선택한 순서: {selectedItems.map(s => typeof s.item === 'string' ? s.item : s.item.emoji || s.item).join(' → ')}
      </div>
    </div>
  );
}

// 패턴 게임 컴포넌트
function PatternGame({ minigame, onComplete }: { minigame: Minigame; onComplete: (success: boolean) => void }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    const isCorrect = index === minigame.data.correctAnswer;
    setTimeout(() => onComplete(isCorrect), 1000);
  };

  return (
    <div className="text-center">
      <div className="text-2xl mb-6">패턴을 찾아서 다음에 올 것을 맞춰보세요!</div>
      <div className="flex justify-center gap-4 mb-8 text-4xl">
        {minigame.data.pattern.map((item: string, index: number) => (
          <div key={index} className="bg-gray-100 p-4 rounded-2xl">
            {item}
          </div>
        ))}
      </div>
      <div className="text-xl mb-6">다음에 올 것은?</div>
      <div className="grid grid-cols-2 gap-4">
        {minigame.data.options.map((option: string, index: number) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAnswerSelect(index)}
            disabled={selectedAnswer !== null}
            className={`p-6 rounded-2xl text-3xl transition-all duration-300 ${
              selectedAnswer === index
                ? index === minigame.data.correctAnswer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// 세기 게임 컴포넌트
function CountingGame({ minigame, onComplete }: { minigame: Minigame; onComplete: (success: boolean) => void }) {
  const [userCount, setUserCount] = useState<number | null>(null);

  const handleCountSubmit = () => {
    if (userCount !== null) {
      const isCorrect = userCount === minigame.data.correctCount;
      onComplete(isCorrect);
    }
  };

  return (
    <div className="text-center">
      <div className="text-2xl mb-6">몇 개인지 세어보세요!</div>
      <div className="flex justify-center gap-2 mb-8 text-3xl flex-wrap">
        {minigame.data.items.map((item: string, index: number) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-100 p-2 rounded-lg"
          >
            {item}
          </motion.div>
        ))}
      </div>
      <div className="mb-6">
        <input
          type="number"
          value={userCount || ''}
          onChange={(e) => setUserCount(parseInt(e.target.value))}
          placeholder="개수를 입력하세요"
          className="text-2xl p-4 border-2 border-gray-300 rounded-2xl text-center w-48"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCountSubmit}
        disabled={userCount === null}
        className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-xl py-4 px-8 rounded-2xl transition-all duration-300 disabled:opacity-50"
      >
        정답 확인! ✅
      </motion.button>
    </div>
  );
}

// 매칭 게임 컴포넌트
function MatchingGame({ minigame, onComplete }: { minigame: Minigame; onComplete: (success: boolean) => void }) {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);

  const handleItemClick = (item: any, index: number) => {
    if (selectedItems.length < 2 && !selectedItems.some(s => s.index === index)) {
      const newSelected = [...selectedItems, { item, index }];
      setSelectedItems(newSelected);
      
      if (newSelected.length === 2) {
        // 간단한 매칭 로직 (실제로는 더 복잡할 수 있음)
        setTimeout(() => {
          setMatchedPairs(matchedPairs + 1);
          setSelectedItems([]);
          
          if (matchedPairs + 1 >= (minigame.data.items?.length || minigame.data.pairs?.length || 3)) {
            onComplete(true);
          }
        }, 1000);
      }
    }
  };

  const items = minigame.data.items || minigame.data.pairs || [];

  return (
    <div className="text-center">
      <div className="text-2xl mb-6">같은 종류끼리 연결해보세요!</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item: any, index: number) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleItemClick(item, index)}
            className={`p-6 rounded-2xl text-3xl transition-all duration-300 ${
              selectedItems.some(s => s.index === index)
                ? 'bg-yellow-500 text-white'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
            }`}
          >
            {typeof item === 'string' ? item : item.emoji || item.name || item}
          </motion.button>
        ))}
      </div>
      <div className="mt-6 text-lg text-gray-600">
        매칭된 쌍: {matchedPairs}개
      </div>
    </div>
  );
}
