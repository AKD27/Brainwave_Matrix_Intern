
import React from 'react';

const HeroSection = () => {
  const albums = [
    { src: "./images/album-1.jpeg", alt: "Album 1", artist: "Arijit Singh" },
    { src: "./images/album-2.jpeg", alt: "Album 2", artist: "Honey Singh" },
    { src: "./images/album-3.jpeg", alt: "Album 3", artist: "Karan Aujla" },
    { src: "./images/album-4.jpeg", alt: "Album 4", artist: "Mankirt Aulakh" },
    { src: "./images/album-5.jpeg", alt: "Album 5", artist: "Jass Manak" },
    { src: "./images/album-6.jpeg", alt: "Album 6", artist: "Karan Randhawa" },
    { src: "./images/album-7.jpeg", alt: "Album 7", artist: "Parmish Verma" },
    { src: "./images/album-8.jpeg", alt: "Album 8", artist: "Jassie Gill" },
    { src: "./images/album-9.jpeg", alt: "Album 9", artist: "Babbu Maan" },
    { src: "./images/album-10.jpeg", alt: "Album 10", artist: "Amrit Maan" },
    { src: "./images/album-11.jpeg", alt: "Album 11", artist: "Sharry Maan" },
    { src: "./images/album-12.jpeg", alt: "Album 12", artist: "Arman Malik" },
    { src: "./images/album-13.jpeg", alt: "Album 13", artist: "Neha Kakkar " },
    { src: "./images/album-14.jpeg", alt: "Album 14", artist: "Billie Eilish" },
    { src: "./images/album-15.jpeg", alt: "Album 15", artist: "KK" },
    { src: "./images/album-16.jpeg", alt: "Album 16", artist: "Sherya Ghosal" },
    { src: "./images/album-17.jpeg", alt: "Album 17", artist: "Sonu Nigam" },
    { src: "./images/album-18.jpeg", alt: "Album 18", artist: "Darshan Raval" }
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Geetyantra</h1>
        <h2>Discover and Stream Your Favorite Music</h2>
        <input type="text" className="search-bar" placeholder="Search for songs, artists, albums..." /> 
        <button className="cta-button">Search</button>
        <div className="album-samples">
          {albums.map((album, index) => (
            <div key={index} className="album-card">
              <img src={album.src} alt={album.alt} className="album-cover" />
              <h4>{album.artist}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

