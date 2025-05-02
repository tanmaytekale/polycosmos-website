// src/components/SplatViewer.tsx
import { useState, useEffect } from 'react';

const SplatViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Your Splatter.app URL (replace with your link)
  const splatUrl = "https://splatter.app/s/3eg-doy";

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        className="viewer-btn"
        onClick={() => {
          setIsOpen(true);
          setIsLoading(true);
        }}
      >
        View in 3D
      </button>

      {/* Modal Overlay */}
      <div className={`viewer-overlay ${isOpen ? 'active' : ''}`}>
        <div className="viewer-content">
          {isLoading && <div className="spinner" />}
          <iframe
            className="splat-iframe"
            src={isOpen ? splatUrl : ''}
            onLoad={() => setIsLoading(false)}
            allow="fullscreen"
          />
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✕ Close
          </button>
        </div>
      </div>

      {/* Styles (CSS-in-JS) */}
      <style jsx>{`
        .viewer-btn {
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .viewer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .viewer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .viewer-overlay.active {
          opacity: 1;
          pointer-events: all;
        }
        .viewer-content {
          width: 90%;
          max-width: 1200px;
          height: 80vh;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(2, 6, 23, 0.95));
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          position: relative;
        }
        .splat-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #6366f1;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default SplatViewer;
