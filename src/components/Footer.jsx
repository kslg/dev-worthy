import { Link } from "react-router-dom";
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Link to="about">Credits <i class="bi bi-people-fill"></i></Link>
    <a href="https://github.com/anthonyradose/dev-worthy" target='_blank'><i class="bi bi-github"></i> GitHub</a>
  </footer>
);

export default Footer;