
import { useState } from "react";
import { enhanceText } from "../services/aiService";

export function useAIEnhancement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  const enhance = async (text: string, apiType: "chat" | "gemini") => {
    setLoading(true);
    setError(null);
    try {
      const response = await enhanceText({ text, apiType });
      setResult(response.enhancedText);
      return response.enhancedText;
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { enhance, loading, error, result };
}
