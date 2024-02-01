import { useState } from 'react';

export default function MiFormulario({ setPeliculas, peliculas }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    genero: 'comedia',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log('Datos del formulario:', formData);
    setPeliculas([
      ...peliculas,
      formData
    ])

    localStorage.setItem('peliculas', JSON.stringify([
      ...peliculas,
      formData
    ]))
  };

  return (
    <div className="flex justify-center bg-teal-400 py-4 px-4">
      <form className="flex flex-col w-[50%]" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="text-white">Nombre</label>
          <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} className="p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="text-white">Descripción</label>
          <textarea id="descripcion" value={formData.descripcion} onChange={handleChange} className="p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="genero" className="text-white">Género</label>
          <select id="genero" value={formData.genero} onChange={handleChange} className="p-2 border border-gray-300 rounded w-full">
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </select>
        </div>

        <div className="flex justify-end">
          <input type="submit" value="Enviar" className="bg-teal-500 text-white p-2 rounded cursor-pointer" />
        </div>
      </form>
    </div>
  );
}