// src/components/Contact.js
import React from 'react';
import backgroundImage from '../assets/contact1.png'; // Pastikan path ini benar
import './css/Contact.css'; // Impor file CSS
import { Button } from 'react-bootstrap'; // Impor komponen Button dari Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Impor FontAwesome
import { faYoutube, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Impor ikon sosial media

function Contact() {
  return (
    <div className="contact-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="contact-content">
        <h1 className="text-contact">Kontak Kami</h1>
        <p className="text-content">Jika Anda memiliki pertanyaan atau ingin tahu lebih banyak tentang produk kami, jangan ragu untuk menghubungi kami!</p>
        
        <Button variant="dark" className="transparent-button">Hubungi Kami</Button>

        <div className="social-buttons">
          <Button variant="link" className="social-button" href="https://www.youtube.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </Button>
          <Button variant="link" className="social-button" href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Button>
          <Button variant="link" className="social-button" href="https://www.whatsapp.com" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </Button>
          <Button variant="link" className="social-button" href="https://www.linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;