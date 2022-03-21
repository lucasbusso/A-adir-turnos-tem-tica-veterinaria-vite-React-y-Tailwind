const Paciente = ({paciente, setPaciente}) => {
//Destructuring de paciente
  const {nombre, propietario, email, fecha, sintomas} = paciente
  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-lg my-10">

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
        <span className="font-normal normalcase">    {nombre}    </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {""}
        <span className="font-normal normalcase">    {propietario}    </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
        <span className="font-normal normalcase">   {email}     </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {""}
        <span className="font-normal normalcase">    {fecha}    </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
        <span className="font-normal normalcase">   {sintomas}     </span>
        </p>
{/* Botones del listado */}
        <div className="mt-5 mr-5 flex justify-end">
          <button
            type="button"
            className="py-2.5 px-6 border-2 border-solid border-indigo-600 hover:bg-indigo-100 bg-white hover:shadow-md rounded-md uppercase font-semibold text-indigo-600 w-30"
            onClick={() => setPaciente(paciente)}
          >Editar</button>

          <button
            type="button"
            className="py-3 px-3 bg-gray-400 hover:bg-gray-500 rounded-md uppercase hover:shadow-md font-semibold text-white ml-5 w-30"
          >Eliminar</button>
          
        </div>
      </div>
  )
}

export default Paciente
