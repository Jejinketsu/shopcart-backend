import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/users/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

function checkAuthentication(req: Request, res: Response, next: NextFunction) {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    throw new AppError("Token missing!", 401);
  }

  try {
    const [, token] = bearerToken.split(" ");

    const { sub: user_id } = verify(
      token,
      process.env.JWT_SECRET || ""
    ) as IPayload;

    const userRepository = UserRepository.getInstance();

    const user = userRepository.findByID(Number(user_id));

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }
  } catch {
    throw new AppError("Token invalid!", 401);
  }

  next();
}

export { checkAuthentication };
