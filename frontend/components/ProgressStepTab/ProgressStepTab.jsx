import { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House } from "@phosphor-icons/react"
import styles from "./ProgressStepTab.module.scss";
import { Link, usePage } from "@inertiajs/react";
const icons = { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House }

const ProgressStepTab= ({data, id, stepUrl}) => {

    const { url } = usePage()
    const number = (id + 1);
    const Icon = icons[data.icon]

    return (
        <li className={`${styles.progressStepTab} ${url == (`${stepUrl}/${number}`) ? styles.active : ''}`}>
            <div className={styles.progressStepTab__object}>
                <p className={`bold ${styles.progressStepTab__number}`}>
                    {number.toString().padStart(2, '0')}
                </p>
                <Link href={`${stepUrl}/${number}`} className={styles.progressStepTab__link} preserveScroll only={["advices"]}>
                    <p className={`bold ${styles.progressStepTab__title}`}>
                        {data?.label}
                    </p>
                    <p className={styles.progressStepTab__conseilNum}>
                        {data?.count} conseil{data.count > 1 ? "s" : ""}
                    </p>
                    <Icon size={32} className={styles.progressStepTab__icon} />
                </Link>
            </div>
        </li>
    );
};

export default ProgressStepTab;
