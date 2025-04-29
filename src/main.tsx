// ✅ Handle redirect from 404.html for SPA routing
const redirect = new URLSearchParams(window.location.search).get('redirect');
if (redirect) {
  window.history.replaceState(null, '', redirect);
}

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element and ensure it exists
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found!");
} else {
  // Keep track of the last scrolled section and time to prevent duplicate scrolling
  let lastScrolledTo = '';
  let lastScrollTime = 0;
  const SCROLL_COOLDOWN = 1000; // 1 second cooldown between scrolls
  
  // Set up hash-based navigation scrolling
  const scrollToHashElement = () => {
    const { hash, pathname } = window.location;
    
    // Only scroll to hash element if we're on the homepage
    if (hash && pathname === '/') {
      const elementId = hash.replace('#', '');
      const now = Date.now();
      if (elementId === lastScrolledTo && (now - lastScrollTime) < SCROLL_COOLDOWN) {
        console.log("Ignoring duplicate scroll request to:", elementId);
        return;
      }
      
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          console.log("Scrolling to element:", elementId);
          element.scrollIntoView({ behavior: 'smooth' });
          lastScrolledTo = elementId;
          lastScrollTime = Date.now();
        } else {
          console.warn("Element not found with id:", elementId);
        }
      }, 300);
    }
  };

  window.addEventListener('load', scrollToHashElement);
  window.addEventListener('hashchange', () => {
    console.log("Hash changed:", window.location.hash);
    scrollToHashElement();
  });
  window.addEventListener('popstate', () => {
    console.log("Popstate event triggered, current location:", window.location.pathname, window.location.hash);
    scrollToHashElement();
  });

  let initialRender = true;
  const observer = new MutationObserver(() => {
    if (initialRender) {
      console.log("Initial render complete, checking for hash navigation");
      scrollToHashElement();
      initialRender = false;
    }
  });

  observer.observe(rootElement, { 
    childList: true, 
    subtree: true,
    attributes: false,
    characterData: false
  });

  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
