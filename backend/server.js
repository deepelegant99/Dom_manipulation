const express = require("express");
const app = express();
const Datastore = require('nedb')
const port = 3000;

//Setting up the database, and loading the database
const database = new Datastore('database.db')
database.loadDatabase();

//This is for getting data from the form. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//This is setup so that we server is serving the frontend. The frontend also contains the index.html file.  
app.use(express.static("../frontend"));

app.post("/", function (req, res) {
  database.insert(req.body);
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
