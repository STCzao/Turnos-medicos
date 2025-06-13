import React, { useState } from "react";
import fondoHospital from "../assets/fondo-hospital.png";

const Hero = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Especialidad");

  const specialties = [
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

  const handleSelect = (specialty) => {
    setSelected(specialty);
    setIsOpen(false);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center p-4"
      style={{
        backgroundImage: `url(${fondoHospital})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form className="bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-4 h-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            <label className="text-gray-700">Especialidad</label>
          </div>

          <input
            readOnly
            value={selected === "Especialidad" ? "" : selected}
            placeholder="Selecciona especialidad"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          {isOpen && (
            <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded mt-1 max-h-48 overflow-auto shadow-sm">
              {specialties.map((specialty) => (
                <li
                  key={specialty}
                  onClick={() => handleSelect(specialty)}
                  className="px-3 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            <label htmlFor="checkIn">Fecha del turno</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>
        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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

export default Hero;
