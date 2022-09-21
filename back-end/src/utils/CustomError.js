class CustomError extends Error {
  constructor(name, message) {
    this.name = name;
    this.message = message;
  }

  setCode = () => {
    switch(this.name) {
      case 'validationError':
        this.code = 400;
        break;
      
      default:
        this.code = 500;
    }
  }
}

export default CustomError;
