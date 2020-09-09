var express = require("express");
var app = express();
var port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/love/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this Pomsky", author: "Jason"}
    ];

    res.render("posts", {posts: posts});
});

// Init Server
app.listen(port, function(){
    console.log(`Listening on port: ${port}`);
});