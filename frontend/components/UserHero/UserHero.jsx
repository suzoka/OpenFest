import { Link, usePage } from "@inertiajs/react";
import styles from "./UserHero.module.scss";
import Heading from "@/Heading/Heading.jsx";
import Button from '../Button/Button'
import { FlagBannerFold, Gear, MapPinArea, SignOut } from "@phosphor-icons/react";
import Label from "../Label/Label";
import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import UserStickyHeader from "../UserStickyHeader/UserStickyHeader";

const UserHero = () => {
    const { url, props } = usePage()
    const { user } = props
    const [progress, setProgress] = useState(Math.round((user?.adviceCheckedCount || 0) / (user?.adviceSavedCount || 1) * 100));

    useEffect(() => {
        if (user?.adviceSavedCount > 0) {
            setProgress(Math.round((user?.adviceCheckedCount || 0) / user?.adviceSavedCount * 100));
        }
    }, [user?.adviceCheckedCount, user?.adviceSavedCount]);

    return (
        <>
            {/* <UserStickyHeader><ProgressBar progress={progress} /></UserStickyHeader> */}
        <section className={styles.userHero}>
            <div className={styles.userHero__info}>
                <img src={user?.avatar?.url || '/images/user/rock_en_seine.jpg'} alt="" className={styles.userHero__avatar} />
                <div className={styles.userHero__infoRight}>
                    <div className={styles.userHero__infoRightHeader}>
                        <Heading as="h1" className={styles.userHero__title}>
                            {user?.name}
                        </Heading>
                        <div className={styles.userHero__labelWrapper}>
                            {user?.festivalType &&
                                <Label className={styles.userHero__label} color={user?.festivalType?.color || "violet"}>
                                    {user?.festivalType?.name}
                                </Label>
                            }
                            {user?.areaType === "outdoor" ?
                                <Label className={styles.userHero__label} color="violet">
                                    Extérieur
                                </Label>
                                : user?.areaType === "indoor" ?
                                    <Label className={styles.userHero__label} color="yellow">
                                        Intérieur
                                    </Label>
                                        : ""
                                }
                            </div>
                            <div className={styles.userHero__verticalSeparator}></div>
                            <div className={styles.userHero__location}>
                                <MapPinArea size={18} />
                                <p className="small">{user?.address || "Localisation non renseignée"}</p>
                            </div>
                        </div>
                        {
                            user?.adviceSavedCount > 0 ? (
                                <p className={`small ${styles.userHero__progressInfo}`}>
                                    <span className={styles.userHero__progressInfoChecked}>
                                        <FlagBannerFold size={20} />
                                        {user?.adviceCheckedCount} conseil{user?.adviceCheckedCount > 1 && "s"} appliqué{user?.adviceCheckedCount > 1 && "s"}
                                    </span>
                                    {"\u00A0"}sur {user?.adviceSavedCount} enregistré{user?.adviceSavedCount > 1 && "s"}.
                                </p>
                            ) : (
                                <Link href="/conseils" className={`small ${styles.userHero__progressInfo} opacity`}>
                                    Pas de conseils enregistrés pour le moment.{"\u00A0"}
                                </Link>
                            )
                        }
                    </div>
                </div>
            <div className={styles.userHero__buttons}>
                <Button as="link" href='/mon-compte' type="secondary" variant="only" color="violet" title="paramètres">
                    <Gear size={24} />
                </Button>
                <Button as="link" href='/deconnection' method='POST' type="secondary" variant="right" color="red" >
                    Déconnexion
                    <SignOut size={24} />
                </Button>
            </div>
            <ProgressBar progress={progress} />
        </section>
        </>
    );
};

export default UserHero;
