//Express server elements
const express = require("express");
const app = express();

const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", 
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes",
     "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", 
    "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", 
    "Outlook not so good", "Very doubtful"]; //Instantiates the magic eight ball array of responses.
const randomResponse = eightBall[Math.floor(Math.random() * eightBall.length)]; //gets a random number and mataches it to the index of the eightBall array.



app.get("/", (req, res) => {
    res.send("Hello There");
});

app.get("/greeting/:name?", (req, res) => {
    if (req.params.name) {
        res.send("What's up, " + req.params.name + " It's so great to see you!");
    };
});

app.get("/tip/:total?/:tipPercentage?", (req, res) => {
    res.send("Your tip is: " + (req.params.tipPercentage / 100) * req.params.total + "$");
});

app.get("/magic/:question", (req, res) => {
    res.send(`
    <h1>${randomResponse}</h1>`)
});

app.listen(3000);