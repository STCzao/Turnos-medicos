import { useState } from "react";
import fondoHospital from "../assets/fondoHospital.png";
import Form from "./Form";
import TablaTurnos from "./TablaTurnos";

const Hero = () => {
  const [turnos, setTurnos] = useState([]);
  const [turnoEditando, setTurnoEditando] = useState(null);

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
          onEliminar={eliminarTurno}
          onEditar={editarTurno}
        />
        </div>
      </div>
    </div>
  );
};

export default Hero;
