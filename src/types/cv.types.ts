export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
}

export interface Skill {
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  current: boolean;
}
