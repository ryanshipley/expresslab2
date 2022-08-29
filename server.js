const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World!");
});

app.get("/greeting/:name?", (req, res)=>{
    if(req.params.name){
        res.send("What's up, " + req.params.name + " It's so great to see you!");
    };
});

app.listen(3000);