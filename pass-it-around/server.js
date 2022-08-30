const express = require("express");
const app = express();

app.get("/99", (req, res) => {
    res.send(`<h1>99 bottles of beer on the wall, 99 bottles of beer!</h1>
    <a href="/98">Take one down and Pass it around!</a>`);
});

app.get("/:number_of_bottles", (req, res)=>{
    let numBottles = req.params.number_of_bottles;
    if(numBottles > 0){
        res.send(`<h1>${numBottles} bottles of beer on the wall!</h1><h1> ${numBottles} bottles of beer on the wall, 
        ${numBottles} bottles of beer!</h1>
        <a href ="/${numBottles -1}">Take one down, pass it around!!</a>`);
    }else{
        res.send(`<h1>No more bottles of beer on the wall, no more bottles of beer.
        </h1><a href="/99">Go to the store and buy some more, 99 bottles of beer on the wall.</a>`);
    };
});

app.listen(3000);