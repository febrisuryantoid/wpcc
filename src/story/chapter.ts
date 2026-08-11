export interface ChapterInfo {
  id: string;
  number: string;
  title: string;
  description?: string;
}

export const CHAPTER_NAMES: Record<string, string> = {
  chapter_01: 'WordPress Fundamentals',
  chapter_02: 'Career in WordPress',
  chapter_03: 'WordPress & Open Source',
  chapter_04: 'Community & WordPress Events',
  chapter_05: 'WordPress Campus Connect',
  chapter_06: 'Build, Connect & Grow',
};

export const CHAPTER_DEFINITIONS: Record<string, ChapterInfo> = {
  chapter_01: {
    id: 'chapter_01',
    number: 'CHAPTER 1',
    title: 'WordPress Fundamentals',
    description: 'Mengenal WordPress dari dasar, mulai dari konsep CMS, fungsi, ekosistem, hingga perannya dalam membangun website modern.'
  },
  chapter_02: {
    id: 'chapter_02',
    number: 'CHAPTER 2',
    title: 'Career in WordPress',
    description: 'Menjelajahi berbagai career path dalam ekosistem WordPress, dari development dan design hingga SEO, marketing, e-commerce, consulting, dan education.'
  },
  chapter_03: {
    id: 'chapter_03',
    number: 'CHAPTER 3',
    title: 'WordPress & Open Source',
    description: 'Memahami siapa yang mengembangkan WordPress, bagaimana open-source project dikelola, dan bagaimana perusahaan, contributor, serta komunitas membentuk ekosistemnya.'
  },
  chapter_04: {
    id: 'chapter_04',
    number: 'CHAPTER 4',
    title: 'Community & WordPress Events',
    description: 'Mengenal WordPress Community melalui Meetup, WordCamp, knowledge sharing, networking, dan berbagai bentuk kontribusi dalam ekosistem global.'
  },
  chapter_05: {
    id: 'chapter_05',
    number: 'CHAPTER 5',
    title: 'WordPress Campus Connect',
    description: 'Memahami bagaimana WordPress Campus Connect membawa hands-on learning, career exposure, community connection, dan digital skills ke lingkungan kampus.'
  },
  chapter_06: {
    id: 'chapter_06',
    number: 'CHAPTER 6',
    title: 'Build, Connect & Grow',
    description: 'Mengubah pembelajaran menjadi pengalaman nyata melalui workshop, community connection, resources, dan langkah berikutnya untuk terus berkembang bersama WordPress.'
  }
};

export const isChapterSlide = (sceneId: string): boolean => {
  return ['scene_03', 'scene_16', 'scene_18', 'scene_25', 'scene_35', 'scene_38'].includes(sceneId);
};

export const getChapterNumber = (sceneId: string): string => {
  switch (sceneId) {
    case 'scene_03': return 'CHAPTER 1';
    case 'scene_16': return 'CHAPTER 2';
    case 'scene_18': return 'CHAPTER 3';
    case 'scene_25': return 'CHAPTER 4';
    case 'scene_35': return 'CHAPTER 5';
    case 'scene_38': return 'CHAPTER 6';
    default: return '';
  }
};
