const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    // Read from starter.txt
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);

    // Write to reply.txt
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "Nice to meet you."
    );
    console.log("Write file complete");

    // Append to reply.txt
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nYes it is."
    );

    // Rename promiseWrite.txt to promiseComplete.txt
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// console.log("Hello...");

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you.",
//   (err) => {
//     if (err) throw err;
//     console.log("Write file complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is.",
//       (err) => {
//         if (err) throw err;
//         console.log("Append file complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename file complete");
//           }
//         );
//       }
//     );
//   }
// );

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1);
});
