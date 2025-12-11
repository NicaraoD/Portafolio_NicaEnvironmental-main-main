import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import styles from '../styles/PageLayout.module.css'

import data from '../data/data.json'

export default function ResearchProjects() {
    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h1 className={styles.pageTitle}>Research Projects</h1>

                {data.researchProjects.map((project, index) => (
                    <div key={index} className={styles.projectItem}>
                        <div className={styles.projectHeader}>
                            <h2 className={styles.projectTitle}>{project.title}</h2>
                            <span
                                className={styles.projectStatus}
                                style={project.status === 'Completed' ? { background: '#e3f2fd', color: '#1976d2' } : {}}
                            >
                                {project.status}
                            </span>
                        </div>
                        <p className={styles.projectMeta}>
                            <strong>Funding:</strong> {project.funding} | <strong>Duration:</strong> {project.duration} | <strong>Budget:</strong> {project.budget}
                        </p>
                        <p className={styles.description}>
                            {project.description}
                        </p>
                        <h4 className={styles.sectionTitle}>Objectives:</h4>
                        <ul className={styles.responsibilities}>
                            {project.objectives.map((objective, idx) => (
                                <li key={idx}>{objective}</li>
                            ))}
                        </ul>
                        <div className={styles.keyFindings}>
                            <strong>Key Outputs:</strong> {project.keyOutputs}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </PageLayout>
    )
}
