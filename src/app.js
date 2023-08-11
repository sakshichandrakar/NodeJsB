const express = require('express');
const path = require('path');
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

//Public static Path
const templatepath = path.join(__dirname,"../templates/views");
const partialsepath = path.join(__dirname,"../templates/partials");

//to set the view engine
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialsepath);
app.use(express.static('public'));

//Routing
app.get("", (req,res) =>{
    res.render("index");
});

app.get("/about", (req,res) =>{
    res.render("about");
});

app.get("/weather", (req,res) =>{
    res.render("weather");
});

app.get("/wishes", (req,res) =>{
    res.render("wishes");
});

app.get("/gallery", (req,res) =>{
    res.render("gallery");
});

app.get("*", (req,res) =>{
    res.render("404",{
        errormsg : "Opps! Page Not Found",
      });
});

app.listen(port ,() =>{
    console.log(`Listening to the port at ${port}`);
})