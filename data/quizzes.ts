export interface Quiz {
  id: number
  title: string
  question: string
  options: string[]
  correctAnswer: number
  category: 'math' | 'geometry' | 'korean' | 'literature' | 'history' | 'science' | 'art'
  hint: string
  explanation: string
  storyClue: string
  rewardText: string
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "숫자 더하기",
    question: "5 + 3은 얼마일까요?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    category: 'math',
    hint: "손가락으로 세어보세요! 한 손에 5개, 다른 손에 3개를 펼쳐보세요.",
    explanation: "5에 3을 더하면 8이 됩니다! 잘했어요! 🎉",
    storyClue: "첫 번째 단서를 발견했어요! 엄마는 높은 탑 어딘가에 있는 것 같아요! 🏰",
    rewardText: "첫 번째 관문을 통과했어요! 숫자의 마법을 배웠네요! ✨"
  },
  {
    id: 2,
    title: "동물 이름 맞히기",
    question: "다음 중 '사자'를 뜻하는 한글은?",
    options: ["호랑이", "사자", "코끼리", "기린"],
    correctAnswer: 1,
    category: 'korean',
    hint: "그림을 보고 생각해보세요! 🦁 갈기가 있는 동물이에요.",
    explanation: "정답은 '사자'예요! 사자는 '동물의 왕'이라고 불려요! 👑",
    storyClue: "두 번째 단서 발견! 아빠는 어두운 동굴 속에 갇혀 있는 것 같아요! 🕳️",
    rewardText: "한글의 마법을 배웠어요! 동물들의 이름을 잘 알고 있네요! 🦁"
  },
  {
    id: 3,
    title: "우리나라 수도",
    question: "우리나라의 수도는 어디일까요?",
    options: ["부산", "서울", "대구", "인천"],
    correctAnswer: 1,
    category: 'history',
    hint: "한강이 흐르는 우리나라에서 가장 큰 도시예요!",
    explanation: "맞아요! 서울은 우리나라의 수도이자 가장 큰 도시예요! 🏙️",
    storyClue: "세 번째 단서! 엄마와 아빠는 큰 성의 지하실에 함께 있어요! 🏰⬇️",
    rewardText: "역사의 지식을 얻었어요! 우리나라를 잘 알고 있네요! 🏛️"
  },
  {
    id: 4,
    title: "숫자 빼기",
    question: "10에서 4를 빼면 얼마일까요?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    category: 'math',
    hint: "10개의 사탕에서 4개를 먹었다면 몇 개가 남을까요?",
    explanation: "10 - 4 = 6이에요! 뺄셈을 잘 했어요! ✨",
    storyClue: "네 번째 단서! 악당의 열쇠는 빨간 보석상자 안에 숨겨져 있어요! 💎",
    rewardText: "뺄셈의 마법을 배웠어요! 수학이 점점 쉬워지네요! 🧮"
  },
  {
    id: 5,
    title: "올바른 인사말",
    question: "다음 중 바르게 쓴 것은?",
    options: ["안뇽하세요", "안녕하세요", "안뇽하새요", "안녕하새요"],
    correctAnswer: 1,
    category: 'korean',
    hint: "'안녕'은 평안함을 뜻하고, '하세요'는 높임말이에요.",
    explanation: "'안녕하세요'가 정답이에요! 예의 바른 인사말이에요! 🙋‍♀️",
    storyClue: "마지막 단서! 이제 모든 단서를 모았어요! 악당의 성으로 가서 부모님을 구출하세요! 🗝️✨",
    rewardText: "예의 바른 한글을 배웠어요! 정말 훌륭한 모험가예요! 🎊"
  },
  // 추가 수학 문제들
  {
    id: 6,
    title: "곱셈 문제",
    question: "2 × 4는 얼마일까요?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    category: 'math',
    hint: "2를 4번 더해보세요! 2 + 2 + 2 + 2 = ?",
    explanation: "2 × 4 = 8이에요! 곱셈을 잘 했어요! ✨",
    storyClue: "수학의 힘으로 한 걸음 더 나아갔어요! 🧮",
    rewardText: "곱셈의 마법을 배웠어요! 수학이 재미있어지네요! 🔢"
  },
  {
    id: 7,
    title: "나눗셈 문제",
    question: "12 ÷ 3은 얼마일까요?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    category: 'math',
    hint: "12를 3개씩 나누어보세요! 몇 그룹이 나올까요?",
    explanation: "12 ÷ 3 = 4예요! 나눗셈을 잘 했어요! 🎯",
    storyClue: "나눗셈의 지혜를 얻었어요! 🧠",
    rewardText: "나눗셈의 비밀을 알았어요! 수학 마법사가 되었네요! ⭐"
  },
  {
    id: 13,
    title: "기하학 문제",
    question: "다음 중 원의 모양은?",
    options: ["🔺", "🔴", "🟦", "🟩"],
    correctAnswer: 1,
    category: 'geometry',
    hint: "둥글둥글한 모양을 생각해보세요! 🎯",
    explanation: "정답은 🔴이에요! 원은 둥근 모양이에요! ⭕",
    storyClue: "기하학의 아름다움을 배웠어요! 🔵",
    rewardText: "모양을 잘 구분하네요! 기하학자가 될 것 같아요! 📐"
  },
  {
    id: 14,
    title: "분수 문제",
    question: "1/2 + 1/2는 얼마일까요?",
    options: ["1/4", "1/2", "1", "2"],
    correctAnswer: 2,
    category: 'math',
    hint: "반쪽과 반쪽을 합치면 얼마가 될까요? 🍰",
    explanation: "1/2 + 1/2 = 1이에요! 분수를 잘 더했어요! 🎂",
    storyClue: "분수의 마법을 배웠어요! 🧮",
    rewardText: "분수를 잘 계산하네요! 수학 천재가 되었어요! 🧠"
  },
  {
    id: 17,
    title: "삼각형 문제",
    question: "다음 중 삼각형의 모양은?",
    options: ["🔺", "🔴", "🟦", "🟩"],
    correctAnswer: 0,
    category: 'geometry',
    hint: "세 개의 모서리가 있는 모양을 생각해보세요! 📐",
    explanation: "정답은 🔺이에요! 삼각형은 세 개의 모서리를 가진 모양이에요! 🔺",
    storyClue: "기하학의 기본 도형을 배웠어요! 📏",
    rewardText: "삼각형을 잘 구분하네요! 기하학자가 될 것 같아요! 🔺"
  },
  {
    id: 18,
    title: "사각형 문제",
    question: "다음 중 사각형의 모양은?",
    options: ["🔺", "🔴", "🟦", "⭐"],
    correctAnswer: 2,
    category: 'geometry',
    hint: "네 개의 모서리가 있는 모양을 생각해보세요! 📦",
    explanation: "정답은 🟦이에요! 사각형은 네 개의 모서리를 가진 모양이에요! ⬜",
    storyClue: "기하학의 기본 도형을 배웠어요! 📐",
    rewardText: "사각형을 잘 구분하네요! 기하학자가 될 것 같아요! ⬜"
  },
  {
    id: 19,
    title: "각의 종류",
    question: "다음 중 직각은 몇 도일까요?",
    options: ["45도", "90도", "180도", "360도"],
    correctAnswer: 1,
    category: 'geometry',
    hint: "L자 모양을 만드는 각을 생각해보세요! 📐",
    explanation: "정답은 90도예요! 직각은 90도로 L자 모양을 만들어요! 📏",
    storyClue: "각의 종류를 배웠어요! 📐",
    rewardText: "각을 잘 알고 있네요! 기하학자가 될 것 같아요! 📐"
  },
  // 추가 한글 문제들
  {
    id: 8,
    title: "색깔 이름",
    question: "다음 중 '빨간색'을 뜻하는 한글은?",
    options: ["파란색", "빨간색", "노란색", "초록색"],
    correctAnswer: 1,
    category: 'korean',
    hint: "사과나 장미의 색깔을 생각해보세요! 🍎🌹",
    explanation: "정답은 '빨간색'이에요! 빨간색은 정열과 활력을 나타내요! ❤️",
    storyClue: "색깔의 마법을 배웠어요! 🌈",
    rewardText: "색깔 이름을 잘 알고 있네요! 예술가가 될 것 같아요! 🎨"
  },
  {
    id: 9,
    title: "반대말 찾기",
    question: "다음 중 '크다'의 반대말은?",
    options: ["높다", "작다", "길다", "넓다"],
    correctAnswer: 1,
    category: 'korean',
    hint: "크기의 반대를 생각해보세요! 작은 것과 큰 것!",
    explanation: "정답은 '작다'예요! 크다와 작다는 반대말이에요! 📏",
    storyClue: "반대말의 지혜를 얻었어요! ⚖️",
    rewardText: "반대말을 잘 알고 있네요! 언어의 마법사예요! 📚"
  },
  {
    id: 15,
    title: "동물 소리",
    question: "다음 중 '멍멍' 소리를 내는 동물은?",
    options: ["고양이", "강아지", "소", "닭"],
    correctAnswer: 1,
    category: 'korean',
    hint: "집에서 기르는 충실한 친구예요! 🐕",
    explanation: "정답은 '강아지'예요! 강아지는 멍멍 소리를 내요! 🐶",
    storyClue: "동물 소리의 재미를 배웠어요! 🎵",
    rewardText: "동물 소리를 잘 알고 있네요! 동물 친구가 많을 것 같아요! 🐾"
  },
  {
    id: 16,
    title: "가족 호칭",
    question: "다음 중 아버지의 아버지를 부르는 말은?",
    options: ["할아버지", "외할아버지", "큰아버지", "작은아버지"],
    correctAnswer: 0,
    category: 'korean',
    hint: "아버지의 아버지예요! 나이가 많으신 분이에요! 👴",
    explanation: "정답은 '할아버지'예요! 아버지의 아버지를 할아버지라고 해요! 👨‍🦳",
    storyClue: "가족 호칭의 예의를 배웠어요! 👨‍👩‍👧‍👦",
    rewardText: "가족 호칭을 잘 알고 있네요! 예의 바른 아이예요! 🙏"
  },
  {
    id: 20,
    title: "동화 속 인물",
    question: "다음 중 '흥부와 놀부' 동화의 주인공은?",
    options: ["흥부", "놀부", "둘 다", "둘 다 아님"],
    correctAnswer: 2,
    category: 'literature',
    hint: "이 동화에는 두 형제가 나와요! 👬",
    explanation: "정답은 '둘 다'예요! 흥부와 놀부는 모두 주인공이에요! 📚",
    storyClue: "동화의 주인공을 배웠어요! 📖",
    rewardText: "동화를 잘 알고 있네요! 문학을 사랑하는 아이예요! 📚"
  },
  {
    id: 21,
    title: "시의 종류",
    question: "다음 중 '봄이 왔네요'와 같은 짧은 시를 뭐라고 할까요?",
    options: ["동시", "장시", "서정시", "서사시"],
    correctAnswer: 0,
    category: 'literature',
    hint: "어린이들이 읽기 좋은 짧고 재미있는 시예요! 🌸",
    explanation: "정답은 '동시'예요! 어린이들이 읽기 좋은 짧은 시를 동시라고 해요! 📝",
    storyClue: "시의 종류를 배웠어요! ✍️",
    rewardText: "시를 잘 알고 있네요! 시인이 될 것 같아요! 📝"
  },
  {
    id: 22,
    title: "동화의 교훈",
    question: "다음 중 '토끼와 거북이' 동화의 교훈은?",
    options: ["빨리 가는 것이 좋다", "천천히 가는 것이 좋다", "꾸준함이 중요하다", "경쟁이 중요하다"],
    correctAnswer: 2,
    category: 'literature',
    hint: "거북이가 토끼를 이긴 이유를 생각해보세요! 🐢",
    explanation: "정답은 '꾸준함이 중요하다'예요! 꾸준히 노력하는 것이 중요해요! 💪",
    storyClue: "동화의 교훈을 배웠어요! 📚",
    rewardText: "동화의 의미를 잘 이해하네요! 지혜로운 아이예요! 🧠"
  },
  // 추가 역사 문제들
  {
    id: 10,
    title: "전통 음식",
    question: "다음 중 우리나라 전통 음식은?",
    options: ["피자", "김치", "햄버거", "스시"],
    correctAnswer: 1,
    category: 'history',
    hint: "배추로 만든 우리나라 대표 발효 음식이에요! 🥬",
    explanation: "정답은 '김치'예요! 김치는 우리나라의 대표 전통 음식이에요! 🇰🇷",
    storyClue: "전통 음식의 비밀을 알았어요! 🍽️",
    rewardText: "우리나라 전통을 잘 알고 있네요! 문화 지킴이가 되었어요! 🏮"
  },
  {
    id: 11,
    title: "전통 의상",
    question: "다음 중 우리나라 전통 의상은?",
    options: ["한복", "기모노", "치파오", "사리"],
    correctAnswer: 0,
    category: 'history',
    hint: "우리나라의 아름다운 전통 옷이에요! 색깔이 화려해요! 👘",
    explanation: "정답은 '한복'이에요! 한복은 우리나라의 전통 의상이에요! 🇰🇷",
    storyClue: "전통 의상의 아름다움을 배웠어요! 👗",
    rewardText: "한복의 아름다움을 알고 있네요! 전통 문화를 사랑하는 마음이에요! 💕"
  },
  {
    id: 12,
    title: "전통 놀이",
    question: "다음 중 우리나라 전통 놀이는?",
    options: ["윷놀이", "포켓몬", "마리오", "테트리스"],
    correctAnswer: 0,
    category: 'history',
    hint: "네 개의 나무 막대를 던져서 하는 놀이예요! 🎲",
    explanation: "정답은 '윷놀이'예요! 윷놀이는 우리나라의 전통 놀이예요! 🎯",
    storyClue: "전통 놀이의 재미를 알았어요! 🎪",
    rewardText: "전통 놀이를 잘 알고 있네요! 조상님들의 지혜를 배웠어요! 🧠"
  },
  {
    id: 13,
    title: "전통 건물",
    question: "다음 중 우리나라 전통 건물은?",
    options: ["한옥", "아파트", "빌딩", "성"],
    correctAnswer: 0,
    category: 'history',
    hint: "나무로 지은 우리나라 전통 집이에요! 🏠",
    explanation: "정답은 '한옥'이에요! 한옥은 우리나라의 전통 건물이에요! 🏘️",
    storyClue: "전통 건축의 아름다움을 배웠어요! 🏛️",
    rewardText: "전통 건물을 잘 알고 있네요! 건축가가 될 것 같아요! 🏗️"
  },
  {
    id: 14,
    title: "전통 놀이 2",
    question: "다음 중 우리나라 전통 놀이는?",
    options: ["제기차기", "게임기", "스마트폰", "컴퓨터"],
    correctAnswer: 0,
    category: 'history',
    hint: "발로 차서 하는 전통 놀이예요! ⚽",
    explanation: "정답은 '제기차기'예요! 제기차기는 우리나라의 전통 놀이예요! 🦵",
    storyClue: "전통 놀이의 즐거움을 배웠어요! 🎮",
    rewardText: "전통 놀이를 잘 알고 있네요! 건강한 놀이를 즐기는 아이예요! 💪"
  },
  // 과학 문제들
  {
    id: 25,
    title: "동물 분류",
    question: "다음 중 포유동물은?",
    options: ["닭", "개", "물고기", "개구리"],
    correctAnswer: 1,
    category: 'science',
    hint: "새끼를 낳고 젖을 먹이는 동물이에요! 🍼",
    explanation: "정답은 '개'예요! 개는 포유동물로 새끼를 낳고 젖을 먹여요! 🐕",
    storyClue: "동물의 분류를 배웠어요! 🐾",
    rewardText: "동물을 잘 구분하네요! 과학자가 될 것 같아요! 🔬"
  },
  {
    id: 26,
    title: "식물의 성장",
    question: "식물이 자라는데 가장 중요한 것은?",
    options: ["햇빛", "바람", "소리", "냄새"],
    correctAnswer: 0,
    category: 'science',
    hint: "식물이 에너지를 만드는 데 필요한 것이에요! ☀️",
    explanation: "정답은 '햇빛'이에요! 식물은 햇빛을 받아서 광합성을 해요! 🌱",
    storyClue: "식물의 성장 원리를 배웠어요! 🌿",
    rewardText: "식물을 잘 이해하네요! 생물학자가 될 것 같아요! 🌳"
  },
  {
    id: 27,
    title: "물의 상태",
    question: "물이 얼면 무엇이 될까요?",
    options: ["증기", "얼음", "비", "구름"],
    correctAnswer: 1,
    category: 'science',
    hint: "차가워지면 딱딱해지는 것이에요! ❄️",
    explanation: "정답은 '얼음'이에요! 물이 0도 이하로 차가워지면 얼음이 돼요! 🧊",
    storyClue: "물의 상태 변화를 배웠어요! 💧",
    rewardText: "물의 성질을 잘 알고 있네요! 화학자가 될 것 같아요! ⚗️"
  },
  {
    id: 28,
    title: "지구의 모양",
    question: "지구는 어떤 모양일까요?",
    options: ["네모", "둥글", "세모", "하트"],
    correctAnswer: 1,
    category: 'science',
    hint: "공처럼 둥근 모양이에요! 🌍",
    explanation: "정답은 '둥글'이에요! 지구는 둥근 구 모양이에요! 🌎",
    storyClue: "지구의 모양을 배웠어요! 🚀",
    rewardText: "지구를 잘 알고 있네요! 천문학자가 될 것 같아요! 🌟"
  },
  {
    id: 29,
    title: "색깔의 혼합",
    question: "빨간색과 파란색을 섞으면?",
    options: ["노란색", "보라색", "초록색", "주황색"],
    correctAnswer: 1,
    category: 'science',
    hint: "빨강과 파랑이 만나면 나오는 색이에요! 💜",
    explanation: "정답은 '보라색'이에요! 빨간색과 파란색을 섞으면 보라색이 돼요! 🟣",
    storyClue: "색깔의 비밀을 배웠어요! 🌈",
    rewardText: "색깔을 잘 알고 있네요! 예술가가 될 것 같아요! 🎨"
  },
  // 예술 문제들
  {
    id: 30,
    title: "음악 악기",
    question: "다음 중 현악기는?",
    options: ["피아노", "기타", "트럼펫", "드럼"],
    correctAnswer: 1,
    category: 'art',
    hint: "줄을 튕겨서 소리를 내는 악기예요! 🎸",
    explanation: "정답은 '기타'예요! 기타는 줄을 튕겨서 소리를 내는 현악기예요! 🎵",
    storyClue: "음악의 아름다움을 배웠어요! 🎶",
    rewardText: "악기를 잘 알고 있네요! 음악가가 될 것 같아요! 🎼"
  },
  {
    id: 31,
    title: "그림의 색깔",
    question: "다음 중 따뜻한 색깔은?",
    options: ["파란색", "빨간색", "초록색", "보라색"],
    correctAnswer: 1,
    category: 'art',
    hint: "태양이나 불꽃 같은 색깔이에요! 🔥",
    explanation: "정답은 '빨간색'이에요! 빨간색은 따뜻하고 활기찬 색깔이에요! ❤️",
    storyClue: "색깔의 감정을 배웠어요! 🌈",
    rewardText: "색깔을 잘 이해하네요! 화가가 될 것 같아요! 🖌️"
  },
  {
    id: 32,
    title: "춤의 종류",
    question: "다음 중 우리나라 전통 춤은?",
    options: ["발레", "사물놀이", "힙합", "댄스"],
    correctAnswer: 1,
    category: 'art',
    hint: "우리나라의 전통 악기와 함께 추는 춤이에요! 🥁",
    explanation: "정답은 '사물놀이'예요! 우리나라의 전통 악기와 함께 추는 춤이에요! 🎭",
    storyClue: "전통 예술의 아름다움을 배웠어요! 🎪",
    rewardText: "전통 춤을 잘 알고 있네요! 무용수가 될 것 같아요! 💃"
  },
  {
    id: 33,
    title: "조각의 재료",
    question: "다음 중 조각에 사용되는 재료는?",
    options: ["종이", "돌", "물", "바람"],
    correctAnswer: 1,
    category: 'art',
    hint: "딱딱해서 모양을 만들 수 있는 재료예요! 🗿",
    explanation: "정답은 '돌'이에요! 돌은 조각가들이 작품을 만들 때 사용하는 재료예요! ⛰️",
    storyClue: "조각의 재료를 배웠어요! 🎨",
    rewardText: "조각을 잘 알고 있네요! 조각가가 될 것 같아요! 🔨"
  },
  {
    id: 34,
    title: "그림의 종류",
    question: "다음 중 사람의 모습을 그린 그림은?",
    options: ["풍경화", "인물화", "정물화", "추상화"],
    correctAnswer: 1,
    category: 'art',
    hint: "사람의 얼굴이나 모습을 그린 그림이에요! 👤",
    explanation: "정답은 '인물화'예요! 사람의 모습을 그린 그림을 인물화라고 해요! 🖼️",
    storyClue: "그림의 종류를 배웠어요! 🎨",
    rewardText: "그림을 잘 구분하네요! 화가가 될 것 같아요! 🖌️"
  }
]

export const categoryEmojis = {
  math: '🧮',
  geometry: '📐',
  korean: '📝',
  literature: '📚',
  history: '🏛️',
  science: '🔬',
  art: '🎨'
}

export const categoryNames = {
  math: '수학',
  geometry: '기하학',
  korean: '한글',
  literature: '문학',
  history: '역사',
  science: '과학',
  art: '예술'
}

// 레벨 데이터
export interface Level {
  id: number;
  title: string;
  storyText: string;
  category: 'math' | 'geometry' | 'korean' | 'literature' | 'history' | 'science' | 'art';
}

export const levels: Level[] = [
  {
    id: 1,
    title: "첫 번째 관문: 숫자의 숲",
    storyText: "숫자의 숲에 도착했어요! 여기서는 숫자와 친해져야 해요. 마법사가 도와줄 거예요! 🌲✨",
    category: 'math'
  },
  {
    id: 2,
    title: "두 번째 관문: 한글의 정원",
    storyText: "한글의 정원에 왔어요! 아름다운 한글들을 만나보세요. 🌸📝",
    category: 'korean'
  },
  {
    id: 3,
    title: "세 번째 관문: 기하학의 동굴",
    storyText: "기하학의 동굴 속으로 들어가요! 모양과 공간의 마법을 배워보세요. 🔺⛰️",
    category: 'geometry'
  },
  {
    id: 4,
    title: "네 번째 관문: 문학의 호수",
    storyText: "문학의 호수에 도착했어요! 아름다운 글과 시를 만나보세요. 🏞️📚",
    category: 'literature'
  },
  {
    id: 5,
    title: "다섯 번째 관문: 역사의 궁전",
    storyText: "역사의 궁전에 도착했어요! 우리나라의 아름다운 역사를 만나보세요. 🏰🏛️",
    category: 'history'
  },
  {
    id: 6,
    title: "여섯 번째 관문: 과학의 실험실",
    storyText: "과학의 실험실에 왔어요! 신비로운 과학의 세계를 탐험해보세요. 🔬⚗️",
    category: 'science'
  },
  {
    id: 7,
    title: "일곱 번째 관문: 예술의 전당",
    storyText: "예술의 전당에 도착했어요! 아름다운 예술 작품들을 감상해보세요. 🎨🎭",
    category: 'art'
  }
];

// 유틸리티 함수들
export const getLevelById = (id: number): Level | undefined => {
  return levels.find(level => level.id === id);
};

export const getTotalLevels = (): number => {
  return levels.length;
};

export const getRandomQuestion = (levelId: number, category: 'math' | 'geometry' | 'korean' | 'literature' | 'history' | 'science' | 'art'): Quiz => {
  // 진짜 랜덤으로 해당 카테고리의 퀴즈 중에서 선택
  const categoryQuizzes = quizzes.filter(quiz => quiz.category === category);
  const randomIndex = Math.floor(Math.random() * categoryQuizzes.length);
  return categoryQuizzes[randomIndex];
};