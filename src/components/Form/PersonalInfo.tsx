export default function PersonalInfo() {
  return (
    <div className="space-y-8 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-280px)] custom-scrollbar">
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            Dados Pessoais
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Informações básicas para contato
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo *
          </label>
          <input
            placeholder="Seu nome completo"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            placeholder="seu.email@exemplo.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
            type="email"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefone *
            </label>
            <input
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              type="tel"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn
            </label>
            <input
              placeholder="linkedin.com/in/seuperfil"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              type="url"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Resumo Profissional
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">0/300</span>
              <div className="relative group">
                <button
                  disabled={true}
                  className="px-2 py-1 text-xs bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed transition-colors flex items-center gap-2 "
                >
                  Configurar IA
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Clique em "Configurar IA" no topo
                </div>
              </div>
            </div>
          </div>
          <textarea
            placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
            maxLength={300}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            Este resumo aparecerá no topo do seu currículo
          </p>
        </div>
      </div>
    </div>
  );
}
