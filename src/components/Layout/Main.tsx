import type { CVHook } from "../../hooks/useCVData";
import Experience from "../Form/Experience";
import PersonalInfo from "../Form/PersonalInfo";
import Skills from "../Form/Skills";
import { Header } from "./Header";
import PreviewSection from "./PreviewSection";

interface Props {
  cvHook: CVHook;
}

export default function Main({ cvHook }: Props) {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulários */}
          <div className="space-y-8 overflow-y-auto overflow-x-hidden custom-scrollbar p-6 lg:p-12">
            <PersonalInfo
              personalInfo={cvHook.cvData.personalInfo}
              updatePersonalInfo={cvHook.updatePersonalInfo}
            />
            <Skills
              skills={cvHook.cvData.skills}
              addSkill={cvHook.addSkill}
              removeSkill={cvHook.removeSkill}
            />
            <Experience
              experiences={cvHook.cvData.experiences}
              addExperience={cvHook.addExperience}
              removeExperience={cvHook.removeExperience}
            />
          </div>

          {/* Preview */}
          <PreviewSection cvData={cvHook.cvData} />
        </div>
      </main>
    </>
  );
}
