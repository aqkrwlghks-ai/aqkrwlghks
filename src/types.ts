export type PackageId = 'MEMORY' | 'LEGACY' | 'FAITH';

export interface PackageDetail {
  id: PackageId;
  title: string;
  subTitle: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  recommendations: string[];
  duration: string;
  shootingCount: string;
  badge?: string;
}

export interface AdditionalService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// Server planning schemas
export interface ChapterPlan {
  chapterTitle: string;
  chapterFocus: string;
  interviewQuestions: string[];
}

export interface LegacyFilmPlanData {
  filmTitle: string;
  conceptOverview: string;
  chapters: ChapterPlan[];
  soundtrackAndVibe: string;
  faithChecklist: string;
  aiConsultantMessage: string;
}

export interface PlanFormState {
  clientName: string;
  focusType: PackageId;
  recipient: string;
  keyEvents: string;
  warmStories: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  imageUrl: string;
  quote: string;
}
