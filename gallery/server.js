const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
import fetch from 'node-fetch';
const fetch = require('node-fetch');

const app = express();
const port = 3000;

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/addImage', upload.single('image'), (req, res) => {
    const newImage = {
        src: `/uploads/${req.file.filename}`,
        name: req.body.name,
        description: req.body.description,
        dimensions: req.body.dimensions
    };

    const imageDataPath = path.join(__dirname, 'public', 'imageData.js');

    // Добавляем новый элемент в массив imageData
    fs.readFile(imageDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading imageData.js:', err);
            res.status(500).send('Error adding image data');
            return;
        }

        const imageData = JSON.parse(data.replace('const imageData = ', ''));
        imageData.push(newImage);

        // Записываем обновленные данные обратно в файл imageData.js
        fs.writeFile(imageDataPath, `const imageData = ${JSON.stringify(imageData, null, 4)};`, (err) => {
            if (err) {
                console.error('Error writing to imageData.js:', err);
                res.status(500).send('Error adding image data');
                return;
            }

            console.log('Image data added to imageData.js');
            res.status(200).send('Image data added successfully');
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
