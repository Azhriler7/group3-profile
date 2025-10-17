import React from 'react';
import DashboardSection from './components/DashboardSection';
import HeroSection from './components/HeroSection';
import LinktreeSection from './components/LinktreeSection';
import './index.css';

const hero1Data = {
  title: "Azhrier Lintang - 3337230087",
  description: "Saya adalah mahasiswa yang tertarik pada pengembangan mobile, terutama Flutter, Kotlin, dan React Native.",
  imageUrl: "https://cataas.com/cat/says/MEOW%20FLUTTER?width=1920&height=1080&size=72&color=white",
  cardImageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  meta: {
    year: "HTML",
    seasons: "CSS",
    genre: "JavaScript"
  }
};

const hero2Data = {
  title: "Mujadid Akbar Paryono - 3337230089",
  description: "Saya adalah mahasiswa yang tertarik pada pengembangan web, terutama React, Node.js, dan Express.",
  imageUrl: "https://cataas.com/cat/says/MEOW%20REACT?width=1920&height=1080&size=72&color=white",
  cardImageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  meta: {
    year: "HTML",
    seasons: "CSS",
    genre: "JavaScript"
  }
};

function App() {
  return (
    <div className="container">
      <DashboardSection /> {/* 2. Tambahkan komponen di paling atas */}
      <HeroSection data={hero1Data} layout="right" />
      <HeroSection data={hero2Data} layout="left" />
      <LinktreeSection hero1Data={hero1Data} hero2Data={hero2Data} />
    </div>
  );
}

export default App;