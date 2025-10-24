// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/jwt_db")

// mongoose.connection.on("connected", () => {
//     console.log(`Mongodb Database successfully connected`)
// })

// mongoose.connection.on("error", (error) => {
//     console.error(`Error connecting to Mongodb database due to ${error.message}`)
// })


// module.exports = mongoose


const mongoose = require("mongoose");
const dotenv = require("dotenv")


dotenv.config()

const db_URI=process.env.MONGODB_URI_KEY

// mongoose.connect("mongodb+srv://oyinloyematthew6_db_user:68KOBt6zGzWPnouI@cluster0.bo1ta9j.mongodb.net/?appName=Cluster0");

mongoose.connect(db_URI)
mongoose.connection.on("connect", () => {
    console.log("Successfully connected")
});

mongoose.connection.on("error", (error) => {
    console.error("Error :", error.message)
})

module.exports = mongoose;