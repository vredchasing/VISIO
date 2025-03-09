import About from "./Home Content/About"
import Projects from "./Home Content/Projects"
import Resume from "./Home Content/Resume"

function Home (){
    return (
        <section className="home-section">
            <About></About>
            <Projects></Projects>
            <Resume></Resume>
        </section>
    )
}

export default Home