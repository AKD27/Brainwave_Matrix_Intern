import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaPlay, FaPause } from 'react-icons/fa';

const MusicPlayer = ({ currentSong, isPlaying, onPlayPause }) => {
  const animation = useSpring({
    transform: isPlaying ? 'translateY(0)' : 'translateY(100%)'
  });

  return (
    <animated.div className="music-player" style={animation}>
      {currentSong && (
        <>
          <img src={currentSong.cover} alt={currentSong.title} />
          <div className="song-info">
            <h3>{currentSong.title}</h3>
            <p>{currentSong.artist}</p>
          </div>
          <button onClick={onPlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </>
      )}
    </animated.div>
  );
};

export default MusicPlayer;
