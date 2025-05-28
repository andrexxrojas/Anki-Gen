import styles from "./TypeText.module.css";

export default function TypeText() {
    return (
        <div className={styles['type-text-container']}>
            <h3 className={styles['header']}>Text Input</h3>
            <div className={styles['type-zone']}>
                <textarea 
                    className={styles['text-area']} 
                    rows="10" 
                    cols="50" 
                    name="text-input" 
                    id="text-input"
                    placeholder="Write or paste your text into this field."
                ></textarea>
            </div>
            <button className={styles['continue-btn']}>Continue</button>
        </div>
    )
}