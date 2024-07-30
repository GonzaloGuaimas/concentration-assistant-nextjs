import Card from "../Card";

const Contact = () => {
  return (
    <div className="w-full px-10">
      <div className="w-full py-8 rounded-3xl gap-8 bg-white justify-center items-center inline-flex flex-col">
        <div className="inline-flex flex-col gap-3 mt-10">
          <h2 className="text-2xl font-bold text-primary text-center">
            Contáctanos
          </h2>
          <p className="text-xl text-black font-semibold self-center max-w-[30vw] text-center">
            ¿Tenés preguntas o necesitas soporte? Estamos aquí para ayudarte.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 w-full px-60">
          <Card>
            <h3 className="text-primary font-semibold text-lg">
              Correo Electrónico
            </h3>
            <p className="text-justify">
              Podés enviarnos tus consultas o comentarios a nuestro correo
              electrónico:{" "}
              <a
                href="mailto:support@asistente-concentracion.com"
                className="text-blue-500 hover:underline"
              >
                support@asistente-concentracion.com
              </a>{" "}
              Nuestro equipo se pondrá en contacto contigo a la brevedad.
            </p>
          </Card>

          <Card>
            <h3 className="text-primary font-semibold text-lg">
              Soporte Técnico
            </h3>
            <p className="text-justify">
              Para asistencia técnica y problemas relacionados con la
              aplicación, visitá nuestra sección de soporte en línea:
              Encontrarás guías útiles y podrás abrir un ticket de soporte.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
