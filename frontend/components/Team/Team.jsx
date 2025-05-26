/* 
! Team Member Component
! Description : Composant pour afficher les membres de l'équipe avec des labels
! Props : name, role, image, description

* name : Nom du membre de l'équipe
* role : Tableau d'objets avec label et couleur (par exemple, [{ label: "Dev", color: "red" }])
* image : URL de l'image du membre de l'équipe
* description : Description du membre de l'équipe

? Couleurs prédéfinies pour les labels :
* dev : Utilise la classe styles.label_red
* gdp : Utilise la classe styles.label_yellow
* créa : Utilise la classe styles.label_violet

* Example : 

    <Team 
        name="John Doe" 
        role={[{ label: "Dev", color: "red" }, { label: "Créa", color: "violet" }]} 
        image="https://via.placeholder.com/150" 
        description="Développeur et designer créatif."
    />

? Couleurs personnalisées :
* Si une couleur personnalisée est fournie, elle sera appliquée en tant que style en ligne

* Example : 
    <Team 
        name="Jane Doe" 
        role={[{ label: "Dev", color: "#ff0000" }]} 
        image="https://via.placeholder.com/150" 
        description="Développeuse front-end passionnée."
    />
*/

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