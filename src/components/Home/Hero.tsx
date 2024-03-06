import React from "react";
import CallToActionBtn from "../CallToActionBtn";

const Hero = () => {
  return (
    <div className="inline-flex flex-col text-center gap-y-6 max-w-[60vw] justify-center items-center">
      <h1 className="text-5xl font-bold text-black">
        Asistente de concentración impulsado con Inteligencia Artificial
      </h1>
      <p className="text-dark_gray">
        Mediante visión artificial controlaremos tu concentración frente a tus
        tareas y aumentaremos x100 tu efectividad!. Comenzá a utilizar tu tiempo
        de la mejor forma ahora!.
      </p>
      <CallToActionBtn />
    </div>
  );
};

export default Hero;
