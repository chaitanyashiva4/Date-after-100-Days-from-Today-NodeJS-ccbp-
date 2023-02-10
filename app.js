const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  const date = addDays(new Date());
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  ) + 100;
});
module.exports = app;
