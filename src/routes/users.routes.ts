import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser";
import { getUserByIdController } from "../modules/users/useCases/getUserById";

const usersRouter = Router();

usersRouter.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRouter.get("/:id", (request, response) => {
  return getUserByIdController.handle(request, response);
});

export { usersRouter };
