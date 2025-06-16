import React, { useState } from "react";
import fondoHospital from "../assets/fondo-hospital.png";
import Form from "./Form";

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
      <Form/>
    </div>
  );
};

export default Hero;
