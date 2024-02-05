import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import userRoute from "./routes/user.js"
import taskRoute from "./routes/task.js"
import infoRoute from "./routes/seeInfo.js"
import updateTasksDaily from"./middleware/updateDaily.js";
import cron from "node-cron";
import cors from "cors";


config({path: './data/config.env'})
export const app=express()
app.use(express.json());
app.use(cookieParser());

app.use(cors({
   origin:'http://localhost:5173',
   methods:["GET","POST","PUT","DELETE"],
   credentials:true
 }));




app.use("/users", userRoute);
app.use("/task", taskRoute);
app.use("/info", infoRoute);

cron.schedule("0 0 * * *", () => {
  updateTasksDaily();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  
  
 