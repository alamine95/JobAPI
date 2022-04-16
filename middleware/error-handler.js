const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  
  let custumError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message || 'Something went wrong try again later'
  }

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }
  if (err.code && err.code === 11000){
    custumError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose
    another value`
    custumError.statusCode = 400
  }
  //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(custumError.statusCode).json({ msg: custumError.msg })
}

module.exports = errorHandlerMiddleware
