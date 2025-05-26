import styles from './Partners.module.scss';
import Label from '../Label/Label';

const Labels = {
    association : <Label color="violet">Association</Label>,
    université : <Label color="yellow">Université</Label>,
    ministère : <Label color="red">Ministère</Label>,
}

const Partners = ({
    name = "Nom de l'organisme",
    role = [{ label: "Role 1", color: "violet" }],
    description = "Description de l'organisme ou de l'association",
    image="/images/apf.png"
}) => {
    return (
        <div className={styles.partners}>
            <div className={styles.partners_image}>
                <img src={image} alt={name} className={styles.partners_img} />
                <div className={styles.partners_labels}>
                    {role.map((tag, index) => (
                        <span key={index} className={styles.partners_label}>
                            <Label color={tag.color || "violet"}>
                                {tag.label}
                            </Label>
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.partners_info}>
                <h3 className={styles.partners_name}>{name}</h3>
                <p className={styles.partners_description}>{description}</p>
            </div>
        </div>
    );
}

export default Partners;    