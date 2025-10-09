//call the configuration file for the db here
//and set up the userdb schema
const mongoose = require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["admin", "customer"],
        default: "customer",
    }
});


//Note: There might be an errpr here 
// based on the model spelling
module.exports = mongoose.model("User", userSchema);