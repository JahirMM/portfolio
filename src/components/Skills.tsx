import { SKILLS } from "@/data/skills";

const Skills = () => {
  const skillsList = Object.values(SKILLS);

  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skillsList.map(({ icon: Icon, name }, index) => (
          <li
            key={index}
            className="inline-flex justify-center items-center gap-2 border-dashed border-2 text-xs py-3 border-gray-500 whitespace-nowrap text-gray-700 dark:text-white"
          >
            <Icon className="size-5" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
