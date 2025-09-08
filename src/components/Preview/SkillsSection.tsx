import type { Skill } from "../../types/cv.types";

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  if (skills.length === 0) {
    return (
      <p className="text-gray-400 italic">Nenhuma habilidade adicionada</p>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-gray-800">Habilidades</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill) => (
          <li key={skill.name}>
            {skill.name} - {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
