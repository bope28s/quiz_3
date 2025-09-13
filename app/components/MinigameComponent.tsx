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
  const [gameProgress, setGameProgress] = useState(0);

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
    setGameProgress(0);
  };

  const renderGame = () => {
    switch (minigame.type) {
      case 'jump':
        return <JumpGame minigame={minigame} onComplete={handleGameEnd} onProgress={setGameProgress} />;
      case 'catch':
        return <CatchGame minigame={minigame} onComplete={handleGameEnd} onProgress={setGameProgress} />;
      case 'avoid':
        return <AvoidGame minigame={minigame} onComplete={handleGameEnd} onProgress={setGameProgress} />;
      case 'collect':
        return <CollectGame minigame={minigame} onComplete={handleGameEnd} onProgress={setGameProgress} />;
      case 'shoot':
        return <ShootGame minigame={minigame} onComplete={handleGameEnd} onProgress={setGameProgress} />;
      default:
        return <div>게임을 찾을 수 없습니다.</div>;
    }
  };

  if (gameState === 'intro') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
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
          {score > 0 ? '훌륭해요!' : '아쉽게 실패했어요'}
        </h3>
        <div className="text-xl text-gray-700 mb-6">
          {score > 0 ? minigame.reward : '다시 도전해보세요! 조금만 더 노력하면 될 것 같아요! 💪'}
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
      <div className="mb-4">
        <div className="text-lg text-gray-600 mb-2">진행률: {gameProgress}%</div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${gameProgress}%` }}
          ></div>
        </div>
      </div>
      {renderGame()}
    </div>
  );
}

// 점프 게임 컴포넌트 (모바일 지원)
function JumpGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [playerY, setPlayerY] = useState(200);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState<Array<{id: number, x: number}>>([]);
  const [jumpCount, setJumpCount] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // 장애물 생성
      if (Math.random() < 0.015) {
        setObstacles(prev => [...prev, { id: Date.now(), x: 800 }]);
      }

      // 장애물 이동 및 제거
      setObstacles(prev => {
        const newObstacles = prev.map(obs => ({ ...obs, x: obs.x - 4 }));
        const filteredObstacles = newObstacles.filter(obs => obs.x > -50);
        
        // 점프 완료 체크
        const completedObstacles = prev.filter(obs => obs.x <= -50 && obs.x > -100);
        if (completedObstacles.length > 0) {
          setJumpCount(prev => {
            const newCount = prev + completedObstacles.length;
            onProgress((newCount / minigame.data.obstacles) * 100);
            if (newCount >= minigame.data.obstacles) {
              setGameRunning(false);
              onComplete(true);
            }
            return newCount;
          });
        }
        
        return filteredObstacles;
      });

      // 충돌 검사
      obstacles.forEach(obs => {
        const playerLeft = 50;
        const playerRight = 58;
        const playerTop = playerY;
        const playerBottom = playerY + 32;
        
        const obstacleLeft = obs.x;
        const obstacleRight = obs.x + 24;
        const obstacleTop = 180;
        const obstacleBottom = 236;
        
        if (playerRight > obstacleLeft && 
            playerLeft < obstacleRight && 
            playerBottom > obstacleTop && 
            playerTop < obstacleBottom) {
          setGameRunning(false);
          onComplete(false);
        }
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [obstacles, playerY, minigame.data.obstacles, onComplete, onProgress, gameRunning]);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setPlayerY(100);
      setTimeout(() => {
        setPlayerY(200);
        setIsJumping(false);
      }, 500);
    }
  };

  // 키보드 이벤트 (데스크톱)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleJump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isJumping]);

  // 터치 이벤트 (모바일)
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleJump();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleJump();
  };

  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-blue-400 to-green-400 rounded-2xl overflow-hidden touch-none">
      {/* 플레이어 */}
      <motion.div
        className="absolute w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold"
        style={{ left: 50, top: playerY }}
        animate={{ y: isJumping ? -100 : 0 }}
        transition={{ duration: 0.5 }}
      >
        🏃
      </motion.div>

      {/* 장애물 */}
      {obstacles.map(obs => (
        <div
          key={obs.id}
          className="absolute w-6 h-16 bg-gray-600 rounded flex items-center justify-center"
          style={{ left: obs.x, top: 180 }}
        >
          🚧
        </div>
      ))}

      {/* 지면 */}
      <div className="absolute bottom-0 w-full h-4 bg-green-600"></div>
      
      {/* 점수 표시 */}
      <div className="absolute top-4 left-4 text-white font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
        점프: {jumpCount}/{minigame.data.obstacles}
      </div>

      {/* 점프 버튼 (모바일 친화적) */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg touch-manipulation select-none"
          style={{ minHeight: '50px', minWidth: '100px' }}
        >
          점프! 🦘
        </button>
      </div>

      {/* 모바일 안내 */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm md:hidden">
        터치!
      </div>
    </div>
  );
}

// 잡기 게임 컴포넌트 (모바일 지원)
function CatchGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [playerX, setPlayerX] = useState(400);
  const [caughtCount, setCaughtCount] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // 별 생성
      if (Math.random() < 0.02) {
        setStars(prev => [...prev, { 
          id: Date.now(), 
          x: Math.random() * 700, 
          y: -20 
        }]);
      }

      // 별 이동 및 제거
      setStars(prev => {
        const newStars = prev.map(star => ({ ...star, y: star.y + 3 }));
        const filteredStars = newStars.filter(star => star.y < 300);
        
        // 잡힌 별 체크
        const caughtStars = prev.filter(star => {
          const distance = Math.sqrt(
            Math.pow(star.x - playerX, 2) + Math.pow(star.y - 250, 2)
          );
          return distance < 30;
        });
        
        if (caughtStars.length > 0) {
          setCaughtCount(prev => {
            const newCount = prev + caughtStars.length;
            onProgress((newCount / 15) * 100);
            if (newCount >= 15) {
              setGameRunning(false);
              onComplete(true);
            }
            return newCount;
          });
        }
        
        return filteredStars;
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [playerX, onComplete, onProgress, gameRunning]);

  // 마우스/터치 이벤트
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPlayerX(e.clientX - rect.left);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    if (touch) {
      setPlayerX(Math.max(0, Math.min(700, touch.clientX - rect.left)));
    }
  };

  return (
    <div 
      className="relative w-full h-64 bg-gradient-to-b from-purple-400 to-pink-400 rounded-2xl overflow-hidden touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* 플레이어 */}
      <div 
        className="absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
        style={{ left: playerX - 24, top: 250 }}
      >
        🧙‍♂️
      </div>

      {/* 별들 */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute w-6 h-6 text-yellow-300 text-2xl"
          style={{ left: star.x, top: star.y }}
        >
          ⭐
        </div>
      ))}

      {/* 점수 표시 */}
      <div className="absolute top-4 left-4 text-white font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
        잡은 별: {caughtCount}/15
      </div>

      {/* 모바일 안내 */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm md:hidden">
        드래그!
      </div>
    </div>
  );
}

// 피하기 게임 컴포넌트 (모바일 지원)
function AvoidGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [playerX, setPlayerX] = useState(400);
  const [playerY, setPlayerY] = useState(200);
  const [enemies, setEnemies] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [survivedTime, setSurvivedTime] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      setSurvivedTime(prev => {
        const newTime = prev + 1;
        onProgress((newTime / 300) * 100); // 5분 = 300초
        if (newTime >= 300) {
          setGameRunning(false);
          onComplete(true);
        }
        return newTime;
      });

      // 적 생성
      if (Math.random() < 0.03) {
        setEnemies(prev => [...prev, { 
          id: Date.now(), 
          x: Math.random() * 700, 
          y: Math.random() * 200 
        }]);
      }

      // 충돌 검사
      enemies.forEach(enemy => {
        const distance = Math.sqrt(
          Math.pow(enemy.x - playerX, 2) + Math.pow(enemy.y - playerY, 2)
        );
        if (distance < 25) {
          setGameRunning(false);
          onComplete(false);
        }
      });
    }, 100);

    return () => clearInterval(gameLoop);
  }, [playerX, playerY, enemies, onComplete, onProgress, gameRunning]);

  // 마우스/터치 이벤트
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPlayerX(e.clientX - rect.left);
    setPlayerY(e.clientY - rect.top);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    if (touch) {
      setPlayerX(Math.max(0, Math.min(700, touch.clientX - rect.left)));
      setPlayerY(Math.max(0, Math.min(200, touch.clientY - rect.top)));
    }
  };

  return (
    <div 
      className="relative w-full h-64 bg-gradient-to-b from-red-400 to-orange-400 rounded-2xl overflow-hidden touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* 플레이어 */}
      <div 
        className="absolute w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
        style={{ left: playerX - 20, top: playerY - 20 }}
      >
        🛡️
      </div>

      {/* 적들 */}
      {enemies.map(enemy => (
        <div
          key={enemy.id}
          className="absolute w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white"
          style={{ left: enemy.x, top: enemy.y }}
        >
          💀
        </div>
      ))}

      {/* 점수 표시 */}
      <div className="absolute top-4 left-4 text-white font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
        생존: {Math.floor(survivedTime / 10)}초
      </div>

      {/* 모바일 안내 */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm md:hidden">
        드래그!
      </div>
    </div>
  );
}

// 수집 게임 컴포넌트 (모바일 지원)
function CollectGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [gems, setGems] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [playerX, setPlayerX] = useState(400);
  const [playerY, setPlayerY] = useState(200);
  const [collectedCount, setCollectedCount] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // 보석 생성
      if (Math.random() < 0.02) {
        setGems(prev => [...prev, { 
          id: Date.now(), 
          x: Math.random() * 700, 
          y: Math.random() * 200 
        }]);
      }

      // 수집 체크
      setGems(prev => {
        const collectedGems = prev.filter(gem => {
          const distance = Math.sqrt(
            Math.pow(gem.x - playerX, 2) + Math.pow(gem.y - playerY, 2)
          );
          return distance < 30;
        });
        
        if (collectedGems.length > 0) {
          setCollectedCount(prev => {
            const newCount = prev + collectedGems.length;
            onProgress((newCount / 20) * 100);
            if (newCount >= 20) {
              setGameRunning(false);
              onComplete(true);
            }
            return newCount;
          });
        }
        
        return prev.filter(gem => {
          const distance = Math.sqrt(
            Math.pow(gem.x - playerX, 2) + Math.pow(gem.y - playerY, 2)
          );
          return distance >= 30;
        });
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [playerX, playerY, onComplete, onProgress, gameRunning]);

  // 마우스/터치 이벤트
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPlayerX(e.clientX - rect.left);
    setPlayerY(e.clientY - rect.top);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    if (touch) {
      setPlayerX(Math.max(0, Math.min(700, touch.clientX - rect.left)));
      setPlayerY(Math.max(0, Math.min(200, touch.clientY - rect.top)));
    }
  };

  return (
    <div 
      className="relative w-full h-64 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-2xl overflow-hidden touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* 플레이어 */}
      <div 
        className="absolute w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold"
        style={{ left: playerX - 24, top: playerY - 24 }}
      >
        🏃‍♂️
      </div>

      {/* 보석들 */}
      {gems.map(gem => (
        <div
          key={gem.id}
          className="absolute w-8 h-8 text-pink-500 text-2xl"
          style={{ left: gem.x, top: gem.y }}
        >
          💎
        </div>
      ))}

      {/* 점수 표시 */}
      <div className="absolute top-4 left-4 text-white font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
        수집: {collectedCount}/20
      </div>

      {/* 모바일 안내 */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm md:hidden">
        드래그!
      </div>
    </div>
  );
}

// 슈팅 게임 컴포넌트 (모바일 지원)
function ShootGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [bullets, setBullets] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [targets, setTargets] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [playerX, setPlayerX] = useState(400);
  const [hitCount, setHitCount] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // 타겟 생성
      if (Math.random() < 0.02) {
        setTargets(prev => [...prev, { 
          id: Date.now(), 
          x: Math.random() * 700, 
          y: Math.random() * 200 
        }]);
      }

      // 총알 이동
      setBullets(prev => prev.map(bullet => ({ ...bullet, y: bullet.y - 5 })).filter(bullet => bullet.y > -10));

      // 타겟 이동
      setTargets(prev => prev.map(target => ({ ...target, y: target.y + 2 })).filter(target => target.y < 300));

      // 충돌 검사
      setBullets(prev => {
        const hitBullets = prev.filter(bullet => {
          const hitTarget = targets.find(target => {
            const distance = Math.sqrt(
              Math.pow(bullet.x - target.x, 2) + Math.pow(bullet.y - target.y, 2)
            );
            return distance < 20;
          });
          return hitTarget;
        });
        
        if (hitBullets.length > 0) {
          setHitCount(prev => {
            const newCount = prev + hitBullets.length;
            onProgress((newCount / 10) * 100);
            if (newCount >= 10) {
              setGameRunning(false);
              onComplete(true);
            }
            return newCount;
          });
        }
        
        return prev.filter(bullet => {
          const hitTarget = targets.find(target => {
            const distance = Math.sqrt(
              Math.pow(bullet.x - target.x, 2) + Math.pow(bullet.y - target.y, 2)
            );
            return distance < 20;
          });
          return !hitTarget;
        });
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [targets, onComplete, onProgress, gameRunning]);

  const shoot = () => {
    setBullets(prev => [...prev, { id: Date.now(), x: playerX, y: 250 }]);
  };

  // 마우스/터치 이벤트
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPlayerX(e.clientX - rect.left);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    if (touch) {
      setPlayerX(Math.max(0, Math.min(700, touch.clientX - rect.left)));
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    shoot();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    shoot();
  };

  return (
    <div 
      className="relative w-full h-64 bg-gradient-to-b from-gray-600 to-gray-800 rounded-2xl overflow-hidden touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* 플레이어 */}
      <div 
        className="absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
        style={{ left: playerX - 24, top: 250 }}
      >
        🚀
      </div>

      {/* 총알들 */}
      {bullets.map(bullet => (
        <div
          key={bullet.id}
          className="absolute w-2 h-6 bg-yellow-400 rounded"
          style={{ left: bullet.x, top: bullet.y }}
        />
      ))}

      {/* 타겟들 */}
      {targets.map(target => (
        <div
          key={target.id}
          className="absolute w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white"
          style={{ left: target.x, top: target.y }}
        >
          🎯
        </div>
      ))}

      {/* 점수 표시 */}
      <div className="absolute top-4 left-4 text-white font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
        명중: {hitCount}/10
      </div>

      {/* 슈팅 버튼 */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg touch-manipulation select-none"
          style={{ minHeight: '50px', minWidth: '100px' }}
        >
          발사! 🔫
        </button>
      </div>

      {/* 모바일 안내 */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm md:hidden">
        터치!
      </div>
    </div>
  );
}