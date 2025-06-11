import styles from "./AdvicesAside.module.scss";
import ProgressStepTab from "@/ProgressStepTab/ProgressStepTab";

const AdvicesAside = ({ steps, stepUrl, page }) => {

    return (
        <aside className={`${styles.AdvicesAside} ${page === "user" ? styles.user : ""}`}>
            {
                page === "advices" && <p className={`p-large ${styles.AdvicesAside__title}`}>Cheminement</p>
            }
            <ul className={styles.AdvicesAside__progressList}>
                {steps.map((step, i) => (
                    <ProgressStepTab key={i} id={i} data={step} stepUrl={stepUrl} page={page} />
                ))}
            </ul>
        </aside>
    );
};

export default AdvicesAside;