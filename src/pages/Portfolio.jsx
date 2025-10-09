import { useState } from 'react'
import '../assets/Portfolio.css'
import Navbar from '../components/Navbar';


function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="div-contain-biggest">
        <div id="div-blur-part">
          <section id="section-navbar">
            <Navbar/>
          </section>
          <section id="section-info-img">
          <div id="div-infor">
            <p className="infor">Bonjour! Je suis<br/><span id="big-name">Tuan An TA</span></p>
            <p className="infor"> Je suis actuellement étudiant en troisième année de l’Information de l'université d'Artois.</p>
            
          </div>
          <div id="div-image"></div>
          <div id="div-infor2">
            <p className="infor"> Passionné par le développement et les nouvelles technologies, je souhaite approfondir mes compétences et relever de nouveaux défis dans le domaine de l’informatique.</p>
          </div>
          </section>
        </div>
        

       
      </div>
      
    </>
  )
}

export default Portfolio;
