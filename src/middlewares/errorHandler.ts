import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

function errorHandler(
  err: Error,
  req: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      error: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error - " + err.message,
  });
}

export { errorHandler };
