import { Head, Link } from '@inertiajs/react'
import Hero from '@/Hero/Hero'
import AdvicesCard from '../../components/AdvicesCard/AdvicesCard'
import ProgressStepTab from '../../components/ProgressStepTab/ProgressStepTab'
import styles from '../../css/pages/_advices.module.scss';

export default function Home({ advices }) {

  console.log(advices)

  return (
    <>
      <Head title="Conseils" />
      <Hero title="Conseils" subtitle="Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet." grey>
        <p>recherche</p>
      </Hero>
      <main id='main'>
        <div className={styles.advices__right}>
          <Link href="/conseils/etapes/1" className={styles.advices__button}>Step</Link>
          <ul className={styles.advices__list}>
            {advices.map((advice, index) => (
              <AdvicesCard key={`conseil${advice.id}`} data={advice} />
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}
