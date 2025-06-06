import Hero from '@/Hero/Hero'
import AdvicesCard from "@/AdvicesCard/AdvicesCard"
import ProgressStepTab from '@/ProgressStepTab/ProgressStepTab'
import styles from '../../css/pages/_advices.module.scss';
import { Head, Link } from "@inertiajs/react";

export default function Step({ advices, steps }) {
  return (
    <>
      <Head title="Conseils" />
      <Hero title="Conseils" subtitle="Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet." grey>
        <p>recherche</p>
      </Hero>
      <main id='main' className={styles.advices}>
        <aside className={styles.advices__aside}>
          <p className={`p-large ${styles.advices__asideTitle}`}>
            Cheminement
          </p>
          <ul className={styles.advices__progressList}>
            {steps.map((step, i) => (
              <ProgressStepTab key={i} id={i} data={step} />
            ))}
          </ul>
        </aside>
        <div className={styles.advices__right}>
            <Link href="/conseils/" className={styles.advices__button}>Tous</Link>
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
