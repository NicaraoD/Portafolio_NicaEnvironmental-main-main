import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from '../styles/PageLayout.module.css'
import data from '../data/data.json'

export default function Education() {
  const educationData = data.education

  return (
    <PageLayout>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Education & Qualifications</h1>
      

        <div className={styles.educationTimeline}>
          {educationData.map((edu, index) => {
            const { elementRef, isVisible } = useScrollAnimation()

            return (
              <div
                key={edu.id}
                ref={elementRef}
                className={`${styles.educationCard} ${isVisible ? styles.scrollAnimated : ''} ${isVisible && index > 0 ? styles[`delay${Math.min(index, 3)}`] : ''}`}
              >
                <div className={styles.educationLeftColumn}>
                  <span className={styles.educationYear}>{edu.duration}</span>
                  <div className={styles.timelineDot}></div>
                </div>

                <div className={styles.educationRightColumn}>
                  <div className={styles.degreeHeader}>
                    <h2 className={styles.degreeTitle}>{edu.degree}</h2>
                    <div className={styles.fieldContainer}>
                      <span className={styles.fieldBadge}>{edu.field}</span>
                      <span className={styles.fieldStatus}>{edu.fieldStatus}</span>
                    </div>
                  </div>

                  <div className={styles.institutionBlock}>
                    <h3 className={styles.institutionName}>{edu.institution}</h3>
                    <p className={styles.locationText}>📍 {edu.location}</p>
                  </div>

                  <p className={styles.degreeDescription}>{edu.description}</p>

                  <div className={styles.achievementsBlock}>
                    <h4 className={styles.achievementsHeading}>Key Achievements</h4>
                    <div className={styles.achievementsGrid}>
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className={styles.achievementChip}>
                          <span className={styles.achievementIcon}>✓</span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </PageLayout>
  )
}