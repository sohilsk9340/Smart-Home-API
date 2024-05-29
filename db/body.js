const{ default: mongoose } =require("mongoose");
const home = require("./home");
const Database_Name = process.env.Database_Name||"smartHome";

const URI = process.env.Mongo||"mongodb+srv://smartHome:smartHome@cluster0.elwmgmk.mongodb.net"
const Mongo = `${URI}/${Database_Name}`;

mongoose.connect(Mongo).then(() => console.log("connected")).catch((err) => console.log(err))

const home1 = mongoose.model('home', home, 'home1');

module.exports = {home1};