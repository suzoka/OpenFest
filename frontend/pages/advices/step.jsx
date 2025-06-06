import Hero from '@/Hero/Hero'
import AdvicesCard from "@/AdvicesCard/AdvicesCard"
import ProgressStepTab from '@/ProgressStepTab/ProgressStepTab'
import styles from '../../css/pages/_advices.module.scss';
import { Head, Link, usePage } from "@inertiajs/react";
import SwitchAdvices from '../../components/SwitchAdvices/SwitchAdvices';

export default function Step({ advices, steps }) {
  const { url } = usePage();
  const currentStepID = url.split('/').pop() - 1;
  const currentStep = steps[currentStepID];

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
          <div className={styles.advices__right_Header}>
            <p>{currentStep?.count} conseil{currentStep.count > 1 ? "s" : ""}</p>
            <div className={styles.verticalSeparator}></div>
            <SwitchAdvices current="step" />
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
