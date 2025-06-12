import styles from "../../css/pages/_advices.module.scss";
import AdvicesCard from "@/AdvicesCard/AdvicesCard"
import SwitchAdvices from '../../components/SwitchAdvices/SwitchAdvices';
import { usePage } from "@inertiajs/react";
import AdvicesAside from "../AdvicesAside/AdvicesAside";
import UserProgressTag from "../UserProgressTag/UserProgressTag";
import Heading from "@/Heading/Heading";


const AdvicesSection = ({ stepUrl, page }) => {
  const { url, props } = usePage();
  const { advices, steps } = props;
  const currentStepID = url.split('/').pop() - 1;
  const currentStep = steps[currentStepID];

  return (
    <main id='main' className={`${styles.advices} ${page === "user" ? styles.user__main_step : ""}`}>
      {page === "user" && <Heading as="h2" className={styles.user__h2}>Conseils enregistrés</Heading>}
      <AdvicesAside steps={steps} stepUrl={stepUrl} page={page} />
      <div className={styles.advices__right}>
        <div className={styles.advices__right_Header}>
          {
            page === "user" ? (
              <UserProgressTag checkedCount={currentStep?.checked} savedCount={currentStep?.count} />
            ) : (
              <p>{currentStep?.count} conseil{currentStep.count > 1 ? "s" : ""}</p>
            )
          }
          <div className={styles.verticalSeparator}></div>
          <SwitchAdvices current="step" page={page} />
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
