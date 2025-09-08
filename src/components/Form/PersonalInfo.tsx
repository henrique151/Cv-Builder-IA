import { useState } from "react";
import type { PersonalInfo as PersonalInfoType } from "../../types/cv.types";
import { validateEmail, validatePhone, validateLinkedIn } from "../../utils/validation";
import { AIEnhanceButton } from "./AIEnhanceButton";

interface Props {
  personalInfo: PersonalInfoType;
  updatePersonalInfo: (info: Partial<PersonalInfoType>) => void;
  apiKey: string; // só recebe a key já validada do Header
  isApiValid: boolean; // indica se a conexão está ok
  apiType: "chat" | "gemini"; // modelo selecionado no Header
}

export default function PersonalInfo({ personalInfo, updatePersonalInfo, apiKey, isApiValid, apiType }: Props) {
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const getBorderColor = (name: string, value: string) => {
    if (!touched[name]) return "border-gray-300";
    switch (name) {
      case "email":
        return validateEmail(value) ? "border-green-500" : "border-red-500";
      case "phone":
        return validatePhone(value) ? "border-green-500" : "border-red-500";
      case "linkedin":
        return value ? (validateLinkedIn(value) ? "border-green-500" : "border-red-500") : "border-gray-300";
      case "name":
        return value.trim().length > 0 ? "border-green-500" : "border-red-500";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="space-y-8 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-280px)] custom-scrollbar">
      <div className="space-y-6">
        {/* Título */}
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            Dados Pessoais
          </h3>
          <p className="text-sm text-gray-500 mt-1">Informações básicas para contato</p>
        </div>

        {/* Nome */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
          <input
            name="name"
            value={personalInfo.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Seu nome completo"
            className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors border ${getBorderColor("name", personalInfo.name)}`}
            type="text"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="seu.email@exemplo.com"
            className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors border ${getBorderColor("email", personalInfo.email)}`}
            type="email"
            required
          />
        </div>

        {/* Telefone e LinkedIn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
            <input
              name="phone"
              value={personalInfo.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="(11) 99999-9999"
              className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors border ${getBorderColor("phone", personalInfo.phone)}`}
              type="tel"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
            <input
              name="linkedin"
              value={personalInfo.linkedin}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="linkedin.com/in/seuperfil"
              className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors border ${getBorderColor("linkedin", personalInfo.linkedin)}`}
              type="url"
            />
          </div>
        </div>

        {/* Resumo Profissional */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">Resumo Profissional</label>
            <span className="text-xs text-gray-500">{personalInfo.summary.length}/300</span>
          </div>
          <textarea
            name="summary"
            value={personalInfo.summary}
            onChange={handleInputChange}
            placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
            maxLength={300}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
          ></textarea>

          {/* Botão de Aprimorar só aparece se API estiver válida */}
          {isApiValid && (
            <AIEnhanceButton
              text={personalInfo.summary || ""}
              onEnhanced={(newText) => updatePersonalInfo({ summary: newText })}
              apiKey={apiKey}
              apiType={apiType}
            />
          )}

          <p className="text-xs text-gray-500 mt-1">Este resumo aparecerá no topo do seu currículo</p>
        </div>
      </div>
    </div>
  );
}
