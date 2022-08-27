import express from "express";
import pg from "pg";
import { readFile } from "fs/promises";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const PORT = 5000;
// const { DATABASE_URL, NODE_ENV, PORT} = process.env;

const app = express();
app.use(express.json());
app.use(express.static('public')); 
app.use(cors());

const pool = new pg.Pool({
    database: 'todolist_db'
    // connectionString: process.env.DATABASE_URL,
    // ssl: {
    //     rejectUnauthorized: false
    // }
});

app.get("/api", (req, res) => {
    readFile("public/index.html", "utf-8").then(string => {
        res.send(string);
    });
});

app.get("/api/list", (req, res) => {
    pool.query('SELECT * FROM todolist').then((data) => {
        res.send(data.rows);
    });
});

app.post("/api/list", (req, res) => {
    // const listName = req.body.list_name;  
    const {description} =req.body;
    pool.query(`INSERT INTO todolist(list_name) VALUES ($1) RETURNING *;`, [description])
    .then((data) => {
        console.log(data);
        if (data.rows.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(data.rows[0]);
        }
    })
});

app.delete("/api/list/:id", (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    pool.query(`DELETE FROM todoList WHERE id = $1 RETURNING *;`, [id])
    .then((data) => {
        console.log(data);
        if(data.rows.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(data.rows[0]);
        }
    });
});

app.use((err, req, res, next)=> {
    res.sendStatus(500);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});