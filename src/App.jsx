import React from 'react';
import DashboardSection from './components/DashboardSection'; // 1. Impor komponen baru
import HeroSection from './components/HeroSection';
import LinktreeSection from './components/LinktreeSection';
import './index.css';

const hero1Data = {
  title: "ELEMNTAL",
  description: "In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
  imageUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Hero+Image+1",
  cardImageUrl: "https://placehold.co/400x250/E50914/FFFFFF?text=Elemental",
  meta: {
    year: "2023",
    seasons: "Movie",
    genre: "Animation, Comedy"
  }
};

const hero2Data = {
  title: "CYBERPUNK",
  description: "A night city legend, a netrunner with a past, and a corporate enforcer collide in a tale of chrome, conspiracy, and consequence on the neon-drenched streets.",
  imageUrl: "https://placehold.co/1920x1080/1a2a45/FFFFFF?text=Hero+Image+2",
  cardImageUrl: "https://placehold.co/400x250/1a2a45/FFFFFF?text=Cyberpunk",
  meta: {
    year: "2077",
    seasons: "1 Season",
    genre: "Sci-Fi, Action"
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