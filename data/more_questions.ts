import { Quiz } from './quizzes';

// 레벨 6-10의 추가 문제들
export const moreQuestions: Quiz[] = [
  // 레벨 6 - 음식 문제들 (10개)
  {
    id: 51, level: 6, category: 'food', title: '과일',
    question: '다음 중 과일은?',
    options: ['당근', '사과', '양파', '감자'],
    correctAnswer: 1, hint: '달콤하고 씹어먹는 과일을 생각해보세요!',
    storyText: '과일의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 과일을 잘 알아요.'
  },
  {
    id: 52, level: 6, category: 'food', title: '채소',
    question: '다음 중 채소는?',
    options: ['사과', '바나나', '당근', '포도'],
    correctAnswer: 2, hint: '땅에서 자라고 샐러드로 먹는 것을 생각해보세요!',
    storyText: '채소의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 채소를 잘 알아요.'
  },
  {
    id: 53, level: 6, category: 'food', title: '우유',
    question: '우유를 마시면 무엇이 좋아질까요?',
    options: ['키', '눈', '귀', '코'],
    correctAnswer: 0, hint: '우유에는 뼈를 튼튼하게 하는 성분이 있어요!',
    storyText: '우유의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 우유를 잘 알아요.'
  },
  {
    id: 54, level: 6, category: 'food', title: '빵',
    question: '빵을 만들 때 필요한 것은?',
    options: ['물', '밀가루', '소금', '모두'],
    correctAnswer: 3, hint: '빵을 만들 때 여러 재료가 필요해요!',
    storyText: '빵의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 빵을 잘 알아요.'
  },
  {
    id: 55, level: 6, category: 'food', title: '쌀',
    question: '쌀로 만드는 음식은?',
    options: ['빵', '떡', '과자', '사탕'],
    correctAnswer: 1, hint: '쌀로 만드는 부드러운 음식을 생각해보세요!',
    storyText: '쌀의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 쌀을 잘 알아요.'
  },
  {
    id: 56, level: 6, category: 'food', title: '고기',
    question: '고기를 많이 먹으면 무엇이 좋아질까요?',
    options: ['근육', '머리카락', '손톱', '모두'],
    correctAnswer: 3, hint: '고기에는 우리 몸에 좋은 단백질이 많아요!',
    storyText: '고기의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 고기를 잘 알아요.'
  },
  {
    id: 57, level: 6, category: 'food', title: '과자',
    question: '과자를 많이 먹으면 무엇이 나빠질까요?',
    options: ['키', '치아', '머리', '손'],
    correctAnswer: 1, hint: '달콤한 과자는 이에 해로워요!',
    storyText: '과자의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 과자를 잘 알아요.'
  },
  {
    id: 58, level: 6, category: 'food', title: '물',
    question: '물을 많이 마시면 무엇이 좋아질까요?',
    options: ['몸', '머리', '다리', '모두'],
    correctAnswer: 3, hint: '물은 우리 몸 전체에 좋아요!',
    storyText: '물의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 물을 잘 알아요.'
  },
  {
    id: 59, level: 6, category: 'food', title: '야채',
    question: '야채를 많이 먹으면 무엇이 좋아질까요?',
    options: ['키', '눈', '몸', '모두'],
    correctAnswer: 3, hint: '야채에는 우리 몸에 좋은 비타민이 많아요!',
    storyText: '야채의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 야채를 잘 알아요.'
  },
  {
    id: 60, level: 6, category: 'food', title: '과일',
    question: '다음 중 달콤한 과일은?',
    options: ['레몬', '딸기', '라임', '자몽'],
    correctAnswer: 1, hint: '빨갛고 달콤한 과일을 생각해보세요!',
    storyText: '과일의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 과일을 잘 알아요.'
  },

  // 레벨 7 - 몸 문제들 (10개)
  {
    id: 61, level: 7, category: 'body', title: '몸 부위',
    question: '음식을 맛보는 기관은?',
    options: ['코', '귀', '혀', '눈'],
    correctAnswer: 2, hint: '입 안에 있고 맛을 느끼는 기관을 생각해보세요!',
    storyText: '몸의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 몸 부위를 잘 알아요.'
  },
  {
    id: 62, level: 7, category: 'body', title: '몸 기능',
    question: '숨을 쉬는 기관은?',
    options: ['심장', '폐', '간', '콩팥'],
    correctAnswer: 1, hint: '공기를 들이마시고 내쉬는 기관을 생각해보세요!',
    storyText: '기능의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 몸 기능을 잘 알아요.'
  },
  {
    id: 63, level: 7, category: 'body', title: '심장',
    question: '심장의 역할은?',
    options: ['생각하기', '혈액 순환', '음식 소화', '호흡하기'],
    correctAnswer: 1, hint: '심장은 우리 몸에 피를 돌려주는 역할을 해요!',
    storyText: '심장의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 심장을 잘 알아요.'
  },
  {
    id: 64, level: 7, category: 'body', title: '뇌',
    question: '뇌의 역할은?',
    options: ['걷기', '생각하기', '먹기', '자기'],
    correctAnswer: 1, hint: '뇌는 우리가 생각하고 기억하는 곳이에요!',
    storyText: '뇌의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 뇌를 잘 알아요.'
  },
  {
    id: 65, level: 7, category: 'body', title: '눈',
    question: '눈의 역할은?',
    options: ['듣기', '보기', '냄새 맡기', '맛보기'],
    correctAnswer: 1, hint: '눈은 우리가 세상을 보게 해주는 기관이에요!',
    storyText: '눈의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 눈을 잘 알아요.'
  },
  {
    id: 66, level: 7, category: 'body', title: '귀',
    question: '귀의 역할은?',
    options: ['보기', '듣기', '맛보기', '냄새 맡기'],
    correctAnswer: 1, hint: '귀는 우리가 소리를 듣게 해주는 기관이에요!',
    storyText: '귀의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 귀를 잘 알아요.'
  },
  {
    id: 67, level: 7, category: 'body', title: '코',
    question: '코의 역할은?',
    options: ['보기', '듣기', '냄새 맡기', '맛보기'],
    correctAnswer: 2, hint: '코는 우리가 냄새를 맡게 해주는 기관이에요!',
    storyText: '코의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 코를 잘 알아요.'
  },
  {
    id: 68, level: 7, category: 'body', title: '손',
    question: '손의 역할은?',
    options: ['걷기', '잡기', '달리기', '점프하기'],
    correctAnswer: 1, hint: '손은 물건을 잡고 만지는 역할을 해요!',
    storyText: '손의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 손을 잘 알아요.'
  },
  {
    id: 69, level: 7, category: 'body', title: '다리',
    question: '다리의 역할은?',
    options: ['생각하기', '걷기', '먹기', '자기'],
    correctAnswer: 1, hint: '다리는 우리가 걷고 뛸 수 있게 해주는 기관이에요!',
    storyText: '다리의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 다리를 잘 알아요.'
  },
  {
    id: 70, level: 7, category: 'body', title: '치아',
    question: '치아의 역할은?',
    options: ['말하기', '음식 씹기', '보기', '듣기'],
    correctAnswer: 1, hint: '치아는 음식을 씹어서 잘게 부수는 역할을 해요!',
    storyText: '치아의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 치아를 잘 알아요.'
  },

  // 레벨 8 - 가족 문제들 (10개)
  {
    id: 71, level: 8, category: 'family', title: '가족 관계',
    question: '아빠의 아들은?',
    options: ['형', '누나', '나', '엄마'],
    correctAnswer: 2, hint: '아빠의 아들인 나를 생각해보세요!',
    storyText: '가족의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 가족 관계를 잘 알아요.'
  },
  {
    id: 72, level: 8, category: 'family', title: '가족 사랑',
    question: '가장 중요한 것은 무엇일까요?',
    options: ['돈', '장난감', '가족의 사랑', '맛있는 음식'],
    correctAnswer: 2, hint: '마음으로 느끼는 가장 소중한 것을 생각해보세요!',
    storyText: '사랑의 마법사가 당신을 시험합니다.',
    rewardText: '완벽해요! 가족의 사랑을 잘 알아요.'
  },
  {
    id: 73, level: 8, category: 'family', title: '엄마',
    question: '엄마를 부르는 다른 말은?',
    options: ['아빠', '어머니', '형', '누나'],
    correctAnswer: 1, hint: '엄마를 정중하게 부르는 말을 생각해보세요!',
    storyText: '엄마의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 엄마를 잘 알아요.'
  },
  {
    id: 74, level: 8, category: 'family', title: '아빠',
    question: '아빠를 부르는 다른 말은?',
    options: ['엄마', '아버지', '형', '누나'],
    correctAnswer: 1, hint: '아빠를 정중하게 부르는 말을 생각해보세요!',
    storyText: '아빠의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 아빠를 잘 알아요.'
  },
  {
    id: 75, level: 8, category: 'family', title: '형제',
    question: '형과 누나의 공통점은?',
    options: ['나보다 어리다', '나보다 크다', '나와 같다', '모른다'],
    correctAnswer: 1, hint: '형과 누나는 나보다 나이가 많아요!',
    storyText: '형제의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 형제를 잘 알아요.'
  },
  {
    id: 76, level: 8, category: 'family', title: '가족',
    question: '가족과 함께 할 수 있는 것은?',
    options: ['놀기', '먹기', '여행하기', '모두'],
    correctAnswer: 3, hint: '가족과 함께 할 수 있는 일이 많아요!',
    storyText: '가족의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 가족을 잘 알아요.'
  },
  {
    id: 77, level: 8, category: 'family', title: '할머니',
    question: '할머니는 누구일까요?',
    options: ['엄마의 엄마', '아빠의 엄마', '둘 다', '모른다'],
    correctAnswer: 2, hint: '할머니는 엄마나 아빠의 어머니예요!',
    storyText: '할머니의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 할머니를 잘 알아요.'
  },
  {
    id: 78, level: 8, category: 'family', title: '할아버지',
    question: '할아버지는 누구일까요?',
    options: ['엄마의 아빠', '아빠의 아빠', '둘 다', '모른다'],
    correctAnswer: 2, hint: '할아버지는 엄마나 아빠의 아버지예요!',
    storyText: '할아버지의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 할아버지를 잘 알아요.'
  },
  {
    id: 79, level: 8, category: 'family', title: '사랑',
    question: '가족에게 해줄 수 있는 것은?',
    options: ['도와주기', '사랑하기', '배려하기', '모두'],
    correctAnswer: 3, hint: '가족에게 해줄 수 있는 좋은 일이 많아요!',
    storyText: '사랑의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 사랑을 잘 알아요.'
  },
  {
    id: 80, level: 8, category: 'family', title: '가족의 의미',
    question: '가족의 의미는?',
    options: ['함께 살기', '서로 사랑하기', '도와주기', '모두'],
    correctAnswer: 3, hint: '가족은 서로 사랑하고 도와주는 소중한 사람들이에요!',
    storyText: '가족의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 가족의 의미를 잘 알아요.'
  },

  // 레벨 9 - 일상 문제들 (10개)
  {
    id: 81, level: 9, category: 'daily', title: '일상 활동',
    question: '아침에 일어나서 하는 첫 번째 일은?',
    options: ['씻기', '옷 입기', '눈 뜨기', '먹기'],
    correctAnswer: 2, hint: '잠에서 깨어나서 하는 첫 번째 일을 생각해보세요!',
    storyText: '일상의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 일상을 잘 알아요.'
  },
  {
    id: 82, level: 9, category: 'daily', title: '학교',
    question: '학교에서 하는 일은?',
    options: ['놀기', '공부하기', '자기', '먹기'],
    correctAnswer: 1, hint: '학교에서 가장 중요한 일을 생각해보세요!',
    storyText: '학교의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 학교를 잘 알아요.'
  },
  {
    id: 83, level: 9, category: 'daily', title: '집',
    question: '집에서 할 수 있는 일은?',
    options: ['쉬기', '놀기', '공부하기', '모두'],
    correctAnswer: 3, hint: '집에서는 많은 일을 할 수 있어요!',
    storyText: '집의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 집을 잘 알아요.'
  },
  {
    id: 84, level: 9, category: 'daily', title: '친구',
    question: '친구와 함께 할 수 있는 것은?',
    options: ['놀기', '공부하기', '이야기하기', '모두'],
    correctAnswer: 3, hint: '친구와 함께 할 수 있는 재미있는 일이 많아요!',
    storyText: '친구의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 친구를 잘 알아요.'
  },
  {
    id: 85, level: 9, category: 'daily', title: '놀이',
    question: '놀 때 필요한 것은?',
    options: ['장난감', '친구', '공간', '모두'],
    correctAnswer: 3, hint: '놀 때 필요한 것들이 많아요!',
    storyText: '놀이의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 놀이를 잘 알아요.'
  },
  {
    id: 86, level: 9, category: 'daily', title: '시간',
    question: '하루는 몇 시간일까요?',
    options: ['12시간', '24시간', '6시간', '18시간'],
    correctAnswer: 1, hint: '하루는 24시간이에요!',
    storyText: '시간의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 시간을 잘 알아요.'
  },
  {
    id: 87, level: 9, category: 'daily', title: '요일',
    question: '일주일은 며칠일까요?',
    options: ['5일', '6일', '7일', '8일'],
    correctAnswer: 2, hint: '월, 화, 수, 목, 금, 토, 일을 세어보세요!',
    storyText: '요일의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 요일을 잘 알아요.'
  },
  {
    id: 88, level: 9, category: 'daily', title: '계절',
    question: '일 년은 몇 계절일까요?',
    options: ['2계절', '3계절', '4계절', '5계절'],
    correctAnswer: 2, hint: '봄, 여름, 가을, 겨울을 세어보세요!',
    storyText: '계절의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 계절을 잘 알아요.'
  },
  {
    id: 89, level: 9, category: 'daily', title: '생활',
    question: '건강한 생활을 위해 해야 할 것은?',
    options: ['운동하기', '잠자기', '먹기', '모두'],
    correctAnswer: 3, hint: '건강한 생활을 위해 해야 할 일이 많아요!',
    storyText: '생활의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 생활을 잘 알아요.'
  },
  {
    id: 90, level: 9, category: 'daily', title: '예의',
    question: '좋은 예의는?',
    options: ['인사하기', '고마워하기', '미안하기', '모두'],
    correctAnswer: 3, hint: '좋은 예의는 여러 가지가 있어요!',
    storyText: '예의의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 예의를 잘 알아요.'
  },

  // 레벨 10 - 우주 문제들 (10개)
  {
    id: 91, level: 10, category: 'space', title: '우주',
    question: '지구에서 가장 가까운 별은?',
    options: ['달', '태양', '별', '행성'],
    correctAnswer: 1, hint: '하늘에서 가장 크고 밝게 보이는 것을 생각해보세요!',
    storyText: '우주의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 우주를 잘 알아요.'
  },
  {
    id: 92, level: 10, category: 'space', title: '달',
    question: '달은 언제 보일까요?',
    options: ['낮에', '밤에', '아침에', '모든 때'],
    correctAnswer: 3, hint: '달은 때에 따라 낮에도 밤에도 보여요!',
    storyText: '달의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 달을 잘 알아요.'
  },
  {
    id: 93, level: 10, category: 'space', title: '별',
    question: '별은 언제 보일까요?',
    options: ['낮에', '밤에', '아침에', '점심에'],
    correctAnswer: 1, hint: '별은 어두운 밤에 잘 보여요!',
    storyText: '별의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 별을 잘 알아요.'
  },
  {
    id: 94, level: 10, category: 'space', title: '행성',
    question: '지구는 무엇일까요?',
    options: ['별', '행성', '달', '태양'],
    correctAnswer: 1, hint: '지구는 태양 주위를 도는 행성이에요!',
    storyText: '행성의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 행성을 잘 알아요.'
  },
  {
    id: 95, level: 10, category: 'space', title: '태양계',
    question: '태양계에서 가장 큰 행성은?',
    options: ['지구', '목성', '화성', '금성'],
    correctAnswer: 1, hint: '태양계에서 가장 큰 행성을 생각해보세요!',
    storyText: '태양계의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 태양계를 잘 알아요.'
  },
  {
    id: 96, level: 10, category: 'space', title: '우주선',
    question: '우주로 가는 기구는?',
    options: ['비행기', '우주선', '자동차', '배'],
    correctAnswer: 1, hint: '우주로 가는 특별한 기구를 생각해보세요!',
    storyText: '우주선의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 우주선을 잘 알아요.'
  },
  {
    id: 97, level: 10, category: 'space', title: '우주인',
    question: '우주에 가는 사람은?',
    options: ['비행사', '우주인', '선장', '기사'],
    correctAnswer: 1, hint: '우주에 가는 특별한 사람을 생각해보세요!',
    storyText: '우주인의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 우주인을 잘 알아요.'
  },
  {
    id: 98, level: 10, category: 'space', title: '은하계',
    question: '우리가 사는 은하계는?',
    options: ['안드로메다', '우리은하', '삼각형', '큰곰자리'],
    correctAnswer: 1, hint: '우리가 사는 은하계의 이름을 생각해보세요!',
    storyText: '은하계의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 은하계를 잘 알아요.'
  },
  {
    id: 99, level: 10, category: 'space', title: '혜성',
    question: '꼬리가 긴 천체는?',
    options: ['별', '혜성', '행성', '달'],
    correctAnswer: 1, hint: '꼬리가 긴 특별한 천체를 생각해보세요!',
    storyText: '혜성의 마법사가 당신을 시험합니다.',
    rewardText: '훌륭해요! 혜성을 잘 알아요.'
  },
  {
    id: 100, level: 10, category: 'space', title: '최종 문제',
    question: '우주에서 가장 중요한 것은?',
    options: ['돈', '권력', '지식', '가족의 사랑'],
    correctAnswer: 3, hint: '어디에 있든 가장 소중한 것을 생각해보세요!',
    storyText: '우주의 최종 마법사가 당신을 시험합니다.',
    rewardText: '🎉 축하합니다! 🎉\n\n어둠의 마법사를 물리치고 엄마와 아빠를 성공적으로 구출했습니다!\n\n당신의 용기와 지혜로 가족을 다시 만났어요. 이제 함께 행복한 시간을 보낼 수 있습니다!'
  }
];
