// 미니게임 인터페이스 (스킵 기능용 플래시 게임)
export interface Minigame {
  id: number;
  level: number;
  type: 'jump' | 'catch' | 'avoid' | 'collect' | 'shoot';
  title: string;
  description: string;
  instructions: string;
  data: any;
  reward: string;
  storyText: string;
}

// 미니게임 데이터 (스킵 기능용 플래시 게임)
export const minigames: Minigame[] = [
  // 점프 게임들
  {
    id: 1,
    level: 0, // 0은 모든 레벨에서 사용 가능
    type: 'jump',
    title: '마법 점프 게임',
    description: '마법사가 당신의 점프 실력을 시험합니다!',
    instructions: '스페이스바를 눌러서 장애물을 뛰어넘어보세요! 10개를 넘으면 성공!',
    data: {
      obstacles: 10,
      speed: 1.0,
      jumpHeight: 100
    },
    reward: '🎉 훌륭해요! 마법사가 당신의 점프 실력에 감탄했습니다! 다음 단계를 건너뛸 수 있어요!',
    storyText: '🏃‍♂️ 마법사가 나타났습니다. "스페이스바로 점프해서 장애물을 뛰어넘어보시오! 10개를 넘으면 성공이오!"'
  },
  
  // 잡기 게임들
  {
    id: 2,
    level: 0,
    type: 'catch',
    title: '별 잡기 게임',
    description: '마법사가 당신의 반응 속도를 시험합니다!',
    instructions: '마우스로 떨어지는 별들을 잡아보세요! 15개를 잡으면 성공!',
    data: {
      targets: 15,
      fallSpeed: 2.0,
      spawnRate: 1.5
    },
    reward: '⭐ 훌륭해요! 마법사가 당신의 반응 속도에 감탄했습니다! 다음 단계를 건너뛸 수 있어요!',
    storyText: '⭐ 마법사가 나타났습니다. "마우스로 떨어지는 별들을 잡아보시오! 15개를 잡으면 성공이오!"'
  },
  
  // 피하기 게임들
  {
    id: 3,
    level: 0,
    type: 'avoid',
    title: '마법 피하기 게임',
    description: '마법사가 당신의 회피 능력을 시험합니다!',
    instructions: '방향키로 움직여서 떨어지는 돌들을 피해보세요! 30초 동안 살아남으면 성공!',
    data: {
      duration: 30,
      obstacleSpeed: 3.0,
      spawnRate: 2.0
    },
    reward: '🪨 훌륭해요! 마법사가 당신의 회피 능력에 감탄했습니다! 다음 단계를 건너뛸 수 있어요!',
    storyText: '🪨 마법사가 나타났습니다. "방향키로 움직여서 떨어지는 돌들을 피해보시오! 30초 동안 살아남으면 성공이오!"'
  },
  
  // 수집 게임들
  {
    id: 4,
    level: 0,
    type: 'collect',
    title: '보물 수집 게임',
    description: '마법사가 당신의 수집 능력을 시험합니다!',
    instructions: '방향키로 움직여서 보물들을 수집해보세요! 20개를 모으면 성공!',
    data: {
      treasures: 20,
      playerSpeed: 2.5,
      treasureSpawn: 1.0
    },
    reward: '💎 훌륭해요! 마법사가 당신의 수집 능력에 감탄했습니다! 다음 단계를 건너뛸 수 있어요!',
    storyText: '💎 마법사가 나타났습니다. "방향키로 움직여서 보물들을 수집해보시오! 20개를 모으면 성공이오!"'
  },
  
  // 슈팅 게임들
  {
    id: 5,
    level: 0,
    type: 'shoot',
    title: '마법 슈팅 게임',
    description: '마법사가 당신의 슈팅 실력을 시험합니다!',
    instructions: '마우스로 클릭해서 날아오는 몬스터들을 쏘아보세요! 25마리를 잡으면 성공!',
    data: {
      targets: 25,
      bulletSpeed: 5.0,
      enemySpeed: 2.0
    },
    reward: '🏹 훌륭해요! 마법사가 당신의 슈팅 실력에 감탄했습니다! 다음 단계를 건너뛸 수 있어요!',
    storyText: '🏹 마법사가 나타났습니다. "마우스로 클릭해서 날아오는 몬스터들을 쏘아보시오! 25마리를 잡으면 성공이오!"'
  }
];

export const getMinigameByLevel = (level: number): Minigame | undefined => {
  // 2, 5단계에서만 미니게임 제공 (스킵 기능)
  if (![2, 5].includes(level)) {
    return undefined;
  }
  
  // 모든 미니게임 중에서 랜덤으로 선택 (level: 0인 게임들)
  const availableGames = minigames.filter(game => game.level === 0);
  
  if (availableGames.length === 0) {
    return undefined;
  }
  
  // 진짜 랜덤으로 미니게임 선택
  const randomIndex = Math.floor(Math.random() * availableGames.length);
  return availableGames[randomIndex];
};

export const getAllMinigames = (): Minigame[] => {
  return minigames;
};