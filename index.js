import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
import env from "dotenv";

const app=express();
const port=3000;

env.config();

const db=new pg.Client({
    user:process.env.PG_USER,
    host:process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


let sort="title";
let search;

//Home Route
app.get("/", async(req,res)=>{
    try{
        const response =await db.query(
            `SELECT * FROM books 
            JOIN book_reviews ON books.book_id=book_reviews.book_id
            ORDER BY ${sort} ASC`);
        
        const data=response.rows;
        res.render("index.ejs", {search: search, data:data});
    }
    catch(err){
        console.log("Could not execute query: ", err)
    }
});


app.post("/sort",(req,res)=>{
    const result= req.body.sort;
    sort=result;
    console.log(req.body);
    res.redirect("/");
});

//About Section
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

//Contact Section
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

//Sort by Title
app.get("/title", (req, res)=>{
    try{
    }
    catch(err){
    }
});

//Sort by Rating
app.get("/rating", (req, res)=>{
    try{
    }
    catch(err){
    }
});


//Sort by Newest
app.get("/newest", (req, res)=>{
    try{
    }
    catch(err){
    }
});

//Post the contact form data
app.post("/contact", async(req,res)=>{
    const result=req.body;

    try{
        await db.query("")
    }
    catch(err){

    }
});






app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  

