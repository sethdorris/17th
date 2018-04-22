var IsDevelopment = process.env.NODE_ENV == 'development';

var express = require("express");
// var Knex = require("knex");
// var pg = require("pg");
var path = require("path");
// var pool = require("./db");
var bodyParser = require("body-parser");
// var config = require("./session-config");
var session = require ("express-session");
// var KnexSessionStore = require("connect-session-knex")(session);
var app = express();
// var api  = require('./api');
// var CronJob = require("cron").CronJob;


if (IsDevelopment) {
  var https = require("https");
  var theServer = https.createServer({
      key: fs.readFileSync(path.join(__dirname, "./key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "./cert.pem"))
     }, app);
} else {
  var http = require("http");
  var theServer = http.createServer(app);
}

// var dbConnectionConfig = require('./server-config');


console.log("Development Environment: ", process.env.NODE_ENV)
console.log("IsDevelopment", IsDevelopment)

// var dbConnection = IsDevelopment ? dbConnectionConfig.development : dbConnectionConfig.production;
// console.log("Database Connection", dbConnection)

// var knex = Knex({
//   client: 'pg',
//   connection: dbConnection
// })
//
// var store = new KnexSessionStore({
//   knex: knex
// })

// app.use(session({
//   // store: store,
//   // secret: config.sessions.secret,
//   cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, secure: IsDevelopment },
//   resave: false,
//   saveUninitialized: false
// }))
app.use(bodyParser.json());
app.use("/dist", express.static(__dirname + '/dist'));

console.log("dir", __dirname)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/dist", "index.html"))
})

theServer.listen(process.env.PORT || 3000);
