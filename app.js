const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const apiRouter = require("./routes/api");


const PORT = 3000;

const app = express();

connectToDatabase();

app.use(
    cors,
     bodyParser.json(),
     apiRouter,
      express.static(path.join(__dirname, "public"))
     );

app.listen(PORT, () => {
    console.log(`Сервер пашит на порту  http://localhost:${PORT}`);
});