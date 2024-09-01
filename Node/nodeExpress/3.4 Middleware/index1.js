import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");// just to see how the path will look like just for fun
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended:true}));

app.post("/submit", (req,res)=> {
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
