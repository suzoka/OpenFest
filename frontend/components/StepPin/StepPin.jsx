import { Link } from "@inertiajs/react";
import styles from "./StepPin.module.scss";
import { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House } from "@phosphor-icons/react"

const icons = { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House }


const StepPin = ({
    number = "0",
    name = "Etape",
    icon = "FlagBannerFold"
}) => {

    const Icon = icons[icon]

    return (
        <Link href={`/conseils/etapes/${number}`} className={styles.stepPin}>
            <p className={`bold ${styles.stepPin__PopIn}`}>
                <span>{number.toString().padStart(2, '0')}</span>
                <span>{name}</span>
            </p>

            <div className={styles.stepPin__Icon}>
                <Icon size={20} />
            </div>
        </Link>
    );
};

export default StepPin;