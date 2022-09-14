import { v4 as uuidv4 } from "uuid";

interface IProduct {
  name: string;
  budget: number;
  released_Budget?: number;
  userId: string;
  statusId?: number;
  created_At: Date;
  finished_At?: Date;
}

class Purchase {
  id!: string;
  name: string;
  budget: number;
  released_Budget!: number;
  userId: string;
  statusId: number;
  created_At: Date;
  finished_At!: Date;

  constructor({
    name,
    budget,
    released_Budget,
    userId,
    statusId,
    created_At,
    finished_At,
  }: IProduct) {
    if (!this.id) this.id = uuidv4();

    this.name = name;
    this.budget = budget;
    this.created_At = created_At;
    this.userId = userId;

    if (released_Budget) this.released_Budget = released_Budget;

    if (finished_At) this.finished_At = finished_At;

    if (statusId) this.statusId = statusId;
    else this.statusId = 1;
  }
}

export { Purchase };
