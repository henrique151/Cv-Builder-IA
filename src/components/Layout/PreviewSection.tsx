import CVPreview from "../Preview/CVPreview";
import type { CVData } from "../../hooks/useCVData";

interface Props {
  cvData: CVData;
}

export default function PreviewSection({ cvData }: Props) {
  return (
    <div className="space-y-8 overflow-y-auto overflow-x-hidden custom-scrollbar p-6 lg:p-12">
      <CVPreview data={cvData} />
    </div>
  );
}
