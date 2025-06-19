import { MapPinArea, Rocket, RocketLaunch } from "@phosphor-icons/react";
import Button from "../Button/Button";
import styles from "./FestivalCard.module.scss";
import Label from "../Label/Label";

const FestivalCard = () => {

    return (
        <li className={styles.festivalCard}>
            <div className={styles.festivalCard__header}>
                <img src='/images/user/rock_en_seine.jpg' alt="" className={styles.festivalCard__img} />
                <div className={styles.festivalCard__headerRight}>
                    <p className={styles.festivalCard__title}>Rock en Seine</p>
                    <div className={styles.festivalCard__labelWrapper}>
                        <Label color="red">
                            musique
                        </Label>
                        <Label color="violet">
                            extérieur
                        </Label>
                    </div>
                </div>
            </div>
            <p className={styles.festivalCard__description}>Rock en Seine est l’un des plus grands rendez-vous de l’été en France et fait partie des festivals incontournables en Europe.</p>
            <div className={styles.festivalCard__bottom}>
                <Button as="link" href="#" variant="left" type="primary" color="violet">
                    <RocketLaunch size={24} />
                    Découvrir
                </Button>
                <div className={styles.festivalCard__location}>
                    <MapPinArea size={18} />
                    <p className="small">Domaine de Saint-Cloud</p>
                </div>
            </div>
        </li>
    );
};

export default FestivalCard;