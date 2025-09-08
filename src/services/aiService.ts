import type { AIEnhancementRequest, AIEnhancementResponse } from "../types/api.types";

export async function enhanceText(payload: AIEnhancementRequest): Promise<AIEnhancementResponse> {
  try {
    const pergunta = payload.text;
    const apiKey = payload.apiKey;

    const response = await fetch("/api/ai/enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pergunta, apiKey }),
    });

    if (!response.ok) {      const errorData = await response.json();
      throw new Error(`Erro ao chamar a API: ${response.status} - ${errorData.error || JSON.stringify(errorData)}`);
    

    }

    const data = await response.json();
    const respostaTexto = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Nenhuma resposta";

    return { enhancedText: respostaTexto };
  } catch (error) {
    console.error("Erro AI:", error);
    throw error;
  }
}
