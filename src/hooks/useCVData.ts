import { useState } from "react";
import type { CVData, PersonalInfo, Skill, ExperienceType } from "../types/cv.types";

export function useCVData() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: { name: "", email: "", phone: "", linkedin: "", summary: "" },
    skills: [],
    experiences: [],
  });

  // Atualiza os dados pessoais
  const updatePersonalInfo = (data: Partial<PersonalInfo>) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...data },
    }));
  };

  // Skills
  const addSkill = (skill: Skill) => {
    setCvData((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
  };

  const removeSkill = (name: string) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.name !== name),
    }));
  };

  // Experiências
  const addExperience = (exp: ExperienceType) => {
    setCvData((prev) => ({ ...prev, experiences: [...prev.experiences, exp] }));
  };

  const removeExperience = (id: string) => {
    setCvData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id),
    }));
  };

  return {
    cvData,
    updatePersonalInfo,
    addSkill,
    removeSkill,
    addExperience,
    removeExperience,
  };
}
