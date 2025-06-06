import { Link } from "@inertiajs/react";
import styles from "./AdvicesCard.module.scss";
import Label from "@/Label/Label";
import Button from "@/Button/Button";
import { BookBookmark, Bookmark, BookmarkSimple, Selection, Square, Ticket } from "@phosphor-icons/react";

const AdvicesCard = ({ data }) => {

    return (
        <li className={styles.advicesCard}>
            <div className={styles.advicesCard__step_wrapper}>
                <Ticket size={32} className={styles.step_icon} />
                <p className={styles.step_name}>Prise d’informationse et réservation</p>
            </div>
            <div className={styles.advicesCard__tag_wrapper}>
                {data.forPmr && <Label color="violet">PMR</Label>}
                {data.forCimp && <Label color="red">CIMP</Label>}
                {data.forDs && <Label color="yellow">Handicaps sensoriels</Label>}
            </div>
            <Link className={`p-large ${styles.advicesCard__title}`} href={`/conseils/${data?.slug}`}>
                {data?.title}
            </Link>
            <Button as="button" variant="only" type="secondary" className={styles.advicesCard__button}>
                <Selection size={24} />
            </Button>
            <Button as="button" variant="only" type="secondary" className={styles.advicesCard__button}>
                <BookmarkSimple size={24} />
            </Button>
            <Button as="link" href={`/conseils/${data?.slug}`}>
                <BookBookmark size={24} />
                Lire
            </Button>
        </li>
    );
};

export default AdvicesCard;