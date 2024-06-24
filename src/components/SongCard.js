import React from 'react';

const SongCard = ({ song, onPlay }) => {
  return (
    <div className="song-card" onClick={() => onPlay(song)}>
      <img src={song.cover} alt={song.title} />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
    </div>
  );
};

export default SongCard;
