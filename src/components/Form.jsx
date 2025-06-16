import React from "react";
import { useState } from "react";

const Form = () => {
  const [especialidad, setEspecialidad] = useState("Especialidad");
  const [isEspecialidadOpen, setIsEspecialidadOpen] = useState(false);
  const [medico, setMedico] = React.useState("Médico");
  const [isMedicoOpen, setIsMedicoOpen] = useState(false);

  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");

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
    Clínica: ["Dr. Pedro Silva", "Dra. Carla Jiménez"],
    Oftalmología: ["Dr. Juan Pérez", "Dra. Alicia Ríos"],
    Neumonología: ["Dr. Raúl Torres"],
    Pediatría: ["Dra. Patricia Gómez", "Dr. Sergio López"],
    Neurología: ["Dr. Nicolás Castro", "Dra. Gabriela Franco"],
    Endocrinología: ["Dr. Ariel Sosa", "Dra. Natalia Vega"],
  };

  const handleSelectEspecialidad = (especialidadSeleccionada) => {
    setEspecialidad(especialidadSeleccionada);
    setIsEspecialidadOpen(false);
    setMedico("Médico");
  };
  const handleSelectMedico = (medicoSeleccionado) => {
    setMedico(medicoSeleccionado);
    setIsMedicoOpen(false);
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
    setTimeout(() => {
      alert("Turno registrado correctamente");

      setNombre("");
      setEspecialidad("Especialidad");
      setMedico("Médico");
      setFecha("");
    }, 1000);
  };

  return (
    <div>
      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        {/* Nombre completo */}

        <div className="relative">
          <div>{"Nombre y apellido"}</div>
          <input
            type="text"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full cursor-pointer"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        {/* Especialidad */}

        <div className="relative">
          <div>{"Especialidad"}</div>
          <input
            readOnly
            value={especialidad === "Especialidad" ? "" : especialidad}
            placeholder="Selecciona una especialidad"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full cursor-pointer"
            onClick={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
            required
          />
          {/* Cuando una persona realiza un click en el Input setIsEspecialidadOpen 
          invoca el valor de IsEspecialidadOpen que en este caso es el 
          contrario del inicial(cambia de false a true)*/}

          {isEspecialidadOpen && (
            <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded mt-1 max-h-48 overflow-auto shadow-sm">
              {especialidades.map((esp) => (
                <li
                  key={esp}
                  onClick={() => handleSelectEspecialidad(esp)}
                  className="px-3 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                >
                  {esp}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Si el valor de isEspecialidadOpen es distinto (true), nos mostrara una lista.
        En esta lista, aplicamos el metodo Map para recorrerla y que nos devuelva un solo valor.
        Esp representa cada valor del array */}

        {/* Medicos por especialidad */}

        {especialidad !== "Especialidad" && (
          <div className="relative">
            <div>{"Médico"}</div>
            <input
              readOnly
              value={medico === "Médico" ? "" : medico}
              placeholder="Selecciona un médico"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full cursor-pointer"
              onClick={() => setIsMedicoOpen(!isMedicoOpen)}
              required
            />

            {/* Como en el apartado de Especialidad, primero capturamos la accion con un evento OnClick 
        que modificara el estado de SetIsMedicoOpen, el cual nos muestra el valor inverso de isMedicoOpen */}

            {isMedicoOpen && (
              <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded mt-1 max-h-48 overflow-auto shadow-sm">
                {(medicosPorEspecialidad[especialidad] || []).map((med) => (
                  <li
                    key={med}
                    onClick={() => handleSelectMedico(med)}
                    className="px-3 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                  >
                    {med}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Si el valor cambia, nos mostrara la lista de los medicos disponibles. Iteramos con un metodo Map
        en el array de medicosPorEspecialidad segun la especialidad seleccionada. Si no hay medicos 
        disponibles, nos entrega un array vacio */}

        {/* Fecha del turno */}

        <div>
          {"Fecha del turno"}
          <input
            id="fecha"
            value={fecha}
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full cursor-pointer"
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        {/* Horario a seleccionar */}

        <button
          className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
          type="submit"
          onClick={handleSubmit}
        >
          <span>Guardar</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
