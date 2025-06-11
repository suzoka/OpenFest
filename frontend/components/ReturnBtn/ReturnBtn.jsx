import { Link } from "@inertiajs/react";
import styles from "./ReturnBtn.module.scss";
import { ArrowUUpLeft } from "@phosphor-icons/react";

const ReturnBtn = () => {

    return (
        <button className={styles.ReturnBtn} onClick={() => history.back()}>
            <div className={styles.ReturnBtn__Icon}>
                <ArrowUUpLeft size={24} />
            </div>
            Retour
        </button>
    );
};

export default ReturnBtn;