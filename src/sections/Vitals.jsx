import React from "react";
import "./Vitals.css";

const Vitals = ({ data }) => {
  if (!data) return null;

  return (
    <div className="vitals-section">
      <h3 className="vitals-title">Vital Signs</h3>
      <div className="vitals-grid">
        <div className="vital">
          <span className="value">{data.heartRate}</span>
          <p>Heart Rate (BPM)</p>
        </div>
        <div className="vital">
          <span className="value">{data.bloodPressure}</span>
          <p>Blood Pressure (mmHg)</p>
        </div>
        <div className="vital">
          <span className="value">{data.spo2}</span>
          <p>SpO₂ (%)</p>
        </div>
        <div className="vital">
          <span className="value">{data.respiration}</span>
          <p>Respiration (/min)</p>
        </div>
        <div className="vital">
          <span className="value">{data.temperature}</span>
          <p>Temperature (°F)</p>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
