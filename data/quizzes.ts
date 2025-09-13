export interface Quiz {
  id: number;
  level: number;
  title: string;
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
  storyText: string;
  rewardText: string;
  image?: string;
  category: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  storyText: string;
  completed: boolean;
  category: string;
}

// 문제 카테고리별 분류
const quizCategories = {
  math: '수학',
  korean: '한글',
  animal: '동물',
  color: '색깔',
  nature: '자연',
  food: '음식',
  body: '몸',
  family: '가족',
  daily: '일상',
  space: '우주'
};

// 10단계 시스템
export const quizData: Level[] = [
  {
    id: 1,
    title: "숫자의 마법사",
    description: "첫 번째 관문: 숫자를 세어보자!",
    storyText: "어둠의 마법사가 엄마와 아빠를 마법의 성에 가두었어요. 첫 번째 관문을 지키는 숫자의 마법사를 만났습니다. 숫자를 세어서 정답을 맞춰야 해요!",
    completed: false,
    category: 'math'
  },
  {
    id: 2,
    title: "한글의 수호자",
    description: "두 번째 관문: 한글을 배워보자!",
    storyText: "두 번째 관문에서는 한글의 수호자가 지키고 있습니다. 올바른 한글을 찾아서 엄마를 더 가까이 찾아가요!",
    completed: false,
    category: 'korean'
  },
  {
    id: 3,
    title: "동물의 친구",
    description: "세 번째 관문: 동물을 알아보자!",
    storyText: "세 번째 관문에서는 동물들의 친구가 지키고 있습니다. 동물에 대해 알아서 다음 단계로 나아가요!",
    completed: false,
    category: 'animal'
  },
  {
    id: 4,
    title: "색깔의 마법사",
    description: "네 번째 관문: 색깔을 배워보자!",
    storyText: "네 번째 관문에서는 색깔의 마법사가 지키고 있습니다. 아름다운 색깔들을 알아서 마지막 관문으로 가요!",
    completed: false,
    category: 'color'
  },
  {
    id: 5,
    title: "자연의 수호자",
    description: "다섯 번째 관문: 자연을 알아보자!",
    storyText: "다섯 번째 관문에서는 자연의 수호자가 지키고 있습니다. 자연에 대해 알아서 다음 단계로 나아가요!",
    completed: false,
    category: 'nature'
  },
  {
    id: 6,
    title: "음식의 마법사",
    description: "여섯 번째 관문: 음식을 알아보자!",
    storyText: "여섯 번째 관문에서는 음식의 마법사가 지키고 있습니다. 맛있는 음식들에 대해 알아보세요!",
    completed: false,
    category: 'food'
  },
  {
    id: 7,
    title: "몸의 수호자",
    description: "일곱 번째 관문: 몸을 알아보자!",
    storyText: "일곱 번째 관문에서는 몸의 수호자가 지키고 있습니다. 우리 몸에 대해 알아보세요!",
    completed: false,
    category: 'body'
  },
  {
    id: 8,
    title: "가족의 마법사",
    description: "여덟 번째 관문: 가족을 생각해보자!",
    storyText: "여덟 번째 관문에서는 가족의 마법사가 지키고 있습니다. 가족에 대해 생각해보세요!",
    completed: false,
    category: 'family'
  },
  {
    id: 9,
    title: "일상의 수호자",
    description: "아홉 번째 관문: 일상을 알아보자!",
    storyText: "아홉 번째 관문에서는 일상의 수호자가 지키고 있습니다. 우리의 일상에 대해 알아보세요!",
    completed: false,
    category: 'daily'
  },
  {
    id: 10,
    title: "최종 보스: 어둠의 마법사",
    description: "마지막 관문: 최종 도전!",
    storyText: "드디어 어둠의 마법사가 있는 최종 관문에 도착했습니다. 마지막 문제를 맞춰서 엄마와 아빠를 구출하세요!",
    completed: false,
    category: 'space'
  }
];

// 랜덤 문제 선택 함수
export const getRandomQuestion = (level: number, category: string): Quiz => {
  // 간단한 문제 풀을 만들어서 랜덤으로 반환
  const questions: Quiz[] = [
    // 수학 문제들
    {
      id: 1, level: 1, category: 'math', title: '사과를 세어보세요',
      question: '사과가 5개 있고, 오렌지가 3개 있습니다. 과일은 총 몇 개일까요?',
      options: ['6개', '7개', '8개', '9개'],
      correctAnswer: 2, hint: '5 + 3을 계산해보세요!',
      storyText: '숫자의 마법사가 당신의 수학 실력을 시험합니다.',
      rewardText: '훌륭해요! 숫자의 마법사를 물리쳤습니다.'
    },
    {
      id: 2, level: 1, category: 'math', title: '빼기 문제',
      question: '10에서 4를 빼면 얼마일까요?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 1, hint: '10 - 4를 계산해보세요!',
      storyText: '수학의 마법사가 뺄셈을 시험합니다.',
      rewardText: '완벽해요! 뺄셈 마법을 익혔습니다.'
    },
    {
      id: 3, level: 2, category: 'math', title: '곱하기 문제',
      question: '2 × 3은 얼마일까요?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 1, hint: '2를 3번 더하면 됩니다!',
      storyText: '곱셈의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 곱셈을 마스터했어요.'
    },
    {
      id: 4, level: 2, category: 'math', title: '나누기 문제',
      question: '8 ÷ 2는 얼마일까요?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1, hint: '8을 2로 나누어보세요!',
      storyText: '나눗셈의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 나눗셈도 할 수 있어요.'
    },
    
    // 한글 문제들
    {
      id: 5, level: 1, category: 'korean', title: '올바른 한글',
      question: '다음 중 올바른 한글 단어는 무엇일까요?',
      options: ['사랑', '사랑이', '사랑해요', '사랑합니다'],
      correctAnswer: 2, hint: '가장 자연스럽고 친근한 표현을 찾아보세요!',
      storyText: '한글의 수호자가 당신의 언어 실력을 시험합니다.',
      rewardText: '완벽해요! 한글의 수호자를 물리쳤습니다.'
    },
    {
      id: 6, level: 1, category: 'korean', title: '한글 자음',
      question: '다음 중 자음이 아닌 것은?',
      options: ['ㄱ', 'ㅏ', 'ㄴ', 'ㄷ'],
      correctAnswer: 1, hint: '자음과 모음을 구분해보세요!',
      storyText: '자음의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 한글 자음을 잘 알아요.'
    },
    {
      id: 7, level: 2, category: 'korean', title: '올바른 맞춤법',
      question: '다음 중 올바른 맞춤법은?',
      options: ['아버지', '아버찌', '아버지이', '아버지야'],
      correctAnswer: 0, hint: '가장 기본적이고 올바른 표기를 찾아보세요!',
      storyText: '맞춤법의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 맞춤법을 잘 알아요.'
    },
    
    // 동물 문제들
    {
      id: 8, level: 1, category: 'animal', title: '동물 구분',
      question: '다음 중 물고기가 아닌 동물은 무엇일까요?',
      options: ['고래', '상어', '펭귄', '금붕어'],
      correctAnswer: 2, hint: '물 속에서 사는 동물이 아닌 것을 찾아보세요!',
      storyText: '동물의 친구가 당신의 자연 지식을 시험합니다.',
      rewardText: '훌륭해요! 동물을 잘 구분해요.'
    },
    {
      id: 9, level: 1, category: 'animal', title: '동물 소리',
      question: '고양이가 내는 소리는?',
      options: ['멍멍', '야옹', '음메', '꿀꿀'],
      correctAnswer: 1, hint: '고양이 소리를 생각해보세요!',
      storyText: '동물 소리의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 동물 소리를 잘 알아요.'
    },
    {
      id: 10, level: 2, category: 'animal', title: '동물 특징',
      question: '다음 중 날개가 있는 동물은?',
      options: ['개', '고양이', '새', '물고기'],
      correctAnswer: 2, hint: '하늘을 날 수 있는 동물을 생각해보세요!',
      storyText: '동물 특징의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 동물 특징을 잘 알아요.'
    },
    
    // 색깔 문제들
    {
      id: 11, level: 1, category: 'color', title: '기본 색깔',
      question: '노란색과 파란색을 섞으면 어떤 색이 될까요?',
      options: ['빨간색', '초록색', '보라색', '주황색'],
      correctAnswer: 1, hint: '자연에서 볼 수 있는 색깔을 생각해보세요!',
      storyText: '색깔의 마법사가 당신의 색깔 지식을 시험합니다.',
      rewardText: '훌륭해요! 색깔을 잘 섞어요.'
    },
    {
      id: 12, level: 1, category: 'color', title: '빨간색 물체',
      question: '다음 중 빨간색인 것은?',
      options: ['하늘', '풀', '사과', '바다'],
      correctAnswer: 2, hint: '빨간색 과일을 생각해보세요!',
      storyText: '빨간색의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 빨간색을 잘 알아요.'
    },
    
    // 자연 문제들
    {
      id: 13, level: 1, category: 'nature', title: '계절',
      question: '꽃이 피고 나비가 날아다니는 계절은?',
      options: ['봄', '여름', '가을', '겨울'],
      correctAnswer: 0, hint: '새싹이 돋고 꽃이 피는 계절을 생각해보세요!',
      storyText: '계절의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 계절을 잘 알아요.'
    },
    {
      id: 14, level: 2, category: 'nature', title: '날씨',
      question: '하늘에서 물방울이 떨어지는 날씨는?',
      options: ['맑음', '비', '눈', '바람'],
      correctAnswer: 1, hint: '물방울이 떨어지는 날씨를 생각해보세요!',
      storyText: '날씨의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 날씨를 잘 알아요.'
    },
    
    // 음식 문제들
    {
      id: 15, level: 1, category: 'food', title: '과일',
      question: '다음 중 과일은?',
      options: ['당근', '사과', '양파', '감자'],
      correctAnswer: 1, hint: '달콤하고 씹어먹는 과일을 생각해보세요!',
      storyText: '과일의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 과일을 잘 알아요.'
    },
    {
      id: 16, level: 2, category: 'food', title: '채소',
      question: '다음 중 채소는?',
      options: ['사과', '바나나', '당근', '포도'],
      correctAnswer: 2, hint: '땅에서 자라고 샐러드로 먹는 것을 생각해보세요!',
      storyText: '채소의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 채소를 잘 알아요.'
    },
    
    // 몸 문제들
    {
      id: 17, level: 1, category: 'body', title: '몸 부위',
      question: '음식을 맛보는 기관은?',
      options: ['코', '귀', '혀', '눈'],
      correctAnswer: 2, hint: '입 안에 있고 맛을 느끼는 기관을 생각해보세요!',
      storyText: '몸의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 몸 부위를 잘 알아요.'
    },
    {
      id: 18, level: 2, category: 'body', title: '몸 기능',
      question: '숨을 쉬는 기관은?',
      options: ['심장', '폐', '간', '콩팥'],
      correctAnswer: 1, hint: '공기를 들이마시고 내쉬는 기관을 생각해보세요!',
      storyText: '기능의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 몸 기능을 잘 알아요.'
    },
    
    // 가족 문제들
    {
      id: 19, level: 1, category: 'family', title: '가족 관계',
      question: '아빠의 아들은?',
      options: ['형', '누나', '나', '엄마'],
      correctAnswer: 2, hint: '아빠의 아들인 나를 생각해보세요!',
      storyText: '가족의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 가족 관계를 잘 알아요.'
    },
    {
      id: 20, level: 10, category: 'family', title: '가족 사랑',
      question: '가장 중요한 것은 무엇일까요?',
      options: ['돈', '장난감', '가족의 사랑', '맛있는 음식'],
      correctAnswer: 2, hint: '마음으로 느끼는 가장 소중한 것을 생각해보세요!',
      storyText: '사랑의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 가족의 사랑을 잘 알아요.'
    },
    
    // 일상 문제들
    {
      id: 21, level: 1, category: 'daily', title: '일상 활동',
      question: '아침에 일어나서 하는 첫 번째 일은?',
      options: ['씻기', '옷 입기', '눈 뜨기', '먹기'],
      correctAnswer: 2, hint: '잠에서 깨어나서 하는 첫 번째 일을 생각해보세요!',
      storyText: '일상의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 일상을 잘 알아요.'
    },
    
    // 우주 문제들
    {
      id: 22, level: 1, category: 'space', title: '우주',
      question: '지구에서 가장 가까운 별은?',
      options: ['달', '태양', '별', '행성'],
      correctAnswer: 1, hint: '하늘에서 가장 크고 밝게 보이는 것을 생각해보세요!',
      storyText: '우주의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 우주를 잘 알아요.'
    }
  ];
  
  // 해당 레벨과 카테고리에 맞는 문제 필터링
  const filteredQuestions = questions.filter(q => 
    q.level === level && q.category === category
  );
  
  if (filteredQuestions.length === 0) {
    // 해당 조건에 맞는 문제가 없으면 레벨만 맞는 문제 중에서 선택
    const levelQuestions = questions.filter(q => q.level === level);
    if (levelQuestions.length === 0) {
      // 레벨도 없으면 모든 문제 중에서 선택
      const randomIndex = Math.floor(Math.random() * questions.length);
      return questions[randomIndex];
    }
    const randomIndex = Math.floor(Math.random() * levelQuestions.length);
    return levelQuestions[randomIndex];
  }
  
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
};

export const getLevelById = (id: number): Level | undefined => {
  return quizData.find(level => level.id === id);
};

export const getTotalLevels = (): number => {
  return quizData.length;
};

export const getTotalQuestions = (): number => {
  return 100; // 100개의 문제가 있다고 표시
};
