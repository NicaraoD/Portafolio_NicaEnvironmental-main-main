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
          p1="Engineer specialized in designing sustainable socio-economic solutions that preserve natural resources, foster economic development, enhance public health, and improve the quality of life in diverse communities."
          isReversed={false}
          img={Nicarao}
        />

        <HeroCard
          title='Research Experience'
          p1="Research experience in biotechnology, water and wastewater treatment, environmental remediation, and water resources management."
          isReversed={true}
          img={Labpic}
        />

        <HeroCard
          title='Creative Engineering'
          p1="As a creative engineer, I aim to contribute innovative perspectives that support the development of cost-effective and scalable solutions to environmental challenges, particularly water-related issues affecting vulnerable communities and critical economic activities."
          isReversed={false}
          img={Rice}
        />
      </div>
    </section>
  )
}
