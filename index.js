const express = require("express");
const bodyParser = require("body-parser");
const posts = require('./model/posts');

const app = express();
const PORT = 5000;



app.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts.getAll()));
});


app.post("/new", bodyParser.json(),(req,res)=>{
    let tittle = req.body.tittle;
    let description = req.body.description;
    
    posts.newPost(tittle, description);

    res.send("Post adicionado");
});

app.listen(5000, ()=>{
    console.log(`Server running on Port: ${PORT}`);
});

