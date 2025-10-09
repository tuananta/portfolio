import '../assets/Project.css'
function Project(){
    return (
        <div id="div-project-container-flex">
            <div className="div-project-flex">
                {/* <h3><a>Jeu Siam</a></h3> */}
                <section className="section-img-link">
                    <a className="a-img" href="https://github.com/tuananta/Siam" target="_blank">
                        <div className="div-img"></div>
                    </a>
                </section>
                <section className="section-infor">
                    <p className="description" >Jeu Siam</p>
                    <ul className="list-description">
                        <li>Logique de Jeu : JavaScript Pur – Utilisé pour gérer l'intégralité de la logique du jeu, y compris les mouvements conditionnels des pièces, la validation des actions des joueurs, et la gestion de l'état du jeu.</li>
                        <li>Interface Utilisateur (UI) : HTML et CSS – Structuration du plateau de jeu et des pièces avec HTML, et stylisation du jeu avec CSS.</li>
                        <li>Animations Fluides : CSS (Transitions et Transformations) – Utilisé pour créer des animations fluides et immersives lors du déplacement des pièces ou de la rotation pour simuler l'action de "pousser" ou de "retourner" les pièces sur le plateau.</li>
                    </ul>
                </section>
            </div>

            <div className="div-project-flex">
                {/* <h3><a>Website UniMap</a></h3> */}
                <section className="section-img-link">
                    <a className="a-img" href="https://github.com/tuananta/UniMap" target="_blank">
                        <div className="div-img"></div>
                    </a>
                </section>
                <section className="section-infor">
                    <p className="description">Website UniMap</p>
                    <ul className="list-description">
                        <li>Front-end : React.js – Utilisé pour la gestion des composants, la construction d'une interface utilisateur complexe et la mise en œuvre d'un routage (React Router) fluide.</li>
                        <li>Back-end/API : Node.js – Construction de services API RESTful légers et rapides pour traiter les requêtes de recherche et l'extraction de données cartographiques.</li>
                        <li>Base de Données : PostgreSQL (Postgres) – Choisi pour gérer les données structurées des écoles et des programmes, assurant l'intégrité des données et les relations complexes.</li>
                        <li>Services Externes : API Google Maps – Utilisée pour intégrer la carte, gérer les marqueurs et fournir des fonctionnalités de géolocalisation.</li>
                    </ul>

                </section>
            </div>
            <div id="div-title-float"><p>Où la Compétence devient Projet</p></div>

        </div>
    )
}
export default Project;