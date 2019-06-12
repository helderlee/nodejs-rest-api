const constants = require('../resources/constants')

module.exports.createUser = (req, res, next) => {
  try {
    let responseObj = {}
    let data = req.body
    console.log('req.body', req.body)
    // call the service

    // hardcoded response from service
    let responseFromService = {
      status: constants.serviceStatus.USER_CREATED,
      body: {
        id: '12345',
        name: 'John Doe',
        password: 1111,
        phone: '+55 21 98768-2736'
      }
    }
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