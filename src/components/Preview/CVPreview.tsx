import PersonalHeader from "./PersonalHeader";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import type { CVData } from "../../types/cv.types";

export default function CVPreview({ data }: { data: CVData }) {
  if (!data) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg space-y-6">
      <PersonalHeader info={data.personalInfo} />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experiences={data.experiences} />
    </div>
  );
}
