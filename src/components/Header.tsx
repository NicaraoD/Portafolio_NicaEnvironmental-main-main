import { useId, useState, useEffect } from 'react'
import riceImage from '../assets/rice.png'
import foto1 from '../../public/foto1.png'
import foto2 from '../../public/images.png'
import lake from '../../public/lake.png'
import bioreactor from '../../public/bioreactor.png'
import biotechologies from '../../public/biotechnology.png'
import styles from '../styles/Header.module.css'
import credentialsData from '../data/data.json'
import Water_drop from  '../../public/Water_drop.png'
export default function Header() {
  const headerId = useId()
  const credentialsId = useId()

  const [currentIndex1, setCurrentIndex1] = useState(0)
  const [currentIndex2, setCurrentIndex2] = useState(1)
  const [isAnimating1, setIsAnimating1] = useState(false)
  const [isAnimating2, setIsAnimating2] = useState(false)

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0)
  const [isAnimatingTagline, setIsAnimatingTagline] = useState(false)

  const credentials = credentialsData.credentials
  const taglines = credentialsData.taglines

  const logoMap: { [key: string]: string } = {
    'rice.png': riceImage,
    'images.png': foto2,
    'lake.png': lake,
    'bioreactor.png': bioreactor,
    'biotechologies.png':biotechologies,
    'Water_drop.png' :Water_drop,

  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating1(true)
      setIsAnimating2(true)

      setTimeout(() => {
        setCurrentIndex1((prev) => (prev + 2) % credentials.length)
        setCurrentIndex2((prev) => (prev + 2) % credentials.length)
        setIsAnimating1(false)
        setIsAnimating2(false)
      }, 300)
    }, 6000)

    return () => clearInterval(interval)
  }, [credentials.length])

  useEffect(() => {
    
    const initialTimeout = setTimeout(() => {
      setIsAnimatingTagline(true)
      setTimeout(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length)
        setIsAnimatingTagline(false)
      }, 300)
    }, 3000)

    const interval = setInterval(() => {
      setIsAnimatingTagline(true)
      setTimeout(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length)
        setIsAnimatingTagline(false)
      }, 300)
    }, 6000)

    const delayedInterval = setTimeout(() => { }, 3000)

    return () => {
      clearTimeout(initialTimeout)
      clearTimeout(delayedInterval)
      clearInterval(interval)
    }
  }, [taglines.length])

  return (
    <header className={styles.headerContainer} id={headerId}>
      <div className={styles.credentialsSection} id={credentialsId}>
        <div className={styles.credentialItem}>
          <img
            className={styles.institutionLogo}
            src={logoMap[credentials[currentIndex1].logo]}
            alt={`${credentials[currentIndex1].institution} Logo`}
          />
          <div className={styles.credentialText}>
            <h4 className={`${styles.degreeTitle} ${isAnimating1 ? styles.fadeOut : styles.fadeIn}`}>
              {credentials[currentIndex1].degree}
            </h4>
          </div>
        </div>
        <div className={styles.credentialItem}>
          <img
            className={`${styles.institutionLogo} ${styles.universityLogo}`}
            src={logoMap[credentials[currentIndex2].logo]}
            alt={`${credentials[currentIndex2].institution} Logo`}
          />
          <div className={styles.credentialText}>
            <h4 className={`${styles.degreeTitle} ${isAnimating2 ? styles.fadeOut : styles.fadeIn}`}>
              {credentials[currentIndex2].degree}
            </h4>
          </div>
        </div>
      </div>

      <div className={styles.taglineSection}>
        <p className={`${styles.taglineText} ${isAnimatingTagline ? styles.fadeOut : styles.fadeIn}`}>
          {taglines[currentTaglineIndex]}
        </p>
      </div>

      <div className={styles.profileSection}>
        <img
          className={styles.profileImage}
          src={foto1}
          alt="Professional Profile"
        />
      </div>
    </header>
  )
}
