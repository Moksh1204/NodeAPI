const mongoose = require("mongoose");

const uri = "mongodb+srv://moksh_shah:moksh%40%231221@nodeapi.0axg2.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=NodeAPI";

const connectDB = () => {
    console.log("Database Connected");  
    return mongoose.connect(uri);
};

module.exports = connectDB;
