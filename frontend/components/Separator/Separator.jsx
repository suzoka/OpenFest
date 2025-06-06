import styles from "./Separator.module.scss";

const Separator = ({black, fullpage}) => {

    return (
        <div className={`${styles.hr_container} ${fullpage ? styles.fullpage : ""}`}>
            <hr className={`${styles.hr} ${black ? styles.hr_black :""}`} />
        </div>
    );
};

export default Separator;