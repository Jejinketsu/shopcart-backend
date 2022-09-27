import { v4 as uuidv4 } from "uuid";

interface IProduct {
  name: string;
  tag?: string | null;
  unityId: number;
  market?: string | null;
}

class Product {
  id!: string;
  name: string;
  tag!: string;
  unityId: number;
  market!: string;

  constructor({ name, tag, unityId, market }: IProduct) {
    if (!this.id) this.id = uuidv4();
    this.name = name;
    this.unityId = unityId;

    if (tag) this.tag = tag;
    if (market) this.market = market;
  }
}

export { Product };
