import cors from "cors";
import express from "express";
import { errorHandlerMiddleware } from "./middleware/errorHandler.middleware.js";
import pool from "./db.js";

const app = express();
const router = express.Router({ mergeParams: true });

// Routes

//middleware
app.use(cors());
app.use(express.json()); //let the server understand the data format for json

app.use(router);

// app.get("/getElement", async (req, res, next) => {
//     try {
//         const result = await pool.query('SELECT * from public."Element";');
//         console.log(result);

//         res.json(result)
//     } catch (error) {
//         console.log(error);

//         res.json(error)
//     }
// })

app.use(errorHandlerMiddleware);

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
