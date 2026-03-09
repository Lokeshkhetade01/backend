import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
  path:"./env"
})


connectDB()
.then(()=>{
  app.listen(process.env.PORT,()=>{
    `server is running at the port ${process.env.PORT}`
  })
})
.catch((err)=>{
  console.log("Mongodb connection failed")
})


















// first approach
// import express from "express"
// const app = express()
// (async()=>{
//   try {
//       await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//       app.on("error",()=>{
//         console.log("Error: ",error)
//         throw error
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log("App is listening on variable port")
//       })
//   } catch (error) {
//     console.error("Error: ",error)
//     throw error
//   }
// })()