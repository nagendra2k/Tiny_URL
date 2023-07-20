const mongoose = require('mongoose');
class DataBase{
    constructor(){
        this.connect();
    }
    // "mongodb+srv://nagendravelagana:1234@cluster0.ve42or9.mongodb.net/?retryWrites=true&w=majority" this is the connection link to the database
    connect(){
        mongoose.connect("mongodb+srv://nagendravelagana:1234@cluster0.ve42or9.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
            console.log("Database is connected");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
module.exports = new DataBase();
