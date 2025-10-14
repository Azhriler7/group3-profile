import React from 'react';
import { motion as Motion } from 'framer-motion';
import styles from './DashboardSection.module.css';

function DashboardSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <Motion.section
      className={styles.dashboardContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Motion.h1 className={styles.title} variants={itemVariants}>
        Kelompok 3
      </Motion.h1>
      <Motion.div className={styles.namesContainer} variants={itemVariants}>
        <span className={styles.name}>Azhril</span>
        <span className={styles.name}>Akbar</span>
      </Motion.div>
    </Motion.section>
  );
}

export default DashboardSection;