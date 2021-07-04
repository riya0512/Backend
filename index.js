//Requires
const express = require('express');

const routes = require('./Routes/index');

const app = express();

app.use(express.json());

routes(app);

app.use("/",(req,res)=>{
    res.sendStatus(200);
})

const port = process.env.port || 3000;
app.listen(port, () => {

    console.log("Server IS Running");
});