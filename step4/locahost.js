const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/bmi-db', { useNewUrlParser: true, useUnifiedTopology: true });

const bmiSchema = new mongoose.Schema({
    weight: Number,
    height: Number,
    bmi: Number,
    date: { type: Date, default: Date.now }
});

const BMI = mongoose.model('BMI', bmiSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

// Route to get previous BMI calculations
app.get('/api/bmi', async (req, res) => {
    const bmies = await BMI.find();
    res.json(bmies);
});

// Route to save new BMI calculation
app.post('/api/bmi', async (req, res) => {
    const { weight, height, bmi } = req.body;
    const newBMI = new BMI({ weight, height, bmi });
    await newBMI.save();
    res.json(newBMI);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});