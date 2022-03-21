const Paciente = ({paciente}) => {
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
      </div>
  )
}

export default Paciente
