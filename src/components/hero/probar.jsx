import React, { useRef, useEffect } from "react";

export default function ProgressBar({ duration = 10000, onComplete }) {
  const progressBarRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(() => {
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = 'translateX(0)';
        
        requestAnimationFrame(() => {
          if (progressBarRef.current) {
            progressBarRef.current.style.transition = `transform ${duration}ms linear`;
            progressBarRef.current.style.transform = 'translateX(100%)';
          }
        });
      }
    });
    
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, duration);
    
    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration, onComplete]);

  return (
    <div className="absolute bottom-6 left-0 right-0 px-4 md:px-8 z-20">
      <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden shadow-md border border-white/20">
        <div className="w-full h-full" ref={progressBarRef}>
          <div className="h-full w-full bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}