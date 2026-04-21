import { useId } from 'react'
import HeroCard from './hero/HeroCard'
import Nicarao from '../../public/nicarao.jpg'
import Labpic from '../../public/Labpic.jpeg'
import Rice from '../../public/rice_news.jpg'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const heroId = useId()

  return (
    <section className={styles.heroSection} id={`profile-${heroId}`}>
      <div className={styles.profileCardsWrapper}>
        <HeroCard
          title='Professional Profile'
          p1="Environmental Engineer specialized in environmental biotechnology, applied microbiology, and water treatment systems. Experienced in water resource management, microbial characterization, and applied laboratory techniques, with interest in producing sustainable biotechnology solutions for uncertain socio-economic environments."
          isReversed={false}
          img={Nicarao}
        />

        <HeroCard
          title='Research Experience'
          p1="Research experience focused on developing an industrial bioprocess and a analytical method, designing bioreactors, and optimizing biotechnology processes."
          isReversed={true}
          img={Labpic}
        />

        <HeroCard
          title='Engineering for Environmental Challenges'
          p1="I approach environmental challenges by designing and developing cost-effective, scalable solutions for water and environmental systems, particularly in contexts affecting vulnerable communities and critical economic activities. My work integrates technical analysis with practical implementation to deliver solutions that are both effective and adaptable."
          isReversed={false}
          img={Rice}
        />
      </div>
    </section>
  )
}
