import CallToActionBtn from "../CallToActionBtn";

const Hero = () => {
  return (
    <div className="inline-flex flex-col text-center gap-y-6 max-w-[65vw] justify-center items-center">
      <h1 className="text-5xl font-bold text-black">
        <strong className="text-primary">{"<<<"}</strong> Asistente de
        concentración impulsado con Inteligencia Artificial{" "}
        <strong className="text-primary">{">>>"}</strong>
      </h1>
      <h3 className="text-2xl text-primary -mt-4">
        para estudiantes universitarios
      </h3>
      <div>
        <p className="text-dark_gray text-xl">
          ⏰ Controlá tu <strong>concentración 🧠 </strong> con{" "}
          <strong>Inteligencia Artificial 🤖 </strong> y aumentá 📈 tu{" "}
          <strong>productividad 🤩</strong>.
        </p>
        <p className="text-dark_gray">
          📚 ¡Empezá a mejorar tu rendimiento académico hoy mismo! 😎
        </p>
      </div>
      <CallToActionBtn />
    </div>
  );
};

export default Hero;
