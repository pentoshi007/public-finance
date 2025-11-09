'use client';

import { useState, useEffect, useCallback } from 'react';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleFullscreen, isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#f1f5f9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      {/* Controls (hidden in fullscreen) */}
      {!isFullscreen && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          gap: '10px',
          backgroundColor: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            style={{
              padding: '8px 16px',
              backgroundColor: currentSlide === 0 ? '#e2e8f0' : '#2563eb',
              color: currentSlide === 0 ? '#94a3b8' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              fontWeight: '600'
            }}
          >
            ← Previous
          </button>
          <span style={{
            padding: '8px 16px',
            backgroundColor: '#f1f5f9',
            borderRadius: '4px',
            fontWeight: '600',
            color: '#334155'
          }}>
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            style={{
              padding: '8px 16px',
              backgroundColor: currentSlide === slides.length - 1 ? '#e2e8f0' : '#2563eb',
              color: currentSlide === slides.length - 1 ? '#94a3b8' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
              fontWeight: '600'
            }}
          >
            Next →
          </button>
          <button
            onClick={toggleFullscreen}
            style={{
              padding: '8px 16px',
              backgroundColor: '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
              marginLeft: '10px'
            }}
          >
            Fullscreen (F)
          </button>
        </div>
      )}

      {/* Slide Container */}
      <div style={{
        width: isFullscreen ? '100vw' : 'min(90vw, 1280px)',
        height: isFullscreen ? '100vh' : 'min(90vh, 720px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isFullscreen ? '#f8fafc' : 'white',
        boxShadow: isFullscreen ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Keyboard hints (hidden in fullscreen) */}
      {!isFullscreen && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          fontSize: '14px',
          fontFamily: 'monospace'
        }}>
          ← → Arrow keys to navigate | F for fullscreen | ESC to exit
        </div>
      )}
    </div>
  );
}
