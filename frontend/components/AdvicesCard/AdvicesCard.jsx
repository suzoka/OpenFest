import { Link } from "@inertiajs/react";
import styles from "./AdvicesCard.module.scss";
import Label from "@/Label/Label";
import Button from "@/Button/Button";
import { BookBookmark, BookmarkSimple, CheckSquare, Selection, Ticket } from "@phosphor-icons/react";
import { sendCheckboxvalueToServer } from "#/advices"
import { useState } from "react";

const AdvicesCard = ({ data }) => {

    const [checked, setChecked] = useState(false);
    const [saved, setSaved] = useState(data?.isSelected?.length > 0 || false);

    return (
        <li className={`${styles.advicesCard} ${checked ? styles.checked : ""}`}>
            <div className={styles.advicesCard__top}>
                <div className={styles.advicesCard__step_wrapper}>
                    <Ticket size={32} className={styles.step_icon} />
                    <p className={styles.step_name}>Prise d’informationse et réservation</p>
                </div>
                <div className={styles.advicesCard__tag_wrapper}>
                    {data.forPmr && <Label color="violet">PMR</Label>}
                    {data.forCimp && <Label color="red">CIMP</Label>}
                    {data.forDs && <Label color="yellow">Handicaps sensoriels</Label>}
                </div>
            </div>
            <Link className={`p-large ${styles.advicesCard__title}`} href={`/conseils/${data?.slug}`}>
                {data?.title}
            </Link>
            <div className={styles.advicesCard__btn_wrapper}>
                {saved &&
                    <Button as="button" variant="only" type="secondary" className={styles.advicesCard__button} onClick={() => setChecked(!checked)}>
                        {
                            checked ? (
                                <CheckSquare size={24} weight="fill" />
                            ) : (
                                <Selection size={24} />
                            )
                        }
                    </Button>
                }
                <Button as="button" variant="only" type="secondary" className={styles.advicesCard__button} onClick={() => sendCheckboxvalueToServer(setSaved, saved, data.id)}>
                    {saved ? (
                        <BookmarkSimple size={24} weight="fill" />
                    ) : (
                        <BookmarkSimple size={24} />
                    )}
                </Button>
                <Button as="link" href={`/conseils/${data?.slug}`}>
                    <BookBookmark size={24} />
                    Lire
                </Button>
            </div>
        </li>
    );
};

export default AdvicesCard;
