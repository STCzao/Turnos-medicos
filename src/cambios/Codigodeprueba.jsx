{/* Cambios en el App */}

import React, { useState } from "react";
import FormularioTurno from "./FormularioTurno";
import TablaTurnos from "./TablaTurnos";

const App = () => {
  const [turnos, setTurnos] = useState([]);
  const [turnoEditando, setTurnoEditando] = useState(null);

  const agregarTurno = (nuevoTurno) => {
    const duplicado = turnos.some((t, i) =>
      i !== turnoEditando?.index &&
      t.fecha === nuevoTurno.fecha &&
      t.medico === nuevoTurno.medico
    );

    if (duplicado) {
      alert("Ya existe un turno para ese médico en esa fecha");
      return;
    }

    if (turnoEditando !== null) {
      const actualizados = [...turnos];
      actualizados[turnoEditando.index] = nuevoTurno;
      setTurnos(actualizados);
      setTurnoEditando(null);
    } else {
      setTurnos([...turnos, nuevoTurno]);
    }
  };

  const eliminarTurno = (index) => {
    const actualizados = turnos.filter((_, i) => i !== index);
    setTurnos(actualizados);
    if (turnoEditando?.index === index) setTurnoEditando(null);
  };

  const editarTurno = (index) => {
    const turno = turnos[index];
    setTurnoEditando({ ...turno, index });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <FormularioTurno
        onAgregarTurno={agregarTurno}
        turnoEditando={turnoEditando}
      />
      <TablaTurnos
        turnos={turnos}
        onEliminar={eliminarTurno}
        onEditar={editarTurno}
      />
    </div>
  );
};

export default App;


{/* FormTurno*/}

import React, { useState, useEffect } from "react";

const FormularioTurno = ({ onAgregarTurno, turnoEditando }) => {
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("Especialidad");
  const [isEspecialidadOpen, setIsEspecialidadOpen] = useState(false);
  const [medico, setMedico] = useState("Médico");
  const [isMedicoOpen, setIsMedicoOpen] = useState(false);
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (turnoEditando) {
      setNombre(turnoEditando.nombre);
      setEspecialidad(turnoEditando.especialidad);
      setMedico(turnoEditando.medico);
      setFecha(turnoEditando.fecha);
    }
  }, [turnoEditando]);

  const especialidades = [
    "Gastroenterología",
    "Cardiología",
    "Dermatología",
    "Clínica Médica",
    "Oftalmología",
    "Neumonología",
    "Pediatría",
    "Neurología",
    "Endocrinología",
  ];

  const medicosPorEspecialidad = {
    Gastroenterología: ["Dr. Aguilar Marcelo", "Dra. Zamora Claudia"],
    Cardiología: ["Dr. Eduardo Pino", "Dr. José Medina"],
    Dermatología: ["Dra. Lucía Herrera", "Dr. Diego Ortiz"],
    "Clínica Médica": ["Dr. Pedro Silva", "Dra. Carla Jiménez"],
    Oftalmología: ["Dr. Juan Pérez", "Dra. Alicia Ríos"],
    Neumonología: ["Dr. Raúl Torres"],
    Pediatría: ["Dra. Patricia Gómez", "Dr. Sergio López"],
    Neurología: ["Dr. Nicolás Castro", "Dra. Gabriela Franco"],
    Endocrinología: ["Dr. Ariel Sosa", "Dra. Natalia Vega"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      especialidad === "Especialidad" ||
      medico === "Médico" ||
      fecha === ""
    ) {
      alert("Por favor, completá todos los campos");
      return;
    }

    onAgregarTurno({ nombre, especialidad, medico, fecha });

    setNombre("");
    setEspecialidad("Especialidad");
    setMedico("Médico");
    setFecha("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row gap-4"
    >
      {/* igual al anterior, sin cambios en UI */}
      {/* reutiliza todo el código del formulario que ya tenías */}
      {/* ... */}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded max-md:w-full"
      >
        {turnoEditando ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
};

export default FormularioTurno;

{/* Tabla de turnos */}

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
            <td className="border px-2 py-1">{turno.medico}</td>
            <td className="border px-2 py-1">{turno.fecha}</td>
            <td className="border px-2 py-1 flex gap-2">
              <button
                className="text-blue-500"
                onClick={() => onEditar(i)}
              >
                Editar
              </button>
              <button
                className="text-red-500"
                onClick={() => onEliminar(i)}
              >
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
