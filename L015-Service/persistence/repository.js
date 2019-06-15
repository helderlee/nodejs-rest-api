const mongoose = require('mongoose')
const constants = require('../resource/constants')

module.exports.createConnection = () => {
    return new Promise((resolve, reject) => {
        let responseObj = {}
        mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, (err) => {
            if (err) {
                responseObj.status = constants.databaseStatus.DATABASE_ERROR
                console.log("responseObj", responseObj)
                return reject(responseObj)
            } else {
                responseObj.status = constants.databaseStatus.DATABASE_CONNECTED
                console.log("responseObj", responseObj)
                return resolve(responseObj)
            }
        })
    })
}

module.exports.insertData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            data.model.save().then(docs => {
                resolve({
                    result: docs,
                    status: constants.databaseStatus.ENTITY_CREATED
                })
            }).catch(error => {
                reject({
                    result: error.message,
                    status: constants.databaseStatus.DATABASE_ERROR
                })

            })
        } catch (error) {
            console.log('Error :: repository :: inserData', error)
        }
    })
}