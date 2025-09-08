import { useState } from "react";
import type { ExperienceType } from "../../types/cv.types";
import { validateCompany, validateRole, validateDates } from "../../utils/validation";

interface Props {
  experiences: ExperienceType[];
  addExperience: (exp: ExperienceType) => void;
  removeExperience: (id: string) => void;
}

export default function Experience({ experiences, addExperience, removeExperience }: Props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<ExperienceType>({
    id: "",
    company: "",
    role: "",
    start: "",
    end: "",
    description: "",
    current: false,
  });

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const getBorderColor = (name: string) => {
    if (!touched[name]) return "border-gray-300";
    switch (name) {
      case "company":
        return validateCompany(formData.company) ? "border-green-500" : "border-red-500";
      case "role":
        return validateRole(formData.role) ? "border-green-500" : "border-red-500";
      case "dates":
        return validateDates(formData.start, formData.end, formData.current) ? "border-green-500" : "border-red-500";
      default:
        return "border-gray-300";
    }
  };

   const handleSubmit = () => {
      const company = formData.company || "";
      const role = formData.role || "";
      const start = formData.start || "";
      const end = formData.end || "";

      const isCompanyValid = validateCompany(company);
      const isRoleValid = validateRole(role);
      const areDatesValid = validateDates(start, end, formData.current);

      if (!isCompanyValid || !isRoleValid || !areDatesValid) {
        setTouched({ company: true, role: true, dates: true });
        return;
      }

      addExperience({ ...formData, id: crypto.randomUUID() });
      setFormData({ id: "", company: "", role: "", start: "", end: "", description: "", current: false });
      setTouched({});
      setIsFormOpen(false);
    };;

  const handleDelete = (id: string) => removeExperience(id);

  return (
    <div className="space-y-6">

      {/* Lista de Experiências */}
      <div className="space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <span className="material-symbols-outlined">trip</span>Experiência Profissional
          </h3>
          <p className="text-sm text-gray-500 mt-1">Adicione suas experiências de trabalho mais relevantes</p>
        </div>

      {/* Botão de adicionar experiência */}

        {!isFormOpen && (
        <button
          onClick={() => setIsFormOpen(true)}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-500 transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>Adicionar Experiência
        </button>
      )}

        {experiences.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <div className="mb-2">
              <span className="material-symbols-outlined" style={{ fontSize: "48px" }}>trip</span>
            </div>
            <p>Nenhuma experiência adicionada ainda</p>
            <p className="text-sm">Clique no botão abaixo para adicionar</p>
          </div>
        ) : (
          <div className="space-y-4">
            {experiences.map(item => (
              <div key={item.id} className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.role}</h4>
                    <p className="text-gray-600 font-medium">{item.company}</p>
                    <p className="text-sm text-gray-500">
                      {item.start} - {item.current ? "Atualmente" : item.end}
                    </p>
                  </div>
                  <button
                    className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    title="Remover experiência"
                    onClick={() => handleDelete(item.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Formulário */}
      {isFormOpen && (
        <form className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
              <input
                name="company"
                placeholder="Nome da empresa"
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent ${getBorderColor("company")}`}
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cargo *</label>
              <input
                name="role"
                placeholder="Seu cargo na empresa"
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent ${getBorderColor("role")}`}
                type="text"
                value={formData.role}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data de Início</label>
              <input
                name="start"
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent ${getBorderColor("dates")}`}
                type="month"
                value={formData.start}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data de Fim</label>
              <input
                name="end"
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent ${formData.current ? "bg-gray-200 cursor-not-allowed" : getBorderColor("dates")}`}
                type="month"
                value={formData.end}
                onChange={handleInputChange}
                onBlur={handleBlur}
                disabled={formData.current}
              />
              <label className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="current"
                  checked={formData.current}
                  onChange={handleInputChange}
                />
                Atualmente
              </label>
            </div>
          </div>

          <textarea
            name="description"
            placeholder="Descreva suas principais responsabilidades e conquistas..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
            value={formData.description}
            onChange={handleInputChange}
          />

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2"
              onClick={handleSubmit}
            >
              <span className="material-symbols-outlined">add</span>Adicionar
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2"
              onClick={() => setIsFormOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
