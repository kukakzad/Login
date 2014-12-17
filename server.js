var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var format = require('util').format;

var collection = null;
/* ======================================= */

var port = 4000;
var express = require('express');
var app = express();

app.use(express.static('./public'));
  
  app.get('/add',function(req,res){
    var newData = {
      user: req.query.user,
      pass: req.query.pass
    };
    collection.insert(newData,function(err,result){
      if(err) throw err;
      console.log(result);
    })
  });


   app.get('/addData',function(req,res){
    var newData = {
      text: req.query.text,
      user: req.query.user
    };
    collection.insert(newData,function(err,result){
      if(err) throw err;
      res.send('success')
    })
  });


  app.get('/check/', function(req, res) {
    var find = {};
    if (req.query.user!=""&&req.query.user!=null) 
        {
            find.user = req.query.user;
            if (req.query.pass!=""&&req.query.pass!=null) 
            {
                find.pass = req.query.pass;
                collection.find(find).toArray(function(err, result) {
                res.send(JSON.stringify(result));
                });
            }
        }

});

MongoClient.connect('mongodb://root:root@linus.mongohq.com:10068/nana_db', function(err, db) {
  if(err) throw err;
  collection = db.collection('account');
  app.listen(port);
  console.log("\nhttp://127.0.0.1:"+port+"\n");
});
