const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jwt_db")

mongoose.connection.on("connected", () => {
    console.log(`Mongodb Database successfully connected`)
})

mongoose.connection.on("error", (error) => {
    console.error(`Error connecting to Mongodb database due to ${error}`)
})


module.exports = mongoose