const CustomError = require('./CustomError')

function verifyPermission(expectedIdsArray, id) {
  if (!expectedIdsArray.includes(id)) {
    throw new CustomError('UnauthorizedError', 'Permission Denied!')
  }
  return true;
}

module.exports = verifyPermission;
