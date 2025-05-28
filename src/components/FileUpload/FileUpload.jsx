import { useState, useRef } from "react";
import styles from "./FileUpload.module.css";

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
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
            setFile(e.target.files[0]);
        }
    }

    const handleClick = () => {
        inputRef.current.click();
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
                />

                {file ? (
                    <p>{file.name}</p>
                ) : (
                    <p className={styles['no-file']}>Drag & drop a file here, or click to select</p>
                )}
            </div>
            <button className={styles['continue-btn']}>Continue</button>
        </div>
    )
}