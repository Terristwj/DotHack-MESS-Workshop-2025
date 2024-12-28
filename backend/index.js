import cors from "cors";
import express from "express";
import pool from "./db.js"

const app = express();

//middleware
app.use(cors())
app.use(express.json()); //let the server understand the data format for json

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})

app.get("/test", async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM public."Drops" ORDER BY drop_id ASC;');
        console.log(result);
        
        res.json(result)
    } catch (error) {
        console.log(error);
        
        res.json(error)
    }
})