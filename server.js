require("dotenv").config()

const express = require("express");
const app = express();
const path = require('path')
const basicAuth = require('express-basic-auth')


app.use(express.json());
var mongoUtil = require('./mongoUtil')

mongoUtil.connectToServer(function (err, client) {
  if (err) console.log(err);

  //Use routes
  // app.use(basicAuth({
  //   challenge: true,
  //   users: { 'admin': process.env.BASIC_AUTH_PASSWORD }
  // }))
  app.use('/api/signUpInfo', require('./routes/api/signUpInfo'))
  app.use('/api/participantInfo', require('./routes/api/participantInfo'))
  app.use('/api/content', require('./routes/api/content'))
  app.use(express.static(path.join(__dirname, "client", "build"))) //heroku

  app.get("/*", (req, res) => { //heroku
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});