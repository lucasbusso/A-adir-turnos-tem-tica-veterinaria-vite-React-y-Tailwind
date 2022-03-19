import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validación del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay un campo vacío')
    } else {
      console.log('Envío correcto')
    }

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade los pacientes y {""}
        <span className="text-indigo-600 font-bold">actualiza</span>
        {""} su estado
        </p>

        <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" 
        onSubmit={handleSubmit}
        >

          

          <div className="mb-5">
            <label className="block text-gray-600 uppercase font-bold" htmlFor="mascota">
            Nombre de la Mascota
            </label>
            <input 
            id="mascota"
            type="text"
            placeholder="Nombre de tu mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md hover:border-gray-300 focus:outline-none focus:border-indigo-600"
            value={nombre}
            onChange = { (e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-600 uppercase font-bold" htmlFor="propietario">
            Nombre del Dueño
            </label>
            <input 
            id="propietario"
            type="text"
            placeholder="Nombre del dueño" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md hover:border-gray-300 focus:outline-none focus:border-indigo-600"
            value={propietario}
            onChange = { (e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-600 uppercase font-bold" htmlFor="email">
            Email
            </label>
            <input 
            id="email"
            type="email"
            placeholder="Email de contacto" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md hover:border-gray-300 focus:outline-none focus:border-indigo-600"
            value={email}
            onChange = { (e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-600 uppercase font-bold" htmlFor="alta">
           Alta
            </label>
            <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md hover:border-gray-300 focus:outline-none focus:border-indigo-600"
            value={fecha}
            onChange = { (e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-9">
            <label className="block text-gray-600 uppercase font-bold" htmlFor="sintomas">
            Describe los síntomas
            </label>
            <textarea 
            id="sintomas" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md hover:border-gray-300 focus:outline-none focus:border-indigo-600" 
            placeholder="Escribe aquí los sintomas"
            value={sintomas}
            onChange = { (e) => setSintomas(e.target.value)}>
            </textarea>
          </div>

          <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md shadow-lg
          hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar paciente"
          />

        </form>
    </div>
    )
}

export default Formulario
