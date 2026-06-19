import Cabecalho from "./components/Cabecalho";
import PacienteForm from "./components/PacienteForm";
import Relogio from "./components/Relogio";

function App() {
  return (
    <div>
      <Cabecalho nome="Clínica Saúde+" />
      <Relogio />
      <PacienteForm />
    </div>
  );
}

export default App;