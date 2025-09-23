import React from "react";
import "./Hero.css";

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <div className="hero-icon">
            <i className="fas fa-heartbeat"></i>
          </div>

          <h1 className="hero-title">Real-time ECG Monitoring</h1>
          <p className="hero-subtitle">
            Advanced patient monitoring for healthcare professionals — real-time
            waveform, vitals and clean patient management.
          </p>
          <button className="btn" onClick={onNavigate}>
            View Patient Details <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="container hero-features">
        <div className="feature-card">
          <div className="feature-header">
          <div className="feature-icon green">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3>Real-time Monitoring</h3> </div>
          <p>Continuous ECG monitoring with smooth live waveform and alerts.</p>
        </div>

        
        <div className="feature-card">
          <div className="feature-header">
            <div className="feature-icon blue">
              <i className="fas fa-user-md"></i>
            </div>
            <h3>Patient Management</h3>
          </div>
          <p>Structured patient records, vitals history and export-ready snapshots.</p>
        </div>


        <div className="feature-card">
          <div className="feature-header">
          <div className="feature-icon purple">
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Easy to Operate</h3></div>
          <p>Minimal learning curve, clear UI and accessibility-first design.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
