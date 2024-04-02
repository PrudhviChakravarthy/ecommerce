const express = require("express")
const env = require("dotenv").config()
const bodyparser = require("body-parser")
const database = require("./config/dbconnect")
const authRouter = require("./routes/authRoutes")
const productRouter = require("./routes/productRoutes")
const homepageRouter  = require("./routes/homepageRoutes")
const {notFound, errorHandler}  = require("./middlewares/errorHandaling")
const morgan = require("morgan")

const PORT = process.env.PORT || 4200;

const app = express()
app.use(morgan())
app.use(bodyparser.json())
database()

app.use("",homepageRouter)
app.use("/api/user",authRouter)
app.use("/api/products",productRouter)

// Using the 404 error for not found page.
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

