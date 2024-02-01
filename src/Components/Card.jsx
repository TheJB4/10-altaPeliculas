export default function MiCard ({ peliculas }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {peliculas.map((pelicula, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{pelicula.nombre}</h2>
            <p className="text-gray-700 mb-4">{pelicula.descripcion}</p>
            <p className="text-blue-500">Género: {pelicula.genero}</p>
          </div>
        ))}
      </div>
    );
  };