export interface Quiz {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  category: 'math' | 'korean' | 'history'
  hint: string
  explanation: string
  storyClue: string
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    question: "5 + 3은 얼마일까요?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    category: 'math',
    hint: "손가락으로 세어보세요! 한 손에 5개, 다른 손에 3개를 펼쳐보세요.",
    explanation: "5에 3을 더하면 8이 됩니다! 잘했어요! 🎉",
    storyClue: "첫 번째 단서를 발견했어요! 엄마는 높은 탑 어딘가에 있는 것 같아요! 🏰"
  },
  {
    id: 2,
    question: "다음 중 '사자'를 뜻하는 한글은?",
    options: ["호랑이", "사자", "코끼리", "기린"],
    correctAnswer: 1,
    category: 'korean',
    hint: "그림을 보고 생각해보세요! 🦁 갈기가 있는 동물이에요.",
    explanation: "정답은 '사자'예요! 사자는 '동물의 왕'이라고 불려요! 👑",
    storyClue: "두 번째 단서 발견! 아빠는 어두운 동굴 속에 갇혀 있는 것 같아요! 🕳️"
  },
  {
    id: 3,
    question: "우리나라의 수도는 어디일까요?",
    options: ["부산", "서울", "대구", "인천"],
    correctAnswer: 1,
    category: 'history',
    hint: "한강이 흐르는 우리나라에서 가장 큰 도시예요!",
    explanation: "맞아요! 서울은 우리나라의 수도이자 가장 큰 도시예요! 🏙️",
    storyClue: "세 번째 단서! 엄마와 아빠는 큰 성의 지하실에 함께 있어요! 🏰⬇️"
  },
  {
    id: 4,
    question: "10에서 4를 빼면 얼마일까요?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    category: 'math',
    hint: "10개의 사탕에서 4개를 먹었다면 몇 개가 남을까요?",
    explanation: "10 - 4 = 6이에요! 뺄셈을 잘 했어요! ✨",
    storyClue: "네 번째 단서! 악당의 열쇠는 빨간 보석상자 안에 숨겨져 있어요! 💎"
  },
  {
    id: 5,
    question: "다음 중 바르게 쓴 것은?",
    options: ["안뇽하세요", "안녕하세요", "안뇽하새요", "안녕하새요"],
    correctAnswer: 1,
    category: 'korean',
    hint: "'안녕'은 평안함을 뜻하고, '하세요'는 높임말이에요.",
    explanation: "'안녕하세요'가 정답이에요! 예의 바른 인사말이에요! 🙋‍♀️",
    storyClue: "마지막 단서! 이제 모든 단서를 모았어요! 악당의 성으로 가서 부모님을 구출하세요! 🗝️✨"
  }
]

export const categoryEmojis = {
  math: '🧮',
  korean: '📚',
  history: '🏛️'
}

export const categoryNames = {
  math: '수학',
  korean: '한글',
  history: '역사'
}