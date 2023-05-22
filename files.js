const fs = require("fs");

//reading files

// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// write files

fs.writeFile("./docs/blog.txt", "hello world", () => {
  console.log("file was written");
});
