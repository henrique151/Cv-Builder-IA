import { useState } from "react";
import { enhanceText } from "../../services/aiService";
import { useToast } from "../../hooks/useToast";
import type { AIEnhancementRequest, AIEnhancementResponse } from "../../types/api.types";

interface Props {
  text: string;
  onEnhanced: (enhancedText: string) => void;
  apiKey: string;
  apiType: "chat" | "gemini";
}

export function AIEnhanceButton({ text, onEnhanced, apiKey, apiType }: Props) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleEnhance = async () => {
    if (!apiKey) {
      toast.addToast({ type: "error", message: "Insira uma API Key válida!" });
      return;
    }

    setLoading(true);
    try {
      const atsPrompt = `
      Aprimore o seguinte texto para um currículo ATS:
      - Tom profissional, palavras-chave relevantes
      - Verbos de ação e quantificação quando possível
      - Correções de gramática, ortografia e fluência
      - Densidade de informação e impacto
      Texto: "${text}"
            `;

      const payload: AIEnhancementRequest = { text: atsPrompt, apiType, apiKey };
      const result: AIEnhancementResponse = await enhanceText(payload);
      onEnhanced(result.enhancedText);
      toast.addToast({ type: "success", message: "Resumo aprimorado com sucesso!" });
    } catch (error: any) {
      console.error(error);
      toast.addToast({ type: "error", message: error.message || "Erro ao aprimorar o texto." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleEnhance}
      disabled={loading}
      className={`mt-2 px-4 py-2 rounded-md text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"} transition-colors`}
    >
      {loading ? "Aprimorando..." : "Aprimorar"}
    </button>
  );
}
