//Requires
const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use(express.json());




routes(app);

app.listen(3000, () => {

    console.log("Server IS Running");
});