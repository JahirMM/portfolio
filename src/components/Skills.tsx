import { TECHNOLOGIES } from "../data/projects";

const Skills = () => {
  const SKILLS = Object.values(TECHNOLOGIES);
  const duplicateSkills = [...SKILLS, ...SKILLS];

  return (
    <div className="[mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]">
      <div className="flex gap-5 mb-8 select-none overflow-hidden content">
        <ul className="list-none flex justify-between items-center gap-5">
          {duplicateSkills.map(({ icon: Icon, name, className }, index) => (
            <li
              key={index}
              className={`${className} flex items-center gap-3 px-4 py-1 whitespace-nowrap rounded-2xl text-sm`}
            >
              <Icon className="size-5" />
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-5 mb-8 select-none overflow-hidden content second">
        <ul className="list-none flex justify-between items-center gap-5">
          {duplicateSkills.map(({ icon: Icon, name, className }, index) => (
            <li
              key={index}
              className={`${className} flex items-center gap-3 px-4 py-1 whitespace-nowrap rounded-2xl text-sm`}
            >
              <Icon className="size-5" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
