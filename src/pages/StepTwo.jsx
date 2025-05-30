import { useState } from "react";
import styles from "./styles/StepTwo.module.css";

export default function StepTwo() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        flashcardType: "",
        cardLimit: "",
        cardStyle: []
    })

    const flashcardOptions = ["Basic", "Reversible", "Cloze", "Multiple Choice"] // Flashcard Types
    const cardLimitOptions = [10, 20, 30] // Card Limit Options
    const cardStyleOptions = ["Minimal", "With Context", "Bullet Points", "Include Examples"] // Card Style Options

    const handleInputChange = (e) => {
        const {  name, value, type, checked } = e.target;

        const nameToStateKey = {
            "deck-name": "name",
            "flashcard-type": "flashcardType",
            "card-limit": "cardLimit",
            "card-style": "cardStyle"
        };

        const key = nameToStateKey[name];

        setFormDetails(prev => {
            if (type === "checkbox") { // For checkbox input
                const newArray = checked ? [...prev[key], value] : prev[key].filter(item => item !== value);
                return {...prev, [key]: newArray};
            } else { // For text and radio input
                return {
                    ...prev,
                    [key]: value
                }
            }
        })
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles['step-two-container']}>
            <h1 className={styles['step-title']}>Configure Flashcards</h1>
            <form className={styles['form-container']}>
                <label htmlFor="deck-name" className={styles['label-title']}>Deck Name</label>
                <input className={styles['source-input']} type="text" name="deck-name" placeholder="Input name of deck..." onChange={handleInputChange}/>

                <label htmlFor="flashcard-type" className={styles["label-title"]}>Flashcard Type</label>
                <div className={styles['radio-container']}>
                    {
                        flashcardOptions.map((option) => (
                            <label key={option} className={formDetails.flashcardType === option.toLowerCase() ? styles['active'] : ''}>
                                <input
                                    className={styles['source-input']}
                                    type="radio"
                                    name="flashcard-type"
                                    value={option.toLowerCase()}
                                    onChange={handleInputChange}
                                />
                                {option}
                            </label>
                        ))
                    }
                </div>

                <label htmlFor="card-limit" className={styles["label-title"]}>Card Limit</label>
                <div className={styles['limit-container']}>
                    {
                        cardLimitOptions.map((option) => (
                            <label key={option}  className={parseInt(formDetails.cardLimit) === parseInt(option) ? styles['active'] : ''}>
                                <input
                                    className={styles['source-input']}
                                    type="radio"
                                    name="card-limit"
                                    value={option}
                                    onChange={handleInputChange}
                                />
                                {option}
                            </label>
                        ))
                    }
                </div>

                <label htmlFor="card-style" className={styles["label-title"]}>Card Style</label>
                <div className={styles['style-container']}>
                    {
                        cardStyleOptions.map((option) => (
                            <label key={option} className={formDetails.cardStyle.includes(option) ? styles['active'] : ''}>
                                <input
                                    className={styles['source-input']}
                                    type="checkbox"
                                    name="card-style"
                                    value={option}
                                    onChange={handleInputChange}
                                />
                                {option}
                            </label>
                        ))
                    }
                </div>

                <button className={styles['continue-btn']} onClick={handleSubmit}>Continue</button>
            </form>
        </div>
    )
}