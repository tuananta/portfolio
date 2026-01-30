// import '../assets/Project.css'
import '../assets/project_ex.css'
import imgSiam from '../assets/siam.png'; 
import imgUnimap from '../assets/unimap.png';
import imgSpace from '../assets/space.png';

const projectsData = [
    {
        title: "Jeu Siam",
        link: "https://github.com/tuananta/Siam",
        image: imgSiam, 
        description: [
            "Logique de Jeu : JavaScript Pur – Gérer l'intégralité de la logique.",
            "Interface Utilisateur (UI) : HTML et CSS – Structuration et stylisation.",
            "Animations Fluides : CSS Transitions."
        ]
    },
    {
    title: "Website UniMap",
    link: "https://github.com/tuananta/UniMap",
    image: imgUnimap,
    description: [
        "Front-end : React.js – Création d'une interface utilisateur (UI) complexe avec un routage fluide.",
        "Back-end / API : Node.js – Gestion efficace des requêtes de recherche et traitement des données.",
        "Base de Données : PostgreSQL – Modélisation et gestion rigoureuse des données académiques.",
        "Services : API Google Maps – Intégration de cartes interactives et géolocalisation précise."
    ]
},
    {
        title: "Jeu Space Invaders",
        link: "https://github.com/tuananta/SpaceInvader",
        image: imgSpace,
        description: [
            "Langage C : Développement bas niveau pour une gestion optimisée des ressources.",
        "Programmation Procédurale : Structuration du code pour gérer les entités (aliens, vaisseau, tirs).",
        "Logique de Jeu : Implémentation de la boucle de jeu (Game Loop) et détection de collisions.",
        "Bibliothèques Graphiques : Utilisation de SDL2 ou NCurses pour le rendu visuel et les contrôles."
        ]
    }
];

function Project() {
    return (
        <div id="div-project-container-flex">
            <div id="projects"></div>
            <div id="div-title-float">
                <p>Où la compétence devient projet</p>
            </div>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="div-project-flex" key={index}>
                        <section className="section-img-link">
                            <a className="a-img" href={project.link} target="_blank" rel="noreferrer">
                                <div 
                                    className="div-img" 
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>
                            </a>
                        </section>
                        <section className="section-infor">
                            <p className="description">{project.title}</p>
                            <ul className="list-description">
                                {project.description.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;