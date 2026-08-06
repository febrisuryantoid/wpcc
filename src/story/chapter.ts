export interface ChapterInfo {
  id: string;
  number: string;
  title: string;
  description?: string;
}

export const CHAPTER_NAMES: Record<string, string> = {
  chapter_01: 'Welcome to WordPress Campus Connect',
  chapter_02: 'Website & CMS Foundations',
  chapter_03: 'Career Opportunities',
  chapter_04: 'WordPress Modern',
  chapter_05: 'Hands-on Workshop',
  chapter_06: 'Penutup & Langkah Selanjutnya',
};

export const CHAPTER_DEFINITIONS: Record<string, ChapterInfo> = {
  chapter_01: {
    id: 'chapter_01',
    number: 'CHAPTER 1',
    title: 'Welcome to WordPress Campus Connect',
    description: 'Pengenalan ekosistem dan visi WordPress Campus Connect'
  },
  chapter_02: {
    id: 'chapter_02',
    number: 'CHAPTER 2',
    title: 'Website & CMS Foundations',
    description: 'Dasar-dasar website, CMS, dan arsitektur web modern'
  },
  chapter_03: {
    id: 'chapter_03',
    number: 'CHAPTER 3',
    title: 'Career Opportunities',
    description: 'Peluang karir dan potensi industri di ekosistem WordPress'
  },
  chapter_04: {
    id: 'chapter_04',
    number: 'CHAPTER 4',
    title: 'WordPress Modern',
    description: 'Full Site Editing, Block Editor, dan arsitektur modern'
  },
  chapter_05: {
    id: 'chapter_05',
    number: 'CHAPTER 5',
    title: 'Hands-on Workshop',
    description: 'Praktik langsung membangun website profesional'
  },
  chapter_06: {
    id: 'chapter_06',
    number: 'CHAPTER 6',
    title: 'Penutup & Langkah Selanjutnya',
    description: 'Kesimpulan dan langkah pengembangan karir Anda'
  }
};

export const isChapterSlide = (sceneId: string): boolean => {
  return ['scene_03', 'scene_13', 'scene_18', 'scene_23', 'scene_33', 'scene_36'].includes(sceneId);
};

export const getChapterNumber = (sceneId: string): string => {
  switch (sceneId) {
    case 'scene_03': return 'CHAPTER 1';
    case 'scene_13': return 'CHAPTER 2';
    case 'scene_18': return 'CHAPTER 3';
    case 'scene_23': return 'CHAPTER 4';
    case 'scene_33': return 'CHAPTER 5';
    case 'scene_36': return 'CHAPTER 6';
    default: return '';
  }
};
