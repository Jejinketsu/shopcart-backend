import { Purchase } from "../models/Purchase";

interface ICreatePurchaseDTO {
  name: string;
  budget: number;
  released_Budget?: number;
  userId: string;
  statusId?: number;
  created_At: Date;
  finished_At?: Date;
}

interface IPurchaseRepository {
  create(data: ICreatePurchaseDTO): string;
  findByName(name: string): Purchase | undefined;
  list(): Purchase[];
}

export { IPurchaseRepository, ICreatePurchaseDTO };
