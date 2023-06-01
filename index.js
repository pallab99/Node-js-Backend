import { readFileSync } from "fs";
import http from "http";

const home = readFileSync("./home.html");
const about = readFileSync("./about.html");
const contact = readFileSync("./contact.html");
const pageNotFound = readFileSync("./pageNotFound.html");

const server = http.createServer((req, res) => {
  if (req.url == "/about") {
    res.end(about);
  } else if (req.url == "/contact") {
    res.end(contact);
  } else if (req.url == "/") {
    res.end(home);
  } else {
    res.end(pageNotFound);
  }
});

server.listen(3000, () => {
  console.log("server is connected");
});
