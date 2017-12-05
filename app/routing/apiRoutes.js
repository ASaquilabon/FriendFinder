var friendData = require("../data/friends.js"); 
var compare = []; 

//api request to obtain answers

module.exports = function(app){
    app.get("/api/friends", function (req, res){
        res.json(friendData);
    });
    for(var i = 0; i < friendData.length; i++){
        compare = friendData[i];
        console.log([i] + " = " + compare.name); 
    }
    app.post("/api/friends", function (req, res){
        friendData.push(req.body);
        res.json(true); 
    });
    for(var i = 0; i < friendData.length; i++) {
        compare = friendData[i];
        console.log([i] + " = " + compare.name);
    }
};