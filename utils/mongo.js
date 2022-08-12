/* 
Basic mongo dump and restore commands, they contain more options you can have a look at man page for both of them.
1. mongodump --db=rbac_tutorial --archive=./rbac.gzip --gzip
2. mongorestore --db=rbac_tutorial --archive=./rbac.gzip --gzip

*/
const system = require("system-commands");

async function backUpMongoDB() {

    var MONGO_URI = process.env.MONGO_URI || ''
    var ARCHIVE_PATH = process.env.ARCHIVE_PATH || ''
    
    var cmd = `mongodump --uri${MONGO_URI} --archive=${ARCHIVE_PATH} --gzip}`


    return new Promise(function (resolve, reject) {

        system(cmd).then(output => {
            consola.success(output)
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