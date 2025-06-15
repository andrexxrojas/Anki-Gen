import styles from "./Flashcard.module.css";

export default function Flashcard({ front, back }) {
    return (
        <div className={styles['flashcard-item']}>
            <label htmlFor="front-input" className={styles['input-title']}>Front:</label>
            <input className={styles['text-input']} type="text" name="flashcard-front" defaultValue={front}/>
            <label htmlFor="back-input" className={styles['input-title']}>Back:</label>
            <input className={styles['text-input']} type="text" name="flashcard-back" defaultValue={back}/>
        </div>
    )
}