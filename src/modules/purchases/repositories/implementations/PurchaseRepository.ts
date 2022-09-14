import { Purchase } from "../../models/Purchase";
import {
  ICreatePurchaseDTO,
  IPurchaseRepository,
} from "../IPurchaseRepository";

class PurchaseRepository implements IPurchaseRepository {
  private pruchases: Purchase[];

  private static INSTANCE: PurchaseRepository;

  private constructor() {
    this.pruchases = [];
  }

  public static getInstance(): PurchaseRepository {
    if (!PurchaseRepository.INSTANCE) {
      PurchaseRepository.INSTANCE = new PurchaseRepository();
    }
    return PurchaseRepository.INSTANCE;
  }
  create(data: ICreatePurchaseDTO): string {
    const purchase = new Purchase(data);
    this.pruchases.push(purchase);
    return purchase.id;
  }
  findByName(name: string): Purchase | undefined {
    const purchase = this.pruchases.find((purchase) => purchase.name === name);
    return purchase;
  }
  list(): Purchase[] {
    return this.pruchases;
  }
}

export { PurchaseRepository };
