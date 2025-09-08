export default function FormSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-1/2 p-6 space-y-6 overflow-y-auto border-r border-gray-200">
      {children}
    </div>
  );
}
