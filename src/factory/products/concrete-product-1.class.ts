import { Product } from "../product.interface";

export class ConcreteProduct1 implements Product {
  name = "I am Product 1";

  printName() {
    console.log(`Hello, ${this.name}`);
  }
}
