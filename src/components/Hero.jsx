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

    {/* En este bloque tenemos el objeto nuevoTurno como parametro. La funcion
      callback nos devolvera una constante llamada duplicado que recibira
      los valores del array almacenado en el estado turnos. Iteramos con el metodo
      some. t hace referencia a cada valor del array; i hace referencia a su 
      posicion en el array.
      Consultamos si el nuevo valor no coincide con el valor guardado en el index 
      del array almacenado en turnoeditando; es decir, no esta en posicion para ser editado. 
      Ahora comparamos el turno guardado con el que sera ingresado mediante el
      nuevo objeto , tanto para el medico como la fecha; tienen que cumplirse las tres condiciones */}

    if (duplicado) {
      alert("Ya existe un turno para ese médico en esta fecha");
      return;
    }

    {/* Si los valores almacenados anteriormente en duplicado son repetidos,
      recibimos un alert informando la existencia de algun turno previo */}

    if (turnoEditando !== null) {
      const actualizados = [...turnos];
      actualizados[turnoEditando.index] = nuevoTurno;
      setTurnos(actualizados);
      setTurnoEditando(null);
    } else {
      setTurnos([...turnos, nuevoTurno]);
    }

    {/* Consultamos si el estado de turnoeditando entro en actualizacion. En este
      caso es true. Por eso guardaremos las actualizaciones en una constante que
      realizara una copia del array de turnos con el spread operator. Accedemos
      al array de actualizados en el lugar indicado por turnoeditando; en este caso
      es el index y el asignamos el nuevo turno. El array de turnos es reemplazado
      por el de actualizados con el nuevo turno en su nueva posicion; reseteamos 
      el estado de turnoeditando a null.
      Si turnoeditando no contiene valores, hacemos una copia del array de turnos
      y el nuevoturno es añadido al final del array */}
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
                Confirmar eliminación
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
