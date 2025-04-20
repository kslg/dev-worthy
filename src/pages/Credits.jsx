import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Credits.module.css";


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
      <main className={styles.creditsContainer}>
        <h1 className={styles.heading}>Team Credits</h1>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              <img
                src={member.image}
                alt={`${member.name}'s avatar`}
                className={styles.avatar}
              />
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <div className={styles.links}>
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
