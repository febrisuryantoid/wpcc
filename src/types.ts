export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  layout: 
    | 'hero' 
    | 'biography' 
    | 'speaker-credibility'
    | 'house-analogy'
    | 'domain-explanation'
    | 'hosting-explanation'
    | 'wordpress-cms'
    | 'wordpress-vs'
    | 'wpcom-reasons'
    | 'theme-explanation'
    | 'plugin-explanation'
    | 'dashboard-explanation'
    | 'pages-vs-posts'
    | 'website-types'
    | 'brand-showcase'
    | 'action-next'
    | 'ice-breaking'
    | 'social-website'
    | 'website-definition'
    | 'wordpress-com'
    | 'wordpress-org'
    | 'agenda'
    | 'pages-definition'
    | 'posts-definition'
    | 'conceptual'
    | 'definition' 
    | 'comparison'
    | 'flow-diagram'
    | 'analogy-card'
    | 'menu-grid'
    | 'market-share' 
    | 'careers' 
    | 'open-source'
    | 'community-grid'
    | 'flagship' 
    | 'checklist' 
    | 'live-demo'
    | 'challenge' 
    | 'resources' 
    | 'domain-definition'
    | 'domain-analogy'
    | 'hosting-definition'
    | 'hosting-analogy'
    | 'wordpress-definition'
    | 'wordpress-analogy'
    | 'theme-definition'
    | 'theme-analogy'
    | 'plugin-definition'
    | 'plugin-analogy'
    | 'qanda';
  content?: {
    heading?: string;
    headline?: string;
    subheadline?: string;
    metrics?: { value: string; label: string; iconName?: string }[];
    description?: string;
    definition?: string;
    analogy?: string | {
      core?: string;
      analogyTitle?: string;
      analogyDesc?: string;
      keyPoints?: string[];
      withoutWp?: string;
      withWp?: string;
    };
    bulletPoints?: string[];
    speaker?: {
      name: string;
      title: string;
      bio: string;
      avatar?: string;
      roles?: string[];
      timeline?: { year: string; event: string }[];
      closingQuote?: string;
    };
    containsList?: string[];
    houseAnalogy?: {
      houseTitle: string;
      houseItems: { label: string; icon: string }[];
      websiteItems: { label: string; icon: string }[];
    };
    websiteExamples?: string[] | { title: string; desc?: string; iconName: string }[];
    examples?: string[];
    addressVisual?: {
      physical: string;
      digital: string;
    };
    keyTakeaway?: string;
    houseRooms?: string[];
    hostingFiles?: string[];
    flowDiagram?: string[];
    flow?: string[];
    canBuild?: string[];
    wpCom?: {
      tagline: string;
      subtitle: string;
      desc: string;
      points: string[];
    };
    wpOrg?: {
      tagline: string;
      subtitle: string;
      desc: string;
      points: string[];
    };
    conclusion?: string;
    focusHeader?: string;
    focusDo?: string;
    focusDont?: string;
    easySteps?: { step: number | string; title: string; desc: string }[];
    closing?: string;
    controlsList?: string[];
    variations?: { name: string; desc: string }[];
    pluginExamples?: { name: string; desc: string }[];
    tagline?: string;
    menus?: { name: string; label?: string; desc: string; iconName: string }[];
    pages?: {
      title: string;
      desc: string;
      examples: string[];
      analogy: string;
    };
    posts?: {
      title: string;
      desc: string;
      examples: string[];
      analogy: string;
    };
    headerNote?: string;
    typesList?: { title: string; desc: string; iconName: string }[];
    message?: string;
    brands?: { name: string; category: string; description: string }[];
    intro?: string;
    checklist?: string[];
    closingMessage?: string;
    learningItems?: string[];
    iceBreakingItems?: { question: string; emoji: string; note?: string }[];
    iceBreakingConclusion?: string;
    socialToWebsite?: {
      socials: { name: string; color: string; icon: string }[];
      points: string[];
    };
    wordpressCms?: {
      cmsDesc: string;
      diagram: string[];
      canBuild: string[];
    };
    wpComNotice?: {
      badge: string;
      explanation: string;
      withoutList: string[];
      cukupList: string[];
      steps: { number: number; title: string }[];
      closing: string;
    };
    wpOrgNotice?: {
      heading: string;
      explanation: string;
      useCases: string[];
      diagram: { from: string; steps: string[]; to: string };
    };
    conceptualCards?: { title: string; subtitle: string; desc: string; iconName: string }[];
    flowSteps?: { step: number; title: string; desc?: string; iconName?: string }[];
    menuGrid?: { name: string; label: string; desc: string; iconName: string }[];
    brandLogos?: { name: string; category: string; description: string; logoUrl?: string }[];
    careers?: { title: string; desc: string; iconName: string }[];
    marketShare?: { name: string; percentage: number; color: string }[];
    communityPillars?: { title: string; desc: string; iconName: string }[];
    checklistItems?: { title: string; desc: string; done: boolean }[];
    resourcesList?: { name: string; url: string; desc: string }[];
    challengeInfo?: {
      task: string;
      topics: string[];
      perks: string[];
    };
  };
  speakerNotes: string;
  bgDark?: boolean;
}

export type PresentationTrack = 'student-talk' | 'college-pitch';
