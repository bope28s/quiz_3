'use client';

import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface ParticleEffectProps {
  particles: Particle[];
  onParticleUpdate: (particles: Particle[]) => void;
}

export default function ParticleEffect({ particles, onParticleUpdate }: ParticleEffectProps) {
  return (
    <>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife,
          }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: particle.maxLife / 1000,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  );
}

// 파티클 생성 함수들
export const createExplosionParticles = (x: number, y: number, count: number = 8): Particle[] => {
  const particles: Particle[] = [];
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
  
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = 2 + Math.random() * 3;
    
    particles.push({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1000,
      maxLife: 1000,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 6,
    });
  }
  
  return particles;
};

export const createStarParticles = (x: number, y: number, count: number = 5): Particle[] => {
  const particles: Particle[] = [];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 30,
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 3 - 1,
      life: 800,
      maxLife: 800,
      color: '#ffd700',
      size: 3 + Math.random() * 4,
    });
  }
  
  return particles;
};

export const createGemParticles = (x: number, y: number, count: number = 6): Particle[] => {
  const particles: Particle[] = [];
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 25,
      y: y + (Math.random() - 0.5) * 25,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -Math.random() * 2 - 0.5,
      life: 600,
      maxLife: 600,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 2 + Math.random() * 3,
    });
  }
  
  return particles;
};

export const createHitParticles = (x: number, y: number, count: number = 4): Particle[] => {
  const particles: Particle[] = [];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 15,
      y: y + (Math.random() - 0.5) * 15,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      life: 500,
      maxLife: 500,
      color: '#ff4757',
      size: 2 + Math.random() * 3,
    });
  }
  
  return particles;
};

export const createSparkleParticles = (x: number, y: number, count: number = 6): Particle[] => {
  const particles: Particle[] = [];
  const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      id: Date.now() + i + Math.random(),
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 30,
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 4 - 1,
      life: 800,
      maxLife: 800,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 3 + Math.random() * 4,
    });
  }
  
  return particles;
};

export const createTrailParticles = (x: number, y: number, count: number = 3): Particle[] => {
  const particles: Particle[] = [];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      id: Date.now() + i + Math.random(),
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      life: 300,
      maxLife: 300,
      color: '#ffffff',
      size: 1 + Math.random() * 2,
    });
  }
  
  return particles;
};
