import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary w-full px-20 py-16 grid grid-cols-3 text-light_white">
      <div className="inline-flex flex-col gap-2">
        <h4 className="text-2xl font-bold">Asistente de Concentración</h4>
        <p className="text-dark_white">
          Aprovechá la potencia de la visión artificial para optimizar tu
          concentración. Con nuestra herramienta, potenciarás tu efectividad y
          gestionarás tu tiempo de manera más eficiente. ¡Empezá ahora a
          transformar tu productividad y alcanzar tus metas académicas!
        </p>
      </div>
      <div className="inline-flex flex-col gap-2 justify-center items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="bg-white rounded-full hover:scale-110 transition-all duration-300 cursor-pointer"
        />
      </div>
      <div className="inline-flex flex-col gap-2 text-end">
        <h4 className="text-xl font-bold">Contacto</h4>
        <div className="inline-flex flex-col text-dark_white">
          <p>Ing. Guaimas Gonzalo Bartolomé</p>
          <p>Universidad Católica de Salta</p>
          <p>Ingeniería Informatica</p>
          <Link href="a">Linkedin</Link>
          <Link href="a">GitHub</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
