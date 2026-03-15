import express from "express"
import cors from "cors"
import uploadRouter from "./routes/upload.router.js"
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api",uploadRouter)
app.get("/",(req,res) => {
    return res.status(200).json({"message":"Hello World"})
})
const PORT = 3000
app.listen(PORT,() => {
    console.log(`Server port is listening on ${PORT}`)
})
