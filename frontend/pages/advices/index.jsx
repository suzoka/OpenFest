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
      <Hero title="Conseils" subtitle="Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. " grey>
        <p>recherche</p>
      </Hero>

      <main id='main'>
        <aside className={styles.advices__aside}>
          <ul className={styles.advices__progressList}>
            <ProgressStepTab />
            <ProgressStepTab />
            <ProgressStepTab />
          </ul>
        </aside>

        <ul>
          {advices.map((advice, index) => (
            <AdvicesCard key={index} data={advice} />
          ))}
        </ul>
      </main>
    </>
  )
}
