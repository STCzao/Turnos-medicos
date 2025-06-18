import React from "react";

const TablaTurnos = ({ turnos, onEliminar, onEditar }) => {
  return (
    <div className="w-full overflow-auto rounded-lg shadow-md bg-white">
      <table className="w-full table-auto bg-white text-gray-700 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-3">Nombre</th>
            <th className="border border-gray-200 px-4 py-3">Especialidad</th>
            <th className="border border-gray-200 px-4 py-3">Médico</th>
            <th className="border border-gray-200 px-4 py-3">Fecha</th>
            <th className="border border-gray-200 px-4 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="border border-gray-200 px-4 py-2">{turno.nombre}</td>
              <td className="border border-gray-200 px-4 py-2">{turno.especialidad}</td>
              <td className="border border-gray-200 px-4 py-2">{turno.medico}</td>
              <td className="border border-gray-200 px-4 py-2">{turno.fecha}</td>
              <td className="border border-gray-200 px-2 py-2">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="flex items-center justify-center gap-1 rounded-md bg-blue-600 py-2 px-3 text-white text-sm transition hover:bg-blue-700"
                    onClick={() => onEditar(i)}
                  >
                    Editar
                  </button>
                  <button
                    className="flex items-center justify-center gap-1 rounded-md bg-red-500 py-2 px-3 text-white text-sm transition hover:bg-red-700"
                    onClick={() => onEliminar(i)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaTurnos;
