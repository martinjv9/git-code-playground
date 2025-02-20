const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "files", "lorem.txt");
const copyPath = path.join(__dirname, "files", "loremCopy.txt");

console.log("Taco1");
const rs = fs.createReadStream(filePath, { encoding: "utf8" });

console.log("Taco2");

const ws = fs.createWriteStream(copyPath);

console.log("Taco3");

// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

rs.pipe(ws);
