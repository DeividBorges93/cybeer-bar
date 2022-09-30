const CustomError = require('./CustomError');

function setFilterByRole(id, role) {
  const filter = {};
    switch (role) {
      case 'customer':
        filter.userId = id;
        break;
      case 'seller':
        filter.sellerId = id;
        break;

      default:
        throw new CustomError(
          'UnauthorizedError', 
          'The token payload does not have the required data',
        );
  }
  return filter;
}

module.exports = setFilterByRole;
