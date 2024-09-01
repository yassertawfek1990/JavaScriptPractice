const fs = require("fs");

fs.writeFile("MyMessage.txt","Hello From Yasser",(err) =>{
    if (err) throw err;
    console.log("The File Has Been Saved");
});

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data); // data is the contents of the file we are reading
  });
  