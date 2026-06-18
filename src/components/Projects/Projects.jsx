import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import studioAgendaImg from "../../assets/projects/studio-p-agenda.png";
import studioConceptImg from "../../assets/projects/studio-p-concept.png";
import movieFinderImg from "../../assets/projects/movie-finder.png";

import "./Projects.css";

const projects = [
  {
    title: "Studio P Agenda",
    category: "Sistema Web",
    image: studioAgendaImg,
    description:
      "Sistema de gerenciamento para salão de beleza com cadastro de clientes, serviços, profissionais e agendamentos.",
    problem: "Organizar atendimentos e informações do salão de forma prática.",
    solution:
      "Criação de uma aplicação web com dashboard, formulários, edição de dados e armazenamento local.",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    github: "https://github.com/pabezerra/studio-p-agenda",
    demo: "https://studio-p-agenda.vercel.app",
  },
  {
    title: "Movie Finder",
    category: "Aplicação com API",
    image: movieFinderImg,
    description:
      "Aplicação de busca de filmes com consumo de API, exibição de resultados dinâmicos e interface responsiva.",
    problem: "Permitir que usuários pesquisem filmes de forma rápida e intuitiva.",
    solution:
      "Integração com API externa para buscar e renderizar informações de filmes em tempo real.",
    technologies: ["React", "API REST", "JavaScript", "CSS"],
    github: "https://github.com/pabezerra/movie-finder",
    demo: "https://movie-finder-7lfo.vercel.app",
  },
  {
    title: "Studio P Concept",
    category: "Site Institucional",
    image: studioConceptImg,
    description:
      "Site responsivo desenvolvido para apresentar serviços, localização e canais de contato de um salão de beleza.",
    problem: "Criar uma presença digital mais profissional para o salão.",
    solution:
      "Desenvolvimento de uma landing page elegante, responsiva e integrada ao WhatsApp.",
    technologies: ["React", "JavaScript", "CSS", "Responsividade"],
    github: "https://github.com/pabezerra/studio-p-concept",
    demo: "https://studio-p-concept.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projetos">
      <div className="container">
        <div className="projects__header">
          <span>Projetos em destaque</span>

          <h2>
            Aplicações desenvolvidas com foco em experiência, organização e
            código bem estruturado.
          </h2>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                />
              </div>

              <div className="project-card__content">
                <span className="project-card__category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-card__details">
                  <div>
                    <strong>Problema</strong>
                    <span>{project.problem}</span>
                  </div>

                  <div>
                    <strong>Solução</strong>
                    <span>{project.solution}</span>
                  </div>
                </div>

                <div className="project-card__techs">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Ver projeto <FiArrowUpRight />
                  </a>

                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <FiGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}