import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FileUpload.module.css";
import { useSteps } from "../../context/StepsContext.jsx";

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const { markStepComplete } = useSteps();

    const allowedTypes = [
        "application/pdf", // PDF
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // DOCX
    ];

    const validateFile = (file) => {
        if (!allowedTypes.includes(file.type)) {
            return false;
        }
        return true;
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];

            if (validateFile(droppedFile)) {
                setFile(e.dataTransfer.files[0]);
            } else {
                alert("Only .pdf and .docx files are allowed")
            }
        }
    }

    const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

    const handleDragLeave = () => {
        setIsDragging(false);
    }

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            if (e.target.files && e.target.files[0]) {
                const droppedFile = e.target.files[0];

                if (validateFile(droppedFile)) {
                    setFile(e.target.files[0]);
                } else {
                    alert("Only .pdf and .docx files are allowed")
                }
            }
        }
    }

    const handleClick = () => {
        inputRef.current.click();
    }

    const handleSubmit = () => {
        if (!file) {
            alert("Please upload a file first.");
            return;
        }

        markStepComplete("stepOneComplete");
        navigate("/step-two");
    }

    return (
        <div className={styles['file-upload-container']}>
            <h3 className={styles['header']}>File Upload</h3>
            <div
                className={`${styles['drop-zone']} ${isDragging ? styles['dragging'] : ""}`}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input 
                    type="file" 
                    ref={inputRef}
                    className={styles['hidden-input']}
                    onChange={handleFileSelect}
                    accept=".pdf,.docx"
                />

                {file ? (
                    <p>{file.name}</p>
                ) : (
                    <p className={styles['no-file']}>Drag & drop a file here, or click to select</p>
                )}
            </div>
            <button className={styles['continue-btn']} onClick={handleSubmit}>Continue</button>
        </div>
    )
}