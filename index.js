const bodyParser = require('body-parser');
const express = require('express');
const {home1} = require('./db/body');
const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Endpoint
app.post('/home', async (req, res) => {
    const  body= req.body;

    const home = await home1.create({
        temp: body.temp,
        ligntOn: body.ligntOn,
        lightOff: body.lightOff,
        thermostat: body.thermostat,
        activity: body.activity,
        date: body.date,
    });

    home ? res.status(201).json({msg: "Success", data: home}) : res.status(500).json({msg: "Error", data: home})
})

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))