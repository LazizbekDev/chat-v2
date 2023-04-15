import express from "express";
import { config } from "dotenv";
import connect from "./DB/db.js";

config();
connect();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/api', (req, res) => {
    res.status(200).json({
        name: "lazizbek"
    })
})

app.listen(PORT, () => {
    console.log('server running')
})