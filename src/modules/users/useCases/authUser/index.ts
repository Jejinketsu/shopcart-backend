import { UserRepository } from "../../repositories/implementations/UserRepository";
import { AuthUserController } from "./AuthUserContorller";
import { AuthUserUseCase } from "./AuthUserUseCase";

const usersRepository = UserRepository.getInstance();
const authUserUseCase = new AuthUserUseCase(usersRepository);
const authUserController = new AuthUserController(authUserUseCase);

export { authUserController };
