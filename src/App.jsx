import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const photos = [
    '/photos/photo1.jpg',
    '/photos/photo2.jpg',
    '/photos/photo3.jpg',
    '/photos/photo4.jpg',
  ];

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="hearts-background" />
      <div className="big-heart">❤️</div>

      <div className="container">
        {/* Hidden audio */}
        <audio
          ref={audioRef}
          src="/love-song.mp3"
          loop
          preload="auto"
          style={{ display: 'none' }}
        />

        {!isPlaying && (
          <button onClick={handlePlay} className="play-button">
            Click to Play Music 🎵
          </button>
        )}

        <h1>I ❤️ Love You</h1>

        <div className="gallery">
          {photos.map((photo, i) => (
            <div key={i} className="photo-card">
              <img src={photo} alt={`Photo ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* Poem Section */}
        <div className="poem">
          <h2>Valentine’s Night</h2>
          <p>
            On Valentine’s night, beneath moon’s soft glow,<br />
            I met a girl I’d soon come to know.<br />
            A spark in her eyes, a laugh so true,<br />
            In that fleeting moment, my heart just knew.
          </p>
          <p>
            The stars above watched as we spoke,<br />
            Each word a promise, each smile a stroke.<br />
            Of something deeper, something bright,<br />
            A love that began in the hush of night.
          </p>
          <p>
            And now I stand with hope so high,<br />
            Asking you, love, with heart and sky—<br />
            Will you be mine, not just for tonight,<br />
            But for all our days, in love’s sweet light?
          </p>
          <p className="poem-date">🕊️ Written on 24 February 🕊️</p>
        </div>

        <div className="footer">
          You're not just my crush anymore. You're my whole heart 💖
        </div>
      </div>
    </>
  );
};

export default App;
