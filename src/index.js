const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userroutes");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const mongoose = require("mongoose");
const MONGO_URL=process.env.MONGO_URL

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.get("/", (req, res) =>{
    res.send("Notes API From Akshay");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})
