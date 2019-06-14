const constants = require('../resource/constants')
const userService = require('../service/userService')

module.exports.createUser = async (req, res, next) => {
    try {
        let responseObj = {}
        let data = req.body
        console.log('req.body', req.body)

        // call the service
        let responseFromService = await userService.createUser(data)

        switch (responseFromService.status) {
            case constants.serviceStatus.USER_CREATED:
                responseObj = {
                    status: 200,
                    message: constants.serviceStatus.USER_CREATED,
                    body: responseFromService.body
                }
                break
            default:
                responseObj = constants.response.INTERNAL_SERVER_ERROR
        }
        return res.status(responseObj.status).send(responseObj)
    } catch (error) {
        console.log('Error :: userController :: createUser', error)
        responseObj = constants.response.INTERNAL_SERVER_ERROR
        return res.status(responseObj.status).send(responseObj)
    }
}