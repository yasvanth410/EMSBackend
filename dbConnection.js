let url = process.env.DB_URL
const mongoose = require('mongoose');

function ConnectToDB(){
    mongoose.connect(url)
    .then(()=>{
        console.log("DB connected successfully");
    }).catch(err =>{
        console.log("error occured while connecting with DB", err);
        next(err);
    })
}

module.exports = ConnectToDB