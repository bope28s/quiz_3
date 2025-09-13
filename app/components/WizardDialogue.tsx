'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WizardDialogue as WizardDialogueType } from '@/data/wizardDialogues';

interface WizardDialogueProps {
  dialogue: WizardDialogueType;
  onContinue: () => void;
  showHint?: boolean;
  onShowHint?: () => void;
}

export default function WizardDialogue({ 
  dialogue, 
  onContinue, 
  showHint = false, 
  onShowHint 
}: WizardDialogueProps) {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const text = showHint ? dialogue.dialogues.hint : dialogue.dialogues.intro;
    typeText(text);
  }, [dialogue, showHint]);

  const typeText = (text: string) => {
    setCurrentText('');
    setIsTyping(true);
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        setShowOptions(true);
        clearInterval(timer);
      }
    }, 50);
  };

  const handleContinue = () => {
    setShowOptions(false);
    onContinue();
  };

  const handleShowHint = () => {
    if (onShowHint) {
      onShowHint();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="quiz-card rounded-3xl p-8"
    >
      {/* 마법사 정보 */}
      <div className="flex items-center gap-6 mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-6xl"
        >
          {dialogue.wizardEmoji}
        </motion.div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {dialogue.wizardName}
          </h2>
          <p className="text-lg text-gray-600">
            {dialogue.wizardDescription}
          </p>
        </div>
      </div>

      {/* 대화 내용 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
        <div className="text-xl text-gray-800 leading-relaxed min-h-[120px] flex items-center">
          <span>{currentText}</span>
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 text-2xl"
            >
              |
            </motion.span>
          )}
        </div>
      </div>

      {/* 스토리 진행 상황 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 mb-6"
      >
        <div className="text-lg font-semibold text-gray-800">
          📖 스토리 진행: {dialogue.storyProgress}
        </div>
      </motion.div>

      {/* 힌트 표시 */}
      {showHint && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 mb-6"
        >
          <div className="text-lg font-semibold text-green-800 mb-2">
            💡 힌트 획득!
          </div>
          <div className="text-gray-700">
            <div className="mb-2">
              <span className="font-semibold">엄마:</span> {dialogue.hints.mom}
            </div>
            <div>
              <span className="font-semibold">아빠:</span> {dialogue.hints.dad}
            </div>
          </div>
        </motion.div>
      )}

      {/* 액션 버튼들 */}
      <AnimatePresence>
        {showOptions && !isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex gap-4 justify-center"
          >
            {!showHint && onShowHint && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShowHint}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg py-3 px-6 rounded-2xl transition-all duration-300 flex items-center gap-2"
              >
                💡 힌트 보기
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinue}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg py-3 px-6 rounded-2xl transition-all duration-300 flex items-center gap-2"
            >
              {showHint ? '계속하기' : '이해했어요!'} 🚀
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// 대화 상태에 따른 다른 메시지를 보여주는 컴포넌트
export function WizardDialogueWithState({ 
  dialogue, 
  state, 
  onContinue 
}: { 
  dialogue: WizardDialogueType; 
  state: 'intro' | 'beforeQuiz' | 'afterCorrect' | 'afterIncorrect' | 'beforeMinigame' | 'afterMinigame' | 'farewell';
  onContinue: () => void;
}) {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = dialogue.dialogues[state];
    typeText(text);
  }, [dialogue, state]);

  const typeText = (text: string) => {
    setCurrentText('');
    setIsTyping(true);
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 30);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="quiz-card rounded-3xl p-8"
    >
      {/* 마법사 정보 */}
      <div className="flex items-center gap-6 mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-6xl"
        >
          {dialogue.wizardEmoji}
        </motion.div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {dialogue.wizardName}
          </h2>
          <p className="text-lg text-gray-600">
            {dialogue.wizardDescription}
          </p>
        </div>
      </div>

      {/* 대화 내용 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
        <div className="text-xl text-gray-800 leading-relaxed min-h-[120px] flex items-center">
          <span>{currentText}</span>
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 text-2xl"
            >
              |
            </motion.span>
          )}
        </div>
      </div>

      {/* 계속하기 버튼 */}
      {!isTyping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg py-3 px-6 rounded-2xl transition-all duration-300 flex items-center gap-2"
          >
            계속하기 🚀
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
