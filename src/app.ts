import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3200;


app.listen(port , () => console.log(`Server started on port : ${port}`))

