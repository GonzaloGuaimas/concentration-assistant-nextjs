import React from "react";
import Card from "../Card";
import Image from "next/image";

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
      <p className="absolute top-0 left-0 text-primary font-bold">{index}</p>
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
        <div className="inline-flex flex-col gap-3">
          <p className="text-sm text-primary font-semibold self-center">
            Features
          </p>
          <h2 className="text-2xl font-bold text-black max-w-[30vw] text-center">
            El poder de la Inteligencia Aritifical en una App de concentración
          </h2>
        </div>
        <div className="inline-flex flex-col gap-5 w-full px-10">
          <Card>
            <CardContent
              title="Visión Arificial"
              image_url="/images/computer_vision.jpg"
              description="Usamos visión artificial para poder detectar tus estados de concentración frente a tus tareas!"
              index={1}
            />
          </Card>
          <Card>
            <CardContent
              title="Técnica Pomodoro"
              image_url="/images/concentration.jpg"
              description="Usamos visión artificial para poder detectar tus estados de concentración frente a tus tareas!"
              index={2}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
