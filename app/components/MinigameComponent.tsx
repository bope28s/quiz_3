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

// 점프 게임 컴포넌트
function JumpGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [playerY, setPlayerY] = useState(200);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState<Array<{id: number, x: number}>>([]);
  const [jumpCount, setJumpCount] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // 장애물 생성 (더 정확한 타이밍)
      if (Math.random() < 0.015) {
        setObstacles(prev => [...prev, { id: Date.now(), x: 800 }]);
      }

      // 장애물 이동 및 제거
      setObstacles(prev => {
        const newObstacles = prev.map(obs => ({ ...obs, x: obs.x - 4 }));
        const filteredObstacles = newObstacles.filter(obs => obs.x > -50);
        
        // 점프 완료 체크 (장애물이 화면을 완전히 벗어났을 때)
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

      // 충돌 검사 (더 정확한 범위)
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

  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-blue-400 to-green-400 rounded-2xl overflow-hidden">
      {/* 플레이어 */}
      <motion.div
        className="absolute w-8 h-8 bg-red-500 rounded-full"
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
          className="absolute w-6 h-16 bg-gray-600 rounded"
          style={{ left: obs.x, top: 180 }}
        >
          🚧
        </div>
      ))}

      {/* 지면 */}
      <div className="absolute bottom-0 w-full h-4 bg-green-600"></div>
      
      <div className="absolute top-4 left-4 text-white font-bold">
        점프: {jumpCount}/{minigame.data.obstacles}
      </div>
    </div>
  );
}

// 잡기 게임 컴포넌트
function CatchGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [caughtCount, setCaughtCount] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // 별 생성 (더 적절한 빈도)
      if (Math.random() < 0.08) {
        setStars(prev => [...prev, { 
          id: Date.now(), 
          x: Math.random() * 700, 
          y: 0 
        }]);
      }

      // 별 이동 및 제거
      setStars(prev => {
        const newStars = prev.map(star => ({ ...star, y: star.y + 2.5 }));
        return newStars.filter(star => star.y < 300);
      });

      // 잡기 검사 (더 정확한 거리 계산)
      setStars(prev => {
        const newStars = prev.filter(star => {
          const distance = Math.sqrt(Math.pow(star.x - mousePos.x, 2) + Math.pow(star.y - mousePos.y, 2));
          if (distance < 25) {
            setCaughtCount(prev => {
              const newCount = prev + 1;
              onProgress((newCount / minigame.data.targets) * 100);
              if (newCount >= minigame.data.targets) {
                setGameRunning(false);
                onComplete(true);
              }
              return newCount;
            });
            return false;
          }
          return true;
        });
        return newStars;
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [mousePos, minigame.data.targets, onComplete, onProgress, gameRunning]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="relative w-full h-64 bg-gradient-to-b from-purple-400 to-pink-400 rounded-2xl overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
    >
      {/* 별들 */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute text-2xl"
          style={{ left: star.x, top: star.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ⭐
        </motion.div>
      ))}

      {/* 마우스 커서 */}
      <div 
        className="absolute w-8 h-8 border-2 border-white rounded-full pointer-events-none"
        style={{ left: mousePos.x - 16, top: mousePos.y - 16 }}
      ></div>

      <div className="absolute top-4 left-4 text-white font-bold">
        잡은 별: {caughtCount}/{minigame.data.targets}
      </div>
    </div>
  );
}

// 피하기 게임 컴포넌트
function AvoidGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [playerPos, setPlayerPos] = useState({ x: 200, y: 200 });
  const [rocks, setRocks] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [survivedTime, setSurvivedTime] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      setSurvivedTime(prev => {
        const newTime = prev + 0.05;
        onProgress((newTime / minigame.data.duration) * 100);
        if (newTime >= minigame.data.duration) {
          setGameRunning(false);
          onComplete(true);
        }
        return newTime;
      });

      // 돌 생성 (더 적절한 빈도)
      if (Math.random() < 0.08) {
        setRocks(prev => [...prev, { 
          id: Date.now(), 
          x: Math.random() * 700, 
          y: 0 
        }]);
      }

      // 돌 이동 및 제거
      setRocks(prev => {
        const newRocks = prev.map(rock => ({ ...rock, y: rock.y + 3.5 }));
        return newRocks.filter(rock => rock.y < 300);
      });

      // 충돌 검사 (더 정확한 거리)
      rocks.forEach(rock => {
        const distance = Math.sqrt(Math.pow(rock.x - playerPos.x, 2) + Math.pow(rock.y - playerPos.y, 2));
        if (distance < 25) {
          setGameRunning(false);
          onComplete(false);
        }
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [rocks, playerPos, minigame.data.duration, onComplete, onProgress, gameRunning]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setPlayerPos(prev => {
        let newX = prev.x;
        let newY = prev.y;
        
        switch(e.key) {
          case 'ArrowLeft': newX = Math.max(20, prev.x - 10); break;
          case 'ArrowRight': newX = Math.min(680, prev.x + 10); break;
          case 'ArrowUp': newY = Math.max(20, prev.y - 10); break;
          case 'ArrowDown': newY = Math.min(180, prev.y + 10); break;
        }
        
        return { x: newX, y: newY };
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-gray-400 to-gray-600 rounded-2xl overflow-hidden">
      {/* 플레이어 */}
      <div
        className="absolute w-8 h-8 bg-blue-500 rounded-full"
        style={{ left: playerPos.x, top: playerPos.y }}
      >
        🏃
      </div>

      {/* 돌들 */}
      {rocks.map(rock => (
        <div
          key={rock.id}
          className="absolute w-6 h-6 bg-gray-800 rounded"
          style={{ left: rock.x, top: rock.y }}
        >
          🪨
        </div>
      ))}

      <div className="absolute top-4 left-4 text-white font-bold">
        생존 시간: {Math.floor(survivedTime)}초 / {minigame.data.duration}초
      </div>
    </div>
  );
}

// 수집 게임 컴포넌트
function CollectGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [playerPos, setPlayerPos] = useState({ x: 200, y: 200 });
  const [treasures, setTreasures] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [collectedCount, setCollectedCount] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // 보물 생성 (더 적절한 빈도)
      if (Math.random() < 0.06) {
        setTreasures(prev => [...prev, { 
          id: Date.now(), 
          x: Math.random() * 700, 
          y: Math.random() * 200 + 50 
        }]);
      }

      // 수집 검사 (더 정확한 거리)
      setTreasures(prev => {
        const newTreasures = prev.filter(treasure => {
          const distance = Math.sqrt(Math.pow(treasure.x - playerPos.x, 2) + Math.pow(treasure.y - playerPos.y, 2));
          if (distance < 25) {
            setCollectedCount(prev => {
              const newCount = prev + 1;
              onProgress((newCount / minigame.data.treasures) * 100);
              if (newCount >= minigame.data.treasures) {
                setGameRunning(false);
                onComplete(true);
              }
              return newCount;
            });
            return false;
          }
          return true;
        });
        return newTreasures;
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [playerPos, minigame.data.treasures, onComplete, onProgress, gameRunning]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setPlayerPos(prev => {
        let newX = prev.x;
        let newY = prev.y;
        
        switch(e.key) {
          case 'ArrowLeft': newX = Math.max(20, prev.x - 10); break;
          case 'ArrowRight': newX = Math.min(680, prev.x + 10); break;
          case 'ArrowUp': newY = Math.max(20, prev.y - 10); break;
          case 'ArrowDown': newY = Math.min(180, prev.y + 10); break;
        }
        
        return { x: newX, y: newY };
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-2xl overflow-hidden">
      {/* 플레이어 */}
      <div
        className="absolute w-8 h-8 bg-green-500 rounded-full"
        style={{ left: playerPos.x, top: playerPos.y }}
      >
        🏃
      </div>

      {/* 보물들 */}
      {treasures.map(treasure => (
        <motion.div
          key={treasure.id}
          className="absolute text-2xl"
          style={{ left: treasure.x, top: treasure.y }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          💎
        </motion.div>
      ))}

      <div className="absolute top-4 left-4 text-white font-bold">
        수집한 보물: {collectedCount}/{minigame.data.treasures}
      </div>
    </div>
  );
}

// 슈팅 게임 컴포넌트
function ShootGame({ minigame, onComplete, onProgress }: { minigame: Minigame; onComplete: (success: boolean) => void; onProgress: (progress: number) => void }) {
  const [enemies, setEnemies] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [bullets, setBullets] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [killedCount, setKilledCount] = useState(0);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (!gameRunning) return;

    const gameLoop = setInterval(() => {
      // 적 생성 (더 적절한 빈도)
      if (Math.random() < 0.06) {
        setEnemies(prev => [...prev, { 
          id: Date.now(), 
          x: 800, 
          y: Math.random() * 200 + 50 
        }]);
      }

      // 적 이동 및 제거
      setEnemies(prev => {
        const newEnemies = prev.map(enemy => ({ ...enemy, x: enemy.x - 2.5 }));
        return newEnemies.filter(enemy => enemy.x > -50);
      });

      // 총알 이동 및 제거
      setBullets(prev => {
        const newBullets = prev.map(bullet => ({ ...bullet, x: bullet.x + 7 }));
        return newBullets.filter(bullet => bullet.x < 800);
      });

      // 충돌 검사 (더 정확한 거리)
      setEnemies(prev => {
        const newEnemies = prev.filter(enemy => {
          const hit = bullets.some(bullet => {
            const distance = Math.sqrt(Math.pow(enemy.x - bullet.x, 2) + Math.pow(enemy.y - bullet.y, 2));
            return distance < 18;
          });
          
          if (hit) {
            setKilledCount(prev => {
              const newCount = prev + 1;
              onProgress((newCount / minigame.data.targets) * 100);
              if (newCount >= minigame.data.targets) {
                setGameRunning(false);
                onComplete(true);
              }
              return newCount;
            });
            return false;
          }
          return true;
        });
        return newEnemies;
      });

      // 총알과 적 충돌 시 총알 제거
      setBullets(prev => prev.filter(bullet => {
        const hit = enemies.some(enemy => {
          const distance = Math.sqrt(Math.pow(enemy.x - bullet.x, 2) + Math.pow(enemy.y - bullet.y, 2));
          return distance < 18;
        });
        return !hit;
      }));
    }, 50);

    return () => clearInterval(gameLoop);
  }, [enemies, bullets, minigame.data.targets, onComplete, onProgress, gameRunning]);

  const handleShoot = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setBullets(prev => [...prev, { id: Date.now(), x: 50, y: y }]);
  };

  return (
    <div 
      className="relative w-full h-64 bg-gradient-to-b from-red-400 to-purple-400 rounded-2xl overflow-hidden cursor-crosshair"
      onClick={handleShoot}
    >
      {/* 적들 */}
      {enemies.map(enemy => (
        <div
          key={enemy.id}
          className="absolute w-8 h-8 bg-red-600 rounded"
          style={{ left: enemy.x, top: enemy.y }}
        >
          👹
        </div>
      ))}

      {/* 총알들 */}
      {bullets.map(bullet => (
        <div
          key={bullet.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{ left: bullet.x, top: bullet.y }}
        >
          💥
        </div>
      ))}

      {/* 플레이어 */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
        🏹
      </div>

      <div className="absolute top-4 left-4 text-white font-bold">
        처치한 적: {killedCount}/{minigame.data.targets}
      </div>
    </div>
  );
}