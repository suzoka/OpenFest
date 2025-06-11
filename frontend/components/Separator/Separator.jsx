import styles from "./Separator.module.scss";

const Separator = ({black, fullpage}) => {

    return (
        <div className={`${styles.hr_container} ${black ? styles.hr_container_black :""} ${fullpage ? styles.fullpage : ""}`}>
            <hr className={`${styles.hr}`} />
        </div>
    );
};

export default Separator;
