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
        <header>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/advices" className={url.startsWith('/advices') ? styles.active : ''}>Conseils</Link>
                    </li>
                    <li>
                        <Link href="/info" className={url.startsWith('/info') ? styles.active : ''}>Démarche</Link>
                    </li>
                    <li>
                        <Link href="/festival" className={url.startsWith('/festival') ? styles.active : ''}>Les festivals accessibles</Link>
                    </li>
                </ul>
            </nav>

            { user ? 
                <Button as="link" href='#' method='POST' type="secondary">{user?.name}</Button>
                :
                <Button as="link" href='/login' method='POST' type="secondary">Se connecter</Button>
            }
        </header>
    );
};

export default Header;