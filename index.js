const fetch = require('cross-fetch').fetch;
const express = require("express");
const cors = require('cors');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/cities', async (req, res) => {
    const response = await fetch('https://majorbence.hu/GmEn2AZwoD/?cities=true');
    const data = await response.json()
    return res.status(200).send({
        message: 'success',
        cities: data
    });
})

app.post('/login', async (req, res) => {
    let reqbody = req.body;
    if (reqbody) {
        return res.status(200).send({
            success: true,
            message: 'success',
            username: reqbody.email.split("@")[0],
            userid: 1
        });
    }
});


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});