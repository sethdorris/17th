var IsDevelopment = process.env.NODE_ENV == 'development';

var express = require("express");
var { Pool, Client } = require("pg");
var path = require("path");
var bodyParser = require("body-parser");
var config = require("./server-config");
var session = require ("express-session");
var KnexSessionStore = require("connect-session-knex")(session);
var app = express();
var api  = require('./api');
var bcrypt = require("bcrypt");
var Knex = require('knex');

var http = require("http");
var theServer = http.createServer(app);
// }

const pool = new Pool(config.development);

// var dbConnectionConfig = require('./server-config');


console.log("Development Environment: ", process.env.NODE_ENV)
console.log("IsDevelopment", IsDevelopment)

// var dbConnection = IsDevelopment ? dbConnectionConfig.development : dbConnectionConfig.production;
// console.log("Database Connection", dbConnection)

var knex = Knex({
  client: 'pg',
  connection: config.development
})

var store = new KnexSessionStore({
  knex: knex
})

app.use(session({
  store: store,
  secret: "big cat",
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, secure: IsDevelopment },
  resave: false,
  saveUninitialized: false
}))
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log("dir", __dirname)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/dist", "index.html"))
})

app.get('/roster', async function (req, res) {
  var roster = await pool.query(api.getRoster);
  if (roster.rowCount > 0) {
    return res.json(roster.rows);
  }
  return res.status(500).send("Server Error");
})

app.post('/enlist', async function (req, res) {
  var info = req.body;
  var enlistId = await pool.query(api.enlist, [info.steam_name, info.steam_id, info.steam_url, info.game, info.reason, info.recruited_by, info.experience, info.previous_units, info.skills, info.help, info.microphone, info.attendance, info.additional, info.signature, 4]);
  if (enlistId.rowCount > 0) {
    var pw = await bcrypt.hash(info.password, 8);
    var createdUser = await pool.query(api.register, [info.steam_id, info.steam_name, pw]);
    console.log(createdUser);
  }
  if (createdUser == undefined) {
    console.log("hi")
    return res.status(500).send("Server Error")
  }
  if (createdUser.rowCount > 0) {
    return res.json(createdUser.rows[0]);
  }
  return res.status(500).send("Server Error")
})

theServer.listen(process.env.PORT || 3000);
