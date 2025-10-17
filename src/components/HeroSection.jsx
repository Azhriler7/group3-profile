import React, { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import styles from './HeroSection.module.css';

function HeroSection({ data, layout = 'right' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerClasses = `${styles.heroContainer} ${layout === 'left' ? styles.layoutLeft : ''}`;

  const handleCtaClick = () => {
    const el = document.getElementById('linktree');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={ref} className={containerClasses}>
      <div className={styles.background}>
        <img src={data.imageUrl} alt={data.title} className={styles.bgImage} />
        <div className={styles.overlay}></div>
      </div>

      <Motion.div
        className={styles.content}
        variants={animationVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.meta}>
          <span>{data.meta.year}</span>
          <span>{data.meta.seasons}</span>
          <span>{data.meta.genre}</span>
        </div>
        <button className={styles.ctaButton} type="button" onClick={handleCtaClick}>
          <FaPlay />
          <span>See our Github</span>
        </button>
      </Motion.div>
    </section>
  );
}

export default HeroSection;