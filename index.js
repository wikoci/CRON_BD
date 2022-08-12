require("dotenv").config();
const express = require("express");
const consola = require("consola");
const app = express();
const PORT = 5005;

const {backUpMongoDB} = require('./utils/mongo')

backUpMongoDB().catch(err => {
    
    console.log(err)
}).then(e => {
    consola.success("DB BACKUP IS DONE") 
})


app.listen(PORT, () => {
  consola.success("BD SYNC IS RUNNING ON  :", PORT);
});
