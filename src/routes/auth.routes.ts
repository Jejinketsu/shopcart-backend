import { Router } from "express";
import { authUserController } from "../modules/users/useCases/authUser";

const authRoutes = Router();

authRoutes.post("/", (request, response) => {
  return authUserController.handle(request, response);
});

export { authRoutes };
