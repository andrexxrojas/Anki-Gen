import { useState } from "react";
import styles from "./TypeText.module.css";
import {useSteps} from "../../context/StepsContext.jsx";
import {useNavigate} from "react-router-dom";

export default function TypeText() {
    const { markStepComplete } = useSteps();
    const [textValue, setTextValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (textValue.trim() === "") {
            alert("Please enter some text before submitting.");
            return;
        }

        markStepComplete("stepOneComplete");
        navigate("/step-two");
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