const fs = require("fs");

const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("New folder");
// });

const filePath = path.join(__dirname, "test", "text.txt");

fs.writeFile(filePath, "Hello NODEJS", (err) => {
  if (err) {
    throw err;
  }
  console.log("New file");
});

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log(content);
  // const data = Buffer.from(content);
  // console.log("content:", data.toString());
});
