const constants = require('../resource/constants')
const User = require('../domain/db/user')
const repository = require('../persistence/repository')

module.exports.createUser = async (serviceData) => {
    let responseObj = {}
    try {
        let user = new User({
            name: serviceData.name,
            password: serviceData.password,
            phone: serviceData.phone
        })
        let data = {
            model: user
        }
        let responseFromRepository = await repository.insertData(data)
        switch(responseFromRepository.status) {
            case constants.databaseStatus.ENTITY_CREATED:
                responseObj.body = responseFromRepository.result
                responseObj.status = constants.serviceStatus.USER_CREATED
                break
            default:
                responseObj = constants.response.INTERNAL_SERVER_ERROR
        }
        return responseObj
    } catch (error) {
        console.log('Error :: userService :: createUser', error)
        return constants.response.INTERNAL_SERVER_ERROR
    }
}