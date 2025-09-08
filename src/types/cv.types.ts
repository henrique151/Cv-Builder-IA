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

export type ISOYearMonth = string;

export type ExperienceType = {
  id: string;
  company: string;
  role: string;
  start: ISOYearMonth;
  end?: ISOYearMonth;
  description: string;
  current: boolean;
};

export interface CVData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experiences: ExperienceType[];
}
