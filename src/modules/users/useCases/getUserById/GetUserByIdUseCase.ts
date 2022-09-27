import { AppError } from "../../../../errors/AppError";
import { User } from "../../models/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class GetUserByIdUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(id: number): Promise<User> {
    const user = await this.usersRepository.findByID(id);

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }
}

export { GetUserByIdUseCase };
