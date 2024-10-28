// src/components/About.js
import React from 'react';
import './css/About.css'; // Impor file CSS
import backgroundImage from '../assets/about2.png'; // Impor gambar latar belakang

function About() {
  return (
    <div 
      className="about-container" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Jumbotron */}
      <div className="jumbotron text-center">
        <h1 className="display-4">About Us</h1>
        <p className="lead">We are dedicated to providing the best service possible.</p>
        <hr className="my-4" />
        <p>Learn more about our mission and values.</p>
        <a className="btn btn-red btn-lg" href="#" role="button">Learn more</a>
      </div>

      {/* Cards Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">"At Manakala Coffee, we are dedicated to sourcing the finest coffee beans For perfection"</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text">"Reflects a dedication to sustainable practices, appealing to environmentally conscious consumers."</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Our Values</h5>
                <p className="card-text">Integrity, Excellence, and Customer Satisfaction are at the core of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List Group Section */}
      <div className="container mt-5">
        <h2 className="text-center">Our Team</h2>
        <ul className="list-group">
          <li className="list-group-item">Dewi Mellyna Anggraeni- CEO</li>
          <li className="list-group-item">Difa Ananta Ariftyandaru - CTO</li>
          <li className="list-group-item">Revdy Rofiudin - CFO</li>
        </ul>
      </div>
    </div>
  );
}

export default About;