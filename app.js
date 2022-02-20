const express=require("express");
const config=require("config");

const app=express();
const port=config.get("server-port");

app.get("/", (req, res, next) => {
    res.send("Welcome to productos alimenticios rest api.");
});

app.listen(port, ()=>{
    console.log("Server is running...")
});