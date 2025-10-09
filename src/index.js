 const express = require("express")
const dotenv = require('dotenv')
const cors = require('cors')
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");

dotenv.config()


const app = express();
const PORT = process.env.PORT || 5000   

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

app.use("/user", signupRoute)

app.get('/', async(req, res) => {
    try {
        const response = await{
            name: "express backend",
            description: "This Api is working"
        };

        res.status(200).json(response)

        console.log(response)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error", error: error.message})
    }
})

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`)
})