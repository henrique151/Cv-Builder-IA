import { useState } from "react";
import { useToast } from "../../hooks/useToast";

interface HeaderProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
  onApiValidated: (valid: boolean) => void; // callback para informar se API está válida
}

export function Header({ apiKey, onApiKeyChange, onApiValidated }: HeaderProps) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const saveApiKey = () => {
    if (!apiKey) {
      toast.addToast({ type: "error", message: "Insira uma API Key!" });
      onApiValidated(false);
      return;
    }

    toast.addToast({ type: "success", message: "API Key salva com sucesso!" });
    onApiValidated(true);
  };

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Título */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="material-symbols-outlined">smart_toy</span>
            Gerador de Currículos AI
          </h1>
          <p className="text-sm text-gray-500 mt-1">Gerador Inteligente de Currículos com IA</p>
        </div>

        {/* Configurações da API */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                key
              </span>
              <input
                type="password"
                className="pl-10 pr-4 py-2 w-64 text-sm border rounded-lg transition-all duration-200 border-gray-300 bg-white focus:border-green-500 focus:ring-green-200 focus:outline-none focus:ring-2"
                placeholder="Cole sua API Key Gemini"
                value={apiKey}
                onChange={(e) => onApiKeyChange(e.target.value)}
              />
            </div>
          </div>

          {/* Só Gemini agora */}
          <select
            value="gemini"
            disabled
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
          >
            <option value="gemini">Gemini</option>
          </select>

          <button
            onClick={saveApiKey}
            disabled={loading}
            className={`px-4 py-2 rounded-md text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}
