/* 
! Partner Component
! Description : Composant pour afficher les partenaires avec des labels
! Props : name, role, description, image

* name : Nom du partenaire ou de l'organisme
* role : Tableau d'objets avec label et couleur (par exemple, [{ label: "Dev", color: "red" }])
* image : URL de l'image du partenaire
* description : Description du partenaire ou de l'organisme

? Couleurs prédéfinies pour les labels :
* association : Utilise la classe styles.partners_label_violet
* université : Utilise la classe styles.partners_label_yellow
* ministère : Utilise la classe styles.partners_label_red

* Example : 

    <Partners
        name="Association des Développeurs"
        role={[{ label: "Association", color: "violet" }]}
        image="https://via.placeholder.com/150"
        description="Association dédiée au développement web et mobile."
    />

? Couleurs personnalisées :
* Si une couleur personnalisée est fournie, elle sera appliquée en tant que style en ligne

* Example : 
    <Partners
        name="Université de la Technologie"
        role={[{ label: "Université", color: "#ffcc00" }]}
        image="https://via.placeholder.com/150"
        description="Université spécialisée dans les technologies de l'information."
    />
*/

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