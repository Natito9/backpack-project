'use client';

import React, { useState, useEffect } from 'react';
import SkipButton from '../SkipButton/skipButton';

const LandingPage = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setScale(0.5);
      setOpacity(0);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setShowTitle(false);
    }, 2000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleSkip = () => {
    setShowTitle(false);
    window.location.hash = '#hero';
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url(../assets/images/background_flat_noemmo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {showTitle && (
        <h1
          style={{
            color: 'black',
            fontSize: '6rem',
            opacity: opacity,
            transform: `scale(${scale})`,
            transition: 'all 1s ease-out',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          WELCOME TO BACKPACK
        </h1>
      )}
      <SkipButton onClick={handleSkip} />
      <style jsx>{`
        .landing-bg {
          position: relative;
          height: 100vh;
          width: 100vw;
          background-image: url(../assets/images/background_flat_noemmo.png);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .landing-title {
          color: black;
          font-size: 6rem;
          text-align: center;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          margin: 0;
          padding: 0 1rem;
          line-height: 1.1;
          word-break: break-word;
        }
        @media (max-width: 900px) {
          .landing-title {
            font-size: 4rem;
          }
        }
        @media (max-width: 600px) {
          .landing-title {
            font-size: 2.2rem;
            padding: 0 0.5rem;
          }
          .landing-bg {
            background-position: top;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
