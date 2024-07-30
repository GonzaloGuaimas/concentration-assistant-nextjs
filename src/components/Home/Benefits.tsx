import Card from "../Card";

const Benefits = () => {
  return (
    <div className="w-full px-10">
      <div className="w-full py-8 rounded-3xl gap-8 bg-primary justify-center items-center inline-flex flex-col">
        <div className="inline-flex flex-col gap-3 mt-10">
          <h2 className="text-2xl font-bold text-dark_white text-center">
            Beneficios
          </h2>
          <p className="text-xl text-gray font-semibold self-center max-w-[30vw] text-center">
            Descubrí cómo nuestra herramienta optimiza tu productividad y
            concentración
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 w-full px-10">
          <Card>
            <h3 className="text-primary font-semibold text-lg">
              Aumento de la Productividad
            </h3>
            <p className="text-justify">
              La aplicación utiliza técnicas avanzadas para mantener tu enfoque
              en las tareas, minimizando las distracciones. Gracias a la
              combinación de la técnica Pomodoro y el monitoreo constante,
              podrás aumentar significativamente tu productividad y aprovechar
              mejor tu tiempo de estudio.
            </p>
          </Card>

          <Card>
            <h3 className="text-primary font-semibold text-lg">
              Retroalimentación en Tiempo Real
            </h3>
            <p className="text-justify">
              Obtén retroalimentación instantánea sobre tu estado de
              concentración. La app te alerta si estás distraído o utilizando tu
              teléfono, permitiéndote ajustar tu comportamiento de inmediato.
              Esta función es crucial para mantener un enfoque constante y
              mejorar la calidad de tus sesiones de estudio.
            </p>
          </Card>

          <Card>
            <h3 className="text-primary font-semibold text-lg">
              Análisis de Datos para Mejora Continua
            </h3>
            <p className="text-justify">
              La app recopila datos sobre tus hábitos de estudio, proporcionando
              estadísticas detalladas sobre tu rendimiento. Estas estadísticas
              te permiten identificar patrones y áreas de mejora, facilitando un
              proceso de aprendizaje continuo y ayudándote a desarrollar mejores
              hábitos de estudio a largo plazo.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
