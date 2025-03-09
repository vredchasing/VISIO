import { useEffect, useRef } from "react";

function Projects() {
    const projects = [
        { projectName: 'CARPIP', projectImg: '/public/projectimg1.jpg', projectRedirect: '' },
        { projectName: 'PROJECT', projectImg: '/public/projectimg2.jpg', projectRedirect: '' },
        { projectName: 'PROJECT', projectImg: '/public/projectimg3.jpg', projectRedirect: '' },
        { projectName: 'PROJECT', projectImg: '/public/projectimg4.jpg', projectRedirect: '' }
    ];

    const projectRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.1 } // Adjust threshold to control when the animation triggers
        );

        projectRefs.current.forEach((project) => {
            if (project) observer.observe(project);
        });

        return () => {
            projectRefs.current.forEach((project) => {
                if (project) observer.unobserve(project);
            });
        };
    }, []);

    return (
        <section className="projects-section">
            <div className="projects-slider">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project"
                        ref={(el) => (projectRefs.current[index] = el)}
                    >
                        <div className="project-img-container">
                            <img className="project-img" src={project.projectImg} alt="Project" />
                        </div>
                        <div className="project-title-container">
                            <p className="project-title">{project.projectName}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="view-more-projects-btn-container">
                <span className="view-more-projects-btn">
                    ALL PROJECTS
                    <img className="header-arrow" src="/arrow.png"></img>
                </span>
            </div>
        </section>
    );
}

export default Projects;
