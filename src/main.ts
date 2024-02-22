import { initializeFactory } from "./factory/factory";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  Hello world
`;

initializeFactory(2);
