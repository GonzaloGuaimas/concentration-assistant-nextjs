import Image from "next/image";
import Card from "../Card";

const CardContent = ({
  title,
  image_url,
  description,
  index,
}: {
  title: string;
  image_url: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="inline-flex justify-between gap-5 w-full items-center relative">
      <p className="absolute -top-0 left-0 text-primary font-bold">{index}</p>
      <div className="inline-flex flex-col max-w-[300px] gap-3">
        <h3 className="font-semibold text-2xl text-black">{title}</h3>
        <p className="text-sm text-gray">{description}</p>
      </div>
      <div>
        <Image
          src={image_url}
          alt="logo"
          className="rounded-3xl shadow-lg"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="w-full px-10">
      <div className="w-full py-8 rounded-3xl gap-8 bg-light_gray justify-center items-center inline-flex flex-col">
        <div className="inline-flex flex-col gap-3 mt-10">
          <p className="text-xl text-primary font-semibold self-center">
            Características
          </p>
          <h2 className="text-2xl font-bold text-secondary max-w-[30vw] text-center">
            Mejorá tu concentración con Inteligencia Artificial
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full px-10">
          <Card>
            <CardContent
              title="Visión Artificial"
              image_url="/images/artificial_vision.png"
              description="Nuestra aplicación utiliza avanzadas técnicas de visión artificial para analizar en tiempo real tus niveles de concentración. Con esta tecnología, podemos identificar si estás enfocado, distraído o utilizando tu teléfono, permitiéndote recibir retroalimentación inmediata para mejorar tu productividad."
              index={1}
            />
          </Card>
          <Card>
            <CardContent
              title="Técnica Pomodoro"
              image_url="/images/pomodoro.png"
              description="Incorporamos la efectiva Técnica Pomodoro, que divide tu tiempo de estudio en intervalos de trabajo y descanso. Con nuestra app, podrás gestionar estos intervalos de manera visual y recibir recordatorios, ayudándote a mantener un ritmo de estudio eficiente y estructurado."
              index={2}
            />
          </Card>
          <Card>
            <CardContent
              title="Monitoreo en Tiempo Real"
              image_url="/images/real_time.png"
              description="Nuestra aplicación ofrece monitoreo en tiempo real, capturando datos continuamente para ofrecer un análisis preciso y actual de tu estado de concentración. Esto te permite ajustar tu enfoque de inmediato, maximizando la eficiencia de tus sesiones de estudio."
              index={3}
            />
          </Card>
          <Card>
            <CardContent
              title="Análisis de Datos y Estadísticas"
              image_url="/images/stadistics.png"
              description="La app recopila y analiza datos de tus sesiones de estudio, proporcionando estadísticas detalladas sobre tus niveles de concentración, distracción y uso del teléfono. Esta información te ayudará a entender mejor tus hábitos de estudio e identificar áreas de mejora."
              index={4}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
