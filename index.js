const express = require("express");
const app = express();
const port = 4000;
const cors = require('cors');
// const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {
    let reqbody = req.body;
    if (reqbody){
        return res.status(200).send({
            reqbody
        });    
    }
});


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});