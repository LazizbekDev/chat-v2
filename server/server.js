import express from "express";
import { config } from "dotenv";
import connect from "./DB/db.js";
import userRoutes from "./routes/userRoutes.js";
import {errorHandler} from "./middleware/err.js";
import messages from "./routes/messages.js";

config();
connect();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/api/', (req, res) => {
    res.status(200).json({
        name: "lazizbek"
    })
})

app.use('/api', userRoutes)
app.use('/api', messages)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('server running')
})