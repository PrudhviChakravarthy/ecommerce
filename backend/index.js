const express = require("express")
const bodyparser = require("body-parser")
const morgan = require("morgan")
const env = require("dotenv").config()
const cors = require("cors")

const database = require("./config/dbconnect")
const authRouter = require("./routes/authRoutes")
const productRouter = require("./routes/productRoutes")
const homepageRouter  = require("./routes/homepageRoutes")
const couponRouter = require("./routes/couponRoutes")
const commentRouter = require("./routes/commentsRoutes")
const imageRouter = require("./routes/imageRoutes")
const petsRouter = require("./routes/petsRoutes")
const {notFound, errorHandler}  = require("./middlewares/errorHandaling")
const PORT = process.env.PORT || 4200;

const app = express()
app.use(morgan())
app.use(cors())
app.use(bodyparser.json())
database()

app.use("",homepageRouter)
app.use("/api/user",authRouter)
app.use("/api/products",productRouter)
app.use("/api/coupon",couponRouter)
app.use("/api/comments",commentRouter)
app.use("/api/image",imageRouter)
app.use("/api/pets",petsRouter)
// Using the 404 error for not found page.
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

