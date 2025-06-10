import type React from 'react';
import type { Podcast } from './types';

export interface EpisodeModalProps {
  episode: Podcast;
  onClose: () => void;
  currentChapter: number;
  isPlaying: boolean;
  onPlay: (chapterIndex: number) => void;
  onTogglePlay: () => void;
  onNextChapter: () => void;
  onPrevChapter: () => void;
  currentTime: number;
  duration: number;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  playbackSpeed: number;
  onSpeedChange: (speed: number) => void;
  isRepeat: boolean;
  onToggleRepeat: () => void;
  isShuffle: boolean;
  onToggleShuffle: () => void;
}
