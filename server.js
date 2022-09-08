const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080

app.use(express.static('./dist/elzero'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: './dist/elzero'}),
);

app.listen(port ,()=>{
console.log(`listening on http://localhost:${port}`);
});