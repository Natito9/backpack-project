import React from 'react';

const SkipButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
    // Smooth scroll to #hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback: update hash if section not found
      window.location.hash = '#hero';
    }
  };

  return (
    <>
      <button className="skip-btn" onClick={handleClick}>
        skip
      </button>
      <style jsx>{`
        .skip-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          padding: 14px 36px;
          background: #ddd;
          color: #222;
          font-size: 1.2rem;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          z-index: 10;
          font-family: inherit;
          transition: background 0.2s;
          text-transform: lowercase;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .skip-btn:hover,
        .skip-btn:focus {
          background: #ccc;
        }
        @media (max-width: 600px) {
          .skip-btn {
            padding: 10px 24px;
            font-size: 1rem;
            bottom: 12px;
            right: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default SkipButton;
