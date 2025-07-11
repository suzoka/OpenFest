import { useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'
import { Link, usePage } from '@inertiajs/react'
import Button from '../Button/Button'
import { FlagBannerFold, SignOut } from '@phosphor-icons/react'
import UserProgressTag from '../UserProgressTag/UserProgressTag'

const Header = () => {
    const { url, props } = usePage()
    const { user } = props
    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const userMenuRef = useRef(null)

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (!userMenuOpen) return

        function handleClickOutside(event) {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setUserMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [userMenuOpen])

    useEffect(() => {
        // Ferme le menu utilisateur si l'utilisateur navigue vers une autre page
        setUserMenuOpen(false)
    }, [url])

    return (
        <header className={`${styles.header} ${scroll > 10 || url === '/' ? styles.onscroll : ''}`}>
            <nav className={styles.skipNav}>
                <ul>
                    {user &&
                        <li>
                            <Link href="/mon-espace/etapes/1" className={styles.skipLink}>Espace Utilisateur</Link>
                        </li>
                    }
                    <li>
                        <Link href="#main" className={styles.skipLink}>Passer au contenu principal</Link>
                    </li>
                    <li>
                        <Link href="#footer" className={styles.skipLink}>Aller au pied de page</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/" title="OpenFest Accueil" className={styles.logo}>
                            <img src="/images/logo/openfest_logo_color.svg" alt="OpenFest Logo" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/conseils/etapes/1" className={`${styles.navLink} ${url.startsWith('/conseils') ? styles.active : ''}`}>Conseils</Link>
                    </li>
                    <li>
                        <Link href="/info" className={`${styles.navLink} ${url.startsWith('/info') ? styles.active : ''}`}>Démarche</Link>
                    </li>
                      { user?.role === 'admin' && (
                        <>
                          <li>
                              <Link href="/festival" className={`${styles.navLink} ${url.startsWith('/festival') ? styles.active : ''}`}>Les festivals accessibles</Link>
                          </li>
                          <li>
                              <Link href="/tests" className={`${styles.navLink} ${url.startsWith('/tests') ? styles.active : ''}`}>[dev] Styles Guides</Link>
                          </li>
                        </>
                      )}
                </ul>
            </nav>

            <div className={styles.headerBtnWrapper}>
                {user ? (
                    <div
                        className={`${styles.userMenu} ${userMenuOpen ? styles.open : ''}`}
                        ref={userMenuRef}
                        tabIndex={0}
                        onFocus={() => setUserMenuOpen(true)}
                        onBlur={(e) => {
                            // On ferme seulement si le focus sort complètement du menu
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                setUserMenuOpen(false);
                            }
                        }}
                    >
                        {userMenuOpen ? (
                            <div className={styles.userMenuName}>
                                <p className={styles.userName}>{user?.name}</p>
                                <p className="small">Festival de {user?.festivalType?.name || "musique"}</p>
                                <img src={user?.avatar?.url || '/images/user/rock_en_seine.jpg'} alt="" className={styles.profilPic} />
                            </div>
                        ) :
                            (
                                <Button method='POST' type="secondary" className={`${styles.headerBtn} ${styles.userBtn}`} onClick={() => setUserMenuOpen(true)}>
                                    {user?.name}
                                    <img src={user?.avatar?.url || '/images/user/rock_en_seine.jpg'} alt="" className={styles.profilPic} />
                                </Button>
                            )
                        }
                        <div className={styles.dropdownWrapper}>
                            <UserProgressTag checkedCount={user?.adviceCheckedCount} savedCount={user?.adviceSavedCount} navBar/>
                            <Button as="link" href='/mon-espace/etapes/1'>Mon Espace Festival</Button>
                            <Button as="link" href='/deconnection' method='POST' type="secondary" color="red" >
                                Déconnexion
                                <SignOut size={24} color="currentColor" />
                            </Button>
                        </div>
                    </div>
                ) :
                    <Button as="link" href='/connection' type="secondary" className={styles.headerBtn}>Se connecter</Button>
                }
            </div>
        </header>
    )
}

export default Header
