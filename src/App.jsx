import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Obtiene lo que hay en el local storage
  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect ( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])
//Sincroniza el state
  const eliminarPaciente = (id) => {
    const pacientesActulizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActulizados);
  }
  return (
    <div className="container mx-auto mt-10 ">
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
