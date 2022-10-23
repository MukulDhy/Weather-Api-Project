// const { hasSubscribers } = require("diagnostics_channel");
const Express = require("express");

const hbs = require("hbs");

const app = Express();

const path = require("path");

const http = require("http");

const reload = require("reload");

// const port = process.env.PORT || 5000  /* For hosting you site you need process.env.port */

const port = 5000;


const StaticIndexPath = path.join(__dirname,"../public");
// console.log(path.join(__dirname,"../public"));

const viewsPath =  path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");
// console.log(viewsPath);

app.set('view engine','hbs');
app.use(Express.static(StaticIndexPath));

app.set("views",viewsPath);

hbs.registerPartials(partialpath);




/* Routing */
app.get("" , (req,res) => {
    
    res.render('index.hbs');
    // res.send("Hlw From Home page");
});

app.get("/about" , (req,res) => {
    
    res.render('about.hbs');
    // res.send("Hlw Form About Page");

});

app.get("/weather" , (req,res) => {

    res.render("weather.hbs");
    // res.send("Hlw Form Weather Page");

});

app.get("*" , (req,res) => {

    res.render('error.hbs');
    // res.send("Opps ! Error Found Mf");

});

app.listen(port, "127.0.0.1" , () => {
    console.log(`I am Wathing You Files at ${port}`);
});



/* This Technique is of double server */
  /* i used for reloading browser but it does'nt work */
// const server = http.createServer(app);

// server.listen(port, "127.0.0.1" , () => {

//     console.log(`I am Wathing You Files at ${port}`);

// });

// reload(app);
