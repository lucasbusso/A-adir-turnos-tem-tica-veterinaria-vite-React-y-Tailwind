import { useState } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([])

  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const pacientesActulizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActulizados);
  }
  return (
    <div className="container mx-auto mt-20 ">
    < Header />
    <div className="mt-12 md:flex">
      < Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
{/* Agregar pacientes al componente */}
      < ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
    </div>
    </div>
  )
}

export default App
