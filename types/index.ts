export interface Experiences {
  id: string;
  year: string;
  title: string;
  description: string;
  points: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface TechStack {
  id: number;
  name: string;
  icon: string;
  description: string;
  level: number;
  favorite: boolean;
}

export interface Certificate {
  id: number;
  image: string;
  title: string;
  hueA: number;
  hueB: number;
}