import express from "express";      // For creating and managing web server
import multer from "multer";        // For handling file uploads
import fs from "fs";                // Node's module to read uploaded files from disk
import mammoth from "mammoth";      // To extract plain text from .docx documents
import pdfParse from "pdf-parse";   // To extract plain text from .pdf documents
import cors from "cors";            // Allow requests from different origins

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file;

    try {
        let text = '';

        if (file.mimetype === 'application/pdf') {
            const dataBuffer = fs.readFileSync(file.path);
            const data = await pdfParse(dataBuffer);
            text = data.text;
        } else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const data = await mammoth.extractRawText({ path: file.path });
            text = data.value;
        } else {
            return res.status(400).send("Unsupported file type");
        }

        fs.unlinkSync(file.path); // Clean up uploaded file
        res.json({ text });

    } catch (err) {
        console.error(err);
        res.status(500).send("Error parsing file");
    }
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});

app.post('/submit-text', (req, res) => {
    const { text } = req.body;

    if (!text || typeof text !== 'string' || text.trim() === '') {
        return res.status(400).send("No valid text provided.");
    }

    res.json({ text });
});

