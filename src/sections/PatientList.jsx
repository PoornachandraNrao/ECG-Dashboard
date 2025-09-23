import React from "react";
import "./PatientList.css";

const PatientList = ({ patients, selectedId, onSelect }) => {
  return (
    <aside className="patient-list-container">
      <h2>Patient List</h2>
      <div className="patient-list">
        {Object.keys(patients).map((id) => (
          <div
            key={id}
            className={`patient-item ${selectedId === id ? "active" : ""}`}
            onClick={() => onSelect(id)}
          >
            <div>
              <h3>{patients[id].name}</h3>
              <p className="meta">ID: {patients[id].id}</p>
            </div>
            <div
              className="status-dot"
              style={{
                background:
                  patients[id].status === "Active"
                    ? "var(--success)"
                    : "#f59e0b",
              }}
            ></div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default PatientList;
