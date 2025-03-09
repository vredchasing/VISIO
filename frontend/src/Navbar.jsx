function Navbar (){

    return (
        <section className="navbar-wrapper">
            <div className="navbar-left">
                <h1 className="logo-header">VISIO</h1>
            </div>
            <div className="navbar-right">
                <ul className="navbar-ul">
                    <li className="navbar-li">Home</li>
                    <li className="navbar-li">Projects</li>
                    <li className="navbar-li">Resume</li>
                    <span className="contact-text">
                        Contact
                        <img className="header-arrow" src="/arrow.png"></img>
                    </span>
                </ul>
            </div>
        </section>
    )

    

}

export default Navbar