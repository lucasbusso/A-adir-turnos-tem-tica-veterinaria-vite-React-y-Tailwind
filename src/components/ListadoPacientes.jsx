import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

 {/* Re escribe el heading del listado pacientes. Cambia cuando ingresas el primer paciente */}
      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>

          { pacientes.map( paciente => (
            <Paciente 
 // Siempre utilizar key cuando usas .map
              key= {paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}  
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes vacío</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            Completa el formulario y podrás ver tus  {''}
            <span className="text-indigo-600 font-bold">pacientes y citas aquí</span>
            </p>
        </>
      )}

      
    </div>
  )
}

export default ListadoPacientes
