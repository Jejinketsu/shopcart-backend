import { Transaction } from "../models/Transaction";

interface ICreateTransactionDTO {
  userId: string;
  purchaseId: string;
  productId: string;
  price: number;
  quantity: number;
  local: string;
}

interface ITransactionRepository {
  create(data: ICreateTransactionDTO): void;
  createMany(data: ICreateTransactionDTO[]): void;
  findByField<T extends keyof ICreateTransactionDTO>(
    field: T,
    value: ICreateTransactionDTO[T]
  ): Transaction | undefined;
  list(): Transaction[];
}

export { ITransactionRepository, ICreateTransactionDTO };
