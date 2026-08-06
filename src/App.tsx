import React, { useEffect } from 'react';
import { StoryEngine } from './story/StoryEngine';
import { BackgroundMusicProvider } from './story/ui/BackgroundMusicContext';

export default function App() {
  // Load saved dark mode preference
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <BackgroundMusicProvider>
      <StoryEngine />
    </BackgroundMusicProvider>
  );
}
