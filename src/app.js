const express = require("express");

const indexRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(3333, () => console.log('Opaaa'))

module.exports = app;
