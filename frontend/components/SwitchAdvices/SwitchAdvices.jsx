import { SquareHalf, SquaresFour } from "@phosphor-icons/react";
import styles from "./SwitchAdvices.module.scss";
import { Link } from "@inertiajs/react";

const SwitchAdvices= ({current, page}) => {

    return (
        <div className={styles.switchAdvices}>
            <Link href={page === "advices" ? "/conseils/" : "/mon-espace/tous"} className={`${styles.switchAdvices__button} ${current === 'all' ? styles.active : ''}`} title="Tous les conseils" preserveScroll>
                <SquaresFour size={24} />
            </Link>
            <Link href={page === "advices" ? "/conseils/etapes/1" : "/mon-espace/etapes/1"} className={`${styles.switchAdvices__button} ${current === 'step' ? styles.active : ''}`} title="Conseils par étape" preserveScroll>
                <SquareHalf size={24} />
            </Link>
        </div>
    );
};

export default SwitchAdvices;