import { useState } from "react";
import fondoHospital from "../assets/fondoHospital.png";
import Form from "./Form";
import TablaTurnos from "./TablaTurnos";

const Hero = () => {
  const [turnos, setTurnos] = useState([]);
  const [turnoEditando, setTurnoEditando] = useState(null);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [turnoAEliminarIndex, setTurnoAEliminarIndex] = useState(null);

  const agregarTurno = (nuevoTurno) => {
    const duplicado = turnos.some(
      (t, i) =>
        i !== turnoEditando?.index &&
        t.fecha === nuevoTurno.fecha &&
        t.medico === nuevoTurno.medico
    );

    if (duplicado) {
      alert("Ya existe un turno para ese médico en esta fecha");
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

  const handleEliminarClick = (index) => {
    setTurnoAEliminarIndex(index);
    setMostrarConfirmacion(true);
  };

  const confirmarEliminarTurno = () => {
    if (turnoAEliminarIndex !== null) {
      const actualizados = turnos.filter((_, i) => i !== turnoAEliminarIndex);
      setTurnos(actualizados);
      if (turnoEditando?.index === turnoAEliminarIndex) setTurnoEditando(null);
    }

    setMostrarConfirmacion(false);
    setTurnoAEliminarIndex(null);
  };

  const cancelarEliminarTurno = () => {
    setMostrarConfirmacion(false);
    setTurnoAEliminarIndex(null);
  };

  const editarTurno = (index) => {
    const turno = turnos[index];
    setTurnoEditando({ ...turno, index });
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${fondoHospital})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
        <Form onAgregarTurno={agregarTurno} turnoEditando={turnoEditando} />
        <div className="overflow-x-auto w-full">
          <TablaTurnos
            turnos={turnos}
            onEliminar={handleEliminarClick}
            onEditar={editarTurno}
          />
        </div>
      </div>
      {mostrarConfirmacion && (
        <div className="fixed inset-0 flex items-start justify-center z-50 p-4 pt-10">
          <div className="bg-white divide-gray-300/60 flex space-x-5 divide-x pl-3 text-sm rounded border border-gray-300/60 shadow-lg">
            <div className="py-2.5 flex justify-center flex-col">
              <h3 className="text-gray-700 font-medium">
                Confirmar Eliminación
              </h3>
              <p className="text-gray-500 max-w-64">
                ¿Estás seguro de que quieres eliminar este turno? Esta acción no
                se puede deshacer.
              </p>
            </div>
            <div className="flex flex-col items-center divide-y divide-gray-500/30">
              <button
                type="button"
                className="text-red-500 font-medium h-full w-28 hover:bg-red-500/10 transition-all"
                onClick={confirmarEliminarTurno}
              >
                Eliminar
              </button>
              <button
                type="button"
                className="text-gray-500 font-medium h-full w-28 hover:bg-gray-500/10 transition-all"
                onClick={cancelarEliminarTurno}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
