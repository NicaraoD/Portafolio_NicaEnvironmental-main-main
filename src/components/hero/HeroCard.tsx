import { useId } from 'react'
import styles from '../../styles/HeroCard.module.css'

interface HeroCardProps {
    title: string
    p1?: string
    p2?: string
    p3?: string
    isReversed?: boolean
    img: string
}

export default function HeroCard({
    title,
    p1,
    p2,
    p3,
    isReversed = false,
    img
}: HeroCardProps) {
    const cardId = useId()

    return (
        <article
            className={isReversed ? styles.profileCardReversed : styles.profileCard}
            id={`card-${cardId}`}
        >
            <div className={styles.cardImageWrapper}>
                <img src={img} alt={title} className={styles.cardImage} />
            </div>

            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>

                {p1 && (
                    <p className={styles.cardDescription}>
                        {p1}
                    </p>
                )}

                {p2 && (
                    <p className={styles.cardDescription}>
                        {p2}
                    </p>
                )}

                {p3 && (
                    <p className={styles.cardDescription}>
                        {p3}
                    </p>
                )}
            </div>
        </article>
    )
}
