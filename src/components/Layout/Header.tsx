import { useState } from "react";

export function Header() {
    const [apiKey, setApiKey] = useState("");
    
    return (
        <div className="bg-white shadow-sm border-b">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <span className="material-symbols-outlined">smart_toy</span>Gerador de Currículos AI
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Gerador Inteligente de Currículos com IA</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <span className="material-symbols-outlined">key</span>
                                <input 
                                type="password" 
                                className="pl-10 pr-10 py-2 w-64 text-sm border rounded-lg transition-all duration-200 border-gray-300 bg-white focus:border-green-500 focus:ring-green-200 focus:outline-none focus:ring-2" 
                                placeholder="Cole aqui sua API Key" 
                                value={apiKey} 
                                onChange={(e) => setApiKey(e.target.value)}/>
                            </div>
                        </div>
                            <div className="relative">
                                <button disabled={true} 
                                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 flex items-center gap-3 font-medium">
                                    <span className="material-symbols-outlined">file_export</span>
                                    <span>Exportar PDF</span>
                                </button>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">Adicione informações ao currículo primeiro
                                </div>
                            </div>                       
                    </div>
                </div>
            </div>
        </div>
    );
}