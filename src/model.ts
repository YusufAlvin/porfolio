import type {ReactNode} from 'react';

export interface IExperience {
  role: string;
  company: string;
  period: string;
  points: Array<string>;
}

export interface IProject {
  title: string;
  desc: string;
  tags: Array<string>;
  link: string;
  image: ReactNode;
}
