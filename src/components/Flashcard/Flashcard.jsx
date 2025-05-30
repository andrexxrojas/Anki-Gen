import styles from "./Flashcard.module.css";

export default function Flashcard() {
    return (
        <div className={styles['flashcard-item']}>
            <label htmlFor="front-input" className={styles['input-title']}>Front:</label>
            <input className={styles['text-input']} type="text" name="flashcard-front"/>
            <label htmlFor="back-input" className={styles['input-title']}>Back:</label>
            <input className={styles['text-input']} type="text" name="flashcard-back"/>
        </div>
    )
}