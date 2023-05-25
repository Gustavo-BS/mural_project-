const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

let posts = [
    {id: "123",
    tittle: "Teste mural",
    description: "Descricao Teste"}
]

app.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts));
});


app.post("/new", bodyParser.json(),(req,res)=>{
    let id = generateID();
    let tittle = req.body.tittle;
    let description = req.body.description;

    posts.push({id,tittle,description});

    res.send("Post adicionado");
});

app.listen(5000, ()=>{
    console.log(`Server running on Port: ${PORT}`);
});

function generateID(){
    return Math.random().toString(36).substring(2,9);
}