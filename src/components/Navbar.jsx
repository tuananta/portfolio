import "./Navbar.css"
function Navbar(){
    return(
    <header id="header-portfolio">
        <div id="div-container">
        <div className="div-flex"><a href="#home">À propos</a></div>
        <div className="div-flex"><a href="#projects">Projects</a></div>
        <div className="div-flex"><a href="#competences">Compétences</a></div>
        <div className="div-flex"><a href="#contacts">Contacts</a></div>
        </div>
        

    </header>
    )
}
export default Navbar;