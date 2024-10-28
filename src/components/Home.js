// src/components/Home.js
import React from 'react';
import backgroundImage from '../assets/homepage.png';
import ColorSchemesExample from './navbar';
import './css/Home.css'; // Impor file CSS
import DarkCarousel from './ui/homecontent';

function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="content">
        <h1 className="text-content">Selamat Datang di Manakala Coffee</h1>
        <p className="text-content">
          Di Manakala Coffee, kami percaya bahwa setiap cangkir kopi adalah pengalaman yang unik. Kami mengolah biji kopi pilihan dari berbagai penjuru dunia untuk memberikan cita rasa yang tak terlupakan. 
        </p>
        <p className="text-content">
          Kami berkomitmen untuk menggunakan metode yang berkelanjutan dan ramah lingkungan dalam setiap langkah produksi kami. Dari petani hingga cangkir Anda, kami memastikan bahwa setiap proses dilakukan dengan penuh perhatian dan cinta.
        </p>
        <h2 className="text-content">Produk Kami</h2>
        <ul className="text-content">
          <li><strong>Americano:</strong> Kopi hitam yang kaya rasa, sempurna untuk memulai hari Anda.</li>
          <li><strong>Latte:</strong> Kombinasi sempurna antara espresso dan susu, ideal untuk pencinta rasa lembut.</li>
          <li><strong>Espresso:</strong> Cita rasa kuat dalam setiap tetes, cocok untuk Anda yang menyukai kopi pekat.</li>
          <li><strong>Cold Brew:</strong> Kopi dingin yang menyegarkan, sempurna untuk hari yang panas.</li>
        </ul>
        <DarkCarousel />
      </div>
    </div>
  );
}

export default Home;