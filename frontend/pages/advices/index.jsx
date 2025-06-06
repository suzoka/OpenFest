import { Head, Link } from '@inertiajs/react'
import Hero from '@/Hero/Hero'
import AdvicesCard from '../../components/AdvicesCard/AdvicesCard'
import ProgressStepTab from '../../components/ProgressStepTab/ProgressStepTab'
import styles from '../../css/pages/_advices.module.scss';
import SwitchAdvices from '../../components/SwitchAdvices/SwitchAdvices';

export default function Home({ advices }) {

  const count = advices.length;
  console.log(advices)

  return (
    <>
      <Head title="Conseils" />
      <Hero title="Conseils" subtitle="Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet." grey>
        <p>recherche</p>
      </Hero>
      <main id='main'>
        <div className={styles.advices__right}>
          <div className={styles.advices__right_Header}>
            <p>{count} conseil{count > 1 ? "s" : ""}</p>
            <div className={styles.verticalSeparator}></div>
            <SwitchAdvices current="all" />
          </div>
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
