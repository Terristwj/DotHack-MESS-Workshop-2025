import cors from "cors";
import express from "express";
import pool from "./db.js"
import { errorHandlerMiddleware } from "./middleware/errorHandler.middleware.js";

const app = express();
const router = express.Router({ mergeParams: true });
// Routes
import { router as elementRoute } from "./routes/element.route.js"
import { router as dropsRoute } from "./routes/drops.route.js"

//middleware
app.use(cors())
app.use(express.json()); //let the server understand the data format for json


app.use(router);
app.use("/element", elementRoute);
app.use("/drops", dropsRoute);
// app.get("/test", async (req, res, next) => {
//     try {
//         const result = await pool.query('SELECT * FROM public."Drops" ORDER BY drop_id ASC;');
//         console.log(result);

//         res.json(result)
//     } catch (error) {
//         console.log(error);

//         res.json(error)
//     }
// })

app.use(errorHandlerMiddleware)

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})
