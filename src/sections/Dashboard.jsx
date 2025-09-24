import React, { useState } from "react";
import "./Dashboard.css";
import PatientList from "../sections/PatientList";
import Vitals from "../sections/Vitals";
import ECG from "../sections/ECG";

// Sample patients data
const patientsData = {
  person1: {
    name: "person1",
    id: "P001",
    heartRate: 72,
    bloodPressure: "120/80",
    spo2: 98,
    respiration: 16,
    temperature: 98.6,
    status: "Active",
  },
  person2: {
    name: "person2",
    id: "P002",
    heartRate: 68,
    bloodPressure: "115/75",
    spo2: 97,
    respiration: 14,
    temperature: 98.4,
    status: "Idle",
  },
  person3: {
    name: "person3",
    id: "P003",
    heartRate: 75,
    bloodPressure: "125/85",
    spo2: 99,
    respiration: 18,
    temperature: 98.8,
    status: "Active",
  },
};

const Dashboard = () => {
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const selectedPatient = selectedPatientId ? patientsData[selectedPatientId] : null;

  return (
    <section className="dashboard container">
      <div className="layout">
        {/* Sidebar */}
        <div className="sidebar">
          <PatientList
            patients={patientsData}
            selectedId={selectedPatientId}
            onSelect={setSelectedPatientId}
          />
        </div>

        {/* Main Content */}
        <main className="main">
          {!selectedPatient ? (
            <div className="placeholder">
              <h1>Patient Dashboard</h1>
              
            </div>
          ) : (
            <>
              {/* Patient Info */}
              <div className="card patient-info">
                <div>
                  <h2>{selectedPatient.name}</h2>
                  <p className="meta">Patient ID: {selectedPatient.id}</p>
                </div>
                <div className="status">
                  <span
                    className="status-dot"
                    style={{
                      background:
                        selectedPatient.status === "Active"
                          ? "var(--success)"
                          : "#f59e0b",
                    }}
                  ></span>
                  <span
                    className="status-text"
                    style={{
                      color:
                        selectedPatient.status === "Active"
                          ? "var(--success)"
                          : "#f59e0b",
                    }}
                  >
                    {selectedPatient.status}
                  </span>
                </div>
              </div>

              {/* ECG */}
              <ECG />

              {/* Vitals */}
              <Vitals data={selectedPatient} />
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
