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
    storyText: "두 번째 관문에서는 한글의 수호자가 지키고 있습니다. 올바른 한글을 찾아서 엄마를 찾아봐요!",
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
  // 모든 문제를 가져오기
  const { additionalQuestions } = require('./additional_questions');
  const { moreQuestions } = require('./more_questions');
  
  // 모든 문제를 합치기 (레벨당 10개씩 총 100개)
  const questions: Quiz[] = [
    // 레벨 1 - 수학 문제들 (10개)
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
      id: 3, level: 1, category: 'math', title: '덧셈 문제',
      question: '3 + 4는 얼마일까요?',
      options: ['6', '7', '8', '9'],
      correctAnswer: 1, hint: '3 + 4를 계산해보세요!',
      storyText: '덧셈의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 덧셈을 잘했어요.'
    },
    {
      id: 4, level: 1, category: 'math', title: '뺄셈 문제',
      question: '9에서 3을 빼면 얼마일까요?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 1, hint: '9 - 3을 계산해보세요!',
      storyText: '뺄셈의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 뺄셈을 잘했어요.'
    },
    {
      id: 5, level: 1, category: 'math', title: '큰 수 찾기',
      question: '다음 중 가장 큰 수는 무엇일까요?',
      options: ['15', '25', '20', '30'],
      correctAnswer: 3, hint: '가장 큰 숫자를 찾아보세요!',
      storyText: '큰 수의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 큰 수도 잘 알아요.'
    },
    {
      id: 6, level: 1, category: 'math', title: '작은 수 찾기',
      question: '다음 중 가장 작은 수는 무엇일까요?',
      options: ['18', '15', '20', '25'],
      correctAnswer: 1, hint: '가장 작은 숫자를 찾아보세요!',
      storyText: '작은 수의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 작은 수도 잘 알아요.'
    },
    {
      id: 7, level: 1, category: 'math', title: '덧셈 문제 2',
      question: '6 + 2는 얼마일까요?',
      options: ['7', '8', '9', '10'],
      correctAnswer: 1, hint: '6 + 2를 계산해보세요!',
      storyText: '덧셈의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 덧셈을 잘했어요.'
    },
    {
      id: 8, level: 1, category: 'math', title: '뺄셈 문제 2',
      question: '12에서 5를 빼면 얼마일까요?',
      options: ['6', '7', '8', '9'],
      correctAnswer: 1, hint: '12 - 5를 계산해보세요!',
      storyText: '뺄셈의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 뺄셈을 잘했어요.'
    },
    {
      id: 9, level: 1, category: 'math', title: '수 비교',
      question: '8과 5 중 어느 것이 더 클까요?',
      options: ['8', '5', '같다', '모른다'],
      correctAnswer: 0, hint: '8과 5를 비교해보세요!',
      storyText: '비교의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 수 비교를 잘했어요.'
    },
    {
      id: 10, level: 1, category: 'math', title: '수 세기',
      question: '1부터 10까지 세어보세요. 10은 몇 번째일까요?',
      options: ['9번째', '10번째', '11번째', '12번째'],
      correctAnswer: 1, hint: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10을 세어보세요!',
      storyText: '세기의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 수 세기를 잘했어요.'
    },

    // 레벨 2 - 한글 문제들 (10개)
    {
      id: 11, level: 2, category: 'korean', title: '올바른 한글',
      question: '다음 중 올바른 한글 표현은 무엇일까요?',
      options: ['사랑', '사랑이', '사랑해요', '사랑일까요'],
      correctAnswer: 2, hint: '가장 자연스럽고 친근한 표현을 찾아보세요!',
      storyText: '한글의 수호자가 당신의 언어 실력을 시험합니다.',
      rewardText: '완벽해요! 한글의 수호자를 물리쳤습니다.'
    },
    {
      id: 12, level: 2, category: 'korean', title: '한글 자음',
      question: '다음 중 자음이 아닌 것은?',
      options: ['ㄱ', 'ㅏ', 'ㄴ', 'ㄷ'],
      correctAnswer: 1, hint: '자음과 모음을 구분해보세요!',
      storyText: '자음의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 한글 자음을 잘 알아요.'
    },
    {
      id: 13, level: 2, category: 'korean', title: '한글 모음',
      question: '다음 중 모음이 아닌 것은?',
      options: ['ㅏ', 'ㅓ', 'ㅣ', 'ㄱ'],
      correctAnswer: 3, hint: '모음과 자음을 구분해보세요!',
      storyText: '모음의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 한글 모음을 잘 알아요.'
    },
    {
      id: 14, level: 2, category: 'korean', title: '반대말 찾기',
      question: '"크다"의 반대말은 무엇일까요?',
      options: ['높다', '길다', '작다', '넓다'],
      correctAnswer: 2, hint: '크기의 반대를 생각해보세요!',
      storyText: '반대말의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 반대말을 잘 알아요.'
    },
    {
      id: 15, level: 2, category: 'korean', title: '뜻 찾기',
      question: '"기쁘다"와 뜻이 비슷한 말은?',
      options: ['슬프다', '즐겁다', '화나다', '무섭다'],
      correctAnswer: 1, hint: '기쁜 마음과 비슷한 느낌을 생각해보세요!',
      storyText: '뜻의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 단어의 뜻을 잘 알아요.'
    },
    {
      id: 16, level: 2, category: 'korean', title: '올바른 맞춤법',
      question: '다음 중 올바른 맞춤법은?',
      options: ['아버지', '아버찌', '아버지이', '아버지야'],
      correctAnswer: 0, hint: '가장 기본적이고 올바른 표기를 찾아보세요!',
      storyText: '맞춤법의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 맞춤법을 잘 알아요.'
    },
    {
      id: 17, level: 2, category: 'korean', title: '단어 완성',
      question: '"학교"와 함께 사용하는 올바른 단어는?',
      options: ['학교에', '학교가', '학교를', '학교와'],
      correctAnswer: 0, hint: '장소를 나타내는 조사를 생각해보세요!',
      storyText: '조사의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 조사를 잘 사용해요.'
    },
    {
      id: 18, level: 2, category: 'korean', title: '동사 찾기',
      question: '다음 중 동사는?',
      options: ['예쁘다', '크다', '먹다', '좋다'],
      correctAnswer: 2, hint: '행동을 나타내는 단어를 찾아보세요!',
      storyText: '동사의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 동사를 잘 구분해요.'
    },
    {
      id: 19, level: 2, category: 'korean', title: '형용사 찾기',
      question: '다음 중 형용사는?',
      options: ['가다', '오다', '예쁘다', '먹다'],
      correctAnswer: 2, hint: '상태나 성질을 나타내는 단어를 찾아보세요!',
      storyText: '형용사의 마법사가 당신을 시험합니다.',
      rewardText: '완벽해요! 형용사를 잘 구분해요.'
    },
    {
      id: 20, level: 2, category: 'korean', title: '의미 찾기',
      question: '"따뜻하다"와 뜻이 비슷한 말은?',
      options: ['차갑다', '뜨겁다', '시원하다', '덥다'],
      correctAnswer: 1, hint: '따뜻한 느낌과 비슷한 온도를 생각해보세요!',
      storyText: '의미의 마법사가 당신을 시험합니다.',
      rewardText: '훌륭해요! 단어의 의미를 잘 알아요.'
    },
    
    // 추가 문제들 포함
    ...additionalQuestions,
    ...moreQuestions
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
