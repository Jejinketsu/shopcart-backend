import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({ name, email, password: passwordHash });
  }
}

export { CreateUserUseCase };
