const express = require("express");
const app = express();
const Datastore = require('nedb')
const port = 3000;

const database = new Datastore('database.db')
database.loadDatabase();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//This is for getting data from the form. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  database.insert(req.body);
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
