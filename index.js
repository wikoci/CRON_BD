require("dotenv").config();
const express = require("express");
const consola = require("consola");
const app = express();
const PORT = 5005;
const cron = require("node-cron");
const {backUpMongoDB} = require('./utils/mongo')


cron.schedule("30 23 */1 * *",async () => { // Chaque 23H30
  
    await backUpMongoDB().then(e => console.log(e))
    .catch(err => console.log(err))

});

backUpMongoDB().then(e => console.log(e))
.catch(err=>console.error(err))



app.listen(PORT, () => {
  consola.success("BD SYNC IS RUNNING ON  :", PORT);
});
