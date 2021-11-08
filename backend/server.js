const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
 
app.use(express.urlencoded({ extended: true })); 

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
