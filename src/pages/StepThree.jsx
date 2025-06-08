import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/StepThree.module.css";
import Flashcard from "../components/Flashcard/Flashcard.jsx";
import { useSteps} from "../context/StepsContext.jsx";

export default function StepThree() {
    const navigate = useNavigate();
    const { stepProgress } = useSteps();

    useEffect(() => {
        if (!stepProgress.stepTwoComplete) {
            navigate("/step-two");
        }
    }, [stepProgress, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles['step-three-container']}>
            <h1 className={styles['step-title']}>Review your Flashcards</h1>

            <div className={styles['inner-container']}>
                <label htmlFor="deck-name" className={styles['label-title']}>Deck Name</label>
                <input className={styles['source-input']} type="text" name="deck-name"/>

                <div className={styles['flashcards-container']}>
                    <Flashcard/>
                    <Flashcard/>
                    <Flashcard/>
                    <Flashcard/>
                </div>

                <button className={styles['continue-btn']} onClick={handleSubmit}>Continue</button>
            </div>
        </div>
    )
}