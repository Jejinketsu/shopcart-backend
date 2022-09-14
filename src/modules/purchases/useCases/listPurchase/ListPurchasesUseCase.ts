import { Purchase } from "../../models/Purchase";
import { IPurchaseRepository } from "../../repositories/IPurchaseRepository";

class ListPurchasesUseCase {
  constructor(private purchasesRepository: IPurchaseRepository) {}

  execute(): Purchase[] {
    const purchases = this.purchasesRepository.list();

    return purchases;
  }
}

export { ListPurchasesUseCase };
