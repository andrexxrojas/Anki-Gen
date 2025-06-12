import { useState } from "react";
import styles from "./TypeText.module.css";
import {useSteps} from "../../context/StepsContext.jsx";
import {useNavigate} from "react-router-dom";

export default function TypeText() {
    const { markStepComplete, setExtractedText } = useSteps();
    const [textValue, setTextValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (textValue.trim() === "") {
            alert("Please enter some text before submitting.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/submit-text", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: textValue })
            })

            if (!response.ok) throw new Error("Text submission failed.");

            const data = await response.json();

            setExtractedText(data);
            markStepComplete("stepOneComplete");
            navigate("/step-two");
        } catch (error) {
            console.error("Text submission error", error);
            alert("Failed to submit text.")
        }
    }

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
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                ></textarea>
            </div>
            <button className={styles['continue-btn']} onClick={handleSubmit}>Continue</button>
        </div>
    )
}