import { useState } from "react";
import styles from "./styles/StepOne.module.css";
import FileUpload from "../components/FileUpload/FileUpload";
import TypeText from "../components/TypeText/TypeText";

export default function StepOne() {
    const [activeTab, setActiveTab] = useState("file");

    const handleClick = (tab) => {
        if (activeTab === tab) return;
        setActiveTab(tab);
    }

    return (
        <section className={styles['step-one-container']}>
            <h1 className={styles['step-title']}>Upload Your Content</h1>
            <div className={styles['tab-buttons']}>
                <button
                    className={`${styles['tab']} ${activeTab === 'file' ? styles['active'] : ''}`}
                    onClick={() => handleClick('file')}
                >File</button>
                <button
                    className={`${styles['tab']} ${activeTab === 'text' ? styles['active'] : ''}`}
                    onClick={() => handleClick('text')}
                >Type Text</button>
            </div>

            {
                activeTab === "file" ? (<FileUpload/>) : (<TypeText/>)
            }
        </section>
    )
}