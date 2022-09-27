import { User } from "../models/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  createMany(data: ICreateUserDTO[]): Promise<void>;
  findByID(id: number): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  list(): Promise<User[]>;
}

export { IUserRepository, ICreateUserDTO };
