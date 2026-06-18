import { motion } from "framer-motion";
import { FiCode, FiGitBranch, FiLayout } from "react-icons/fi";
import "./Skills.css";

const skillGroups = [
  {
    title: "Front-End",
    icon: <FiLayout />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Angular",
    ],
  },
  {
    title: "Ferramentas",
    icon: <FiGitBranch />,
    skills: ["Git", "GitHub", "Terminal", "VS Code", "Figma"],
  },
  {
    title: "Conceitos",
    icon: <FiCode />,
    skills: [
      "Responsividade",
      "APIs REST",
      "Redux",
      "POO",
      "SQL",
      "Scrum",
      "GenAI Essentials",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="tecnologias">
      <div className="container">
        <div className="skills__header">
          <span>Stack tecnológica</span>

          <h2>
            Tecnologias e conceitos que utilizo para criar interfaces completas.
          </h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skills__card"
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="skills__icon">{group.icon}</div>

              <h3>{group.title}</h3>

              <div className="skills__list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}