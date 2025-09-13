
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
    afterMinigameSuccess: string;
    afterMinigameFailure: string;
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
      afterIncorrect: "괜찮습니다! 숫자는 연습이 필요해요. 조금 더 생각해보세요!",
      beforeMinigame: "특별한 게임을 준비했습니다! 성공하면 이번 단계를 건너뛸 수 있어요!",
      afterMinigameSuccess: "훌륭한 실력이군요! 다음 단계로 바로 넘어갈 수 있습니다!",
      afterMinigameFailure: "아쉽게도 게임에서 실패했네요. 하지만 괜찮습니다! 퀴즈를 풀어보세요!",
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
      afterCorrect: "완벽합니다! 한글을 잘 알고 있군요. 이제 특별한 게임을 해보겠습니다.",
      afterIncorrect: "한글은 우리의 소중한 언어입니다. 조금 더 생각해보세요!",
      beforeMinigame: "🎮 마법의 플래시 게임을 준비했습니다! 화면을 터치하거나 드래그해서 조작하세요! 성공하면 이번 단계를 건너뛸 수 있어요!",
      afterMinigameSuccess: "🎉 대단한 게임 실력이군요! 플래시 게임을 완벽하게 클리어했네요! 다음 단계로 바로 넘어갈 수 있습니다!",
      afterMinigameFailure: "😅 아쉽게도 플래시 게임에서 실패했네요. 하지만 괜찮습니다! 퀴즈를 풀어보세요!",
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
    wizardName: "기하학의 마법사",
    wizardEmoji: "🔺",
    wizardDescription: "모양과 공간의 비밀을 아는 기하학 마법사",
    dialogues: {
      intro: "안녕하세요! 나는 기하학의 마법사입니다. 모양과 공간의 지혜로 가족을 구출해보세요!",
      beforeQuiz: "기하학에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "훌륭합니다! 기하학을 잘 이해하고 있군요. 이제 퀴즈를 풀어보세요!",
      afterIncorrect: "기하학은 세상의 아름다운 구조를 보여줍니다. 조금 더 생각해보세요!",
      beforeMinigame: "특별한 게임을 준비했습니다! 성공하면 이번 단계를 건너뛸 수 있어요!",
      afterMinigameSuccess: "훌륭한 실력이군요! 다음 단계로 바로 넘어갈 수 있습니다!",
      afterMinigameFailure: "아쉽게도 게임에서 실패했네요. 하지만 괜찮습니다! 퀴즈를 풀어보세요!",
      hint: "엄마는 부드러운 것과 함께 있어요. 베개나 이불 같은 것을 생각해보세요.",
      farewell: "기하학의 지혜를 잘 이해했습니다. 다음 관문으로 가세요!"
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
    wizardName: "문학의 수호자",
    wizardEmoji: "📚",
    wizardDescription: "아름다운 글과 시를 지키는 문학 수호자",
    dialogues: {
      intro: "환영합니다! 나는 문학의 수호자입니다. 아름다운 글의 힘으로 어둠을 밝혀보세요!",
      beforeQuiz: "문학의 호수를 탐험해보겠습니다!",
      afterCorrect: "완벽합니다! 문학을 잘 이해하고 있군요. 이제 퀴즈를 풀어보세요!",
      afterIncorrect: "문학은 마음의 양식입니다. 조금 더 생각해보세요!",
      beforeMinigame: "특별한 게임을 준비했습니다! 성공하면 이번 단계를 건너뛸 수 있어요!",
      afterMinigameSuccess: "훌륭한 실력이군요! 다음 단계로 바로 넘어갈 수 있습니다!",
      afterMinigameFailure: "아쉽게도 게임에서 실패했네요. 하지만 괜찮습니다! 퀴즈를 풀어보세요!",
      hint: "아빠는 시원한 곳에 있어요. 냉장고나 에어컨 근처 같은 곳을 생각해보세요.",
      farewell: "문학의 아름다움을 잘 이해했습니다. 다음 관문으로 가세요!"
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
    wizardName: "역사의 수호자",
    wizardEmoji: "🏛️",
    wizardDescription: "우리나라의 역사와 전통을 지키는 지혜로운 수호자",
    dialogues: {
      intro: "안녕하세요! 나는 역사의 수호자입니다. 우리나라의 역사와 전통으로 가족을 구출해보세요!",
      beforeQuiz: "우리나라의 역사에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "훌륭합니다! 우리나라의 역사를 잘 이해하고 있군요. 이제 특별한 게임을 해보겠습니다.",
      afterIncorrect: "역사는 우리의 뿌리입니다. 조금 더 생각해보세요!",
      beforeMinigame: "🎮 역사의 마법으로 플래시 게임을 준비했습니다! 화면을 터치하거나 드래그해서 조작하세요! 성공하면 이번 단계를 건너뛸 수 있어요!",
      afterMinigameSuccess: "🏆 역사적인 게임 실력이군요! 플래시 게임을 완벽하게 클리어했네요! 다음 단계로 바로 넘어갈 수 있습니다!",
      afterMinigameFailure: "😅 아쉽게도 플래시 게임에서 실패했네요. 하지만 괜찮습니다! 퀴즈를 풀어보세요!",
      hint: "엄마는 달콤한 냄새가 나는 곳에 있어요. 향수나 꽃 같은 것을 생각해보세요.",
      farewell: "역사의 지혜를 잘 이해했습니다. 다음 관문으로 가세요!"
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
    wizardName: "과학의 수호자",
    wizardEmoji: "🔬",
    wizardDescription: "신비로운 과학의 세계를 탐험하는 지혜로운 수호자",
    dialogues: {
      intro: "반갑습니다! 나는 과학의 수호자입니다. 신비로운 과학의 세계로 가족을 찾아보세요!",
      beforeQuiz: "과학에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "완벽합니다! 과학을 잘 이해하고 있군요. 이제 퀴즈를 풀어보세요!",
      afterIncorrect: "과학은 세상의 비밀을 밝혀줍니다. 조금 더 생각해보세요!",
      beforeMinigame: "특별한 게임을 준비했습니다! 성공하면 이번 단계를 건너뛸 수 있어요!",
      afterMinigameSuccess: "훌륭한 실력이군요! 다음 단계로 바로 넘어갈 수 있습니다!",
      afterMinigameFailure: "아쉽게도 게임에서 실패했네요. 하지만 괜찮습니다! 퀴즈를 풀어보세요!",
      hint: "아빠는 맛있는 냄새가 나는 곳에 있어요. 부엌이나 식당 같은 곳을 생각해보세요.",
      farewell: "과학의 소중함을 잘 이해했습니다. 다음 관문으로 가세요!"
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
    wizardName: "예술의 수호자",
    wizardEmoji: "🎨",
    wizardDescription: "아름다운 예술 작품들을 지키는 창조적인 수호자",
    dialogues: {
      intro: "안녕하세요! 나는 예술의 수호자입니다. 아름다운 예술의 지혜로 가족을 구출해보세요!",
      beforeQuiz: "예술에 대해 얼마나 알고 있는지 확인해보겠습니다!",
      afterCorrect: "훌륭합니다! 예술을 잘 이해하고 있군요. 이제 퀴즈를 풀어보세요!",
      afterIncorrect: "예술은 마음의 아름다움을 표현합니다. 조금 더 생각해보세요!",
      beforeMinigame: "특별한 게임을 준비했습니다! 성공하면 이번 단계를 건너뛸 수 있어요!",
      afterMinigameSuccess: "훌륭한 실력이군요! 다음 단계로 바로 넘어갈 수 있습니다!",
      afterMinigameFailure: "아쉽게도 게임에서 실패했네요. 하지만 괜찮습니다! 퀴즈를 풀어보세요!",
      hint: "엄마는 따뜻한 손길이 있는 곳에 있어요. 손으로 만질 수 있는 곳을 생각해보세요.",
      farewell: "예술의 아름다움을 잘 이해했습니다. 마지막 관문으로 가세요!"
    },
    hints: {
      mom: "엄마는 따뜻한 손길이 있는 곳에 있어요",
      dad: "아빠는 강한 팔이 있는 곳에 있어요"
    },
    storyProgress: "일곱 번째 관문을 통과했습니다! 엄마의 네 번째 힌트를 얻었어요."
  }
];

export const getWizardDialogueByLevel = (level: number): WizardDialogue | undefined => {
  return wizardDialogues.find(dialogue => dialogue.level === level);
};

export const getAllWizardDialogues = (): WizardDialogue[] => {
  return wizardDialogues;
};
