import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // make sure to install react-icons


const team = [
  {
    name: "Melody",
    role: "Scrum Master",
    image: "https://via.placeholder.com/150", // replace with actual image URL later
    github: "https://github.com/placeholder",
    linkedin: "https://linkedin.com/in/placeholder",
  },
  {
    name: "Anthony Radose",
    role: "Developer",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/placeholder",
    linkedin: "https://linkedin.com/in/placeholder",
  },
  {
    name: "Alan Cruz",
    role: "Developer",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/placeholder",
    linkedin: "https://linkedin.com/in/placeholder",
  },
  {
    name: "Kris Gharu",
    role: "Developer",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/placeholder",
    linkedin: "https://linkedin.com/in/placeholder",
  },
  {
    name: "Ieuan Priede",
    role: "Developer",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/placeholder",
    linkedin: "https://linkedin.com/in/placeholder",
  },
];



const Credits = () => {
  return (
    <>
      <main className="credits-container" style={{ padding: "2rem" }}>
        <h1>Team Credits</h1>
        <div className="team-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {team.map((member, index) => (
            <div
              key={index}
              className="card"
              style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "1rem",
                maxWidth: "220px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={member.image}
                alt={`${member.name}'s avatar`}
                style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover" }}
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
