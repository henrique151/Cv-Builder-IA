import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

export default function Main() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8 overflow-x-hidden custom-scrollbar">
            <FormSection />
          </div>
          <div className="space-y-8 overflow-x-hidden custom-scrollbar">
            <PreviewSection />
          </div>
        </div>
      </main>
    </>
  );
}
