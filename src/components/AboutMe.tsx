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
      <div className="bg-cardsBackgroundLightTheme rounded-2xl p-4 sm:col-start-1 sm:col-end-4 border border-gray-800/10 dark:border-gray-800 dark:bg-cardsBackgroundDarkTheme">
        <div className="text-secondaryColorLightTheme text-xl font-bold mb-3">
          Perfil
        </div>
        <p className="text-gray-800 text-sm text-pretty dark:text-gray-300">
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
      <div className="bg-cardsBackgroundLightTheme rounded-2xl h-[320px] p-0 flex flex-col overflow-hidden border border-gray-800/10 sm:col-start-1 sm:col-end-4 lg:col-end-5 dark:bg-cardsBackgroundDarkTheme dark:border-gray-800">
        <div className="px-6 py-6 text-secondaryColorLightTheme text-xl font-bold">
          Habilidades blandas
        </div>
        <div className="relative flex-1 bg-cardsBackgroundLightTheme dark:bg-cardsBackgroundDarkTheme">
          {SOFTSKILLS.map(({ name, icon, left, top }, index) => {
            const nodeRef = useRef<HTMLDivElement>(null);
            return (
              <Draggable key={index} bounds="parent" nodeRef={nodeRef}>
                <div
                  ref={nodeRef}
                  className="
                    cursor-pointer
                    absolute
                    inline-flex items-center gap-2
                    px-6 py-1.5
                    bg-gradient-to-r from-[#BEAF9B] to-[#F3EDE5] dark:from-[#212963] dark:to-[#101B49]
                    rounded-full
                    whitespace-nowrap"
                  style={{
                    left: left,
                    top: top,
                  }}
                >
                  <span className="font-medium text-sm text-gray-800 dark:text-white">
                    {name}
                  </span>
                  <span>{icon}</span>
                </div>
              </Draggable>
            );
          })}
        </div>
      </div>
      <div className="p-4 bg-cardsBackgroundLightTheme rounded-2xl border border-gray-800/10 sm:col-start-4 sm:col-end-7 sm:row-start-1 dark:bg-cardsBackgroundDarkTheme dark:border-gray-800">
        <div className="text-secondaryColorLightTheme text-xl font-bold mb-3">
          Educación
        </div>
        <p className="text-gray-800 text-sm text-pretty dark:text-gray-300">
          Me gradué como ingeniero en computación...
        </p>
      </div>
      <div className="p-4 rounded-2xl h-[320px] w-full border border-gray-800/10 sm:col-start-4 sm:col-end-7 lg:col-start-5 location dark:border-gray-800">
        <div className="text-secondaryColorLightTheme text-xl font-bold">
          Ubicación (Chile)
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
