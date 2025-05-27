import { useNavigate } from "react-router-dom";
import styles from "./HeroSection.module.css";

export default function HeroSection() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/step-one");
    }

    return (
        <section className={styles['hero-section']}>
            <h1 className={styles['header']}>Turn Any File or Text into Anki Flashcards in Seconds</h1>
            <p  className={styles['subtitle']}>
                Easily transfrom your notes into effective flashcards for faster learning.
            </p>
            <button className={styles['cta']} onClick={handleClick}>Get Started Now</button>
        </section>
    )
}