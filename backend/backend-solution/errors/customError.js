export class CustomError extends Error {
    constructor(message, statusCode, details) {
      super(message);
      this.statusCode = statusCode; // HTTP status code
      this.details = details || null; // Additional error details
      Error.captureStackTrace(this, this.constructor);
    }
  }