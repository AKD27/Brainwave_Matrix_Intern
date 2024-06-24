import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from './SongCard';

const SongList = ({ onPlay }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="song-list">
      {songs.map(song => (
        <SongCard key={song.id} song={song} onPlay={onPlay} />
      ))}
    </div>
  );
};

export default SongList;
