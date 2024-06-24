import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SongList from './components/SongList';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import './App.css';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <SongList onPlay={handlePlaySong} />
      <MusicPlayer 
        currentSong={currentSong} 
        isPlaying={isPlaying} 
        onPlayPause={handlePlayPause} 
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

