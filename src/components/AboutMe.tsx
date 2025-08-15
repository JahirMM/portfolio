const SOFTSKILLS = [
  {
    name: "Responsable",
    icon: "✅",
  },
  {
    name: "Honesto",
    icon: "🤝",
  },
  {
    name: "Amigable",
    icon: "😊",
  },
  {
    name: "Autodidacta",
    icon: "📚",
  },
  {
    name: "Trabajo en equipo",
    icon: "🤝",
  },
  {
    name: "Proactivo",
    icon: "🚀",
  },
];

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 gap-10 pb-8 sm:grid-cols-6">
      <article className="p-4 border bg-cardsBackgroundLightTheme rounded-2xl sm:col-start-1 sm:col-end-4 border-gray-800/10 dark:border-gray-800 dark:bg-cardsBackgroundDarkTheme">
        <h3 className="mb-3 text-xl font-bold text-secondaryColorLightTheme">
          Perfil
        </h3>
        <p className="text-sm text-gray-800 text-pretty dark:text-gray-300">
          Abierto a nuevas ideas y formas de trabajar. He trabajado en
          desarrollo web, con enfoque tanto en frontend como backend. Me desafío
          trabajando en problemas complejos y creando soluciones eficientes para
          mejorar la experiencia del usuario. Estoy comprometido con el
          aprendizaje continuo y la mejora de mis habilidades. Durante mis
          prácticas, adquirí conocimientos valiosos que me permitieron entender
          mejor cómo abordar proyectos desafiantes y aprender de compañeros
          excelentes.
        </p>
      </article>
      <article className="bg-cardsBackgroundLightTheme rounded-2xl h-[320px] p-0 flex flex-col overflow-hidden border border-gray-800/10 sm:col-start-1 sm:col-end-4 lg:col-end-5 dark:bg-cardsBackgroundDarkTheme dark:border-gray-800">
        <h3 className="px-6 py-6 text-xl font-bold text-secondaryColorLightTheme">
          Habilidades blandas
        </h3>
        <div className="flex flex-col flex-1 gap-4 px-6 bg-cardsBackgroundLightTheme dark:bg-cardsBackgroundDarkTheme">
          {SOFTSKILLS.map(({ name, icon }, index) => {
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 cursor-pointer  whitespace-nowrap"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {name}
                </span>
                <span>{icon}</span>
              </div>
            );
          })}
        </div>
      </article>
      <article className="p-4 border bg-cardsBackgroundLightTheme rounded-2xl border-gray-800/10 sm:col-start-4 sm:col-end-7 sm:row-start-1 dark:bg-cardsBackgroundDarkTheme dark:border-gray-800">
        <h3 className="mb-3 text-xl font-bold text-secondaryColorLightTheme">
          Educación
        </h3>
        <p className="text-sm text-gray-800 text-pretty dark:text-gray-300">
          Me gradué como ingeniero en computación e informática en la
          Universidad Andrés Bello en el año 2024. Durante mi carrera, trabajé
          en proyectos donde aprendí y mejoré mis habilidades, colaborando
          eficazmente en equipo.
        </p>
      </article>
      <div className="p-4 rounded-2xl h-[320px] w-full border border-gray-800/10 sm:col-start-4 sm:col-end-7 lg:col-start-5 location dark:border-gray-800">
        <h3 className="text-xl font-bold text-secondaryColorLightTheme">
          Ubicación (Chile)
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
