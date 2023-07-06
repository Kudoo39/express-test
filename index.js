const express = require('express');
const app = express();

//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


//GET
app.get('/', (req, res) => {
    res.json({ message: "Hello, this is get response" });
})

//POST
app.post('/', (req, res) => {
    res.json({ message: "Hello, this is post response" });
})

app.put('/', (req, res) => {
    res.json({ message: "Hello, this is put response" });
})

app.delete('/', (req, res) => {
    res.json({ message: "Hello, this is delete response" });
})

app.patch('/', (req, res) => {
    res.json({ message: "Hello, this is patch response" });
})