export interface ProductProject {
  id: string;
  title: string;
  role: string;
  date: string;
  tags: string[];
  image: string;
  background: string;
  responsibility: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  links: {
    prototype?: string;
    document?: string;
    live?: string;
  };
}

export interface OperationCase {
  id: string;
  title: string;
  date: string;
  platform: string;
  image: string;
  goal: string;
  strategy: string;
  execution: string;
  data: {
    metric: string;
    value: string;
  }[];
  materials: string[];
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  name: string;
  level: number;
  description: string;
}
