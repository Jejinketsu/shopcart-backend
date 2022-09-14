import { Transaction } from "../../models/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

class ListTransactionsUseCase {
  constructor(private transactionsRepository: ITransactionRepository) {}

  execute(): Transaction[] {
    const transactions = this.transactionsRepository.list();

    return transactions;
  }
}

export { ListTransactionsUseCase };
