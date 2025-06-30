import React from "react";

const TablaTurnos = ({ turnos, onEliminar, onEditar }) => {

  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-md bg-white">
      <table className="min-w-[700px] w-full text-gray-700">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-3 text-left">
              Nombre del paciente
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left">
              Especialidad
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left">
              Médico
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left">
              Fecha
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              <td className="border border-gray-200 px-4 py-2">
                {turno.nombre}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {turno.especialidad}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {turno.medico}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {turno.fecha}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    className="flex gap-1 rounded-md bg-blue-600 py-2 px-3 text-white text-sm transition hover:bg-blue-700"
                    onClick={() => onEditar(i)}
                  >
                    Editar
                  </button>

                  <button
                    className="flex gap-1 rounded-md bg-red-500 py-2 px-3 text-white text-sm transition hover:bg-red-700"
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
