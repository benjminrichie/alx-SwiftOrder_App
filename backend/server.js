import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = 5000
const allowedOrigins = ['http://localhost:3000', 'https://swiftorder.vercel.app'];

// middleware
app.use(express.json())
app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }))

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/",(req,res)=>{
    res.send("API Working perfectly")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// YOU CAN SAVE UR DATABASE IN THIS COMMENT IF U WANT --> 