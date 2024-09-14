import { useRef } from "react";
import Draggable from "react-draggable";

const AboutMe = () => {
  const SOFTSKILLS = [
    {
      name: "Responsable",
      icon: "✅",
      left: "5%",
      top: "1%",
    },
    {
      name: "Honesto",
      icon: "🤝",
      left: "50%",
      top: "16%",
    },
    {
      name: "Amigable",
      icon: "😊",
      left: "10%",
      top: "32%",
    },
    {
      name: "Autodidacta",
      icon: "📚",
      left: "30%",
      top: "46%",
    },
    {
      name: "Trabajo en equipo",
      icon: "🤝",
      left: "25%",
      top: "80%",
    },
    {
      name: "Proactivo",
      icon: "🚀",
      left: "30%",
      top: "63%",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-6">
      <div className="p-4 bg-cardsBackground rounded-2xl sm:col-start-1 sm:col-end-7 lg:col-start-3 lg:col-end-5">
        <div className="text-secondaryColour text-xl font-bold mb-3">
          Educación
        </div>
        <p className="text-gray-300 text-sm text-pretty">
          Me gradué como ingeniero en computación e informática en la
          Universidad Andrés Bello en el año 2020. Durante mi carrera, trabajé
          en proyectos donde aprendí y mejoré mis habilidades, colaborando
          eficazmente en equipo.
        </p>
      </div>
      <div className="bg-cardsBackground rounded-2xl h-[320px] p-0 flex flex-col overflow-hiddenrow-start-3 row-end-4 sm:col-start-1 sm:col-end-7 sm:row-start-2 sm:row-end-3 lg:col-end-5">
        <div className="px-6 py-6 text-secondaryColour text-xl font-bold">
          Habilidades blandas
        </div>
        <div className="relative flex-1 bg-cardsBackground">
          {SOFTSKILLS.map(({ name, icon, left, top }, index) => {
            const nodeRef = useRef(null);
            return (
              <Draggable key={index} bounds="parent" nodeRef={nodeRef}>
                <div
                  ref={nodeRef}
                  className="
                    absolute
                    inline-flex items-center gap-2
                    px-6 py-1.5
                    bg-gradient-to-r from-[#212963] to-[#101B49]
                    rounded-full
                    whitespace-nowrap"
                  style={{
                    left: left,
                    top: top,
                  }}
                >
                  <span className="font-medium text-sm text-white">{name}</span>
                  <span>{icon}</span>
                </div>
              </Draggable>
            );
          })}
        </div>
      </div>
      <div className="bg-cardsBackground rounded-2xl p-4 row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-4 lg:col-end-3">
        <div className="text-secondaryColour text-xl font-bold mb-3">
          Perfil
        </div>
        <p className="text-gray-300 text-sm text-pretty">
          Abierto a nuevas ideas y formas de trabajar. He trabajado en
          desarrollo web, con enfoque tanto en frontend como backend. Me desafío
          trabajando en problemas complejos y creando soluciones eficientes para
          mejorar la experiencia del usuario. Estoy comprometido con el
          aprendizaje continuo y la mejora de mis habilidades. Durante mis
          prácticas, adquirí conocimientos valiosos que me permitieron entender
          cómo trabajar en proyectos desafiantes y aprender de compañeros
          excelentes.
        </p>
      </div>
      <div className="flex justify-center items-center row-start-1 row-end-2 sm:col-start-4 sm:col-end-7 lg:col-start-5 lg:row-end-3">
        <img
          src="https://th.bing.com/th/id/OIP.5cw3LIrosr-qbOb7iTEb1gHaHa?rs=1&pid=ImgDetMain"
          alt="jahir photo"
          className="h-[400px] w-[250px]"
        />
      </div>
    </div>
  );
};

export default AboutMe;
