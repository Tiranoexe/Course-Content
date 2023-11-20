import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

//step 1: getting user input and outputting it as a URL

inquirer
  .prompt([{ //this is a question
    message: "Please enter your link to generate a QR code:",
    name: "URL",
  }])

  /* where did the message and name properties come from? well, when working 
  with Node.js packages it's important we read their documentation. 
  If we take a look at Inquirer's documentation we'll see that a .prompt 
  (questions) is actually an object, here's what the official source says: 
  "a question object is a hash containing question related values: type, 
  choices, name, message, etc". There's an explanation to each one of the 
  values. In our case we're getting a string input from our user in the 
  form of a URL, so we use the "message" value for that, and the "name" 
  value to define the type of our user input. */

  //step 2: generating a QR code image for our URL

  .then((answers) => { //this is an answer
    //console.log(url); //testing if our user input is read
    //if read we must remove the line of code above
    const url = answers.URL //our answers is another object, we tap into 
    //the URL value of our answers object and store it inside a variable
    var qr_png = qr.image(url, { type: 'png' });
    /* according to the structure of qr-image package we define a user input 
    which in our case is a URL and it's stored inside the url variable, and we 
    define extension for our generated QR code which is png by default, 
    by to avoid confusion let's explicitly state it */
    qr_png.pipe(fs.createWriteStream("qr_code.png"));
    //finally we create a file with a QR code image in .png format

    //step 3: saving our user input

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    /* what we've done here is we simply create a .txt file with the default fs
    Node.js module. If we recall the structure of our fs.writeFile is as follows
    fs.writeFile(file, data, callback). That means that the second value is our URL
    because it's what we're trying to write into our newly created file. Finally,
    our callback is necessary in the case of malfunction, if there is no error
    we should see our console.log value logged successfully. */
  })

  .catch((error) => { //this is an error log (left empty here)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });