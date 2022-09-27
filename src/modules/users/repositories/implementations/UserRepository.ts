import { PrismaClient } from "@prisma/client";
import { User } from "../../models/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  private static INSTANCE: UserRepository;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, password } = data;
    const user = new User({ name, email, password });
    await this.prisma.users.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async createMany(data: ICreateUserDTO[]): Promise<void> {
    const promises = data.map(async (user) => {
      const newUser = new User(user);
      await this.prisma.users.create({
        data: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      });
    });
    await Promise.all(promises);
  }

  async findByID(id: number): Promise<User | undefined> {
    const user = await this.prisma.users.findFirst({
      where: {
        id: id,
      },
    });
    if (user) return new User(user);

    return undefined;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    if (user) return new User(user);

    return undefined;
  }

  async list(): Promise<User[]> {
    const users = await this.prisma.users.findMany();
    return users.map((user) => new User(user));
  }
}

export { UserRepository };
