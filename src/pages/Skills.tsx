import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import styles from '../styles/PageLayout.module.css'
import modalStyles from '../styles/Modal.module.css'
import data from '../data/data.json'

interface SkillItem {
    id: string
    name: string
    tools?: string[]
    description: string
}

export default function Skills() {
    const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null)
    const navigate = useNavigate()
    const { skillId } = useParams()
    const skillsData = data.skills.technical

    useEffect(() => {
        if (skillId) {
            const skill = skillsData.find((s: SkillItem) => s.id === skillId)
            if (skill) {
                setSelectedSkill(skill)
            }
        }
    }, [skillId, skillsData])

    const openModal = (skill: SkillItem) => {
        navigate(`/skills/${skill.id}`)
        setSelectedSkill(skill)
    }

    const closeModal = () => {
        navigate('/skills')
        setSelectedSkill(null)
    }

    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h1 className={styles.pageTitle}>Skills & Expertise</h1>

                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitleResearchProject}>Technical Skills</h2>
                    <div className={styles.skillsGrid}>
                        {skillsData.map((skill: SkillItem) => (
                            <div
                                key={skill.id}
                                className={styles.skillCard}
                                onClick={() => openModal(skill)}
                                style={{ cursor: 'pointer' }}
                            >
                                <h3 className={styles.skillName}>{skill.name}</h3>
                                <p className={styles.skillDetails}>
                                    {(skill.tools ?? []).join(', ')}
                                </p>

                                <p className={styles.clickHint}>Click for details...</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitleResearchProject}>Professional Competencies</h2>
                    <div className={styles.competenciesGrid}>
                        {data.skills.competencies.map((comp, idx) => (
                            <div key={idx} className={styles.competencyItem}>
                                <span className={styles.competencyIcon}>{comp.icon}</span>
                                <p className={styles.competencyName}>{comp.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitleResearchProject}>Languages</h2>
                    <div className={styles.languagesGrid}>
                        {data.skills.languages.map((lang, idx) => (
                            <div key={idx} className={styles.languageItem}>
                                <span className={styles.languageName}>{lang.name}</span>
                                <span className={styles.languageLevel}>{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />

            <Modal isOpen={!!selectedSkill} onClose={closeModal}>
                {selectedSkill && (
                    <>
                        <h1 className={modalStyles.modalTitle}>{selectedSkill.name}</h1>

                        <div className={modalStyles.modalSection}>
                            <p className={modalStyles.modalDescription}>
                                {selectedSkill.description}
                            </p>
                        </div>

                        <div className={modalStyles.modalSection}>
                            <h3 className={modalStyles.modalsectionTitleResearchProject}>Tools & Technologies</h3>
                            <div className={modalStyles.skillTags}>
                                {selectedSkill.tools?.map((tool, idx) => (
                                    <span key={idx} className={modalStyles.skillTag}>{tool}</span>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </Modal>
        </PageLayout>
    )
}
