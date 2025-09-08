import { useState } from "react";
import type { Skill as SkillType } from "../../types/cv.types";

interface Props {
  skills: SkillType[];
  addSkill: (skill: SkillType) => void;
  removeSkill: (name: string) => void;
}

export default function Skills({ skills, addSkill, removeSkill }: Props) {
  const [skillName, setSkillName] = useState("");
  const [level, setLevel] = useState<SkillType["level"]>("Básico");

  const handleAddSkill = () => {
    if (!skillName.trim()) return;

    const newSkill: SkillType = {
      name: skillName,
      level,
    };

    addSkill(newSkill);
    setSkillName(""); // limpa campo
    setLevel("Básico"); // volta para padrão
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <span className="material-symbols-outlined">build</span>
          Habilidades
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Adicione suas principais competências técnicas
        </p>
      </div>

      {/* Form */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              placeholder="Nome da habilidade (ex: React, Python, Figma)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
              type="text"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            />
          </div>
          <div>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as SkillType["level"])}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
            >
              <option value="Básico">Básico</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleAddSkill}
            disabled={!skillName.trim()}
            className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>

      {/* Lista de habilidades */}
      {skills.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <div className="mb-2">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "48px" }}
            >
              build
            </span>
          </div>
          <p>Nenhuma habilidade adicionada ainda</p>
          <p className="text-sm">
            Adicione suas principais competências técnicas
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex justify-between items-center bg-white border border-gray-200 rounded-lg px-4 py-2"
            >
              <div>
                <p className="font-medium text-gray-800">{skill.name}</p>
                <p className="text-sm text-gray-500">{skill.level}</p>
              </div>
              <button
                onClick={() => removeSkill(skill.name)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
