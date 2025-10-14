import React from 'react';
import { motion as Motion } from 'framer-motion';
import styles from './LinktreeSection.module.css';

function LinktreeCard({ data, delay }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: delay }
    }
  };

  return (
    <Motion.a
      href="#"
      className={styles.card}
      variants={cardVariants}
    >
      <img src={data.cardImageUrl} alt={data.title} className={styles.cardImage} />
      <div className={styles.cardOverlay}></div>
      <h3 className={styles.cardTitle}>{data.title}</h3>
    </Motion.a>
  );
}

function LinktreeSection({ hero1Data, hero2Data }) {
  return (
    <section className={styles.linktreeContainer}>
      <Motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Jelajahi Lebih Lanjut
      </Motion.h2>
      <Motion.div
        className={styles.cardGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <LinktreeCard data={hero1Data} delay={0} />
        <LinktreeCard data={hero2Data} delay={0.2} />
      </Motion.div>
    </section>
  );
}

export default LinktreeSection;