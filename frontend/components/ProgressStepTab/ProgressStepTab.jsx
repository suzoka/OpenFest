import { Ticket } from "@phosphor-icons/react";
import styles from "./ProgressStepTab.module.scss";
import { Link } from "@inertiajs/react";

const ProgressStepTab= ({data}) => {

    return (
        <li className={styles.progressStepTab}>
            <div className={styles.progressStepTab__object}>
                <p className={`bold ${styles.progressStepTab__number}`}>
                    01
                </p>
                <Link href="#" className={styles.progressStepTab__link}>
                    <p className={`bold ${styles.progressStepTab__title}`}>
                        Prise d’informations et réservation
                    </p>
                    <p className={styles.progressStepTab__conseilNum}>
                        0 conseils
                    </p>
                    <Ticket size={32} className={styles.progressStepTab__icon} />
                </Link>
            </div>
        </li>
    );
};

export default ProgressStepTab;