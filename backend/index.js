import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SYW432021#",
    database:"honsge_database"
})

app.use(express.json());

app.use(cors());

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})