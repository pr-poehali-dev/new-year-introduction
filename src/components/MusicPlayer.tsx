import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const tracks = [
  {
    title: 'Jingle Bells',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'Winter Wonderland',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'Silent Night',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowPlayer(!showPlayer)}
          className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-[#E5DEFF]"
        >
          <Icon name="Music" size={28} className="text-[#8E9196]" />
        </button>
      </div>

      {showPlayer && (
        <div className="fixed bottom-24 right-6 z-50 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-80 border border-white/30 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#222226]">Новогодняя музыка</h3>
            <button
              onClick={() => setShowPlayer(false)}
              className="text-[#8E9196] hover:text-[#222226] transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="mb-4">
            <div className="text-center mb-4">
              <div className="text-2xl mb-2">🎵</div>
              <p className="text-sm text-[#403E43] font-medium">{tracks[currentTrack].title}</p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTrack}
                className="w-10 h-10 flex items-center justify-center bg-[#E5DEFF]/50 rounded-full hover:bg-[#E5DEFF] transition-colors"
              >
                <Icon name="SkipBack" size={20} className="text-[#222226]" />
              </button>

              <button
                onClick={togglePlay}
                className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] rounded-full hover:scale-110 transition-transform shadow-lg"
              >
                {isPlaying ? (
                  <Icon name="Pause" size={24} className="text-[#222226]" />
                ) : (
                  <Icon name="Play" size={24} className="text-[#222226]" />
                )}
              </button>

              <button
                onClick={nextTrack}
                className="w-10 h-10 flex items-center justify-center bg-[#E5DEFF]/50 rounded-full hover:bg-[#E5DEFF] transition-colors"
              >
                <Icon name="SkipForward" size={20} className="text-[#222226]" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Icon name="Volume2" size={18} className="text-[#8E9196]" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-[#E5DEFF]/50 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#8E9196] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
            />
          </div>

          <audio
            ref={audioRef}
            src={tracks[currentTrack].url}
            onEnded={nextTrack}
          />
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
