const express=require("express");
const mongoose =require("mongoose");
require("dotenv").config();

const routes=require("./routes/ToDoRoutes") ;

const cors=require("cors");

const app=express();
const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected..."))
.catch(()=>console.log(error));

app.use("/api",routes);

app.listen(PORT,()=>console.log(`Listen at ${PORT}...`));
