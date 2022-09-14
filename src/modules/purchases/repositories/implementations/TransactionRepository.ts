import { Transaction } from "../../models/Transaction";
import {
  ICreateTransactionDTO,
  ITransactionRepository,
} from "../ITransactionRepository";

class TransactionRepository implements ITransactionRepository {
  private transactions: Transaction[];

  private static INSTANCE: TransactionRepository;

  private constructor() {
    this.transactions = [];
  }

  public static getInstance(): TransactionRepository {
    if (!TransactionRepository.INSTANCE) {
      TransactionRepository.INSTANCE = new TransactionRepository();
    }
    return TransactionRepository.INSTANCE;
  }

  create(data: ICreateTransactionDTO): void {
    const transaction = new Transaction(data);
    this.transactions.push(transaction);
  }

  createMany(data: ICreateTransactionDTO[]): void {
    data.forEach((tx) => {
      const newTx = new Transaction(tx);
      this.transactions.push(newTx);
    });
  }

  findByField<T extends keyof ICreateTransactionDTO>(
    field: T,
    value: ICreateTransactionDTO[T]
  ): Transaction | undefined {
    const transaction = this.transactions.find((tx) => tx[field] === value);
    return transaction;
  }

  list(): Transaction[] {
    return this.transactions;
  }
}

export { TransactionRepository };
