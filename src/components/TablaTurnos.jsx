import React from "react";

const TablaTurnos = ({ turnos, onEliminar, onEditar }) => {
  return (
    <table className="w-full border mt-6 text-sm">
      <thead>
        <tr>
          <th className="border px-2 py-1">Nombre</th>
          <th className="border px-2 py-1">Especialidad</th>
          <th className="border px-2 py-1">Médico</th>
          <th className="border px-2 py-1">Fecha</th>
          <th className="border px-2 py-1">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {turnos.map((turno, i) => (
          <tr key={i}>
            <td className="border px-2 py-1">{turno.nombre}</td>
            <td className="border px-2 py-1">{turno.especialidad}</td>
            <td className="border px-2 py-1">{turno.médico}</td>
            <td className="border px-2 py-1">{turno.fecha}</td>
            <td className="border px-2 py-1 flex gap-2">
              <button className="text-blue-500" onClick={() => onEditar(i)}>
                Editar
              </button>
              <button className="text-red-500" onClick={() => onEliminar(i)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaTurnos;
