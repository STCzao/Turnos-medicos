import React from "react";
const TurnoForm = () => {
  const [especialidad, setEspecialidad] = React.useState("Especialidad");
  const [isEspecialidadOpen, setIsEspecialidadOpen] = React.useState(false);
  const [medico, setMedico] = React.useState("Médico");
  const [isMedicoOpen, setIsMedicoOpen] = React.useState(false);
  const [horario, setHorario] = React.useState("Horario");
  const [isHorarioOpen, setIsHorarioOpen] = React.useState(false);

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
    "Gastroenterología": ["Dr. Aguilar Marcelo", "Dra. Zamora Claudia"],
    "Cardiología": ["Dr. Eduardo Pino", "Dr. José Medina"],
    "Dermatología": ["Dra. Lucía Herrera", "Dr. Diego Ortiz"],
    "Clínica Médica": ["Dr. Pedro Silva", "Dra. Carla Jiménez"],
    "Oftalmología": ["Dr. Juan Pérez", "Dra. Alicia Ríos"],
    "Neumonología": ["Dr. Raúl Torres"],
    "Pediatría": ["Dra. Patricia Gómez", "Dr. Sergio López"],
    "Neurología": ["Dr. Nicolás Castro", "Dra. Gabriela Franco"],
    "Endocrinología": ["Dr. Ariel Sosa", "Dra. Natalia Vega"],
  };

  const horariosDisponibles = [
    "08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const handleSelectEspecialidad = (especialidadSeleccionada) => {
    setEspecialidad(especialidadSeleccionada);
    setIsEspecialidadOpen(false);
    setMedico("Médico");
  };

  const handleSelectMedico = (medicoSeleccionado) => {
    setMedico(medicoSeleccionado);
    setIsMedicoOpen(false);
  };

  const handleSelectHorario = (horarioSeleccionado) => {
    setHorario(horarioSeleccionado);
    setIsHorarioOpen(false);
  };

  const iconLabel = (texto) => (
    <div className="flex items-center gap-2 cursor-pointer select-none">
      <svg
        className="w-4 h-4 text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
        />
      </svg>
      <label className="text-gray-700">{texto}</label>
    </div>
  );

  return (
    <div>
      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        <div className="relative">
          <div onClick={() => setIsEspecialidadOpen(!isEspecialidadOpen)}>
            {iconLabel("Especialidad")}
          </div>
          <input
            readOnly
            value={especialidad === "Especialidad" ? "" : especialidad}
            placeholder="Selecciona especialidad"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full cursor-pointer"
            onClick={() => setIsEspecialidadOpen(!isEspecialidadOpen)}
          />
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

        {especialidad !== "Especialidad" && (
          <div className="relative">
            <div onClick={() => setIsMedicoOpen(!isMedicoOpen)}>
              {iconLabel("Médico")}
            </div>
            <input
              readOnly
              value={medico === "Médico" ? "" : medico}
              placeholder="Selecciona médico"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full cursor-pointer"
              onClick={() => setIsMedicoOpen(!isMedicoOpen)}
            />
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

        <div>
          {iconLabel("Check in")}
          <input
            id="checkIn"
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          {iconLabel("Fecha del turno")}
          <input
            id="fecha"
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="relative">
          <div onClick={() => setIsHorarioOpen(!isHorarioOpen)}>
            {iconLabel("Horario")}
          </div>
          <input
            readOnly
            value={horario === "Horario" ? "" : horario}
            placeholder="Selecciona horario"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full cursor-pointer"
            onClick={() => setIsHorarioOpen(!isHorarioOpen)}
          />
          {isHorarioOpen && (
            <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded mt-1 max-h-48 overflow-auto shadow-sm">
              {horariosDisponibles.map((h) => (
                <li
                  key={h}
                  onClick={() => handleSelectHorario(h)}
                  className="px-3 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                >
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          <span>Guardar</span>
        </button>
      </form>
    </div>
  );
};
export default TurnoForm;
