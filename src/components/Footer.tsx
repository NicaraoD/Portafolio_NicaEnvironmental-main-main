import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'
import data from '../data/data.json'

export default function Footer() {
    const contact = data.contact
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Nicarao Delgado</h3>
                    <p className={styles.footerTagline}>
                        Environmental Engineering Solutions
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerSectionTitle}>Contact</h4>
                    <div className={styles.contactLinks}>
                        <a href={`mailto:${contact.email}`} className={styles.footerLink}>
                            <FaEnvelope /> {contact.email}
                        </a>
                        <a href={`tel:${contact.phone}`} className={styles.footerLink}>
                            <FaPhone /> {contact.phone}
                        </a>
                        <div className={styles.footerLink}>
                            <FaMapMarkerAlt /> {contact.location}
                        </div>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerSectionTitle}>Connect</h4>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://www.linkedin.com/in/nicarao-delgado-458771106/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © {currentYear} Nicarao Delgado. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
