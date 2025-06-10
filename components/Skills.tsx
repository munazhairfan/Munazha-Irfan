import { skills } from "../lib/skills";

export default function Skills() {
  const grouped = {
    Frontend: skills.filter((s) => s.category === "Frontend"),
    Backend: skills.filter((s) => s.category === "Backend"),
    Tools: skills.filter((s) => s.category === "Tools"),
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-neutral-700">
      <h2 className="text-5xl font-medium text-center mb-10 text-white">Skills</h2>
      {Object.entries(grouped).map(([category, skills]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-neutral-200">{category}</h3>
          <div className="grid grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-800 md:p-4 p-2 rounded-xl shadow hover:shadow-md transition"
              >
                {/* <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                 */}
                 <div className="md:size-10 size-5 flex justify-center items-center">{skill.icon}</div>
                <span className="md:text-sm text-[8px]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
