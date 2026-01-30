import '../assets/Competence.css';
function Competence(){
    return (
        <div id="div-comp-container">
            <div id="competences"></div>
        <section id="section-intro">
            <h2>Compétences en Action</h2>
            <p>Je cherche à perfectionner mes compétences et à contribuer activement à des projets concrets et innovants.</p>
            <p>De React.js pour les interfaces dynamiques à Node.js/Python pour l'API et PostgreSQL pour les données. Je traduis la théorie en projets Full-Stack concrets, attestant de mon esprit créatif et de ma capacité d'apprentissage.</p>

        </section>
        <section id="section-detail">
            <div id="div-logo-comp">

            </div>
            <div id="div-skill-container">
                <div className="div-skill">
                    <ul>
                        <h3>Front-end</h3>
                        <li>React.js: Développement d'interfaces dynamiques et réactives</li>
                        <li>HTML/CSS: Conception d'interfaces responsives</li>
                        <li>Notions UX/UI de base</li>
                    </ul>
                </div>
                <div className="div-skill">
                    <ul>
                        <h3>Back-end</h3>
                        <li>Node.js: Création et appel d'API REST, gestion des routes.</li>
                        <li>Python: Traitement des données et scripts back-end.</li>
                    </ul>
                </div>
                <div className="div-skill">
                    
                    <ul>
                        <h3>Bases de Données</h3>
                        <li>Modélisation.</li>
                        <li>Requêtes SQL complexes.</li>
                        <li>Connexion et gestion des données pour applications web</li>
                    </ul>
                </div>
                <div className="div-skill">
                    <ul>
                        <h3>Soft Skills</h3>
                        <li>Capacité d'apprentissage rapide</li>
                        <li>Esprit de progression</li>
                        <li>Travail d'équipe efficace</li>
                        
                    </ul>
                </div>
            </div>
            
        </section>
        
    </div>
    )

}
export default Competence;