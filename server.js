const express = require('express');
const app = express(); //app is backend application

app.get("/",(req,res)=>{
    res.send("Welcome to Glen's backend appication");
}); //forward slash means the context root of the application, or the url without ??

app.get("/glen", (req,res)=>{
    res.send("Hello Glen!");
});

app.listen(3000,()=>{
    console.log('Listening');
});