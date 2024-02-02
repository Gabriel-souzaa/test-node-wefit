import { Response } from 'express';

class ErrorHandler extends Error {
  statusCode: Number;
  constructor(statusCode: Number = 500, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

interface IErrorRequest {
  statusCode?: number;
  message: string;
}

const handleError = (err: Error, res: Response) => {
  const { message, statusCode }: IErrorRequest = err;

  res.status(statusCode || 500).json({
    statusCode: statusCode || 500,
    success: false,
    data: message
  });
};

export { ErrorHandler, handleError };

