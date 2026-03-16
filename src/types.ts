export type Page = 'home' | 'about' | 'projects' | 'contact';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  techOne?: string;
  techTwo?: string;
  techThree?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
