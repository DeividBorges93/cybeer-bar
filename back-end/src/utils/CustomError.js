class CustomError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
    this.message = message;
    this.setCode();
  }

  setCode() {
    switch (this.name) {
      case 'validationError':
        this.code = 400;
        break;
      case 'NotFoundError':
        this.code = 404;
        break;
      case 'UnauthorizedError':
        this.code = 401;
        break;

      default:
        this.code = 500;
    }
  }
}

module.exports = CustomError;
