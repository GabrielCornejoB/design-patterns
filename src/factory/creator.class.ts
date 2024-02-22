import { Product } from "./product.interface";

/**
 * Abstract creator class
 */
export abstract class Creator {
  abstract creatorFunction(): Product;

  doSomeLogicWithTheProduct(): void {
    const product: Product = this.creatorFunction();

    product.printName();
  }
}
