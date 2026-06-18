import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";

import profileImage from "../../assets/profile.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero__eyebrow">Desenvolvedora Front-End</span>

          <h1>
            <span>Interfaces que unem tecnologia,</span>
            <span>usabilidade e identidade.</span>
          </h1>

          <div className="hero__line"></div>

          <div className="hero__visual hero__visual--mobile">
            <div className="hero__image">
              <img src={profileImage} alt="Foto de Paula Bezerra" />
            </div>

            <div className="hero__card">
              <div className="hero__card-icon">
                <FiCode />
              </div>

              <div>
                <strong>Front-End</strong>
                <span>React • JavaScript • CSS</span>
              </div>
            </div>
          </div>

          <p>
            Desenvolvo aplicações web modernas, responsivas e bem estruturadas,
            com foco em experiência do usuário, performance e qualidade visual.
          </p>

          <p>
            Formação Full Stack pela Mate Academy e graduação em Análise e
            Desenvolvimento de Sistemas pela Universidade Anhembi Morumbi.
          </p>

          <div className="hero__actions">
            <a href="#projetos" className="btn-primary">
              Ver projetos <FiArrowRight />
            </a>

            <a href="/curriculo.pdf" className="btn-secondary">
              Baixar CV <FiDownload />
            </a>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/pabezerra"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/paulaabezera/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual hero__visual--desktop"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero__image">
            <img src={profileImage} alt="Foto de Paula Bezerra" />
          </div>

          <div className="hero__card">
            <div className="hero__card-icon">
              <FiCode />
            </div>

            <div>
              <strong>Front-End</strong>
              <span>React • JavaScript • CSS</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="container hero__highlights"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <article>
          <div>
            <FiAward />
          </div>

          <section>
            <strong>Mate Academy</strong>
            <span>Bootcamp Full Stack</span>
          </section>
        </article>

        <article>
          <div>
            <FiBookOpen />
          </div>

          <section>
            <strong>UAM</strong>
            <span>Análise e Desenvolvimento de Sistemas</span>
          </section>
        </article>

        <article>
          <div>
            <FiCode />
          </div>

          <section>
            <strong>Foco</strong>
            <span>UX, código limpo e boas práticas.</span>
          </section>
        </article>
      </motion.div>
    </section>
  );
}