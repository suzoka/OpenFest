import { FlagBannerFold } from "@phosphor-icons/react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ progress }) => {

    return (
        <div className={styles.progressBar}>
            <div className={styles.progressBar__info}>
                <p><span className="bold">{progress}%</span> de progression</p>
                <FlagBannerFold size={24} />
            </div>
            <div className={styles.progressBar__wrapper}>
                <div className={styles.progressBar__fill} style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;