import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>YO</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="ImagenProgramar"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Buenas prácticas y calidad de código</h3>
              <p>
                Aplico principios SOLID, patrones de diseño y pruebas unitarias/integración para garantizar un código fácil de entender.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Optimización de rendimiento</h3>
              <p>
                Detecto y soluciono problemas de cliente y servidor, mejorando tiempos de carga, uso de memoria y experiencia de usuario.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Diseño de software</h3>
              <p>
                Creo interfaces adaptativas para maximizar usabilidad en todos los dispositivos que reflejan identidad.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
