import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";   
import ECG from "./sections/ECG";
import PatientList from "./sections/PatientList";
import Vitals from "./sections/Vitals";
import Team from "./sections/Team";

import "./index.css";
import "./App.css";

// Patient sample data
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

function App() {
  const [page, setPage] = useState("home");
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const selectedPatient = selectedPatientId
    ? patientsData[selectedPatientId]
    : null;

  return (
    <div>
      {/* Navbar always visible */}
      <Navbar onNavigate={setPage} />

      {/* Pages */}
      {page === "home" && (
        <Hero onNavigate={() => setPage("patients")} />  
      )}
      

      {page === "patients" && (
        <div
          className="container"
          style={{
            display: "flex",
            gap: "20px",
            paddingTop: "100px",
            minHeight: "80vh",
          }}
        >
          {/* Sidebar patient list */}
          <PatientList
            patients={patientsData}
            selectedId={selectedPatientId}
            onSelect={setSelectedPatientId}
          />

          {/* Dashboard area */}
          <main style={{ flex: 1 }}>
            {!selectedPatient ? (
              <p className="muted">Select a patient to view details and ECG</p>
            ) : (
              <>
                <div
                  className="card"
                  style={{ padding: "16px", marginBottom: "20px" }}
                >
                  <h2>{selectedPatient.name}</h2>
                  <p className="muted">Patient ID: {selectedPatient.id}</p>
                  <p>
                    Status:{" "}
                    <span
                      style={{
                        color:
                          selectedPatient.status === "Active"
                            ? "var(--success)"
                            : "#f59e0b",
                      }}
                    >
                      {selectedPatient.status}
                    </span>
                  </p>
                </div>

                {/* ECG + Vitals */}
                <ECG />
                <Vitals data={selectedPatient} />
              </>
            )}
          </main>
        </div>
      )}

      {page === "about" && (
        <section className="container" style={{ paddingTop: "100px", textAlign: "center" }}>
          <h1  >About Our Project</h1>
          <p className="muted" style={{ marginBottom: "40px", textAlign: "center"}}>
            Checking the vitals of the patient — a prototype for ECG processed
            in MATLAB with real-time visualization.
          </p>


          {/* Faculty */}
          <Team
            title="Faculty Advisor"
            members={[
              {
                name: "Dr. Rekha Bhandarkar",
                role: "Project Coordinator",
                meta: "Deputy Registrar Nitte",
                img: "src/assets/Team/mam.jpg",
              },
            ]}
          />

          {/* Development Team */}
          <Team
            title="Development Team"
            members={[
              {
                name: "Ashwij",
                role: "NNM22EC027",
                meta: "TI cracker. Opamp Lover",
                img: "src/assets/Team/mem2.png",
              },
              {
                name: "B Karan",
                role: "NNM22EC032",
                meta: "Mirafra cracked. Samsung waiting",
                img: "src/assets/Team/mem3.png",
              },
              {
                name: "Hrishikesh B",
                role: "NNM22EC061",
                meta: "Higher studies is an option",
                img: "src/assets/Team/mem4.png",
              },
              {
                name: "Poornachandra N Rao",
                role: "NNM22EC108",
                meta: "No work",
                img: "src/assets/Team/mem5.jpg",
              },
            ]}
          />
        </section>
      )}

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
