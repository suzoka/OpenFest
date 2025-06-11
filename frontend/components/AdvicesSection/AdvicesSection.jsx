import styles from "../../css/pages/_advices.module.scss";
import AdvicesCard from "@/AdvicesCard/AdvicesCard"
import ProgressStepTab from '@/ProgressStepTab/ProgressStepTab'
import SwitchAdvices from '../../components/SwitchAdvices/SwitchAdvices';
import { usePage, router } from "@inertiajs/react";
import { useEffect, useRef } from "react";

const AdvicesSection = ({stepUrl}) => {
    const { url, props } = usePage();
    const { advices, steps } = props;

    const currentStepID = url.split('/').pop() - 1;
    const currentStep = steps[currentStepID];

    const asideRef = useRef(null);

    useEffect(() => {
      const handleBeforeVisit = () => {
        if (asideRef.current) {
          sessionStorage.setItem("asideScroll", asideRef.current.scrollTop);
        }
      };
      router.on("before", handleBeforeVisit);
    }, []);

    useEffect(() => {
      if (asideRef.current) {
        const scroll = sessionStorage.getItem("asideScroll");
        if (scroll) {
          asideRef.current.scrollTop = scroll;
        }
      }
    }, [url]);

    return (
      <main id='main' className={styles.advices}>
        <aside className={styles.advices__aside} ref={asideRef}>
          <p className={`p-large ${styles.advices__asideTitle}`}>
            Cheminement
          </p>
          <ul className={styles.advices__progressList}>
            {steps.map((step, i) => (
              <ProgressStepTab key={i} id={i} data={step} stepUrl={stepUrl} />
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
            {advices.map((advice) => (
              <AdvicesCard key={`conseil${advice.id}`} data={advice} />
            ))}
          </ul>
        </div>
      </main>
    );
};

export default AdvicesSection;
