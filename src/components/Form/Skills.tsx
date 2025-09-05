export default function Skills() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <span className="material-symbols-outlined">build</span>
          Habilidades
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Adicione suas principais competências técnicas
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              placeholder="Nome da habilidade (ex: React, Python, Figma)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent"
              type="text"
            />
          </div>
          <div>
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent">
              <option value="Basico">Básico</option>
              <option value="Intermediario">Intermediário</option>
              <option value="Avancado">Avançado</option>
            </select>
          </div>
          <button
            disabled={true}
            className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
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
    </div>
  );
}
