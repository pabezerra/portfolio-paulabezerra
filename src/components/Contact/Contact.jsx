import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMessageCircle,
} from "react-icons/fi";

import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">

        <span className="contact__eyebrow">
          Contato
        </span>

        <h2 className="contact__title">
          Vamos conversar?
        </h2>

        <p className="contact__description">
          Estou aberta a oportunidades como Desenvolvedora
          Front-End.
        </p>

        <div className="contact__grid">

          <a
  href="mailto:paula.abezerra@gmail.com"
  className="contact__card"
>
  <FiMail />
  <span>Email</span>
</a>

          <a
  href="https://www.linkedin.com/in/paulaabezera/"
  target="_blank"
  rel="noreferrer"
  className="contact__card"
>
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
  href="https://github.com/pabezerra"
  target="_blank"
  rel="noreferrer"
  className="contact__card"
>
            <FiGithub />
            <span>GitHub</span>
          </a>

          <a
  href="https://wa.me/5511951416465"
  target="_blank"
  rel="noreferrer"
  className="contact__card"
>
            <FiMessageCircle />
            <span>WhatsApp</span>
          </a>

        </div>
      </div>
    </section>
  );
}