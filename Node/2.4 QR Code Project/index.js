import inquirer from 'inquirer';
import qr from "qr-image";

import fs from "fs";

inquirer
  .prompt([
    {
    message: "Type Url",
    name: "url"
 } ])
  .then((answers) => {
    const url = answers.url
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('url_qr.png'));
    fs.writeFile("MyMessage.txt",url,(err) =>{
        if (err) throw err;
        console.log("The File Has Been Saved");
    });
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error)
      // Prompt couldn't be rendered in the current environment
    } else {
        console.log("error")
      // Something else went wrong
    }
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
