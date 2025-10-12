import '../assets/Contact.css';
function Contact(){
    return (
        <div id="div-contact-container">
            <section id="section-script">

            <p>Merci sincèrement d'avoir pris le temps de parcourir mon portfolio et d'être arrivé jusqu'à cette section.</p>
            <p>Bref, ma passion pour la programmation web va au-delà du simple codage.
            C'est un engagement constant à apprendre et à maîtriser de nouvelles connaissances chaque jour.
            Je crois fermement que cet esprit de progression est la clé pour évoluer et apporter des solutions concrètes et innovantes.
            Fort de mes compétences Full-Stack et de mon désir de perfectionnement, je suis prête à rejoindre une équipe professionnelle et à collaborer efficacement.</p>
            <p> Pour discuter d'opportunités ou de collaborations futures, vous pouvez me contacter via les moyens suivants.</p>
            </section>
            <section id="section-option">
                <div className="div-option">
                    <p>Email : <a href="mailto:tatuanan2003@gmail.com">tatuanan2003@gmail.com </a></p>
                </div>
                <div className="div-option">
                    <a href="https://github.com/tuananta/tuananta.github.io" target="_blank" rel="noopener noreferrer">
                        Voir mon GitHub
                    </a>
                </div>
                <div className="div-option">
                    <a href='https://www.linkedin.com/in/tuan-an-ta-b22396337/'>Voir mon Linkedin</a>
                    </div>
                <p id="p-a-option">N'hésitez pas à me contacter pour toute opportunité ou collaboration!</p> 
            </section>

        </div>
    )
}
export default Contact;