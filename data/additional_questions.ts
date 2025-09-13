import { Quiz } from './quizzes';

// 레벨 3-10의 추가 문제들
export const additionalQuestions: Quiz[] = [
  // 레벨 3 - 동물 문제들 (10개)
  {
    id: 21, level: 3, category: 'animal', title: '동물 구분',
    question: '다음 중 물고기가 아닌 동물은 무엇일까요?',
    options: ['고래', '상어', '펭귄', '금붕어'],
    correctAnswer: 2, hint: '물 속에서 사는 동물이 아닌 것을 찾아보세요!',
    storyText: '동물의 친구가 당신의 자연 지식을 시험합니다.',
    rewardText: '훌륭해요! 동물을 잘 구분해요.'
  },
  {
    id: 22, level: 3, category: 'animal', title: '동물 소리',
    question: '고양이가 내는 소리는?',
    options: ['멍멍', '야옹', '음메', '꿀꿀'],
    correctAnswer: 1, hint: '고양이 소리를 생각해보세요!',
    storyText: '동물 소리의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 동물 소리를 잘 알아요.'
  },
  {
    id: 23, level: 3, category: 'animal', title: '동물 특징',
    question: '다음 중 날개가 있는 동물은?',
    options: ['개', '고양이', '새', '물고기'],
    correctAnswer: 2, hint: '하늘을 날 수 있는 동물을 생각해보세요!',
    storyText: '동물 특징의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 동물 특징을 잘 알아요.'
  },
  {
    id: 24, level: 3, category: 'animal', title: '동물 서식지',
    question: '다음 중 바다에 사는 동물은?',
    options: ['코끼리', '기린', '돌고래', '사자'],
    correctAnswer: 2, hint: '바다에서 사는 동물을 생각해보세요!',
    storyText: '서식지의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 동물 서식지를 잘 알아요.'
  },
  {
    id: 25, level: 3, category: 'animal', title: '동물 크기',
    question: '다음 중 가장 큰 동물은?',
    options: ['개', '고양이', '코끼리', '토끼'],
    correctAnswer: 2, hint: '가장 큰 동물을 생각해보세요!',
    storyText: '크기의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 동물 크기를 잘 알아요.'
  },
  {
    id: 26, level: 3, category: 'animal', title: '동물 이동',
    question: '다음 중 뛰어다니는 동물은?',
    options: ['물고기', '새', '토끼', '뱀'],
    correctAnswer: 2, hint: '뛰어다니는 동물을 생각해보세요!',
    storyText: '이동의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 동물 이동을 잘 알아요.'
  },
  {
    id: 27, level: 3, category: 'animal', title: '동물 먹이',
    question: '다음 중 풀을 먹는 동물은?',
    options: ['사자', '늑대', '소', '호랑이'],
    correctAnswer: 2, hint: '풀을 먹고 사는 동물을 생각해보세요!',
    storyText: '먹이의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 동물 먹이를 잘 알아요.'
  },
  {
    id: 28, level: 3, category: 'animal', title: '동물 겨울',
    question: '다음 중 겨울잠을 자는 동물은?',
    options: ['개', '곰', '새', '물고기'],
    correctAnswer: 1, hint: '겨울에 잠을 자는 동물을 생각해보세요!',
    storyText: '겨울의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 겨울잠을 잘 알아요.'
  },
  {
    id: 29, level: 3, category: 'animal', title: '동물 새끼',
    question: '강아지의 엄마는?',
    options: ['고양이', '개', '토끼', '새'],
    correctAnswer: 1, hint: '강아지의 어른 버전을 생각해보세요!',
    storyText: '새끼의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 동물 가족을 잘 알아요.'
  },
  {
    id: 30, level: 3, category: 'animal', title: '동물 색깔',
    question: '다음 중 검은색과 흰색이 있는 동물은?',
    options: ['토끼', '개', '펭귄', '물고기'],
    correctAnswer: 2, hint: '검은색과 흰색이 섞인 동물을 생각해보세요!',
    storyText: '색깔의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 동물 색깔을 잘 알아요.'
  },

  // 레벨 4 - 색깔 문제들 (10개)
  {
    id: 31, level: 4, category: 'color', title: '기본 색깔',
    question: '노란색과 파란색을 섞으면 어떤 색이 될까요?',
    options: ['빨간색', '초록색', '보라색', '주황색'],
    correctAnswer: 1, hint: '자연에서 볼 수 있는 색깔을 생각해보세요!',
    storyText: '색깔의 마법사가 당신의 색깔 지식을 시험합니다.',
    rewardText: '훌륭해요! 색깔을 잘 섞어요.'
  },
  {
    id: 32, level: 4, category: 'color', title: '빨간색 물체',
    question: '다음 중 빨간색인 것은?',
    options: ['하늘', '풀', '사과', '바다'],
    correctAnswer: 2, hint: '빨간색 과일을 생각해보세요!',
    storyText: '빨간색의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 빨간색을 잘 알아요.'
  },
  {
    id: 33, level: 4, category: 'color', title: '파란색 물체',
    question: '다음 중 파란색인 것은?',
    options: ['태양', '하늘', '풀', '사과'],
    correctAnswer: 1, hint: '하늘의 색깔을 생각해보세요!',
    storyText: '파란색의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 파란색을 잘 알아요.'
  },
  {
    id: 34, level: 4, category: 'color', title: '초록색 물체',
    question: '다음 중 초록색인 것은?',
    options: ['하늘', '풀', '바다', '태양'],
    correctAnswer: 1, hint: '땅에서 자라는 것의 색깔을 생각해보세요!',
    storyText: '초록색의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 초록색을 잘 알아요.'
  },
  {
    id: 35, level: 4, category: 'color', title: '노란색 물체',
    question: '다음 중 노란색인 것은?',
    options: ['바다', '풀', '태양', '하늘'],
    correctAnswer: 2, hint: '하늘에서 빛나는 것의 색깔을 생각해보세요!',
    storyText: '노란색의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 노란색을 잘 알아요.'
  },
  {
    id: 36, level: 4, category: 'color', title: '보라색 물체',
    question: '다음 중 보라색인 것은?',
    options: ['바나나', '포도', '사과', '오렌지'],
    correctAnswer: 1, hint: '보라색 과일을 생각해보세요!',
    storyText: '보라색의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 보라색을 잘 알아요.'
  },
  {
    id: 37, level: 4, category: 'color', title: '주황색 물체',
    question: '다음 중 주황색인 것은?',
    options: ['사과', '오렌지', '포도', '바나나'],
    correctAnswer: 1, hint: '주황색 과일을 생각해보세요!',
    storyText: '주황색의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 주황색을 잘 알아요.'
  },
  {
    id: 38, level: 4, category: 'color', title: '검은색 물체',
    question: '다음 중 검은색인 것은?',
    options: ['구름', '밤', '눈', '해'],
    correctAnswer: 1, hint: '어두운 시간의 색깔을 생각해보세요!',
    storyText: '검은색의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 검은색을 잘 알아요.'
  },
  {
    id: 39, level: 4, category: 'color', title: '흰색 물체',
    question: '다음 중 흰색인 것은?',
    options: ['밤', '눈', '검은 구름', '나무'],
    correctAnswer: 1, hint: '겨울에 내리는 것의 색깔을 생각해보세요!',
    storyText: '흰색의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 흰색을 잘 알아요.'
  },
  {
    id: 40, level: 4, category: 'color', title: '색깔 섞기',
    question: '빨간색과 흰색을 섞으면 어떤 색이 될까요?',
    options: ['검은색', '분홍색', '노란색', '파란색'],
    correctAnswer: 1, hint: '빨간색과 흰색을 섞으면 연한 색이 됩니다!',
    storyText: '색깔 섞기의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 색깔 섞기를 잘했어요.'
  },

  // 레벨 5 - 자연 문제들 (10개)
  {
    id: 41, level: 5, category: 'nature', title: '계절',
    question: '꽃이 피고 나비가 날아다니는 계절은?',
    options: ['봄', '여름', '가을', '겨울'],
    correctAnswer: 0, hint: '새싹이 돋고 꽃이 피는 계절을 생각해보세요!',
    storyText: '계절의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 계절을 잘 알아요.'
  },
  {
    id: 42, level: 5, category: 'nature', title: '날씨',
    question: '하늘에서 물방울이 떨어지는 날씨는?',
    options: ['맑음', '비', '눈', '바람'],
    correctAnswer: 1, hint: '물방울이 떨어지는 날씨를 생각해보세요!',
    storyText: '날씨의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 날씨를 잘 알아요.'
  },
  {
    id: 43, level: 5, category: 'nature', title: '식물',
    question: '다음 중 나무는?',
    options: ['풀', '소나무', '꽃', '이끼'],
    correctAnswer: 1, hint: '키가 크고 줄기가 굵은 식물을 생각해보세요!',
    storyText: '식물의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 식물을 잘 알아요.'
  },
  {
    id: 44, level: 5, category: 'nature', title: '꽃',
    question: '다음 중 꽃은?',
    options: ['나무', '장미', '풀', '이끼'],
    correctAnswer: 1, hint: '예쁘고 향이 좋은 식물을 생각해보세요!',
    storyText: '꽃의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 꽃을 잘 알아요.'
  },
  {
    id: 45, level: 5, category: 'nature', title: '동물',
    question: '다음 중 벌은?',
    options: ['식물', '곤충', '새', '물고기'],
    correctAnswer: 1, hint: '날개가 있고 꿀을 만드는 작은 동물을 생각해보세요!',
    storyText: '곤충의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 곤충을 잘 알아요.'
  },
  {
    id: 46, level: 5, category: 'nature', title: '바람',
    question: '바람이 세게 부는 날씨는?',
    options: ['맑음', '비', '태풍', '눈'],
    correctAnswer: 2, hint: '매우 세게 부는 바람을 생각해보세요!',
    storyText: '바람의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 바람을 잘 알아요.'
  },
  {
    id: 47, level: 5, category: 'nature', title: '물',
    question: '다음 중 물에서 사는 식물은?',
    options: ['나무', '연꽃', '장미', '소나무'],
    correctAnswer: 1, hint: '연못이나 호수에서 자라는 꽃을 생각해보세요!',
    storyText: '물 식물의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 물 식물을 잘 알아요.'
  },
  {
    id: 48, level: 5, category: 'nature', title: '산',
    question: '산에서 볼 수 있는 것은?',
    options: ['물고기', '바다', '나무', '고래'],
    correctAnswer: 2, hint: '산에 많이 자라는 것을 생각해보세요!',
    storyText: '산의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 산을 잘 알아요.'
  },
  {
    id: 49, level: 5, category: 'nature', title: '바다',
    question: '바다에서 볼 수 있는 것은?',
    options: ['나무', '산', '물고기', '꽃'],
    correctAnswer: 2, hint: '바다에 사는 동물을 생각해보세요!',
    storyText: '바다의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 바다를 잘 알아요.'
  },
  {
    id: 50, level: 5, category: 'nature', title: '구름',
    question: '구름이 많이 생기는 날씨는?',
    options: ['맑음', '흐림', '눈', '태풍'],
    correctAnswer: 1, hint: '하늘에 구름이 많을 때의 날씨를 생각해보세요!',
    storyText: '구름의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 구름을 잘 알아요.'
  }
];
