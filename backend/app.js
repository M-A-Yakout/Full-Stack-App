const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('page')
})

app.listen(3022, () => {
    console.log('list port 3022')
})