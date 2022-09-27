import { v4 as uuidv4 } from "uuid";

interface IUser {
  name: string;
  tag?: string | null;
  email: string;
  password: string;
}

class User {
  id!: string;
  name: string;
  email: string;
  password: string;

  constructor({ name, email, password }: IUser) {
    if (!this.id) this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export { User };
