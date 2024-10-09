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

app.listen(8801, ()=>{
    console.log("Connected to backend!")
})

app.post("/CheckCustomerLoginInfo", (req, res) => {
    const phoneNumber = req.body.phoneNumber;

    const query = "SELECT COUNT(*) AS Count, customer_id FROM login_info WHERE phone_number = ?";

    db.query(query, [phoneNumber], (err, data) => {
        if (err) throw err;
        console.log(data);
        res.json({message: data[0].Count > 0 ? "Data Exist" : "Data doesn't Exist", customer_id: data[0].customer_id}); 
    }); 
})

app.post("/FetchCustomerInfo", (req, res)=>{
    const customer_id = req.body.customerID;
    const query = 
        "SELECT * FROM customers WHERE customer_id = ?";
    db.query(query, [customer_id], (err, data)=>{
        if(err) return res.json(err);
        res.json(data);  
    })
}) 

app.get("/FetchPoints", (req, res)=>{
    const query = "SELECT * FROM points WHERE customer_id = ?"
    const customer_id = req.query.customerID;
    console.log(req.body.customerID);
    db.query(query, [customer_id], (err, data)=>{
        if(err) return res.json(err)
        console.log(data);
        return res.json(data)  
    })
})

app.put("/UpdatePoints", (req, res)=>{
    console.log(req.body.points)
    const points = req.body.points
    const customer_id = req.body.customerID;
    const query = 
        `UPDATE points 
        SET points = ?
        WHERE customer_id = ?`;
    db.query(query, [points, customer_id], (err, data)=>{
        if(err) return res.json(err);
        res.json(data);  
    })
})