import React, { useEffect } from 'react';
import { StoryEngine } from './story/StoryEngine';

export default function App() {
  // Load saved dark mode preference
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <StoryEngine />
    </>
  );
}
