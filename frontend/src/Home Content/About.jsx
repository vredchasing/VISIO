import { useEffect, useRef } from "react";

function About() {
    const textRef = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");
                        
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (textRef.current) observer.observe(textRef.current);
        if (text2Ref.current) observer.observe(text2Ref.current);

        return () => {
            if (textRef.current) observer.unobserve(textRef.current);
            if (text2Ref.current) observer.unobserve(text2Ref.current);
        };
    }, []);

    return (
        <section className="about-section">
            <div className="about-text-container">
                <p ref={textRef} className="about-text">A creative agency committed to fulfilling your vision.</p>
                <p ref={text2Ref} className="about-text2">Collaborate with us to create stunning software applications and websites, to help empower you and your business.</p>
            </div>
            <div className="about-right">
                <img className="eye-img" src="/eye2.png" alt="Eye" />
            </div>
        </section>
    );
}

export default About;
