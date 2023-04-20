const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const Categories = require('./data/categories.json')


app.use(cors());
app.get('/', (req, res) => {
    res.send('dragon is comming')
});

app.get('/categories', (req, res) => {
    res.send(Categories)
})

app.listen(port, () => {
    console.log(`Dragon api is running on port: ${port}`)
})