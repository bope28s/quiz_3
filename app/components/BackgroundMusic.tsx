'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 자동 재생 시도
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('자동 재생이 차단되었습니다. 사용자가 상호작용 후 재생됩니다.');
      }
    };

    // 페이지 로드 후 재생 시도
    const timer = setTimeout(playAudio, 1000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('음악 재생 오류:', error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/music/background.mp3" type="audio/mpeg" />
        <source src="/music/background.ogg" type="audio/ogg" />
        <source src="/music/background.wav" type="audio/wav" />
      </audio>

      {/* 음악 컨트롤 버튼 */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={togglePlay}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
          title={isPlaying ? '음악 일시정지' : '음악 재생'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button
          onClick={toggleMute}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
          title={isMuted ? '음소거 해제' : '음소거'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </>
  );
}
