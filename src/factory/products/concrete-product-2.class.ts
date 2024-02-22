import { Product } from "../product.interface";

export class ConcreteProduct2 implements Product {
  name = "I am Product 2";

  printName() {
    console.log(`Hi, ${this.name}`);
  }
}
