import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
  console.log(req.rawHeaders);// just to see what data do request has just for fun
  res.send( "<h1>Hello Yasser</h1>")// or just "Hello Yasser with no html"
})
app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.get("/contact",(req,res) =>{
  console.log(req.rawHeaders);// just to see what data do request has just for fun
  res.send( "Hello zahra")// or just "Hello Yasser with no html"
})

app.get("/about",(req,res) =>{
  res.send( "<h1>Hello All</h1> <p1>bhjk bbjkhb kjkjhb jhbkjb jhbjhb jhbkjhb kjhb jhb jhb jhb hj</p1>")// or just "Hello Yasser with no html"
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
