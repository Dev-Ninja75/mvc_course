const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 3000;
const expressHbs = require("express-handlebars");
const path = require("path");

// Middleware express.json => Déchiffre le body
app.use(express.json());

app.engine(
  "hbs",
  expressHbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts"),
  })
);

app.set("view engine", "hbs");
app.set("views", "views");

server.listen(port, () => {
  console.log(`NodeJS server started ${port}`);
});
