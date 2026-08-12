import React, { useEffect, useState } from 'react';
import { StoryEngine } from './story/StoryEngine';
import { BackgroundMusicProvider } from './story/ui/BackgroundMusicContext';
import { PrintPage } from './PrintPage';

export default function App() {
  const [isPrint, setIsPrint] = useState(false);

  // Load saved dark mode preference and check path
  useEffect(() => {
    document.documentElement.classList.add('dark');
    if (window.location.pathname === '/print') {
      setIsPrint(true);
    }
  }, []);

  if (isPrint) {
    return <PrintPage />;
  }

  return (
    <BackgroundMusicProvider>
      <StoryEngine />
    </BackgroundMusicProvider>
  );
}
