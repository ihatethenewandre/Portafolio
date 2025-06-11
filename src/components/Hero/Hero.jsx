import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>¡Hola!</h1>
        <h1 className={styles.subtitle}>Mi nombre es André Pivaral</h1>
        <br></br>
        <p className={styles.description}>
          Soy estudiante de V Semestre de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala.
          <br></br><br></br>
          Me gusta programar, escuchar música, leer cómics y jugar videojuegos. Mis dos colores favoritos son el Amarillo y el Azul.
        </p>
        <a href="mailto:andrepivarall@gmail.com" className={styles.contactBtn}>
          ¡Escríbeme!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="ImagenAndre"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};