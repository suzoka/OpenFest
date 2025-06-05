import styles from "./Separator.module.scss";

const Separator = ({white}) => {

    return (
        <div className={styles.hr_container}>
            <hr className={`${styles.hr} ${white ? styles.hr_white :""}`} />
        </div>
    );
};

export default Separator;
