import { SceneConfig } from '../types';

export type ShapeType = 
  | 'helios'
  | 'auriga'
  | 'dwarf'
  | 'ignis'
  | 'ceti'
  | 'eridani'
  | 'proxima'
  | 'alpha'
  | 'sirius'
  | 'orion'
  | 'vega'
  | 'centauri';

export interface RGBTuple {
  r: number;
  g: number;
  b: number;
}

export interface CelestialPalette {
  dark: RGBTuple;
  base: RGBTuple;
  bright: RGBTuple;
  limb: RGBTuple;
  corona: RGBTuple;
}

export interface ContentCategory {
  category: string;
  shape: ShapeType;
  color: string;
  label: string;
  palette: CelestialPalette;
}

// 12 Beautiful Fictional Space Bodies with Exact Floating Point Colors from the User's Three.js presets
export const CELESTIAL_PALETTES: Record<ShapeType, { label: string; color: string; palette: CelestialPalette }> = {
  helios: {
    label: 'Helios (Blue)',
    color: '#3b82f6',
    palette: {
      dark: { r: 0.10, g: 0.20, b: 0.40 },
      base: { r: 0.20, g: 0.50, b: 0.95 },
      bright: { r: 0.60, g: 0.80, b: 1.00 },
      limb: { r: 0.15, g: 0.35, b: 0.75 },
      corona: { r: 0.30, g: 0.60, b: 1.00 }
    }
  },
  auriga: {
    label: 'Auriga (Emerald)',
    color: '#10b981',
    palette: {
      dark: { r: 0.05, g: 0.30, b: 0.15 },
      base: { r: 0.10, g: 0.70, b: 0.45 },
      bright: { r: 0.50, g: 0.95, b: 0.75 },
      limb: { r: 0.08, g: 0.50, b: 0.30 },
      corona: { r: 0.20, g: 0.85, b: 0.55 }
    }
  },
  dwarf: {
    label: 'Dwarf (Amber)',
    color: '#eab308',
    palette: {
      dark: { r: 0.35, g: 0.25, b: 0.05 },
      base: { r: 0.90, g: 0.70, b: 0.10 },
      bright: { r: 1.00, g: 0.95, b: 0.50 },
      limb: { r: 0.70, g: 0.50, b: 0.05 },
      corona: { r: 0.95, g: 0.80, b: 0.20 }
    }
  },
  ignis: {
    label: 'Ignis (Crimson)',
    color: '#ef4444',
    palette: {
      dark: { r: 0.35, g: 0.05, b: 0.05 },
      base: { r: 0.90, g: 0.25, b: 0.25 },
      bright: { r: 1.00, g: 0.70, b: 0.70 },
      limb: { r: 0.70, g: 0.15, b: 0.15 },
      corona: { r: 0.95, g: 0.35, b: 0.35 }
    }
  },
  ceti: {
    label: 'Ceti (Amethyst)',
    color: '#a855f7',
    palette: {
      dark: { r: 0.20, g: 0.05, b: 0.35 },
      base: { r: 0.65, g: 0.25, b: 0.95 },
      bright: { r: 0.85, g: 0.60, b: 1.00 },
      limb: { r: 0.50, g: 0.15, b: 0.80 },
      corona: { r: 0.75, g: 0.40, b: 1.00 }
    }
  },
  eridani: {
    label: 'Eridani (Teal)',
    color: '#06b6d4',
    palette: {
      dark: { r: 0.05, g: 0.25, b: 0.30 },
      base: { r: 0.10, g: 0.65, b: 0.80 },
      bright: { r: 0.55, g: 0.90, b: 1.00 },
      limb: { r: 0.08, g: 0.45, b: 0.60 },
      corona: { r: 0.20, g: 0.80, b: 0.95 }
    }
  },
  proxima: {
    label: 'Proxima (Orange)',
    color: '#f97316',
    palette: {
      dark: { r: 0.35, g: 0.10, b: 0.00 },
      base: { r: 0.95, g: 0.45, b: 0.10 },
      bright: { r: 1.00, g: 0.80, b: 0.40 },
      limb: { r: 0.75, g: 0.30, b: 0.05 },
      corona: { r: 0.98, g: 0.55, b: 0.20 }
    }
  },
  alpha: {
    label: 'Alpha (Rose)',
    color: '#ec4899',
    palette: {
      dark: { r: 0.35, g: 0.05, b: 0.20 },
      base: { r: 0.90, g: 0.25, b: 0.60 },
      bright: { r: 1.00, g: 0.70, b: 0.85 },
      limb: { r: 0.75, g: 0.15, b: 0.45 },
      corona: { r: 0.95, g: 0.35, b: 0.70 }
    }
  },
  sirius: {
    label: 'Sirius (Lime)',
    color: '#84cc16',
    palette: {
      dark: { r: 0.15, g: 0.25, b: 0.02 },
      base: { r: 0.55, g: 0.80, b: 0.10 },
      bright: { r: 0.85, g: 0.98, b: 0.45 },
      limb: { r: 0.40, g: 0.65, b: 0.05 },
      corona: { r: 0.65, g: 0.90, b: 0.15 }
    }
  },
  orion: {
    label: 'Orion (Indigo)',
    color: '#6366f1',
    palette: {
      dark: { r: 0.12, g: 0.10, b: 0.40 },
      base: { r: 0.38, g: 0.40, b: 0.95 },
      bright: { r: 0.70, g: 0.72, b: 1.00 },
      limb: { r: 0.28, g: 0.28, b: 0.80 },
      corona: { r: 0.48, g: 0.50, b: 0.98 }
    }
  },
  vega: {
    label: 'Vega (Fuchsia)',
    color: '#d946ef',
    palette: {
      dark: { r: 0.30, g: 0.05, b: 0.30 },
      base: { r: 0.85, g: 0.25, b: 0.90 },
      bright: { r: 1.00, g: 0.65, b: 1.00 },
      limb: { r: 0.70, g: 0.15, b: 0.75 },
      corona: { r: 0.90, g: 0.35, b: 0.95 }
    }
  },
  centauri: {
    label: 'Centauri (Sky Blue)',
    color: '#0ea5e9',
    palette: {
      dark: { r: 0.05, g: 0.20, b: 0.35 },
      base: { r: 0.15, g: 0.60, b: 0.90 },
      bright: { r: 0.60, g: 0.88, b: 1.00 },
      limb: { r: 0.10, g: 0.45, b: 0.75 },
      corona: { r: 0.25, g: 0.75, b: 0.98 }
    }
  }
};

// Beautifully map 12 fictional stars to our WordPress workshop presentation slides
export const SLIDE_CLASSIFICATIONS: Record<string, ContentCategory> = {
  scene_01: { category: 'intro', shape: 'helios', ...CELESTIAL_PALETTES.helios },
  scene_02: { category: 'profile', shape: 'auriga', ...CELESTIAL_PALETTES.auriga },
  scene_03: { category: 'welcome', shape: 'dwarf', ...CELESTIAL_PALETTES.dwarf },
  scene_04: { category: 'objectives', shape: 'ignis', ...CELESTIAL_PALETTES.ignis },
  scene_05: { category: 'agenda', shape: 'ceti', ...CELESTIAL_PALETTES.ceti },
  scene_06: { category: 'examples', shape: 'eridani', ...CELESTIAL_PALETTES.eridani },
  scene_07: { category: 'how_works', shape: 'proxima', ...CELESTIAL_PALETTES.proxima },
  scene_08: { category: 'network', shape: 'alpha', ...CELESTIAL_PALETTES.alpha },
  scene_09: { category: 'infrastructure', shape: 'sirius', ...CELESTIAL_PALETTES.sirius },
  scene_10: { category: 'analogy', shape: 'orion', ...CELESTIAL_PALETTES.orion },
  scene_11: { category: 'history', shape: 'vega', ...CELESTIAL_PALETTES.vega },
  scene_12: { category: 'developers', shape: 'centauri', ...CELESTIAL_PALETTES.centauri },
  scene_13: { category: 'evolution', shape: 'helios', ...CELESTIAL_PALETTES.helios },
  scene_14: { category: 'global', shape: 'auriga', ...CELESTIAL_PALETTES.auriga },
  scene_15: { category: 'market', shape: 'dwarf', ...CELESTIAL_PALETTES.dwarf },
  scene_16: { category: 'advantages', shape: 'ignis', ...CELESTIAL_PALETTES.ignis },
  scene_17: { category: 'use_cases', shape: 'ceti', ...CELESTIAL_PALETTES.ceti },
  scene_18: { category: 'comparison', shape: 'eridani', ...CELESTIAL_PALETTES.eridani },
  scene_19: { category: 'wp_org', shape: 'proxima', ...CELESTIAL_PALETTES.proxima },
  scene_20: { category: 'career_chapter', shape: 'alpha', ...CELESTIAL_PALETTES.alpha },
  scene_21: { category: 'opportunities', shape: 'sirius', ...CELESTIAL_PALETTES.sirius },
  scene_22: { category: 'why_students', shape: 'orion', ...CELESTIAL_PALETTES.orion },
  scene_23: { category: 'skills_learned', shape: 'vega', ...CELESTIAL_PALETTES.vega },
  scene_24: { category: 'modern_chapter', shape: 'centauri', ...CELESTIAL_PALETTES.centauri },
  scene_25: { category: 'dashboard_intro', shape: 'helios', ...CELESTIAL_PALETTES.helios },
  scene_26: { category: 'dashboard_menu', shape: 'auriga', ...CELESTIAL_PALETTES.auriga },
  scene_27: { category: 'posts_pages', shape: 'dwarf', ...CELESTIAL_PALETTES.dwarf },
  scene_28: { category: 'media_library', shape: 'ignis', ...CELESTIAL_PALETTES.ignis },
  scene_29: { category: 'appearance_menu', shape: 'ceti', ...CELESTIAL_PALETTES.ceti },
  scene_30: { category: 'plugins_menu', shape: 'eridani', ...CELESTIAL_PALETTES.eridani },
  scene_31: { category: 'gutenberg', shape: 'proxima', ...CELESTIAL_PALETTES.proxima },
  scene_32: { category: 'block_concepts', shape: 'alpha', ...CELESTIAL_PALETTES.alpha },
  scene_33: { category: 'why_blocks', shape: 'sirius', ...CELESTIAL_PALETTES.sirius },
  scene_34: { category: 'patterns', shape: 'orion', ...CELESTIAL_PALETTES.orion },
  scene_35: { category: 'site_editor_intro', shape: 'vega', ...CELESTIAL_PALETTES.vega },
  scene_36: { category: 'editor_components', shape: 'centauri', ...CELESTIAL_PALETTES.centauri },
  scene_37: { category: 'global_styles', shape: 'helios', ...CELESTIAL_PALETTES.helios },
  scene_38: { category: 'workflow', shape: 'auriga', ...CELESTIAL_PALETTES.auriga },
  scene_39: { category: 'workshop_chapter', shape: 'dwarf', ...CELESTIAL_PALETTES.dwarf },
  scene_40: { category: 'workshop_practice', shape: 'ignis', ...CELESTIAL_PALETTES.ignis },
  scene_41: { category: 'tools_used', shape: 'ceti', ...CELESTIAL_PALETTES.ceti },
  scene_42: { category: 'tips_before', shape: 'eridani', ...CELESTIAL_PALETTES.eridani },
  scene_43: { category: 'ready_build', shape: 'proxima', ...CELESTIAL_PALETTES.proxima },
  scene_44: { category: 'closing_chapter', shape: 'alpha', ...CELESTIAL_PALETTES.alpha },
  scene_45: { category: 'contact', shape: 'sirius', ...CELESTIAL_PALETTES.sirius },
  scene_46: { category: 'build_first', shape: 'orion', ...CELESTIAL_PALETTES.orion }
};

export const getSlideClassification = (sceneId: string): ContentCategory => {
  if (SLIDE_CLASSIFICATIONS[sceneId]) {
    return SLIDE_CLASSIFICATIONS[sceneId];
  }
  return { category: 'general', shape: 'helios', ...CELESTIAL_PALETTES.helios };
};
