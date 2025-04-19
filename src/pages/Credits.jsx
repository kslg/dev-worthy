import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const team = [
  {
    name: "Melody",
    role: "Scrum Master",
    image: "https://ca.slack-edge.com/T0L30B202-U05AXV5NM7V-gff8234ebb8e-512",
    github: "https://github.com/Melody-Lisa",
    linkedin: "https://www.linkedin.com/in/melodyshutt/",
  },
  {
    name: "Anthony Radose",
    role: "Developer",
    image: "https://ca.slack-edge.com/T0L30B202-U04H3LAR4G6-gb7194a18480-512",
    github: "https://github.com/placeholder",
    linkedin: "https://linkedin.com/in/placeholder",
  },
  {
    name: "Alan Cruz",
    role: "Developer",
    image: "https://ca.slack-edge.com/T0L30B202-U03CU3EV0E8-cb4ecee9a2c6-512",
    github: "https://github.com/llancruzz",
    linkedin: "https://www.linkedin.com/in/llancruzz",
  },
  {
    name: "Kris Gharu",
    role: "Developer",
    image: "https://ca.slack-edge.com/T0L30B202-U02RCA8RLSW-e4b98f0d6e62-512",
    github: "https://github.com/placeholder",
    linkedin: "https://www.linkedin.com/in/krishang/",
  },
  {
    name: "Ieuan Priede",
    role: "Developer",
    image: "https://ca.slack-edge.com/T0L30B202-U07H19U629M-fe090e8e0895-512",
    github: "https://github.com/IeuanPriede",
    linkedin: "https://www.linkedin.com/in/ieuanpriede/",
  },
];



const Credits = () => {
  return (
    <>
      <main className="credits-container" style={{ padding: "2rem" }}>
        <h1>Team Credits</h1>
        <div className="team-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", }}>
          {team.map((member, index) => (
            <div
              key={index}
              className="card"
              style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "1rem",
                width: "220px", // Set fixed width
                minHeight: "320px", // Ensure consistent height
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between", // Push content apart nicely
              }}
            >
              <img
                src={member.image}
                alt={`${member.name}'s avatar`}
                style={{ 
                  display: "block",              // Makes margin auto work
                  margin: "0 auto",              // Centers horizontally
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover", }}
              />
              <h3 style={{ margin: "0.5rem 0 0.25rem" }}>{member.name}</h3>
              <p style={{ marginBottom: "0.75rem", color: "#555" }}>{member.role}</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} color="#0077b5" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} color="#333" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
  
export default Credits;
