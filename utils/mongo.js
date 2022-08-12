/* 
Basic mongo dump and restore commands, they contain more options you can have a look at man page for both of them.
1. mongodump --db=rbac_tutorial --archive=./rbac.gzip --gzip
2. mongorestore --db=rbac_tutorial --archive=./rbac.gzip --gzip

*/
const moment = require('moment');
const system = require("system-commands");


async function backUpMongoDB() {
    var LAST_UPDATE = moment().format('YYYY-MM-DD.HH:mm:ss')
    var PATH =process.env.ARCHIVE_PATH +`${LAST_UPDATE}`
    var MONGO_URI = process.env.MONGO_URI || ''
    var BIN_TOOLS =process.env.BIN_TOOLS || ''
    var ARCHIVE_PATH = PATH + '/BD.gzip'
    var cmd = `${BIN_TOOLS}  --uri=${MONGO_URI} --archive=${ARCHIVE_PATH} `;
   


    return new Promise(async function (resolve, reject) {

         await system(`mkdir ${PATH}`).then().catch(err => {
        
        consola.error("MKDIR ERROR ", err)
        reject(err)
     })

        await system(cmd).then(output => {
           
            resolve(output)
        }).catch(err => {
            consola.error(err)
            reject(err)
        })

    })
    

}



module.exports = {

    backUpMongoDB
}