import React from "react";
import "./Team.css";

const Team = ({ title, members }) => {
  return (
    <div className="team-section">
      <h2 className="team-title">{title}</h2>
      <div className="team-grid">
        {members.map((member, idx) => (
          <div key={idx} className="team-card">
            <div className="avatar">
              <img src={member.img} alt={member.name} />
            </div>
            <h4>{member.name}</h4>
            {member.role && <p className="role">{member.role}</p>}
            {member.meta && <p className="meta">{member.meta}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
