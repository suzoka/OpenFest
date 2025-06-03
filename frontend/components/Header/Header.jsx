import { useEffect } from "react";
import styles from "./Header.module.scss";
import { Link, usePage } from '@inertiajs/react'
import Button from "../Button/Button";

const Header = () => {

    const { url, props } = usePage()
    const { user } = props;

    useEffect(() => {
        console.log("user", user);
    }, [user]);

    return (
        <header className={`${styles.header} ${styles.onscroll}`}>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/" title="OpenFest Accueil" className={styles.logo}>
                            <img src="/images/openfest_logo_color.svg" alt="OpenFest Logo" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/advices" className={`${styles.navLink} ${url.startsWith('/advices') ? styles.active : ''}`}>Conseils</Link>
                    </li>
                    <li>
                        <Link href="/info" className={`${styles.navLink} ${url.startsWith('/info') ? styles.active : ''}`}>Démarche</Link>
                    </li>
                    <li>
                        <Link href="/festival" className={`${styles.navLink} ${url.startsWith('/festival') ? styles.active : ''}`}>Les festivals accessibles</Link>
                    </li>
                    <li>
                        <Link href="/tests" className={`${styles.navLink} ${url.startsWith('/tests') ? styles.active : ''}`}>[dev] Styles Guides</Link>
                    </li>
                </ul>
            </nav>

            { user ? 
                <Button method='POST' type="secondary" className={styles.headerBtn}>{user?.name}</Button>
                :
                <Button as="link" href='/login' method='POST' type="secondary" className={styles.headerBtn}>Se connecter</Button>
            }
        </header>
    );
};

export default Header;