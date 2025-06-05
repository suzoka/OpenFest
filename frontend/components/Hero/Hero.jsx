import Heading from "../Heading/Heading";
import styles from "./Hero.module.scss";

const Hero= ({title, subtitle, children, grey}) => {

    return (
        <section className={`${styles.hero} ${grey ? styles.grey : ''}`}>
            <div className={styles.title_wrapper}>
                <Heading as="h1" className={styles.title}>{title || "Title page"}</Heading>
                {subtitle && <p className="subtitle">{subtitle}</p>}
            </div>
            {children}
        </section>
    );
};

export default Hero;