
export interface StoryDay {
  day: number;
  hook: string;
  value: string;
  cta: string;
  visualIdea: string;
  shotList?: string[];
  moveForwardCriteria: string; // Instructions on whether to repeat the day or move on
}

export interface LaunchSequence {
  productName: string;
  audience: string;
  sequence: StoryDay[];
}