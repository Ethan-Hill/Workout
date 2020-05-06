// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const moment = require('moment');

/**
 * DB
 */
const firebase = require('firebase/app');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const admin = require('firebase-admin');
const serviceAccount = require('./workout.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

let db = admin.firestore();
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
app.use(express.static(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render(`index`)
  });

  app.get("/about", (req, res) => {
    res.render(`about`)
  });

  app.get("/workout", (req, res) => {
    res.render(`classes`)
  });
/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

