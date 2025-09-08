import Main from "./components/Layout/Main";
import { useCVData } from "./hooks/useCVData";

function App() {
  const cvHook = useCVData(); // cria o hook central
  return (
    <div className="min-h-screen bg-gray-50">
      <Main cvHook={cvHook} />
    </div>
  );
}

export default App;
