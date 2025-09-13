export interface Minigame {
  id: number;
  level: number;
  type: 'memory' | 'sequence' | 'pattern' | 'counting' | 'matching';
  title: string;
  description: string;
  instructions: string;
  data: any;
  reward: string;
  storyText: string;
}

// 미니게임 데이터
export const minigames: Minigame[] = [
  // 레벨 1 - 기억력 게임
  {
    id: 1,
    level: 1,
    type: 'memory',
    title: '숫자 기억하기 게임',
    description: '숫자의 마법사가 당신의 기억력을 시험합니다!',
    instructions: '화면에 나타나는 숫자들을 순서대로 기억하고 다시 입력해보세요!',
    data: {
      sequence: [1, 3, 5, 2],
      timeLimit: 10000
    },
    reward: '훌륭해요! 숫자의 마법사가 당신의 기억력에 감탄했습니다. 엄마의 첫 번째 힌트를 얻었어요: "엄마는 따뜻한 곳에 있어요"',
    storyText: '숫자의 마법사가 나타났습니다. "용감한 영웅이여, 내가 숨긴 숫자들을 기억할 수 있겠나?"'
  },
  
  // 레벨 2 - 순서 맞추기 게임
  {
    id: 2,
    level: 2,
    type: 'sequence',
    title: '한글 순서 맞추기',
    description: '한글의 수호자가 당신의 언어 실력을 시험합니다!',
    instructions: '주어진 한글들을 올바른 순서로 배열해보세요!',
    data: {
      words: ['사', '랑', '해', '요'],
      correctOrder: [0, 1, 2, 3]
    },
    reward: '완벽해요! 한글의 수호자가 당신의 실력에 감탄했습니다. 아빠의 첫 번째 힌트를 얻었어요: "아빠는 높은 곳에 있어요"',
    storyText: '한글의 수호자가 나타났습니다. "훌륭한 언어 실력을 보여주시오! 이 한글들을 올바른 순서로 배열해보라!"'
  },

  // 레벨 3 - 패턴 게임
  {
    id: 3,
    level: 3,
    type: 'pattern',
    title: '동물 패턴 찾기',
    description: '동물의 친구가 당신의 관찰력을 시험합니다!',
    instructions: '동물들의 패턴을 찾아서 다음에 올 동물을 맞춰보세요!',
    data: {
      pattern: ['🐱', '🐶', '🐱', '🐶', '🐱', '?'],
      options: ['🐱', '🐶', '🐰', '🐸'],
      correctAnswer: 1
    },
    reward: '훌륭해요! 동물의 친구가 당신의 관찰력에 감탄했습니다. 엄마의 두 번째 힌트를 얻었어요: "엄마는 부드러운 것과 함께 있어요"',
    storyText: '동물의 친구가 나타났습니다. "친구여, 동물들의 패턴을 찾아보시오! 다음에 올 동물을 맞춰보라!"'
  },

  // 레벨 4 - 색깔 맞추기 게임
  {
    id: 4,
    level: 4,
    type: 'matching',
    title: '색깔 매칭 게임',
    description: '색깔의 마법사가 당신의 색깔 감각을 시험합니다!',
    instructions: '같은 색깔의 물체들을 연결해보세요!',
    data: {
      items: [
        { color: 'red', object: '🍎' },
        { color: 'blue', object: '🌊' },
        { color: 'green', object: '🌿' },
        { color: 'yellow', object: '☀️' }
      ],
      targets: [
        { color: 'red', object: '❤️' },
        { color: 'blue', object: '💙' },
        { color: 'green', object: '💚' },
        { color: 'yellow', object: '💛' }
      ]
    },
    reward: '완벽해요! 색깔의 마법사가 당신의 색깔 감각에 감탄했습니다. 아빠의 두 번째 힌트를 얻었어요: "아빠는 시원한 곳에 있어요"',
    storyText: '색깔의 마법사가 나타났습니다. "아름다운 색깔들을 올바르게 매칭해보시오! 당신의 색깔 감각을 시험해보겠다!"'
  },

  // 레벨 5 - 세기 게임
  {
    id: 5,
    level: 5,
    type: 'counting',
    title: '자연물 세기 게임',
    description: '자연의 수호자가 당신의 계산 능력을 시험합니다!',
    instructions: '화면에 나타나는 자연물들의 개수를 세어보세요!',
    data: {
      items: ['🌸', '🌿', '🌸', '🌿', '🌸', '🌿', '🌸'],
      correctCount: 7
    },
    reward: '훌륭해요! 자연의 수호자가 당신의 계산 능력에 감탄했습니다. 엄마의 세 번째 힌트를 얻었어요: "엄마는 달콤한 냄새가 나는 곳에 있어요"',
    storyText: '자연의 수호자가 나타났습니다. "자연의 아름다움을 세어보시오! 당신의 계산 능력을 시험해보겠다!"'
  },

  // 레벨 6 - 음식 매칭 게임
  {
    id: 6,
    level: 6,
    type: 'matching',
    title: '음식 쌍 맞추기',
    description: '음식의 마법사가 당신의 음식 지식을 시험합니다!',
    instructions: '같은 종류의 음식들을 찾아서 연결해보세요!',
    data: {
      items: ['🍎', '🥕', '🍞', '🥛', '🍌', '🥬'],
      pairs: [
        { item1: '🍎', item2: '🍌', category: '과일' },
        { item1: '🥕', item2: '🥬', category: '채소' },
        { item1: '🍞', item2: '🥛', category: '아침식사' }
      ]
    },
    reward: '완벽해요! 음식의 마법사가 당신의 음식 지식에 감탄했습니다. 아빠의 세 번째 힌트를 얻었어요: "아빠는 맛있는 냄새가 나는 곳에 있어요"',
    storyText: '음식의 마법사가 나타났습니다. "맛있는 음식들을 올바르게 매칭해보시오! 당신의 음식 지식을 시험해보겠다!"'
  },

  // 레벨 7 - 몸 부위 순서 게임
  {
    id: 7,
    level: 7,
    type: 'sequence',
    title: '몸 부위 순서 맞추기',
    description: '몸의 수호자가 당신의 몸 지식을 시험합니다!',
    instructions: '몸 부위들을 위에서 아래로 올바른 순서로 배열해보세요!',
    data: {
      bodyParts: ['👁️', '👂', '👃', '👄', '🫀', '🦵'],
      correctOrder: [0, 1, 2, 3, 4, 5]
    },
    reward: '훌륭해요! 몸의 수호자가 당신의 몸 지식에 감탄했습니다. 엄마의 네 번째 힌트를 얻었어요: "엄마는 따뜻한 손길이 있는 곳에 있어요"',
    storyText: '몸의 수호자가 나타났습니다. "우리 몸의 부위들을 올바른 순서로 배열해보시오! 당신의 몸 지식을 시험해보겠다!"'
  },

  // 레벨 8 - 가족 관계 게임
  {
    id: 8,
    level: 8,
    type: 'matching',
    title: '가족 관계 맞추기',
    description: '가족의 마법사가 당신의 가족 지식을 시험합니다!',
    instructions: '가족 구성원들과 그들의 관계를 올바르게 연결해보세요!',
    data: {
      family: [
        { name: '엄마', emoji: '👩' },
        { name: '아빠', emoji: '👨' },
        { name: '나', emoji: '👶' },
        { name: '할머니', emoji: '👵' }
      ],
      relationships: [
        { person1: '👩', person2: '👶', relation: '엄마와 나' },
        { person1: '👨', person2: '👶', relation: '아빠와 나' },
        { person1: '👵', person2: '👩', relation: '할머니와 엄마' }
      ]
    },
    reward: '완벽해요! 가족의 마법사가 당신의 가족 사랑에 감탄했습니다. 아빠의 네 번째 힌트를 얻었어요: "아빠는 강한 팔이 있는 곳에 있어요"',
    storyText: '가족의 마법사가 나타났습니다. "가족의 사랑을 보여주시오! 가족 관계를 올바르게 연결해보라!"'
  },

  // 레벨 9 - 일상 순서 게임
  {
    id: 9,
    level: 9,
    type: 'sequence',
    title: '하루 일과 순서 맞추기',
    description: '일상의 수호자가 당신의 일상 지식을 시험합니다!',
    instructions: '하루 일과를 올바른 순서로 배열해보세요!',
    data: {
      activities: ['🌅', '🍳', '🚌', '📚', '🍽️', '😴'],
      correctOrder: [0, 1, 2, 3, 4, 5],
      labels: ['일어나기', '아침식사', '학교가기', '공부하기', '저녁식사', '잠자기']
    },
    reward: '훌륭해요! 일상의 수호자가 당신의 일상 지식에 감탄했습니다. 엄마의 마지막 힌트를 얻었어요: "엄마는 당신이 가장 좋아하는 곳에 있어요"',
    storyText: '일상의 수호자가 나타났습니다. "하루 일과를 올바른 순서로 배열해보시오! 당신의 일상 지식을 시험해보겠다!"'
  },

  // 레벨 10 - 최종 기억력 게임
  {
    id: 10,
    level: 10,
    type: 'memory',
    title: '최종 기억력 도전',
    description: '어둠의 마법사가 당신의 최종 기억력을 시험합니다!',
    instructions: '지금까지 얻은 모든 힌트를 기억하고 엄마 아빠의 위치를 맞춰보세요!',
    data: {
      hints: [
        '엄마는 따뜻한 곳에 있어요',
        '엄마는 부드러운 것과 함께 있어요',
        '엄마는 달콤한 냄새가 나는 곳에 있어요',
        '엄마는 따뜻한 손길이 있는 곳에 있어요',
        '엄마는 당신이 가장 좋아하는 곳에 있어요',
        '아빠는 높은 곳에 있어요',
        '아빠는 시원한 곳에 있어요',
        '아빠는 맛있는 냄새가 나는 곳에 있어요',
        '아빠는 강한 팔이 있는 곳에 있어요'
      ],
      locations: ['침실', '거실', '부엌', '욕실', '베란다'],
      correctAnswers: {
        mom: '침실',
        dad: '부엌'
      }
    },
    reward: '🎉 축하합니다! 🎉\n\n어둠의 마법사를 물리치고 엄마와 아빠의 위치를 정확히 찾았습니다!\n\n엄마는 따뜻하고 부드러운 침실에, 아빠는 맛있는 냄새가 나는 부엌에 있었어요!\n\n이제 가족을 다시 만날 수 있습니다! 💕',
    storyText: '어둠의 마법사가 나타났습니다. "마지막 도전이다! 지금까지 얻은 모든 힌트를 기억하고 엄마와 아빠의 위치를 맞춰보라!"'
  }
];

export const getMinigameByLevel = (level: number): Minigame | undefined => {
  // 1, 5, 10단계에서만 미니게임 제공
  if (![1, 5, 10].includes(level)) {
    return undefined;
  }
  return minigames.find(game => game.level === level);
};

export const getAllMinigames = (): Minigame[] => {
  return minigames;
};
