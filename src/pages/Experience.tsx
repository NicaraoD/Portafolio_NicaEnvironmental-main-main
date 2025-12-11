import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from '../styles/PageLayout.module.css'
import modalStyles from '../styles/Modal.module.css'
import data from '../data/data.json'

interface ExperienceItem {
    id: string
    title: string
    duration: string
    company: string
    location: string
    responsibilities: string[]
    detailedDescription?: string
    achievements?: string[]
    skills?: string[]
    slug?: string
}

export default function Experience() {
    const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null)
    const navigate = useNavigate()
    const { itemSlug } = useParams()
    const experienceData = data.experience

    useEffect(() => {
        if (itemSlug) {
            const item = experienceData.find((exp: ExperienceItem) =>
                exp.id === itemSlug || exp.slug === itemSlug
            )
            if (item) {
                setSelectedItem(item)
            }
        }
    }, [itemSlug, experienceData])

    const openModal = (item: ExperienceItem) => {
        const slug = item.slug || item.id
        navigate(`/experience/${slug}`)
        setSelectedItem(item)
    }

    const closeModal = () => {
        navigate('/experience')
        setSelectedItem(null)
    }

    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h1 className={styles.pageTitle}>Professional Experience</h1>

                {experienceData.map((exp: ExperienceItem, index: number) => {
                    const { elementRef, isVisible } = useScrollAnimation()

                    return (
                        <div
                            key={exp.id}
                            ref={elementRef}
                            className={`${styles.experienceItem} ${isVisible ? styles.scrollAnimated : ''} ${isVisible && index > 0 ? styles[`delay${Math.min(index, 3)}`] : ''}`}
                            onClick={() => openModal(exp)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className={styles.experienceHeader}>
                                <h2 className={styles.jobTitle}>{exp.title}</h2>
                                <span className={styles.duration}>{exp.duration}</span>
                            </div>
                            <h3 className={styles.company}>
                                {exp.company} {exp.location && `• ${exp.location}`}
                            </h3>
                            <ul className={styles.responsibilities}>
                                {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                                {exp.responsibilities.length > 3 && (
                                    <li style={{ fontWeight: 600, color: '#0a1f5c' }}>
                                        Click to see more details...
                                    </li>
                                )}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <Footer />

            <Modal isOpen={!!selectedItem} onClose={closeModal}>
                {selectedItem && (
                    <>
                        <h1 className={modalStyles.modalTitle}>{selectedItem.title}</h1>
                        <h2 className={modalStyles.modalSubtitle}>
                            {selectedItem.company} • {selectedItem.location}
                        </h2>

                        <div className={modalStyles.modalMeta}>
                            <span>📅 {selectedItem.duration}</span>
                        </div>

                        {selectedItem.detailedDescription && (
                            <div className={modalStyles.modalSection}>
                                <p className={modalStyles.modalDescription}>
                                    {selectedItem.detailedDescription}
                                </p>
                            </div>
                        )}

                        <div className={modalStyles.modalSection}>
                            <h3 className={modalStyles.modalSectionTitle}>Key Responsibilities</h3>
                            <ul className={modalStyles.modalList}>
                                {selectedItem.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>

                        {selectedItem.achievements && selectedItem.achievements.length > 0 && (
                            <div className={modalStyles.modalSection}>
                                <h3 className={modalStyles.modalSectionTitle}>Achievements</h3>
                                <ul className={modalStyles.modalList}>
                                    {selectedItem.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedItem.skills && selectedItem.skills.length > 0 && (
                            <div className={modalStyles.modalSection}>
                                <h3 className={modalStyles.modalSectionTitle}>Skills Used</h3>
                                <div className={modalStyles.skillTags}>
                                    {selectedItem.skills.map((skill, idx) => (
                                        <span key={idx} className={modalStyles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </Modal>
        </PageLayout>
    )
}
