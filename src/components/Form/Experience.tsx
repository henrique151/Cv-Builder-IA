import { useState } from "react";
import { type ExperienceType } from "../../types/cv.types";


export default function Experience() {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ 
        id: "",                 
        company: "",
        role: "",
        start: "",
        end: "",
        description: "",
        current: false
    });

    const handleOpenForm = () => setIsFormOpen(true);

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setFormData({ id: "", company: "", role: "", start: "", end: "", description: "", current: false });
    };

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newExperience = { ...formData, id: crypto.randomUUID() };
        setExperiences(prev => [...prev, newExperience]);
        handleCloseForm();
    };

    const handleDeleteExperience = () => setFormData(
        { id: "", company: "", role: "", start: "", end: "", description: "", current: false }
    );
    
    return (        
        <>
            <div className="space-y-6">
                {!isFormOpen && (
                    <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                            <span className="material-symbols-outlined">trip</span>Experiência Profissional
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Adicione suas experiências de trabalho mais relevantes</p>
                    </div>
                    <button
                        onClick={handleOpenForm} 
                        className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-500 transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">add</span>Adicionar Experiência
                    </button>

                    {experiences.length === 0 && (
                        <div className="text-center py-8 text-gray-400">
                            <div className="mb-2">
                            <span className="material-symbols-outlined" style={{ fontSize: "48px" }}>trip</span>
                            </div>
                            <p>Nenhuma experiência adicionada ainda</p>
                            <p className="text-sm">Clique no botão acima para adicionar</p>
                        </div>
                    )}

                    {experiences.length > 0 && (
                        <div className="space-y-4" id="summary-experience">
                            {experiences.map(item => (
                                <div className="bg-white border border-gray-200 rounded-lg p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">{ item.role }</h4>
                                        <p className="text-gray-600 font-medium">{ item.company }</p>
                                        <p className="text-sm text-gray-500">            
                                            {item.start} - {item.current ? "Atualmente" : item.end}
                                        </p>
                                    </div>
                                    <button 
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors" title="Remover experiência"
                                        onClick={handleDeleteExperience}><span className="material-symbols-outlined">delete</span>    
                                    </button>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{ item.description }</p>
                            </div>
                            ))}
                        </div>
                    )}
                    </div>
                )}
                
                {isFormOpen && (
                    <form className="bg-gray-50 p-6 rounded-lg space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                                <input 
                                    name="company"
                                    placeholder="Nome da empresa" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
                                    type="text"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Cargo *</label>
                                <input 
                                    name="role"
                                    placeholder="Seu cargo na empresa" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
                                    type="text"
                                    value={formData.role}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Data de Início</label>
                                <input 
                                    name="start"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
                                    type="month"
                                    value={formData.start}
                                    onChange={handleInputChange} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Data de Fim</label>
                                <div>
                                    <input 
                                        name="end"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
                                        type="month"
                                        value={formData.end}
                                        onChange={handleInputChange} />
                                    
                                    <label className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        name="current"
                                        checked={formData.current}
                                        onChange={handleInputChange} />Atualmente
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-gray-700">Descrição das Atividades</label>
                                <div className="relative group">
                                    <button 
                                        className="px-2 py-1 text-xs bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed transition-colors flex items-center gap-2 ">
                                            <span className="material-symbols-outlined">settings</span>Configurar IA
                                    </button>
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Clique em "Configurar IA" no topo
                                    </div>
                                </div>
                        </div>
                        <textarea 
                            name="description"
                            placeholder="Descreva suas principais responsabilidades e conquistas..." 
                            rows={3} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                            value={formData.description}
                            onChange={handleInputChange}>
                        </textarea>
                        <div className="flex gap-3 pt-2">
                            <button 
                                type="button" 
                                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                                onClick={handleSubmit}>
                                <span className="material-symbols-outlined">add</span>Adicionar
                            </button>
                            <button 
                                type="button" 
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2"
                                onClick={handleCloseForm}>
                                <span className="material-symbols-outlined">close</span>Cancelar
                            </button>
                        </div>
                    </form>
                )}                 
            </div>           
        </>
    );
};