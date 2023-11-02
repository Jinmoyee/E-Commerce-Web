import dotenv from 'dotenv'
dotenv.config({ path: "../.env" })
import express from 'express'
import mongoose from 'mongoose'
import userRouter from '../api/routes/user.route.js'

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to mongo")
}).catch((err) => {
    console.log(err)
})
const app = express()

app.use("/api", userRouter)

app.listen(3000, () => {
    console.log("Server is working")
})

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log("Server up and running!")
//         .catch((error) => console.log(error.message)
// mongoose.set('useFindAndModify', false)
// mongoose.connect(config.DB,{ useNewUrlParser: true });