import type { PersonalInfo } from "../../types/cv.types";

export default function PersonalHeader({ info }: { info: PersonalInfo }) {
  return (
    <div className="border-b pb-4">
      <h1 className="text-2xl font-bold text-gray-900">
        {info.name || <span className="text-gray-400 italic">Nome não informado</span>}
      </h1>
      <p className="text-gray-600">
        {info.email || <span className="text-gray-400 italic">Email não informado</span>} ·{" "}
        {info.phone || <span className="text-gray-400 italic">Telefone não informado</span>}
      </p>
      {info.linkedin && (
        <a href={info.linkedin} className="text-blue-600 text-sm break-all">
          {info.linkedin}
        </a>
      )}
      <p
        className="mt-2 text-sm text-gray-700 max-h-24 overflow-y-auto break-words"
        title={info.summary}
      >
        {info.summary || <span className="text-gray-400 italic">Resumo profissional vazio</span>}
      </p>
    </div>
  );
}
