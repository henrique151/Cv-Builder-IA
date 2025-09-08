// src/components/Preview/ExperienceSection.tsx
import type { ExperienceType } from "../../types/cv.types";

interface Props {
  experiences: ExperienceType[];
}

export default function ExperienceSection({ experiences }: Props) {
  if (!experiences.length) {
    return <p className="text-gray-400 italic">Nenhuma experiência adicionada</p>;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Experiência Profissional</h3>
      {experiences.map((exp) => (
        <div key={exp.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <h4 className="font-medium text-gray-900">{exp.role}</h4>
          <p className="text-gray-600">{exp.company}</p>
          <p className="text-sm text-gray-500">
            {exp.start} - {exp.current ? "Atualmente" : exp.end}
          </p>
          <p className="text-gray-700 text-sm mt-2">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
