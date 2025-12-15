import { useId, useState } from 'react'
import { FaUserTie, FaUniversity } from "react-icons/fa"
import { MdEngineering } from "react-icons/md"
import { HiMiniAcademicCap } from "react-icons/hi2"
import { GiMicroscope, GiBrain } from "react-icons/gi"
import { IoIosMail } from "react-icons/io"
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/Nav.module.css'


export default function NavComponent() {
  const navId = useId()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? styles.active : ''
  }

  return (
    <nav className={styles.navigationBar} id={navId}>
      <div className={`${styles.navInner} ${isMenuOpen ? styles.open : ''}`}>
        <button
          className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link to="/" className={`${styles.navItem} ${isActive('/')}`}>
          <FaUserTie className={styles.navIcon} size={32} color='#00123a' />
          <span className={styles.navLink}>Profile</span>
        </Link>

        <Link to="/education" className={`${styles.navItem} ${isActive('/education')}`}>
          <FaUniversity className={styles.navIcon} size={32} color='#00123a' />
          <span className={styles.navLink}>Education</span>
        </Link>

        <Link to="/experience" className={`${styles.navItem} ${isActive('/experience')}`}>
          <MdEngineering className={styles.navIcon} size={32} color='#00123a' />
          <span className={styles.navLink}>Experience</span>
        </Link>

        <Link to="/academic-roles" className={`${styles.navItem} ${isActive('/academic-roles')}`}>
          <HiMiniAcademicCap className={styles.navIcon} size={32} color='#00123a' />
          <span className={styles.navLink}>Academic roles</span>
        </Link>

        <Link to="/research-projects" className={`${styles.navItem} ${isActive('/research-projects')}`}>
          <GiMicroscope className={styles.navIcon} size={32} color='#00123a' />
          <span className={styles.navLink}>Research projects</span>
        </Link>

        <Link to="/skills" className={`${styles.navItem} ${isActive('/skills')}`}>
          <GiBrain className={styles.navIcon} size={32} color='#00123a' />
          <span className={styles.navLink}>Skills</span>
        </Link>

        {/* <div
          className={`${styles.navServiceContainer} ${isActive('/services')}`}
        >
          <div className={styles.buttonServiceContainer}>
            <Link to="/services" className={`${styles.navItem} ${isActive('/services')}`}>
              <IoIosMail className={styles.navIcon} size={32} color='#00123a' />
              <span className={styles.navLink}>Services</span>
            </Link>
          </div>
          <div className={styles.serviceOptions}>
            <ServiceComponent />
          </div>
        </div> */}

        <Link to="/contact" className={`${styles.navItem} ${isActive('/contact')}`}>
          <IoIosMail className={styles.navIcon} size={32} color='#00123a' />
          <span className={styles.navLink}>Contact</span>
        </Link>
      </div>
    </nav>
  )
}
