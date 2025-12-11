import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import styles from '../styles/PageLayout.module.css'

import data from '../data/data.json'

export default function AcademicRoles() {
    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h1 className={styles.pageTitle}>Academic Roles</h1>

                {data.academicRoles.map((role, index) => (
                    <div key={index} className={styles.academicItem}>
                        <div className={styles.academicHeader}>
                            <h2 className={styles.roleTitle}>{role.role}</h2>
                            <span className={styles.duration}>{role.duration}</span>
                        </div>
                        <h3 className={styles.institution}>{role.institution}</h3>
                        <p className={styles.description}>{role.description}</p>

                        {role.courses && (
                            <>
                                <h4 className={styles.sectionTitle}>Courses Taught:</h4>
                                <ul className={styles.responsibilities}>
                                    {role.courses.map((course, idx) => (
                                        <li key={idx}>{course}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {role.researchAreas && (
                            <>
                                <h4 className={styles.sectionTitle}>Research Areas:</h4>
                                <ul className={styles.responsibilities}>
                                    {role.researchAreas.map((area, idx) => (
                                        <li key={idx}>{area}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <h4 className={styles.sectionTitle}>Achievements:</h4>
                        <ul className={styles.responsibilities}>
                            {role.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Footer />
        </PageLayout>
    )
}
