import React, { useState } from "react";
import fondoHospital from "../assets/fondo-hospital.png";
import Especialidad from "./Especialidad";

const Hero = () => {

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
      <Especialidad/>
    </div>
  );
};

export default Hero;
