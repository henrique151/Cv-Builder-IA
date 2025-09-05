import Experience from "../Form/Experience";
import PersonalInfo from "../Form/PersonalInfo";

export default function PreviewSection() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-0">
        <div className="bg-slate-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">
            Informações do Currículo
          </h2>
          <p className="text-rose-100 text-sm mt-1">
            Preencha os dados e veja o preview em tempo real
          </p>
        </div>
        <div className="p-6 space-y-8 overflow-x-hidden custom-scrollbar">
          <div className="space-y-6">
            <PersonalInfo />
          </div>
          <div className="space-y-6">Habilidades</div>
          <div className="space-y-6">
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}
