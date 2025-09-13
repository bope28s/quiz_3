export interface WizardDialogue {
  id: number;
  level: number;
  wizardName: string;
  wizardEmoji: string;
  wizardDescription: string;
  dialogues: {
    intro: string;
    beforeQuiz: string;
    afterCorrect: string;
    afterIncorrect: string;
    beforeMinigame: string;
    afterMinigame: string;
    hint: string;
    farewell: string;
  };
  hints: {
    mom: string;
    dad: string;
  };
  storyProgress: string;
}

export const wizardDialogues: WizardDialogue[] = [
  {
    id: 1,
    level: 1,
    wizardName: "숫자의 마법사",
    wizardEmoji: "🔢",
    wizardDescription: "숫자와 계산의 마법을 다루는 현명한 마법사",
    dialogues: {
      intro: "안녕하세요, 용감한 영웅이여! 나는 숫자의 마법사입니다. 어둠의 마법사가 당신의 가족을 가두었다고 들었습니다. 숫자의 힘으로 그들을 구출해보세요!",
      beforeQuiz: "먼저 숫자의 기본을 알아야 합니다. 이 문제를 풀어보세요!",
      afterCorrect: "훌륭합니다! 숫자의 마법을 이해하고 있군요. 이제 퀴즈를 풀어보세요!",
      afterIncorrect: "괜찮습니다! 숫자는 연습이 필요해요. 힌트를 보고 다시 도전해보세요!",
      beforeMinigame: "이제 숫자 기억력 게임을 해보겠습니다. 숫자들을 잘 기억하세요!",
      afterMinigame: "훌륭한 기억력이군요! 엄마에 대한 첫 번째 힌트를 드리겠습니다.",
      hint: "엄마는 따뜻한 곳에 있어요. 침실이나 거실 같은 곳을 생각해보세요.",
      farewell: "숫자의 마법을 잘 익혔습니다. 다음 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 따뜻한 곳에 있어요",
      dad: "아빠는 높은 곳에 있어요"
    },
    storyProgress: "첫 번째 관문을 통과했습니다! 엄마의 첫 번째 힌트를 얻었어요."
  },
  {
    id: 2,
    level: 2,
    wizardName: "한글의 수호자",
    wizardEmoji: "📚",
    wizardDescription: "한글의 아름다움을 지키는 지혜로운 수호자",
    dialogues: {
      intro: "반갑습니다! 나는 한글의 수호자입니다. 우리의 아름다운 언어로 어둠의 마법사를 물리쳐보세요!",
      beforeQuiz: "한글의 기본을 알아야 합니다. 이 문제를 풀어보세요!",
      afterCorrect: "완벽합니다! 한글을 잘 알고 있군요. 이제 순서 맞추기 게임을 해보겠습니다.",
      afterIncorrect: "한글은 우리의 소중한 언어입니다. 조금 더 생각해보세요!",
      beforeMinigame: "한글의 순서를 맞춰보는 게임입니다. 올바른 순서로 배열해보세요!",
      afterMinigame: "훌륭한 언어 실력이군요! 아빠에 대한 첫 번째 힌트를 드리겠습니다.",
      hint: "아빠는 높은 곳에 있어요. 선반이나 책장 위 같은 곳을 생각해보세요.",
      farewell: "한글의 아름다움을 잘 이해했습니다. 다음 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 부드러운 것과 함께 있어요",
      dad: "아빠는 높은 곳에 있어요"
    },
    storyProgress: "두 번째 관문을 통과했습니다! 아빠의 첫 번째 힌트를 얻었어요."
  },
  {
    id: 3,
    level: 3,
    wizardName: "동물의 친구",
    wizardEmoji: "🐾",
    wizardDescription: "모든 동물들과 소통할 수 있는 친근한 마법사",
    dialogues: {
      intro: "안녕하세요! 나는 동물의 친구입니다. 동물들의 도움으로 가족을 찾아보세요!",
      beforeQuiz: "동물들에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "훌륭합니다! 동물들을 잘 알고 있군요. 이제 패턴 찾기 게임을 해보겠습니다.",
      afterIncorrect: "동물들은 우리의 친구입니다. 조금 더 관찰해보세요!",
      beforeMinigame: "동물들의 패턴을 찾아보는 게임입니다. 다음에 올 동물을 맞춰보세요!",
      afterMinigame: "훌륭한 관찰력이군요! 엄마에 대한 두 번째 힌트를 드리겠습니다.",
      hint: "엄마는 부드러운 것과 함께 있어요. 베개나 이불 같은 것을 생각해보세요.",
      farewell: "동물들과의 우정을 잘 이해했습니다. 다음 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 부드러운 것과 함께 있어요",
      dad: "아빠는 시원한 곳에 있어요"
    },
    storyProgress: "세 번째 관문을 통과했습니다! 엄마의 두 번째 힌트를 얻었어요."
  },
  {
    id: 4,
    level: 4,
    wizardName: "색깔의 마법사",
    wizardEmoji: "🌈",
    wizardDescription: "세상의 모든 색깔을 다루는 화려한 마법사",
    dialogues: {
      intro: "환영합니다! 나는 색깔의 마법사입니다. 아름다운 색깔들로 어둠을 밝혀보세요!",
      beforeQuiz: "색깔의 세계를 탐험해보겠습니다!",
      afterCorrect: "완벽합니다! 색깔을 잘 구분하고 있군요. 이제 색깔 매칭 게임을 해보겠습니다.",
      afterIncorrect: "색깔은 세상을 아름답게 만듭니다. 다시 한번 생각해보세요!",
      beforeMinigame: "같은 색깔의 물체들을 연결하는 게임입니다. 올바르게 매칭해보세요!",
      afterMinigame: "훌륭한 색깔 감각이군요! 아빠에 대한 두 번째 힌트를 드리겠습니다.",
      hint: "아빠는 시원한 곳에 있어요. 냉장고나 에어컨 근처 같은 곳을 생각해보세요.",
      farewell: "색깔의 아름다움을 잘 이해했습니다. 다음 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 달콤한 냄새가 나는 곳에 있어요",
      dad: "아빠는 시원한 곳에 있어요"
    },
    storyProgress: "네 번째 관문을 통과했습니다! 아빠의 두 번째 힌트를 얻었어요."
  },
  {
    id: 5,
    level: 5,
    wizardName: "자연의 수호자",
    wizardEmoji: "🌿",
    wizardDescription: "자연의 힘을 다루는 평화로운 수호자",
    dialogues: {
      intro: "안녕하세요! 나는 자연의 수호자입니다. 자연의 지혜로 가족을 구출해보세요!",
      beforeQuiz: "자연에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "훌륭합니다! 자연을 잘 이해하고 있군요. 이제 퀴즈를 풀어보세요!",
      afterIncorrect: "자연은 우리의 선생님입니다. 조금 더 관찰해보세요!",
      beforeMinigame: "자연물들의 개수를 세어보는 게임입니다. 정확히 세어보세요!",
      afterMinigame: "훌륭한 계산 능력이군요! 엄마에 대한 세 번째 힌트를 드리겠습니다.",
      hint: "엄마는 달콤한 냄새가 나는 곳에 있어요. 향수나 꽃 같은 것을 생각해보세요.",
      farewell: "자연의 지혜를 잘 이해했습니다. 다음 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 달콤한 냄새가 나는 곳에 있어요",
      dad: "아빠는 맛있는 냄새가 나는 곳에 있어요"
    },
    storyProgress: "다섯 번째 관문을 통과했습니다! 엄마의 세 번째 힌트를 얻었어요."
  },
  {
    id: 6,
    level: 6,
    wizardName: "음식의 마법사",
    wizardEmoji: "🍳",
    wizardDescription: "맛있는 음식을 만드는 요리 마법사",
    dialogues: {
      intro: "반갑습니다! 나는 음식의 마법사입니다. 맛있는 음식의 힘으로 가족을 찾아보세요!",
      beforeQuiz: "음식에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "완벽합니다! 음식을 잘 알고 있군요. 이제 음식 쌍 맞추기 게임을 해보겠습니다.",
      afterIncorrect: "음식은 우리에게 에너지를 줍니다. 조금 더 생각해보세요!",
      beforeMinigame: "같은 종류의 음식들을 연결하는 게임입니다. 올바르게 매칭해보세요!",
      afterMinigame: "훌륭한 음식 지식이군요! 아빠에 대한 세 번째 힌트를 드리겠습니다.",
      hint: "아빠는 맛있는 냄새가 나는 곳에 있어요. 부엌이나 식당 같은 곳을 생각해보세요.",
      farewell: "음식의 중요성을 잘 이해했습니다. 다음 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 따뜻한 손길이 있는 곳에 있어요",
      dad: "아빠는 맛있는 냄새가 나는 곳에 있어요"
    },
    storyProgress: "여섯 번째 관문을 통과했습니다! 아빠의 세 번째 힌트를 얻었어요."
  },
  {
    id: 7,
    level: 7,
    wizardName: "몸의 수호자",
    wizardEmoji: "🫀",
    wizardDescription: "인체의 비밀을 아는 의학 마법사",
    dialogues: {
      intro: "안녕하세요! 나는 몸의 수호자입니다. 우리 몸의 지혜로 가족을 구출해보세요!",
      beforeQuiz: "우리 몸에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "훌륭합니다! 몸의 구조를 잘 알고 있군요. 이제 몸 부위 순서 게임을 해보겠습니다.",
      afterIncorrect: "우리 몸은 정말 신비로운 기계입니다. 조금 더 생각해보세요!",
      beforeMinigame: "몸 부위들을 올바른 순서로 배열하는 게임입니다. 위에서 아래로 정렬해보세요!",
      afterMinigame: "훌륭한 몸 지식이군요! 엄마에 대한 네 번째 힌트를 드리겠습니다.",
      hint: "엄마는 따뜻한 손길이 있는 곳에 있어요. 손으로 만질 수 있는 곳을 생각해보세요.",
      farewell: "몸의 신비를 잘 이해했습니다. 다음 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 따뜻한 손길이 있는 곳에 있어요",
      dad: "아빠는 강한 팔이 있는 곳에 있어요"
    },
    storyProgress: "일곱 번째 관문을 통과했습니다! 엄마의 네 번째 힌트를 얻었어요."
  },
  {
    id: 8,
    level: 8,
    wizardName: "가족의 마법사",
    wizardEmoji: "👨‍👩‍👧‍👦",
    wizardDescription: "가족의 사랑을 지키는 따뜻한 마법사",
    dialogues: {
      intro: "환영합니다! 나는 가족의 마법사입니다. 가족의 사랑으로 어둠을 물리쳐보세요!",
      beforeQuiz: "가족에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "완벽합니다! 가족의 소중함을 잘 알고 있군요. 이제 가족 관계 맞추기 게임을 해보겠습니다.",
      afterIncorrect: "가족은 세상에서 가장 소중한 보물입니다. 다시 한번 생각해보세요!",
      beforeMinigame: "가족 구성원들과 그들의 관계를 연결하는 게임입니다. 올바르게 매칭해보세요!",
      afterMinigame: "훌륭한 가족 사랑이군요! 아빠에 대한 네 번째 힌트를 드리겠습니다.",
      hint: "아빠는 강한 팔이 있는 곳에 있어요. 팔로 할 수 있는 일을 생각해보세요.",
      farewell: "가족의 사랑을 잘 이해했습니다. 다음 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 당신이 가장 좋아하는 곳에 있어요",
      dad: "아빠는 강한 팔이 있는 곳에 있어요"
    },
    storyProgress: "여덟 번째 관문을 통과했습니다! 아빠의 네 번째 힌트를 얻었어요."
  },
  {
    id: 9,
    level: 9,
    wizardName: "일상의 수호자",
    wizardEmoji: "⏰",
    wizardDescription: "일상의 리듬을 지키는 시간 마법사",
    dialogues: {
      intro: "안녕하세요! 나는 일상의 수호자입니다. 일상의 지혜로 가족을 구출해보세요!",
      beforeQuiz: "일상에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "훌륭합니다! 일상을 잘 이해하고 있군요. 이제 하루 일과 순서 게임을 해보겠습니다.",
      afterIncorrect: "일상은 우리의 삶의 기본입니다. 조금 더 생각해보세요!",
      beforeMinigame: "하루 일과를 올바른 순서로 배열하는 게임입니다. 시간 순서대로 정렬해보세요!",
      afterMinigame: "훌륭한 일상 지식이군요! 엄마에 대한 마지막 힌트를 드리겠습니다.",
      hint: "엄마는 당신이 가장 좋아하는 곳에 있어요. 가장 편안하고 좋아하는 장소를 생각해보세요.",
      farewell: "일상의 소중함을 잘 이해했습니다. 마지막 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 당신이 가장 좋아하는 곳에 있어요",
      dad: "아빠는 당신과 함께하고 싶어해요"
    },
    storyProgress: "아홉 번째 관문을 통과했습니다! 엄마의 마지막 힌트를 얻었어요."
  },
  {
    id: 10,
    level: 10,
    wizardName: "어둠의 마법사",
    wizardEmoji: "🌑",
    wizardDescription: "가족을 가두고 있는 악한 마법사 (하지만 마지막에는 선한 마법사로 변함)",
    dialogues: {
      intro: "드디어 여기까지 왔군요! 나는 어둠의 마법사입니다. 하지만 당신의 용기를 보고 마음을 바꿨습니다. 마지막 도전을 해보세요!",
      beforeQuiz: "지금까지 얻은 모든 힌트를 기억하고 엄마와 아빠의 위치를 맞춰보세요!",
      afterCorrect: "🎉 축하합니다! 당신의 용기와 지혜에 감동받았습니다. 가족을 구출해드리겠습니다!",
      afterIncorrect: "아직 힌트가 부족한 것 같습니다. 다시 한번 생각해보세요!",
      beforeMinigame: "최종 기억력 도전입니다! 모든 힌트를 기억하고 가족의 위치를 찾아보세요!",
      afterMinigame: "🎉 완벽합니다! 당신의 사랑과 용기로 가족을 구출했습니다!",
      hint: "모든 힌트를 종합해보세요. 엄마는 따뜻하고 부드러운 곳에, 아빠는 맛있는 냄새가 나는 곳에 있어요.",
      farewell: "당신의 용기와 사랑이 어둠을 밝혔습니다. 이제 가족과 함께 행복한 시간을 보내세요! 💕"
    },
    hints: {
      mom: "엄마는 따뜻하고 부드러운 침실에 있어요",
      dad: "아빠는 맛있는 냄새가 나는 부엌에 있어요"
    },
    storyProgress: "🎉 모든 관문을 통과했습니다! 어둠의 마법사를 물리치고 가족을 구출했습니다! 💕"
  }
];

export const getWizardDialogueByLevel = (level: number): WizardDialogue | undefined => {
  return wizardDialogues.find(dialogue => dialogue.level === level);
};

export const getAllWizardDialogues = (): WizardDialogue[] => {
  return wizardDialogues;
};
