const mongoose = require("mongoose");
const dotenv = require("dotenv")


dotenv.config()

const db_URI=process.env.MONGODB_URI_KEY

mongoose.connect(db_URI)
mongoose.connection.on("connect", () => {
    console.log("Successfully connected")
});

mongoose.connection.on("error", (error) => {
    console.error("Error :", error.message)
})

module.exports = mongoose;