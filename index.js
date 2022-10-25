const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');
const coursesDetails = require('./data/coursesDetails.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('server running fine');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selected = coursesDetails.find(c => c.id === id);
    res.send(selected);
})


app.listen(port, () => {
    console.log('rnunning on ', port)
})