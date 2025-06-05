import Heading from "../Titles/Titles";
import styles from "./Hero.module.scss";

const Hero= ({title, subtitle, children}) => {

    return (
        <section className={styles.hero}>
            <div className={styles.title_wrapper}>
                <Heading as="h1" className={styles.title}>{title || "Title page"}</Heading>
                {subtitle && <p className="subtitle">{subtitle}</p>}
            </div>
            {children}
        </section>
    );
};

export default Hero;