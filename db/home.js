const mongoose = require('mongoose');

const home = new mongoose.Schema({
    temp:{
        type: String  
    },
    ligntOn: {
        type: String
    },
    lightOff:{
        type: String
    },
    thermostat:{
        type: String
    },
    activity:{
        type: String
    },
    time:{
        type: String
    }
});

module.exports = home;