import styles from './Team.module.scss';
import Label from '../Label/Label';

const Labels = {
    dev : <Label color="red">Dev</Label>,
    gdp : <Label color="yellow">Gestion de Projet</Label>,
    créa : <Label color="violet">Créa</Label>,
}

const Team = ({
    name = "Nom Prénom",
    role = [{ label: "Role 1", color: "violet" }],
    image = "https://via.placeholder.com/150",
    description = "Description de l'équipe ou de la personne",
}) => {
    return (
        <div className={styles.team}>
            <div className={styles.team_image} style={{ backgroundImage: `url(${image})` }}>
                <div className={styles.team_labels}>
                    {role.map((tag, index) => (
                        <span key={index} className={styles.team_label}>
                            <Label color={tag.color || "violet"}>
                                {tag.label}
                            </Label>
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.team_info}>
                <h3 className={styles.team_name}>{name}</h3>
                <p className={styles.team_description}>{description}</p>
            </div>
        </div>
    );
}

export default Team;    